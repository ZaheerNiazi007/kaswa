import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpequiv="X-UA-Compatible" content="IE=edge" />
        <title>Kaswa</title>
        <meta name="AdsBot-Google" content="noindex follow" />
        <meta name="description" content="Bery-Real Estate Listing Template" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/logo/Kaswa.jpeg"
        />
        <link rel="stylesheet" href="/css/vendor/icofont.min.css" />
        <link rel="stylesheet" href="/css/vendor/line-awesome.min.css" />
        <link rel="stylesheet" href="/css/vendor/simple-line-icons.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/plugins/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/vendor/modernizr-3.11.7.min.js"></script>
        <script src="/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="/js/vendor/jquery-migrate-3.3.2.min.js"></script>

        <script src="/js/plugins/swiper-bundle.min.js"></script>
        <script src="/js/plugins/popper.min.js"></script>
        <script src="/js/plugins/jquery.magnific-popup.min.js"></script>
        <script src="/js/plugins/jquery.ajaxchimp.min.js"></script>
        <script src="/js/plugins/parallax.min.js"></script>
        <script src="/js/plugins/jquery.nice-select.min.js"></script>

        <script src="/js/main.js"></script>
      </body>
    </Html>
  );
}
