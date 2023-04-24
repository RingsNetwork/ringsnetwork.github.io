import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Image from "@/components/Image";

type DetailsProps = {
    scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={styles.details}>
                <div className={styles.counter}>2^160</div>
                <div className={cn("h4", styles.info)}>Max Nodes</div>
            </div>
            <div className={styles.wrap}>
                <div className={cn("content", styles.content)}>
                    <h2>Scaling solutions, amplified.</h2>
                    <h3>Built by developers, for developers.</h3>
                    <p>
                        Rings Network is committed to fostering the growth of Web3
                        applications by providing the infrastructure and
                        security needed for Web3.
                    </p>
                    <p>
                        Rings Network believes in Web3 for all. Rings Network is a decentralized
                        network platform that enables developers.
                    </p>
                </div>
                <Link href="/contact">
                    <a className={cn("button", styles.button)}>
                        <span>contact us</span>
                    </a>
                </Link>
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -15]}
            >
                <Image
                    src="/images/figures/figure-new-7.png"
                    layout="fill"
                    alt="Figure"
                />
            </Parallax>
        </div>
    </div>
);

export default Details;
