import {Avatar, Flex, Text, useMantineTheme} from "@mantine/core";

function About() {
    const theme = useMantineTheme();

    return (
        <Flex justify={"center"} align={"center"}>
            <Avatar
                size={"400px"}
                src="/ovh-website/LinkedIn-Headshot.png"
                alt="Owen Hart"
            />
            <Text
                mt={"md"}
                style={{
                    fontSize: theme.fontSizes.md,
                    fontFamily: theme.fontFamily,
                    color: theme.colors.analogousColors[7],
                }}>
                *Please note: this website is a work in progress
            </Text>

        </Flex>
    )
}

export default About

