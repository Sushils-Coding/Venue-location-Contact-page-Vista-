import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./gmap.css";

const Gmap = () => {
    return (
        <>
            <div className="mt-10">
                {/* Animated heading */}
                <motion.address
                    id="address"
                    className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Our Venue Location:
                </motion.address>

                {/* Animated map container */}
                <motion.div
                    id="mapContainer"
                    className="positon-relative h-[500px] w-[100%] overflow-hidden p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <iframe
                        className="w-[100%] h-[450px] border-0 top-0 right-[2vw]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7458013083415!2d72.87188327498082!3d19.206301932025394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70c257276b9%3A0x15ee980e87a0bb9f!2sTIMSCDR%20-%20Thakur%20Institute%20of%20Management%20Studies%2C%20Career%20Development%20%26%20Research!5e0!3m2!1sen!2sin!4v1732405806071!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </>
    );
};

export default Gmap;
