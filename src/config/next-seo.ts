/* eslint-disable sonarjs/no-duplicate-string */
import type { DefaultSeoProps } from "next-seo";

// Constant for the duplicated string
const websiteName = "Md. Raqibur Rahman Roni";

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
  title: "Home",
  titleTemplate: "%s | Raqibur-Rahman",
  defaultTitle: "Raqibur-Rahman | Raqibur Rahman",
  description: `${websiteName}'s Portfolio Website | Raqibur-Rahman`,
  canonical: "https://sznm.dev",
  openGraph: {
    url: "https://pritishsamal.com",
    title: websiteName,
    description: `${websiteName}'s Portfolio Website`,
    images: [
      {
        url: "https://res.cloudinary.com/pritish007/image/upload/v1644348821/Personal%20Portfolio/Favicon_nckr8a.png",
        alt: "sznm.dev og-image",
      },
    ],
    site_name: websiteName,
  },
  twitter: {
    handle: "@PritishSamal11",
    cardType: "summary_large_image",
  },
};
