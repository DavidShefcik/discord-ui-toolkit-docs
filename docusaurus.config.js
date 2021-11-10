// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Discord UI Toolkit",
  tagline: "React component replicas from Discord's UI",
  url: "https://discord-ui-toolkit.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "DavidShefcik", // Usually your GitHub org/user name.
  projectName: "discord-ui-toolkit", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/DavidShefcik/discord-ui-toolkit-docs/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Discord UI Toolkit",
        items: [
          {
            type: "doc",
            docId: "getting-started/Introduction",
            position: "left",
            label: "Documentation",
          },
          {
            to: "showcase",
            label: "Showcase",
            position: "left",
          },
          {
            href: "https://github.com/DavidShefcik/discord-ui-toolkit",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "External Links",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/DavidShefcik/discord-ui-toolkit",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} David Shefcik - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
