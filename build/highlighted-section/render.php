<?php
$title    = $attributes['title'] ?? '';
$text     = $attributes['text'] ?? '';
$ctaText  = $attributes['ctaText'] ?? '';
$ctaUrl   = $attributes['ctaUrl'] ?? '';
$mediaUrl = $attributes['mediaUrl'] ?? '';
$emphasis = $attributes['emphasis'] ?? 'default';

$classes = 'section-hero is-emphasis-' . sanitize_html_class($emphasis);

$style = '';
if ($mediaUrl) {
	$style = 'background-image: url(' . esc_url($mediaUrl) . ');';
}
?>

<section
	<?php echo get_block_wrapper_attributes([
		'class' => $classes,
		'style' => $style,
	]); ?>

	
>
	<div class="shell">
		<div class="section-inner">

			<?php if ($title) : ?>
				<h1 class="section-title">
					<?php echo wp_kses_post($title); ?>
				</h1>
			<?php endif; ?>

			<?php if ($text) : ?>
				<div class="section-text">
					<?php echo wp_kses_post($text); ?>
				</div>
			<?php endif; ?>

			<?php if ($ctaText && $ctaUrl) : ?>
				<div class="section-actions">
					<a href="<?php echo esc_url($ctaUrl); ?>" class="btn">
						<?php echo esc_html($ctaText); ?>
					</a>
				</div>
			<?php endif; ?>

		</div>
	</div>
</section>
