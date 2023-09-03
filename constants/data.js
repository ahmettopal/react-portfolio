import { getIconPath } from "../helpers";

export const PortfolioData = [
    {
        id: 1,
        image: "https://picsum.photos/450/350",
        title: "Portfolio 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        webLink: "",
        androidLink: "",
        iosLink: "",
        tech: [getIconPath("react-native.svg"), getIconPath("firebase.svg")],
    },
    {
        id: 2,
        image: "https://picsum.photos/450/350",
        title: "Portfolio 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        webLink: "",
        androidLink: "",
        iosLink: "",
        tech: [getIconPath("react.svg"), getIconPath("chakra-icon.svg"), getIconPath("firebase.svg")],
    },
    {
        id: 3,
        image: "https://picsum.photos/450/350",
        title: "Portfolio 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        webLink: "",
        androidLink: "",
        iosLink: "",
        tech: [getIconPath("react.svg")]
    },
];
