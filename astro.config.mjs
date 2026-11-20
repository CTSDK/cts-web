// @ts-check
import { defineConfig } from 'astro/config';

// Siden ligger på https://ctsdk.github.io/cts-web/ (GitHub Pages).
// Får CTS eget domæne, ændres site til domænet og base fjernes.
export default defineConfig({
  site: 'https://ctsdk.github.io',
  base: '/cts-web',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
