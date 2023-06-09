import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Card from "@/components/Card";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.line}>
                    <div className={cn("status-green", styles.status)}>
                        UPDATES
                    </div>
                    <div className={cn("status-dark", styles.date)}>
                        2 aug 2022
                    </div>
                </div>
                <h1 className={cn("h1", styles.title)}>
                    Everything Rings Network monthly report
                </h1>
                <div className={cn("h4", styles.info)}>
                    Rings Network delivers tamper-proof inputs, outputs, and computations
                    to support advanced smart contracts on any blockchain
                </div>
            </div>
        </div>
        <div className={styles.lines}>
            <Image
                src="/images/lines-1.svg"
                width={2000}
                height={1900}
                alt="Lines"
            />
        </div>
    </div>
);

export default Main;
