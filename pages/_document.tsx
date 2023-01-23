import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta content="Rings Network, a decentralized peer-to-peer network in browsers." name="Rings Network - The Communication Layer of web3" />
                    <meta content="Rings Network - The Communication Layer of web3" property="og:title" />
                    <meta content="Rings Network - The Communication Layer of web3. A decentralized peer-to-peer network in browsers. A solution package targeting the next-generation Internet which includes dWeb, anonymous network traffic and private data transaction, etc." property="og:description" />
                    <meta content="%PUBLIC_URL%/fb-og-image.png" property="og:image" />
                    <meta property="og:url" content="https://ringsnetwork.io" />
                    <meta property="og:site_name" content="Rings Network - The Communication Layer of web3" />
                    <meta content="Rings Network - The Communication Layer of web3" property="twitter:title" />
                    <meta content="A decentralized peer-to-peer network in browsers. A solution package targeting the next-generation Internet which includes dWeb, anonymous network traffic and private data transaction, etc." property="twitter:description" />
                    <meta content="%PUBLIC_URL%/twitter-card.png" property="twitter:image" />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@RingsNetworkio" />
                    <meta name="twitter:creator" content="@RingsNetworkio" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Karla:wght@400;500;800&display=swap" rel="stylesheet" />
                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
