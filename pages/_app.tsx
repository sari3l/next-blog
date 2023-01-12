import "@code-hike/mdx/dist/index.css";
import "@/styles/globals.css";
import "@/styles/markdown.scss";
import React from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
