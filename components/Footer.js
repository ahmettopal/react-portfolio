import React from "react";

const Footer = ({ ...props }) => {
    return (
        <div className="dark:bg-slate-600">
            <footer className="flex-1 flex p-5 justify-center mt-5 border-gray-100 border-t-2">
                <h4>
                    © {new Date().getFullYear()} Powered by{' '} Ahmet Topal
                </h4>
            </footer>
        </div>
    );
};

export default Footer;