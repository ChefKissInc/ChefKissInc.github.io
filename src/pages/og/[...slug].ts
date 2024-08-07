import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const entries = await getCollection("docs");
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: "slug",
  getImageOptions: (_path, page) => {
    const cover = page.data.cover
      ? "dark" in page.data.cover
        ? page.data.cover.dark
        : page.data.cover.image
      : undefined;

    return {
      title: page.data.title,
      description: page.data.description,
      padding: 120,
      bgImage: {
        path: cover
          ? "fsPath" in cover
            ? cover.fsPath
            : cover.src
          : "./src/assets/CoverBackground.png",
        fit: "fill",
      },
      font: {
        title: {
          families: ["Inter"],
        },
        description: {
          families: ["JetBrains Mono"],
        },
      },
      fonts: [
        "https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf",
        "https://api.fontsource.org/v1/fonts/jetbrains-mono/latin-400-normal.ttf",
      ],
    };
  },
});
