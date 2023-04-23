import React from 'react'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram
} from "react-icons/ai";
import { instagramUrl, linkedinUrl, githubUrl } from '../../constants'

const SocialMediaCard = () => {
    return (
        <>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
        </>
    )
}

export default SocialMediaCard