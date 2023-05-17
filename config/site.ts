export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Calynder",
  description:
    "Dope ass calendar app",
  mainNav: [
    {
      title: "App",
      href: "/app",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    linkedin: "https://www.linkedin.com/in/austinwilke123/",
    github: "https://github.com/Wilkeaustin",
    docs: "https://ui.shadcn.com",
  },
}
