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
        gr: { label: "Ελληνικά" },
        ar: { label: "العربية", dir: "rtl" },
        ru: { label: "Русский" },
        uk: { label: "Українська" },
        it: { label: "Italiano" },
      },
      plugins: [
        viewTransitions(),
        starlightImageZoom(),
        starlightBlog({
          title: {
            en: "Newsroom",
            gr: "Αίθουσα τύπου",
            ar: "غرفة الأخبار",
            ru: "Новости",
            uk: "Новини",
            it: "Redazione",
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
          translations: {
            gr: "Εγκατάσταση",
            ar: "التثبيت",
            ru: "Установка",
            uk: "Встановлення",
            it: "Installazione",
          },
          items: [
            "guides/hackintosh",
            "guides/hackintosh/compatibility",
            {
              label: "Gathering Files",
              translations: {
                gr: "Συγκέντρωση αρχείων",
                ar: "جمع الملفات",
                ru: "Скачивание файлов",
                uk: "Завантаження файлів",
                it: "Ottenere i file",
              },
              items: [
                "guides/hackintosh/gathering-files",
                "guides/hackintosh/gathering-files/opencore",
                {
                  label: "Installer",
                  translations: {
                    gr: "Εγκαταστάτης",
                    ar: "المثبت",
                    ru: "Установщик",
                    uk: "Встановлювач",
                    it: "Programma di installazione",
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
                ar: "التكوين",
                ru: "Конфигурация",
                uk: "Конфігурація",
                it: "Configurazione",
              },
              badge: {
                text: {
                  en: "TODO",
                  gr: "Υπό κατασκευή",
                  ru: "В будущем",
                  uk: "У майбутньому",
                  it: "Prossimamente",
                },
              },
              items: [
                {
                  label: "Dortania guide",
                  badge: {
                    text: {
                      en: "Temporary",
                      gr: "Προσωρινό",
                      ar: "مؤقت",
                      ru: "Временно",
                      uk: "тимчасовий",
                      it: "Provvisoria",
                    },
                  },
                  translations: {
                    gr: "Οδηγός Dortania",
                    ar: "دليل Dortania",
                    ru: "Гайд Dortania",
                    uk: "Гайд Dortania",
                    it: "Guida Dortania",
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
            ar: "اكتشاف الأخطاء وإصلاحها",
            ru: "Отладка и исправление ошибок",
            uk: "Відладка та виправлення помилок",
            it: "Risoluzione dei problemi",
          },
          badge: {
            text: {
              en: "TODO",
              gr: "Υπό κατασκευή",
              ru: "В будущем",
              uk: "У майбутньому",
              it: "Prossimamente",
            },
          },
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
