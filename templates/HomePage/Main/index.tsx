import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";

const images = [
    "/images/figures/figure-new-1.png",
    "/images/figures/figure-new-2.png",
    "/images/figures/figure-new-3.png",
    "/images/figures/figure-new-4.png",
    "/images/figures/figure-new-5.png",
    "/images/figures/figure-new-6.png",
];

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <div className={styles.stage}>INTRODUCING RINGS NETWORK</div>
                <div className={cn("h1", styles.title)}>
                The&nbsp;Communication Layer of web3
                </div>
                <div className={styles.info}>
                A decentralized peer-to-peer network in browsers. A solution package targeting the next-gen Internet including dWeb, anonymous traffic, etc.
                </div>
                <br />
                <a
                    className={cn("button", styles.button)}
                    href="https://github.com/RingsNetwork/whitepaper/raw/master/rings.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Rings Paper</span>
                </a>
                <span> </span>
                <a
                    className={cn("button", styles.button)}
                    href="https://twitter.com/RingsNetworkio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>follow us</span>
                </a>
            </div>
            <div className={styles.images}>
                <div className={styles.image}>
                    <Image
                        src="/images/lines.svg"
                        width={1578}
                        height={1585}
                        alt="Lines"
                    />
                </div>
                {images.map((image, index) => (
                    <Parallax
                        className={styles.image}
                        speed={1}
                        easing="easeInQuad"
                        rotate={index === 2 ? [-10, 10] : [-100, 100]}
                        key={index}
                    >
                        <Image src={image} layout="fill" alt="Figure" />
                    </Parallax>
                ))}
            </div>
            <Scroll
                className={styles.scroll}
                title="SCROLL TO EXPLORE"
                onScroll={() =>
                    scrollToRef.current.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            />
        </div>
    </div>
);

export default Main;
