import React, { useState } from "react";
import Image from 'next/image';
import { ContactForm } from '../components';
import { contactillustations } from "../constants";

const Contact = () => {
    return (
        <div className="dark:bg-zinc-700">
            <div className="text-center font-bold">
                <p className="text-xl md:text-4xl 2xl:text-7xl py-2 dark:text-cyan-50">Contact With Me</p>
            </div>
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