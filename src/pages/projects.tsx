import {Box, Text, Image, Anchor, Stack, useMantineTheme, Card, Flex} from "@mantine/core";

type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
};

// TODO replace placeholder projects with real ones
const wpiProjects: Project[] = [
    {
        title: "Hospital Navigation Website",
        description: "Software Engineering | Typescript/React | April 2025. Worked on an 11-person team as an assistant lead full-stack " +
            "developer, applying the Agile methodology as a team to develop a web application using the PERN stack. Responsible for " +
            "sub-task delegation, PR review, and as the largest of several contributions, developed the map editor component of the " +
            "application using the Three.js library.",
        image: "/images/wpi-project1.jpg",
        link: "http://localhost:5173/ovh-website"
    },
    {
        title: "Convolution Neural Network Comparison",
        description: "Machine Learning | Python | Dec 2024. Implemented a custom CNN architecture and pretrained ResNet50 and VGG16 " +
            "architectures on the German Traffic Sign Recognition Benchmark (GTRSB) dataset for multiclass image classification. Utilized" +
            " the PyTorch library and an understanding of neural network implementation to form a design. Wrote a final report on " +
            "training comparisons and test results between the three networks.",
        image: "/images/wpi-project2.jpg",
        link: "http://localhost:5173/ovh-website"
    },
    {
        title: "Micro Terminal",
        description: "Operating Systems | C++ | Sept 2024. Created a program capable of running Linux terminal commands while running" +
            " inside the terminal as well as printing system resources used by the commands. Designed the application to use system " +
            "calls to duplicate and execute different processes, requiring knowledge of forking and process coordination.",
        image: "/images/personal-project1.jpg",
        link: "http://localhost:5173/ovh-website"
    },
    {
        title: "IMDB Database Graph",
        description: "Algorithms | Java | Oct 2024. Used a dataset from IMDB to create a graph data structure of actors and movies in " +
            "order to find the shortest path between a given actor and movie node. Developed the implementation using the breadth-first " +
            "search algorithm and high-level, object-oriented concepts of classes, interfaces, hash tables, queues, and lists.",
        image: "/images/personal-project2.jpg",
        link: "http://localhost:5173/ovh-website"
    }
];

const personalProjects: Project[] = [
    {
        title: "Personal Project 1",
        description: "Description for personal project 1.",
        image: "/images/personal-project1.jpg",
        link: "#"
    },
    {
        title: "Personal Project 2",
        description: "Description for personal project 2.",
        image: "/images/personal-project2.jpg",
        link: "#"
    }
];

function ProjectList({projects}: { projects: Project[] }) {
    const theme = useMantineTheme();

    return (
        <Stack align={"center"} w={"100%"} gap={"lg"}>
            {projects.map((project) => (
                <Card bg={theme.colors.purpleColors[2]} shadow="sm" p="lg" radius="md" w={"80%"}>
                    <Flex direction="row" align="center" justify="space-between">
                        <Box style={{ flex: 1 }}>
                            <Text size={'lg'}
                                  style={{
                                      fontFamily: theme.fontFamily,
                                      color: theme.colors.analogousColors[7],
                                  }}>
                                {project.title}
                            </Text>
                            <Text mb="xs"
                                  w={"50%"}
                                  style={{
                                      fontSize: theme.fontSizes.md,
                                      fontFamily: theme.fontFamily,
                                      color: theme.colors.analogousColors[7],
                                  }}>
                                {project.description}</Text>
                            <Anchor href={project.link} target="_blank" rel="noopener noreferrer">
                                visit this project here
                            </Anchor>
                        </Box>
                        <Image src={project.image} alt={project.title} w={180} radius="md"/>
                    </Flex>
                </Card>
            ))}
        </Stack>
    );
}

function Projects() {
    const theme = useMantineTheme();

    return (
        <Box p="lg">
            <Stack align={"center"}>
                <Text size={'xl'} mt={"xl"} style={{
                    fontFamily: theme.fontFamily,
                    color: theme.colors.analogousColors[7],
                }}>WPI Projects</Text>
                <ProjectList projects={wpiProjects}/>
                <Text size={'xl'} mt={"xl"} style={{
                    fontFamily: theme.fontFamily,
                    color: theme.colors.analogousColors[7],
                }}>Personal Projects</Text>
                <ProjectList projects={personalProjects}/>
            </Stack>
        </Box>
    );
}

export default Projects
