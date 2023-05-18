import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./JoinCommunity.module.sass";
import Image from "@/components/Image";

const images = [
    "/images/figures/figure-new-1.png",
    "/images/figures/figure-new-2.png",
    "/images/join/image-3.svg",
    "/images/figures/figure-new-5.png",
    "/images/figures/figure-new-6.png",
];

type JoinCommunityProps = {
    title: string;
};

const JoinCommunity = ({ title }: JoinCommunityProps) => (
    <div className={styles.section}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={cn("h2", styles.title)}>{title}</div>
                <div className={styles.info}>
                    Or learn all about{" "}
                    <a
                        className={styles.social}
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        how to build on Rings Network
                    </a>
                    .
                </div>
                <a
                    className={cn("button", styles.button)}
                    href="https://twitter.com/RingsNetworkio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>JOIN THE COMMUNITY</span>
                </a>
                <span> </span>
                <a
                    className={cn("button", styles.button)}
                    href="/Rings%20Network%20Whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>DOWNLOAD THE WHITEPAPER</span>
                </a>
            </div>
        </div>
        {/* <div className={styles.images}>
            <div className={styles.image}>
            <Image
            src="/images/join/lines.svg"
            width={1744}
            height={700}
            alt="Figure"
            />
            </div>
            {images.map((image, index) => (
            <Parallax
            className={styles.image}
            speed={1}
            easing="easeInQuad"
            rotate={index === 2 ? [2, -20] : [-4, 15]}
            key={index}
            >
            <Image src={image} layout="fill" alt="Figure" />
            </Parallax>
            ))}
            </div> */}
    </div>
);

export default JoinCommunity;
