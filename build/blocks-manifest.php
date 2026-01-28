<?php
// This file is generated. Do not modify it manually.
return array(
	'highlighted-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom/highlighted-section',
		'title' => 'Highlighted Section',
		'category' => 'widgets',
		'icon' => 'cover-image',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'description' => 'Image + title + text + optional CTA button.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'attributes' => array(
			'mediaId' => array(
				'type' => 'number'
			),
			'mediaUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'text' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctaUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'emphasis' => array(
				'type' => 'string',
				'default' => 'default'
			)
		),
		'render' => 'file:./render.php'
	)
);
