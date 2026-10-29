import type { Metadata } from "next";
import { Fraunces, Nunito_Sans, Plus_Jakarta_Sans } from "next/font/google";
import TextReveal from "@/components/text-reveal";
import "./globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const accent = Fraunces({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--font-accent" });
const body = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {title:"Synthika Trust | Supporting Differently Abled Children",description:"Synthika Trust supports differently abled children through residential care, special education, therapy, nutrition, skill development, and social inclusion.",metadataBase:new URL("https://synthikatrust.org"),openGraph:{title:"Synthika Trust",description:"Care, education, rehabilitation, and inclusion for differently abled children.",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${display.variable} ${accent.variable} ${body.variable}`}><body>{children}<TextReveal /></body></html>}
