import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";

const images = [
    "/images/figures/figure-new-11.png",
    "/images/figures/figure-new-12.png",
    "/images/figures/figure-new-13.png",
    "/images/figures/figure-new-14.png",
];

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.stage}>technology</div>
                <div className={cn("h1", styles.title)}>
                    Built by developers, for everyone.
                </div>
                <div className={styles.info}>
                Rings Network provides tamper-proof input, output and private communication, supports identity authentication on any blockchain, and creates a peer-to-peer blockchain parallel communication channel
                </div>
            </div>
            <div className={styles.images}>
                <div className={styles.image}>
                    <Image
                        src="/images/lines-3.svg"
                        width={1600}
                        height={1500}
                        alt="Lines"
                    />
                </div>
                {images.map((image, index) => (
                    <Parallax
                        className={styles.image}
                        speed={1}
                        easing="easeInQuad"
                        rotate={[-4, 15]}
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
