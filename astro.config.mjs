// @ts-check
import { defineConfig } from "astro/config";
import embeds from "astro-embed/integration";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightBlog from "starlight-blog";
import starlightLinksValidator from "starlight-links-validator";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import {
  viewTransitions,
  remarkEndOfMarkdown,
} from "astro-vtbot/starlight-view-transitions";

export default defineConfig({
  site: "https://chefkissinc.github.io",
  trailingSlash: "always",
  markdown: { remarkPlugins: [remarkEndOfMarkdown] },
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
        gr: { label: "Ελληνικά" },
        ru: { label: "Русский" },
        ar: { label: "العربية", dir: "rtl" },
        uk: { label: "Українська" },
        it: { label: "Italiano" },
        es: { label: "Español" },
        mk: { label: "Македонски" },
      },
      plugins: [
        viewTransitions(),
        starlightImageZoom(),
        starlightBlog({
          title: {
            en: "Newsroom",
            gr: "Αίθουσα τύπου",
            ar: "غرفة الأخبار",
          },
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
        telegram: "https://t.me/+Bx3MO9Hq8whhNzk9",
      },
      sidebar: [
        {
          label: "Installation",
          translations: {
            gr: "Εγκατάσταση",
            mk: "Инсталација",
            ar: "التثبيت",
          },
          items: [
            "guides/hackintosh",
            "guides/hackintosh/compatibility",
            {
              label: "Gathering Files",
              translations: {
                gr: "Συγκέντρωση αρχείων",
                mk: "Собирање на Фајлови",
                ar: "جمع الملفات",
              },
              items: [
                "guides/hackintosh/gathering-files",
                "guides/hackintosh/gathering-files/opencore",
                {
                  label: "Installer",
                  translations: {
                    gr: "Εγκαταστάτης",
                    mk: "Инсталер",
                    ar: "المثبت",
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
                mk: "Конфигурација",
                ar: "التكوين",
              },
              badge: {
                text: { en: "TODO", gr: "Υπό κατασκευή" },
              },
              items: [
                {
                  label: "Dortania guide",
                  badge: {
                    text: {
                      en: "Temporary",
                      gr: "Προσωρινό",
                      mk: "Привремено",
                      ar: "مؤقت",
                    },
                  },
                  translations: {
                    gr: "Οδηγός Dortania",
                    mk: "Водство Dortania",
                    ar: "دليل Dortania",
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
            mk: "Поправање на проблем",
            ar: "اكتشاف الأخطاء وإصلاحها",
          },
          badge: { text: { en: "TODO", gr: "Υπό κατασκευή" } },
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
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
});
