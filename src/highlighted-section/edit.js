import { __ } from "@wordpress/i18n";
import {
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl, Button, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { mediaId, mediaUrl, title, text, ctaText, ctaUrl, emphasis } = attributes;

	const blockProps = useBlockProps({
		className: `section-hero is-emphasis-${emphasis}`,
		style: mediaUrl ? { backgroundImage: `url(${mediaUrl})` } : undefined,
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "highlighted-section")} initialOpen={true}>
					<SelectControl
						label={__("Emphasis", "highlighted-section")}
						value={emphasis}
						options={[
							{ label: "Default", value: "default" },
							{ label: "Highlighted", value: "highlighted" },
							{ label: "Subtle", value: "subtle" },
						]}
						onChange={(value) => setAttributes({ emphasis: value })}
					/>

					<TextControl
						label={__("CTA Text", "highlighted-section")}
						value={ctaText}
						onChange={(value) => setAttributes({ ctaText: value })}
					/>
					<TextControl
						label={__("CTA URL", "highlighted-section")}
						value={ctaUrl}
						onChange={(value) => setAttributes({ ctaUrl: value })}
						placeholder="https://..."
					/>
				</PanelBody>

				<PanelBody title={__("Background image", "highlighted-section")} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									mediaId: media.id,
									mediaUrl: media.url,
								})
							}
							allowedTypes={["image"]}
							value={mediaId}
							render={({ open }) => (
								<div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
									<Button variant="primary" onClick={open}>
										{mediaUrl ? __("Change image", "highlighted-section") : __("Select image", "highlighted-section")}
									</Button>

									{mediaUrl && (
										<Button
											variant="secondary"
											isDestructive
											onClick={() => setAttributes({ mediaId: 0, mediaUrl: "" })}
										>
											{__("Remove", "highlighted-section")}
										</Button>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="shell">
					<div className="section-inner">
						<RichText
							tagName="h1"
							className="section-title"
							value={title}
							placeholder={__("Hero title…", "highlighted-section")}
							onChange={(value) => setAttributes({ title: value })}
						/>

						<RichText
							tagName="div"
							multiline="p"
							className="section-text"
							value={text}
							placeholder={__("Hero text…", "highlighted-section")}
							onChange={(value) => setAttributes({ text: value })}
						/>

						<div className="section-actions">
							{ctaText ? (
								<span className="btn">{ctaText}</span>
							) : (
								<span style={{ opacity: 0.7 }}>{__("CTA appears when CTA Text + URL are set", "highlighted-section")}</span>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
