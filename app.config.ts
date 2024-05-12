export default defineAppConfig({
  plugins: ['~/plugins/MediumZoom'],
  docus: {
    title: "ChefKiss",
    description: "Software, with the Chef's kiss.",
    layout: "default",
    // image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      telegram: {
        icon: "ph:telegram-logo-duotone",
        href: "https://t.me/+Bx3MO9Hq8whhNzk9",
        label: "Telegram Supergroup",
      },
      github: "ChefKissInc",
    },
    aside: {
      level: 1,
    },
    github: {
      owner: "ChefKissInc",
      repo: "ChefKissInc.github.io",
      branch: "master",
      root: "content",
      edit: false,
      contributors: true,
    },
    header: {
      showLinkIcon: true,
      logo: "ChefKissLogo",
    },
    main: {
      fluid: true,
      padded: true,
    },
    footer: {
      fluid: true,
      textLinks: [
        {
          text: "Copyright © 2023-2024 ChefKiss Inc. Licensed under the Thou Shalt Not Profit License version 1.5. Click to see LICENSE for more details.",
          href: "https://github.com/ChefKissInc/ChefKissInc.github.io/blob/master/LICENSE",
          target: "_blank",
        },
      ],
    },
    titleTemplate: "%s | ChefKiss",
  },
  prose: {
    copyButton: {
      iconCopied: "ph:copy-fill",
      iconCopy: "ph:copy-duotone",
    },
    headings: {
      icon: "ph:anchor-duotone",
    },
    h1: {
      icon: "ph:anchor-duotone",
    },
    h2: {
      icon: "ph:anchor-duotone",
    },
    h3: {
      icon: "ph:anchor-duotone",
    },
    h4: {
      icon: "ph:anchor-duotone",
    },
    h5: {
      icon: "ph:anchor-duotone",
    },
    h6: {
      icon: "ph:anchor-duotone",
    },
  },
  nuxtIcon: {
    aliases: {
      "IconInfo": "ph:info-duotone",
      "IconWarning": "ph:warning-duotone",
      "IconError": "ph:warning-circle-duotone",
      "IconExternal": "ph:arrow-square-out-duotone",
      "IconDocs": "ph:files-duotone",
    },
  },
});
