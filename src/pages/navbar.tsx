import { Outlet, Link } from "react-router-dom";
import {Flex, Group, useMantineTheme} from "@mantine/core";
import { IconCircle } from '@tabler/icons-react'; // Placeholder icon
import NavButton from "../components/navbutton";

function Navbar() {
    const theme = useMantineTheme();

    return (
        <>
            <Flex
                justify="space-between"
                align="center"
            >
                <Group>
                    <NavButton
                        component={Link}
                        to="/ovh-website"
                    >
                        <span style={{ display: "flex", alignItems: "center" }}>
                            <IconCircle size={18} style={{ marginRight: 8 }} />
                            Owen Hart
                        </span>
                    </NavButton>
                </Group>
                <Group>
                    <NavButton component={Link} to="/ovh-website/about">
                        About
                    </NavButton>
                    <NavButton component={Link} to="/ovh-website/projects">
                        Projects
                    </NavButton>
                </Group>
            </Flex>
            <Outlet />
        </>
    )
}

export default Navbar