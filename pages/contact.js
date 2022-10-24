import React, { useState } from "react";
import { ContactForm } from '../components';
import NextLink from "next/link";

const Contact = () => {
    return (
        <div className="flex-col justify-center mt-24 self-center">
            <p className="text-xl md:text-4xl 2xl:text-7xl py-2 dark:text-cyan-50">Contact With Me</p>
            <ContactForm />
        </div>
    );
};

export default Contact;