/* eslint-disable sonarjs/no-duplicate-string */
import type { DefaultSeoProps } from "next-seo";

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
  title: "Md. Raqibur Rahman Roni",
  titleTemplate: "%s | CIPHERTron",
  defaultTitle: "CIPHERTron | Raqibur Rahman",
  description: "Md. Raqibur Rahman Roni's Portfolio Website | CIPHERTron",
  canonical: "https://sznm.dev",
  openGraph: {
    url: "https://pritishsamal.com",
    title: "Md. Raqibur Rahman Roni",
    description: "Md. Raqibur Rahman Roni's Portfolio Website",
    images: [
      {
        url: "https://res.cloudinary.com/pritish007/image/upload/v1644348821/Personal%20Portfolio/Favicon_nckr8a.png",
        alt: "sznm.dev og-image",
      },
    ],
    site_name: "Md. Raqibur Rahman Roni",
  },
  twitter: {
    handle: "@PritishSamal11",
    cardType: "summary_large_image",
  },
};
