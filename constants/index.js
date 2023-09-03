import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { getIconPath } from "../helpers";

export const fullName = "Ahmet Topal";
export const siteUrl = "https://ahmettopal.dev";
export const resume = "/assets/resume/sample.pdf";
export const instagramUrl = "https://www.instagram.com/ahmttopall/";
export const linkedinUrl = "https://www.linkedin.com/in/ahmetopal";
export const githubUrl = "https://github.com/ahmettopal";

export const social_icons = [
    {
        icon: <AiFillGithub />,
        url: githubUrl,
    },
    {
        icon: <AiFillLinkedin />,
        url: linkedinUrl,
    },
    {
        icon: <AiFillInstagram />,
        url: instagramUrl,
    },
];

export const techStack = {
    main: [
        {
            name: "React.js",
            svg: getIconPath("react.svg"),
        },
        {
            name: "Node.js",
            svg: getIconPath("node-js.svg"),
        },
        {
            name: "Express.js",
            svg: getIconPath("express.svg"),
        },
        {
            name: "React Native",
            svg: getIconPath("react-native.svg"),
        },
        {
            name: "Nest.js",
            svg: getIconPath("nestjs.svg"),
        },
        {
            name: "Firebase",
            svg: getIconPath("firebase.svg"),
        },
        {
            name: "Tailwind CSS",
            svg: getIconPath("tailwind.svg"),
        },
        {
            name: "prisma.io",
            svg: getIconPath("prisma.svg"),
        },
        {
            name: "MySQL",
            svg: getIconPath("mysql.svg"),
        },
        {
            name: "PostgreSQL",
            svg: getIconPath("postgresql.svg"),
        },
        {
            name: "Chakra-ui",
            svg: getIconPath("chakra-icon.svg"),
        },
    ],
};

export const contactillustations = {
    svg: getIconPath("contact.svg"),
};
