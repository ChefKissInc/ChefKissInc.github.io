export default defineAppConfig({
  plugins: ['~/plugins/medium-zoom'],
  docus: {
    title: "Noot",
    description: "Hackintosh tools that nobody bothered making",
    // image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
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
      edit: true,
      contributors: true,
    },
    header: {
      showLinkIcon: true,
      fluid: true,
      //   logo: true,
    },
    main: {
      fluid: true,
      padded: true,
    },
    footer: {
      fluid: true,
    },
    titleTemplate: "%s | Noot",
  }
})
