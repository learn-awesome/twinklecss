# Twinkle CSS

This is a minified but unpurged build of Tailwind CSS + Tailwind UI with autoprefixer, sidebar breakpoints, Inter font, some extra variants and common components from [learnawesome.org](https://learnawesome.org). See `tailwind.config.js`.

Uncompressed, this turns out to be about 2.8 MB. But when served via a CDN that supports Brotli-compression (eg: unpkg.com or Cloudflare), this is less than 200KB in size. This is slightly heavy but it becomes much more easier to work on multiple sites that cannot use custom builds which requires NodeJS and NPM.

Currently, this is using Tailwind CSS v1.6.2 and Tailwind UI v0.5.0

# Usage

```
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
<link rel="stylesheet" href="https://unpkg.com/twinklecss@1.0.1/dist/twinkle.min.css">
```

# Build

Run `npm install` and then `npm run build` to generate a local `twinkle.min.css` file in dist folder.

# Customize

If you want to extract your own component classes, add them in `src/custom-components.css`. And if you want to add/remove Tailwind plugins, customize the default theme or breakpoints or add/remove variants, modify `tailwind.config.js`.
