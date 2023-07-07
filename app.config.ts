export default defineAppConfig({
  plugins: ['~/plugins/MediumZoom'],
  docus: {
    title: "Noot",
    description: "Hackintosh tools that nobody bothered making",
    layout: "default",
    // image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      telegram: {
        icon: "mdi:telegram",
        href: "https://t.me/NootInc",
        label: "Telegram Supergroup",
      },
      github: "NootInc",
    },
    aside: {
      level: 1,
    },
    github: {
      owner: "NootInc",
      repo: "NootInc.github.io",
      branch: "master",
      root: "content",
      edit: false,
      contributors: true,
    },
    header: {
      showLinkIcon: true,
      fluid: true,
      // logo: true,
    },
    main: {
      fluid: true,
      padded: true,
    },
    footer: {
      fluid: true,
      credits: {
        icon: "",
        text: "Noot Inc and ChefKiss Inc have no affiliation with Dortania, Acidanthera and Apple. macOS is a registered trademark of Apple, Inc.",
        href: "",
      },
      textLinks: [
        {
          text: "Copyright © 2023 ChefKiss Inc. Licensed under the Thou Shalt Not Profit License version 1.0. Click to see LICENSE for more details.",
          href: "https://github.com/NootInc/NootInc.github.io/blob/master/LICENSE",
          target: "_blank",
        },
      ],
    },
    titleTemplate: "%s | Noot",
  },
  prose: {
    copyButton: {
      iconCopied: "clarity:copy-solid",
      iconCopy: "clarity:copy-line",
    },
    headings: {
      icon: "ph:anchor",
    },
    h1: {
      icon: "ph:anchor",
    },
    h2: {
      icon: "ph:anchor",
    },
    h3: {
      icon: "ph:anchor",
    },
    h4: {
      icon: "ph:anchor",
    },
    h5: {
      icon: "ph:anchor",
    },
    h6: {
      icon: "ph:anchor",
    },
  },
  nuxtIcon: {
    aliases: {
      "IconInfo": "clarity:info-standard-solid",
      "IconWarning": "clarity:warning-standard-solid",
      "IconError": "clarity:error-standard-solid",
      "IconExternal": "clarity:pop-out-line",
      "IconDocs": "clarity:file-group-line",
    },
  },
});
