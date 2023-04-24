export const details = [
    {
        image: {
            src: "/images/about-pic-new-1.png",
            width: 712,
            height: 712,
            alt: "Figure",
        },
        content: (
            <>
                <h2>Decentralized Traffic Forwarding</h2>
                <p>HTTP proxy / IPFS proxy / Blockchain RPC proxy</p>
                <ul>
                    <li>No domain needed</li>
                    <li>No targeting IP address</li>
                    <li>No centralized servers</li>
                    <li>No CDN transfer</li>
                    <li>Entire supply chain decentralized</li>
                </ul>
            </>
        ),
        button1: {
            text: "launch app",
            link: "https://ringsnetwork.io",
        },
        button2: {
            text: "Read the docs",
            link: "https://ringsnetwork.io",
        },
    },
    {
        image: {
            src: "/images/about-pic-new-2.png",
            width: 712,
            height: 682,
            alt: "Figure",
        },
        content: (
            <>
                <h2>Anonymous Relay Traffic.</h2>
                <p>
                    The original Sender broadcasts the message to linked relayer node.
                </p>
                <p>
                    Relayers transfer messages. The receiver decrypts messages and continues to broadcast. Finalized Nodes stop broadcasting at multiple ends.
                </p>
            </>
        ),
    },
    {
        image: {
            src: "/images/about-pic-new-3.png",
            width: 712,
            height: 682,
            alt: "Figure",
        },
        content: (
            <>
                <h2>Cross-chain Atomic Info Swapping Stream</h2>
                <p>
                    Rings Network P2P off-Chain stream offers a way to exchange tokens(ERC20/ERC721/etc.) and information across chains.
                </p>
                <p>
                    No additional layer needed. Just a short-lived P2P channel.
                </p>
            </>
        ),
    },
];
