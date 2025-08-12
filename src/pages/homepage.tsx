import {Flex, Text, Image, useMantineTheme} from "@mantine/core";

function HomePage() {
    const theme = useMantineTheme();

    return (
        <Flex>
            <Text
                pos={"fixed"}
                left={"10%"}
                top={"10%"}
                style={{
                    fontSize: theme.fontSizes.md,
                    fontFamily: theme.fontFamily,
                    color: theme.colors.analogousColors[7],
                }}>
                Home page
            </Text>
            <Image
                pos={"fixed"}
                right={"10%"}
                top={"10%"}
                w={200}
                src="/images/owen-hart.jpg"
                alt="Owen Hart"
            />
        </Flex>
    )
}

export default HomePage