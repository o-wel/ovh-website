import {Box, Text, Image, Anchor, Stack, SegmentedControl, Card, Flex, List, useMantineTheme} from "@mantine/core";
import {useState} from "react";

type Project = {
    title: string;
    date: string;
    description: string;
    skills: string;
    image: string;
    linkAvaliable?: boolean;
    link: string;
};


// TODO replace placeholder projects with real ones
const wpiProjects: Project[] = [
    {
        title: "Hospital Navigation Website",
        date: "April 2025",
        description: "Worked on an 11-person team as an assistant lead full-stack " +
            "developer, applying the Agile methodology as a team to develop a web application using the PERN stack. Responsible for " +
            "sub-task delegation, PR review, and as the largest of several contributions, developed the map editor component of the " +
            "application using the Three.js library.",
        skills: "Software Engineering \n Typescript/React \n Git \n Team Management",
        image: "./Softeng.png",
        linkAvaliable: true,
        link: "https://github.com/rohan908/team-o-copy"
    },
    {
        title: "Convolution Neural Network Comparison",
        date: "December 2024",
        description: "Implemented a custom CNN architecture and pretrained ResNet50 and VGG16 " +
            "architectures on the German Traffic Sign Recognition Benchmark (GTRSB) dataset for multiclass image classification. Utilized" +
            " the PyTorch library and an understanding of neural network implementation to form a design. Wrote a final report on " +
            "training comparisons and test results between the three networks.",
        skills: "Machine Learning \n Python \n Pytorch Library",
        image: "./MLClass.png",
        linkAvaliable: true,
        link: "https://onedrive.live.com/personal/1dd6cff4559d638e/_layouts/15/Doc.aspx?sourcedoc=%7B559d638e-cff4-20d6-801d-a79300000000%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy8xZGQ2Y2ZmNDU1OWQ2MzhlL0VZNWpuVlgwejlZZ2dCMm5rd0FBQUFBQmdjeFNRMWxDUmZUZmEyaUJNMUJFZ1E_ZT0zcnFBOWY&slrid=4c87d4a1-604c-a000-818a-6a78b6533e89&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3cvYy8xZGQ2Y2ZmNDU1OWQ2MzhlL0VZNWpuVlgwejlZZ2dCMm5rd0FBQUFBQmdjeFNRMWxDUmZUZmEyaUJNMUJFZ1E_cnRpbWU9bkJ5Q1VkNFgza2c&CID=c70be156-c348-4e90-afcb-f099f24aa338&_SRM=0:G:58"
    },
    {
        title: "Stopwatch Design",
        date: "November 2024",
        description: "In a 3-person team, designed the schematic, state diagram, and simulation of a stopwatch capable of displaying to a seven-segment display with stop, start, and reset functionality. " +
            "Responsible for full schematic design, utilizing full synchronous counters, and writing several components of the simulation in Verilog.",
        skills: "Verilog \n Digital Logic Design",
        image: "/images/personal-project1.jpg",
        link: "http://localhost:5173/ovh-website"
    },
    {
        title: "IMDB Database Graph",
        date: "October 2024",
        description: "Used a dataset from IMDB to create a graph data structure of actors and movies in " +
            "order to find the shortest path between a given actor and movie node. Developed the implementation using the breadth-first " +
            "search algorithm and high-level, object-oriented concepts of classes, interfaces, hash tables, queues, and lists.",
        skills: "Algorithms \n Java",
        image: "/images/personal-project1.jpg",
        link: "http://localhost:5173/ovh-website"
    },
    {
        title: "Micro Terminal",
        date: "September 2024",
        description: "Created a program capable of running Linux terminal commands while running" +
            " inside the terminal as well as printing system resources used by the commands. Designed the application to use system " +
            "calls to duplicate and execute different processes, requiring knowledge of forking and process coordination.",
        skills: "Operating Systems \n C/C++",
        image: "/images/personal-project1.jpg",
        link: "http://localhost:5173/ovh-website"
    }
];

const personalProjects: Project[] = [
    {
        title: "Minecraft Mod Manager",
        date: "January 2025 - Present",
        description: 'Working alongside a friend, we are developing a mod managing tool for minecraft. This tool can perform file ' +
            'management for mod "groups", which is essentially just manipulating the folder of mods that the game launches with. It' +
            'is also capable of launching minecraft and downloading mods from Modrinth, a popular mod website. ',
        skills: "Python \n Tkinter Library",
        image: "./Mod-Manager.png",
        linkAvaliable: true,
        link: "https://github.com/JackTWing/MC-ModManager"
    },
];

function ProjectList({projects}: { projects: Project[] }) {
    const theme = useMantineTheme();

    const textStyleLarge = {
        fontSize: theme.fontSizes.lg,
        fontFamily: theme.headings.fontFamily,
        color: theme.colors.purpleColors[0],
    }

    const textStyleMed = {
        fontSize: theme.fontSizes.md,
        fontFamily: theme.fontFamily,
        color: theme.colors.purpleColors[0],
    }

    return (
        <Stack align={"center"} w={"100%"} gap={"lg"}>
            {projects.map((project) => (
                <Card bg={theme.colors.analogousColors[9]} shadow="sm" p="lg" radius="md" w={"80%"}>
                    <Text size={'lg'}
                          style={textStyleLarge}>
                        {project.title}
                    </Text>
                    <Flex direction="row" justify="space-between">
                        <Flex direction="column" w={"40%"}>
                            <Text mb="xs"
                                  style={textStyleMed}>
                                {project.date}
                            </Text>
                            <Text mb="xs"
                                  style={textStyleMed}>
                                {project.description}
                            </Text>
                            <Anchor href={project.link} target="_blank" rel="noopener noreferrer">
                                { project.linkAvaliable? "visit this project here": "link not avaliable" }
                            </Anchor>
                        </Flex>
                        <Flex direction="column" align={"center"} w={"20%"}>
                            <Text mb="xs"
                                  style={textStyleLarge}>
                                Skills Used:
                            </Text>
                            <List>
                                {project.skills.split('\n').map((skill, index) => (
                                    <List.Item key={index}>
                                        {skill.trim()}
                                    </List.Item>
                                ))}
                            </List>
                        </Flex>
                        <Image src={project.image} alt={project.title}
                               w={"40%"}
                               h={"40%"}
                               radius="md"/>
                    </Flex>
                </Card>
            ))}
        </Stack>
    );
}

function Projects() {
    const theme = useMantineTheme();

    const [projectType, setProjectType] = useState('WPI Projects');

    return (
        <Box p="lg">
            <Stack align={"center"}>
                <SegmentedControl
                    bg={theme.colors.analogousColors[9]}
                    color={theme.colors.purpleColors[0]}
                    value={projectType}
                    onChange={setProjectType}
                    data={['WPI Projects', 'Personal Projects']}
                />
                {projectType === 'WPI Projects' ? (
                        <ProjectList projects={wpiProjects}/>
                    ) : (
                        <ProjectList projects={personalProjects}/>
                )}
            </Stack>
        </Box>
    );
}

export default Projects
