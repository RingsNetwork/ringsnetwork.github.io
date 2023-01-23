import cn from "classnames";
import styles from "./Values.module.sass";
import Card from "@/components/Card";

import { hexToRgbA } from "@/utils/index";

const list = [
    {
        title: "Everything Rings Network monthly report",
        status: "TAG LINE",
        color: "#EB5BE5",
    },
    {
        title: "Everything Rings Network monthly report",
        status: "TAG LINE",
        color: "#6F5BEB",
    },
    {
        title: "Everything Rings Network monthly report",
        status: "TAG LINE",
        color: "#89EB5B",
    },
];

type ValuesProps = {};

const Values = ({}: ValuesProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={cn("h3", styles.subtitle)}>Our values</div>
                    <div className={cn("h2", styles.title)}>
                        Next-gen p2p network
                    </div>
                    <div className={styles.content}>
                        Rings Network believes in Web3 for all. Rings Network is a decentralized
                        network platform that enables developers.
                    </div>
                    <button className={cn("button", styles.button)}>
                        <span>launch app</span>
                    </button>
                </div>
                <div className={styles.col}>
                    <div className={styles.list}>
                        {list.map((item, index) => (
                            <Card
                                className={styles.card}
                                innerCardClass={styles.inner}
                                key={index}
                                color={item.color}
                                animateIn="fadeInDown"
                                small
                            >
                                <div
                                    className={cn("status", styles.status)}
                                    style={{
                                        backgroundColor: hexToRgbA(
                                            item.color,
                                            0.05
                                        ),
                                        color: item.color,
                                    }}
                                >
                                    {item.status}
                                </div>
                                <div className={cn("h4", styles.info)}>
                                    {item.title}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Values;
