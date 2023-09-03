import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

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
            svg: "/assets/icons/react.svg",
        },
        {
            name: "Node.js",
            svg: "/assets/icons/node-js.svg",
        },
        {
            name: "Express.js",
            svg: "/assets/icons/express.svg",
        },
        {
            name: "React Native",
            svg: "/assets/icons/react-native.svg",
        },
        {
            name: "Nest.js",
            svg: "/assets/icons/nestjs.svg",
        },
        {
            name: "Firebase",
            svg: "/assets/icons/firebase.svg",
        },
        {
            name: "Tailwind CSS",
            svg: "/assets/icons/tailwind.svg",
        },
        {
            name: "prisma.io",
            svg: "/assets/icons/prisma.svg",
        },
        {
            name: "MySQL",
            svg: "/assets/icons/mysql.svg",
        },
        {
            name: "PostgreSQL",
            svg: "/assets/icons/postgresql.svg",
        },
        {
            name: "Chakra-ui",
            svg: "/assets/icons/chakra-icon.svg",
        },
    ],
};

export const contactillustations = {
    svg: "/assets/icons/contact.svg",
};
