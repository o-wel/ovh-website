import {Flex, Text, Card, useMantineTheme, Image} from "@mantine/core";
import {aboutMeText} from "../TextConstants.ts";

function About() {
    const theme = useMantineTheme();

    const textStyleMed = {
        fontSize: theme.fontSizes.md,
        fontFamily: theme.fontFamily,
        color: theme.colors.purpleColors[0],
        whiteSpace: "pre-line",
    }

    return (
        <Flex justify={"center"} align={"center"}>
            <Image
                w={'15%'}
                radius={"10rem"}
                src="/ovh-website/LinkedIn-Headshot.png"
                alt="Owen Hart"
            />
            <Card bg={theme.colors.analogousColors[9]} shadow="sm" p="lg" radius="md" w={"50%"} m={"md"}>
                <Text
                    mt={"md"}
                    m={"md"}
                    style={textStyleMed}>
                    {aboutMeText}
                </Text>
            </Card>

        </Flex>
    )
}

export default About

