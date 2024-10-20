import { defineConfig } from "astro/config";
import embeds from "astro-embed/integration";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightBlog from "starlight-blog";
import starlightLinksValidator from "starlight-links-validator";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://chefkissinc.github.io",
  trailingSlash: "always",
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
        replacesTitle: true,
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
      social: {
        github: "https://github.com/ChefKissInc",
        telegram: "https://t.me/ChefKissInc",
      },
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
                  label: "Dortania guide (temporary)",
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
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
});
