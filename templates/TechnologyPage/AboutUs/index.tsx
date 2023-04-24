import cn from "classnames";
import styles from "./AboutUs.module.sass";
import Image from "@/components/Image";

const list = [
    "Your data can be transformed, organized, and shared across the whole network safely.",
    "Peer-to-peer accessible for everyone without dedicated software. Just a browser.",
];

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.wrap}>
                    <div className={cn("h2", styles.title)}>
                        Stay up to date on everything
                    </div>
                    <div className={styles.info}>
                        Stay current on the latest Rings Network project developments,
                        news, and content, updated daily.
                    </div>
                    <div className={styles.list}>
                        {list.map((item, index) => (
                            <div className={styles.item} key={index}>
                                <div className={cn("h3", styles.number)}>
                                    0{index + 1}
                                </div>
                                <div className={styles.content}>{item}</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.line}>
                        <button className={cn("button", styles.button)}>
                            <span>launch app</span>
                        </button>
                        <button className={styles.document}>
                            Read the docs
                        </button>
                    </div>
                </div>
                <div className={styles.preview}>
                    <Image
                        src="/images/about-pic-new-2.png"
                        width={712}
                        height={682}
                        alt="Figure"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default AboutUs;
