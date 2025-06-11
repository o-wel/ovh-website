import { Outlet, Link } from "react-router-dom";
import {Flex, Button} from "@mantine/core";

function Navbar() {
    return (
        <>
            <Flex justify="flex-end" align={"center"}>
                <Link to="/ovh-website">
                    <Button m={"md"} radius={"md"}>Home</Button>
                </Link>
                <Link to="/ovh-website/resume">
                    <Button m={"md"} radius={"md"}>Resume</Button>
                </Link>
            </Flex>
            <Outlet />
        </>
    )
}

export default Navbar