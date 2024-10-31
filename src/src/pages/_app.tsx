import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GeistSans } from 'geist/font/sans'
import { cn } from "@/utils/cn";
import { Noto_Sans_JP } from "next/font/google"
import { ThemeProvider } from "@/components/provider/theme-provider";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--noto-sans-jp",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn(
      GeistSans.className,
      NotoSansJP.variable
    )}>
      <style
        jsx
        global
        >{`:root { --noto-sans-jp: ${NotoSansJP.style.fontFamily};}}`}</style>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}