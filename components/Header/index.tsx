import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Menu from "./Menu";

import { headerNavigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -2);
    });

    return (
        <header
            className={cn(
                {
                    [styles.visible]: headerStyle,
                    [styles.open]: open,
                },
                styles.header
            )}
        >
            <div
                className={cn("container-wide", styles.container)}
                data-scroll-lock-scrollable
                data-scroll-lock-fill-gap
            >
                <Logo className={styles.logo} />
                {/* <Menu
                    navigation={headerNavigation}
                    socials={socials}
                    onClick={() => setOpen(!open)}
                    /> */}
                <a
                    className={cn("button", styles.button)}
                    href="https://medium.com/@ringsnetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Rings Blog</span>
                </a>
                <a
                    className={cn("button", styles.button)}
                    href="https://github.com/RingsNetwork/whitepaper/raw/master/rings.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Rings Paper</span>
                </a>
                {/* <a
                    className={cn("button", styles.button)}
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <span>launch app</span>
                    </a> */}
            </div>
        </header>
    );
};

export default Header;
