import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import vercel from "@sveltejs/adapter-vercel"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      postcss: true,
      defaults: {
        style: "scss",
        script: "typescript"
      }
    })
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: vercel(),
    target: "#svelte"
  }
}

export default config
