import cn from "classnames";
import styles from "./AboutUs.module.sass";
import Image from "@/components/Image";

import { details } from "@/constants/detailsAbout";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            {details.map((item, index) => (
                <div className={styles.item} key={index}>
                    <div className={styles.wrap}>
                        <div className={cn("content", styles.content)}>
                            {item.content}
                        </div>
                        <div className={styles.line}>
                        { item.button1  &&
                            <a 
                            className={cn("button", styles.button)}
                            href={item.button1.link}
                            target="_blank">
                                <span>{item.button1.text}</span>
                            </a>
                        }
                        { item.button2  &&
                            <a 
                            className={styles.document}
                            href={item.button2.link}
                            target="_blank">
                                {item.button2.text}
                            </a>
                        }
                        </div>
                    </div>
                    <div className={styles.preview}>
                        <Image
                            src={item.image.src}
                            width={item.image.width}
                            height={item.image.height}
                            alt={item.image.alt}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default AboutUs;
