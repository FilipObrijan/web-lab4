import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://filipobrijan.github.io',
  base: process.env.NODE_ENV === 'production' ? '/web-lab4' : '/',
});
