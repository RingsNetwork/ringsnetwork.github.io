import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Form from "../Form";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";

type DetailsProps = {
    scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => {
    return (
        <div className={cn("section", styles.section)}>
            <div
                className={cn("anchor", styles.anchor)}
                ref={scrollToRef}
            ></div>
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.item}>
                            <div className={styles.category}>Support</div>
                            <Link href="mailto:contact@ringsnetwork.io">
                                <a className={cn("h5", styles.content)}>
                                    contact@ringsnetwork.io
                                </a>
                            </Link>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.category}>Twitter</div>
                            <Link href="https://twitter.com/RingsNetworkio">
                                <a className={cn("h5", styles.content)}>
                                    @RingsNetworkio
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.line}>
                            <div className={styles.item}>
                                <div className={styles.category}>Address</div>
                                <div className={cn("h5", styles.content)}>
                                    <p>2-5-34 Tagawakita, Yodogawa Ward</p>
                                    <p>Osaka</p>
                                    <p>Japan</p>
                                </div>
                            </div> 
                        </div>
                        <Socials
                            socialClassName={styles.social}
                            socials={socials}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
