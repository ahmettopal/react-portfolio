import React from "react";

const Footer = ({ ...props }) => {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-800">
            <footer className="flex-1 flex p-5 justify-center">
                <h4>
                    © {new Date().getFullYear()} Powered by{' '} Ahmet Topal
                </h4>
                <h4>
                    If you have a website or mobile app idea in mind or you need some advice about product design, feel free to contact me. Currently my time books quickly, so the sooner you write, the better it is for both of us.
                </h4>
            </footer>
        </div>
    );
};

export default Footer;