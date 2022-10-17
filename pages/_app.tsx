import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="cupcake">
      <div
        className="container max-w-5xl mx-auto grid px-4 h-screen"
        style={{
          gridTemplateRows: "100px 1fr",
        }}
      >
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
