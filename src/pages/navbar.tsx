import { Outlet, Link } from "react-router-dom";
import {Avatar, Flex, Group, useMantineTheme} from "@mantine/core";
import NavButton from "../components/navbutton";

function Navbar() {
    const theme = useMantineTheme();

    return (
        <>
            <Flex
                justify="space-between"
                align="center"
                m={'lg'}
            >
                <Group>
                    <NavButton
                        component={Link}
                        to="/ovh-website"
                        leftSection={<Avatar
                            size={"30px"}
                            src="/ovh-website/LinkedIn-Headshot.png"
                            alt="Owen Hart"
                            />}
                        color={theme.colors.analogousColors[8]}
                    >
                        Owen Hart
                    </NavButton>
                </Group>
                <Group>
                    <NavButton component={Link} to="/ovh-website/about" color={theme.colors.analogousColors[7]}>
                        About
                    </NavButton>
                    <NavButton component={Link} to="/ovh-website/projects" color={theme.colors.analogousColors[7]}>
                        Projects
                    </NavButton>
                </Group>
            </Flex>
            <Outlet />
        </>
    )
}

export default Navbar