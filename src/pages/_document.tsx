import {AppType} from "next/app";
import {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";
import Document from "next/document";
import {ServerStyleSheet} from "styled-components";
import {tgInit} from "@/pages/features/_tg_methods_";
import {useEffect} from "react";
import {init, miniApp, settingsButton} from "@telegram-apps/sdk";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props: React.ComponentProps<AppType>) => sheet.collectStyles(
            <App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  };

  render() {

    return (
      <Html lang="ru">
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        </Head>
        <body>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
