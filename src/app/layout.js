import "../styles/globals.css";
import "../styles/fonts.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ViewTransitions } from "next-view-transitions";
import LenisScroll from "@/components/common/LenisScroll";


export const metadata = {
  other: {
    "view-transition": "same-origin",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ViewTransitions>
          <LenisScroll>
            <header>
              <Header />
            </header>
            <main>
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </LenisScroll>
        </ViewTransitions>
      </body>
    </html>
  );
}
