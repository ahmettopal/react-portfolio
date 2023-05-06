import React from "react";
import Image from 'next/image';
import { ContactForm, Title } from '../components';
import { contactillustations } from "../constants";

const Contact = () => {
    return (
        <div className="dark:bg-zinc-700">
            <Title title="Contact With Me" />
            <div className="flex flex-col md:flex-row justify-center p-10 gap-20">
                <Image
                    src={contactillustations.svg}
                    width={400}
                    height={400}
                    alt="contact illustrations"
                />
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;