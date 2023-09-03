import React from "react";

const Modal = ({ show = false, children }) => {
    return (
        <>
            {show ? (
                <div
                    aria-hidden="true"
                    className="justify-center items-center flex bg-gray-300 bg-opacity-70 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-4xl">
                        {/*content*/}
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
