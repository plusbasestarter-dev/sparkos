import type { Metadata, Viewport } from "next";
export const metadata: Metadata = {
  title: "Spark OS — Fikrinden bir sonraki adıma",
  description: "Fikirlerini yakala, küçük deneylere dönüştür ve her gün bir şey öğren.",
  applicationName: "Spark OS",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#c9f16d" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="tr"><body>{children}</body></html>;
}
