import {Button, useMantineTheme} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import type {ReactNode} from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
    children: ReactNode;
    component: typeof Link;
    to: string;
    color: string;
    leftSection?: ReactNode;
}

function NavButton({ children, component, to, color, leftSection}: NavButtonProps) {
    const theme = useMantineTheme();
    const {hovered, ref: hoverRef} = useHover();

    return (
        <Button
            m="md"
            ref={hoverRef}
            component={component}
            to={to}
            variant="transparent"
            leftSection={leftSection}
            style={{
                color: color,
                textDecoration: hovered ? "underline" : "none",
                textUnderlineOffset: hovered ? "8px" : "2px",
                fontSize: theme.fontSizes.xl,
                fontFamily: theme.fontFamily,
                transition: "color 0.4s, text-underline-offset 0.4s",
            }}
        >
            {children}
        </Button>
    );
}

export default NavButton;
