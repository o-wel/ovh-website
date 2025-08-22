import {Flex, Text, Image, useMantineTheme} from "@mantine/core";
import {homepageBlurb} from "../TextConstants.ts";

function HomePage() {
    const theme = useMantineTheme();

    return (
        <Flex justify={"center"} align={"center"} h="100%" gap={"md"}>
            <Flex direction={"column"} w={"30%"}>
                <Text
                    style={{
                        fontSize: theme.fontSizes.xxxl,
                        fontFamily: theme.headings.fontFamily,
                        color: theme.colors.analogousColors[7],
                    }}>
                    Hi, I'm Owen Hart
                </Text>
                <Text
                    style={{
                        fontSize: theme.fontSizes.md,
                        fontFamily: theme.fontFamily,
                        color: theme.colors.analogousColors[7],
                    }}>
                    {homepageBlurb}
                </Text>
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
            <Image
                w={'30%'}
                mt={"lg"}
                radius={"xl"}
                src="ovh-website/Me-Hiking.jpg"
                alt="Owen Hart"
            />
        </Flex>
    )
}

export default HomePage