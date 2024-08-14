import { defineConfig } from "astro/config";
import embeds from "astro-embed/integration";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
// import starlightBlog from "starlight-blog";
import starlightLinksValidator from "starlight-links-validator";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://chefkissinc.github.io",
  integrations: [
    embeds({
      services: {
        LinkPreview: false,
      },
    }),
    starlight({
      defaultLocale: "en",
      locales: {
        en: { label: "English" },
        gr: { label: "Ελληνικά" },
        ru: { label: "Русский" },
        pl: { label: "Polski" },
        ar: { label: "عربي", direction: "rtl" },
        uk: { label: "Українська" },
        lt: { label: "Lietuvių kalba" },
        ro: { label: "română" },
        it: { label: "Italiano" },
        es: { label: "Español" },
      },
      plugins: [
        starlightImageZoom(),
        // starlightBlog({
        //   title: "Newsroom",
        //   prefix: "newsroom",
        //   authors: {
        //     visual: {
        //       name: "Visual Ehrmanntraut",
        //       title: "CEO",
        //       picture: "/Avatars/Visual.png",
        //       url: "https://github.com/VisualEhrmanntraut",
        //     },
        //   },
        // }),
        starlightLinksValidator(),
      ],
      title: "ChefKiss",
      logo: {
        src: "~/assets/Logo.svg",
        replacesTitle: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      customCss: ["~/base.css"],
      components: {
        Head: "~/components/starlight/Head.astro",
        // MarkdownContent: "~/components/starlight/MarkdownContent.astro",
        ThemeProvider: "~/components/starlight/ThemeProvider.astro",
        ThemeSelect: "~/components/starlight/ThemeSelect.astro",
        SocialIcons: "~/components/starlight/SocialIcons.astro",
      },
      social: {
        github: "https://github.com/ChefKissInc",
        telegram: "https://t.me/ChefKissInc",
      },
      sidebar: [
        {
          label: "Installation",
          translations: {
            gr: "Εγκατάσταση",
          },
          items: [
            "guides/hackintosh",
            "guides/hackintosh/compatibility",
            {
              label: "Gathering Files",
              translations: {
                gr: "Συγκέντρωση αρχείων",
              },
              items: [
                "guides/hackintosh/gathering-files",
                "guides/hackintosh/gathering-files/opencore",
                {
                  label: "Installer",
                  translations: {
                    gr: "Εγκαταστάτης",
                  },
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
              translations: {
                gr: "Διαμόρφωση παραμέτρων",
              },
              badge: "TODO",
              items: [
                {
                  label: "Dortania guide (temporary)",
                  translations: {
                    gr: "Οδηγός Dortania (προσωρινό)",
                  },
                  link: "https://dortania.github.io/OpenCore-Install-Guide/AMD/zen.html",
                },
              ],
            },
          ],
        },
        {
          label: "Troubleshooting",
          translations: {
            gr: "Αντιμετώπηση προβλημάτων",
          },
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
