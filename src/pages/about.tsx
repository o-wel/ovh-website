import {Avatar, Flex, Text, useMantineTheme} from "@mantine/core";
import {aboutMeText} from "../TextConstants.ts";

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
                w={"50%"}
                m={"md"}
                style={{
                    fontSize: theme.fontSizes.md,
                    fontFamily: theme.fontFamily,
                    color: theme.colors.analogousColors[7],
                    whiteSpace: "pre-line",
                }}>
                {aboutMeText}
            </Text>

        </Flex>
    )
}

export default About

