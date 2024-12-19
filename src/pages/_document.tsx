import {AppType} from "next/app";
import {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";
import Document from "next/document";
import {ServerStyleSheet} from "styled-components";

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
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
            rel="stylesheet"/>
          {/*<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>*/}
          {/*<meta name="viewport" content="width=device-width, user-scalable=no"/>*/}
          {/*<meta name="mobile-web-app-capable" content="yes"/>*/}
          {/*<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>*/}
        </Head>
        <body>
        {/*<Script src={"https://telegram.org/js/telegram-web-app.js"}></Script>*/}
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
