import React from "react";

const Footer = ({ ...props }) => {
    return (
        <footer className="flex-1 flex p-5 justify-center border-gray-100 border-t-2">
            <h4>
                © {new Date().getFullYear()} Powered by{' '} Ahmet Topal
            </h4>
        </footer>
    );
};

export default Footer;