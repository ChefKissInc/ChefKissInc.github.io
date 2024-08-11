import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";
import type { OGImageOptions } from "node_modules/astro-og-canvas/dist/types";

const entries = await getCollection("docs");
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: "slug",
  getImageOptions: (path, page) => {
    let opts: OGImageOptions = {
      title: page.data.title,
      description: page.data.description,
      dir: path.split("/")[0] === "ar" ? "rtl" : "ltr",
      padding: 120,
      font: {
        title: {
          families: ["Inter"],
        },
        description: {
          families: ["Inter"],
        },
      },
      fonts: [
        "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff2",
        "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-ext-400-normal.woff2",
        "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/greek-400-normal.woff2",
        "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/greek-ext-400-normal.woff2",
        "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-400-normal.woff2",
        "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/cyrillic-ext-400-normal.woff2",
      ],
      quality: 100,
    };
    const cover = page.data.cover
      ? "dark" in page.data.cover
        ? page.data.cover.dark
        : page.data.cover.image
      : undefined;

    if (cover) {
      opts.bgImage = {
        path: "fsPath" in cover ? cover.fsPath : cover.src,
        fit: "fill",
      };
    } else {
      opts.bgGradient = [[15, 15, 15]];
      opts.border = {
        color: [16, 185, 129],
        side: "block-end",
        width: 16,
      };
    }
    return opts;
  },
});
