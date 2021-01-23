# Twinkle CSS

This is a minified but unpurged build of Tailwind CSS 2.0.2 with autoprefixer, Inter font, and plugins like aspect-ratio, forms, typography etc. See `tailwind.config.js`.

Uncompressed, this turns out to be about 3.2 MB. But when served via a CDN that supports Brotli-compression (eg: unpkg.com or Cloudflare), this is less than 250KB in size. This is a bit heavy but it becomes much more easier to work on multiple sites that cannot use custom builds which requires NodeJS and NPM.

# Usage

```
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
<link rel="stylesheet" href="https://unpkg.com/twinklecss@1.2.1/twinkle.min.css">
```

# Build

Run `npm install` and then `npm run build` to generate a local `twinkle.min.css` file.

# Customize

If you want to add your own component classes, add them in `myapp.css`. And if you want to add/remove Tailwind plugins, customize the default theme or breakpoints or add/remove variants, modify `tailwind.config.js`.