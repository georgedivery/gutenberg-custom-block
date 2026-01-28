# Highlighted Section

Custom Gutenberg block for creating hero sections with background images, editable title, text and optional call-to-action button.

## Features

- Editable title and description using RichText
- Background image support
- Three emphasis styles: default, highlighted, subtle
- Optional CTA button with custom text and URL
- Full width and wide width alignment support
- Consistent styling in editor and frontend

## Installation

1. Upload the plugin folder to `/wp-content/plugins/`
2. Activate the plugin in WordPress admin
3. The block will appear in the block inserter under "Widgets" category

## Development

Install dependencies:

```
npm install
```

Build for production:

```
npm run build
```

Start development mode with watch:

```
npm start
```

## Block Usage

Add the "Highlighted Section" block from the block inserter. Configure it using:

- **Settings panel**: Set emphasis style and CTA text/URL
- **Background image panel**: Upload or select a background image
- **Block toolbar**: Use alignment options for full width or wide width

The block supports multiple instances on the same page.
