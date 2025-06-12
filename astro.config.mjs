// @ts-check
import { defineConfig } from "astro/config";
import embeds from "astro-embed/integration";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightBlog from "starlight-blog";
import starlightLinksValidator from "starlight-links-validator";
import icon from "astro-icon";
import {
  viewTransitions,
  remarkEndOfMarkdown,
} from "astro-vtbot/starlight-view-transitions";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://chefkissinc.github.io",
  trailingSlash: "always",
  markdown: { remarkPlugins: [remarkEndOfMarkdown] },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    embeds({
      services: {
        LinkPreview: false,
      },
    }),
    starlight({
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
      },
      plugins: [
        viewTransitions(),
        starlightImageZoom(),
        starlightBlog({
          title: "Newsroom",
          prefix: "newsroom",
          authors: {
            visual: {
              name: "Visual Ehrmanntraut",
              title: "CEO",
              picture: "/Avatars/Visual.png",
              url: "https://github.com/VisualEhrmanntraut",
            },
          },
          metrics: {
            readingTime: true,
            words: "total",
          },
        }),
        starlightLinksValidator({
          errorOnFallbackPages: false,
          errorOnInconsistentLocale: true,
          exclude: ["(/*)?/newsroom/"], // TODO: Remove this
        }),
      ],
      title: "ChefKiss",
      logo: {
        src: "~/assets/CKPenguin.svg",
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      customCss: ["~/base.css"],
      components: {
        Head: "~/components/starlight/Head.astro",
        MarkdownContent: "~/components/starlight/MarkdownContent.astro",
        SocialIcons: "~/components/starlight/SocialIcons.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ChefKissInc",
        },
        {
          icon: "telegram",
          label: "Telegram",
          href: "https://t.me/+Bx3MO9Hq8whhNzk9",
        },
      ],
      sidebar: [
        {
          label: "Installation",
          items: [
            "guides/hackintosh",
            "guides/hackintosh/compatibility",
            {
              label: "Gathering Files",
              items: [
                "guides/hackintosh/gathering-files",
                "guides/hackintosh/gathering-files/opencore",
                {
                  label: "Installer",
                  items: [
                    "guides/hackintosh/gathering-files/installer",
                    "guides/hackintosh/gathering-files/installer/online",
                  ],
                },
                "guides/hackintosh/gathering-files/acpi",
                "guides/hackintosh/gathering-files/kexts",
              ],
            },
            {
              label: "Configuration",
              badge: "TODO",
              items: [
                {
                  label: "Dortania guide",
                  badge: "Temporary",
                  link: "https://dortania.github.io/OpenCore-Install-Guide/AMD/zen.html",
                },
              ],
            },
          ],
        },
        {
          label: "Troubleshooting",
          badge: "TODO",
          collapsed: true,
          items: [],
        },
      ],
      lastUpdated: true,
      editLink: {
        baseUrl:
          "https://github.com/ChefKissInc/ChefKissInc.github.io/edit/master/",
      },
    }),
    icon(),
  ],
});
