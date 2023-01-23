import cn from "classnames";
import styles from "./Community.module.sass";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";

const community = [
    {
        value: "50+",
        content:
            "Blockchains wallet and identity supported",
    },
    {
        value: "200ms",
        content:
            "Transaction processing time",
    },
    {
        value: "30K+",
        content:
            "TPS on a single node, without redundant broadcasting",
    },
];

type CommunityProps = {};

const Community = ({}: CommunityProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container-large", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <div className={styles.details}>
                        <div className={cn("h2", styles.title)}>
                            Rings Network community
                        </div>
                        <div className={styles.info}>
                            Stay current on the latest Rings Network project.
                        </div>
                    </div>
                    <Socials
                        className={styles.socials}
                        socialClassName={styles.social}
                        socials={socials}
                        dark
                        large
                    />
                </div>
            </div>
            <div className={styles.list}>
                {community.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("h2", styles.value)}>
                            {item.value}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Community;
