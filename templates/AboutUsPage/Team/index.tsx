import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Team.module.sass";
import Image from "@/components/Image";

import { team } from "@/constants/team";

type TeamProps = {};

const Team = ({}: TeamProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <div className={cn("h3", styles.subtitle)}>
                        Meet the Rings Network team
                    </div>
                    <div className={cn("h2", styles.title)}>
                        Built by developers, for&nbsp;developers.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
