import React from "react";
import { useNavigate } from "react-router-dom";
import "./gmap.css";

const Gmap = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/Contact");
    };

    return (
        <>
            <address id="address" className="text-gray-800 text-center font-bold text-3xl p-3">
                Gate No 4, Thakur Educational Campus, Thakur MCA, Thakur Rd, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101
            </address>
            <div id="mapContainer" className="positon-relative h-[500px] w-[100%] overflow-hidden p-4">
                <iframe className="w-[100%] h-[500px] border-0 top-0 right-[2vw]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7458013083415!2d72.87188327498082!3d19.206301932025394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70c257276b9%3A0x15ee980e87a0bb9f!2sTIMSCDR%20-%20Thakur%20Institute%20of%20Management%20Studies%2C%20Career%20Development%20%26%20Research!5e0!3m2!1sen!2sin!4v1732405806071!5m2!1sen!2sin" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <button 
                onClick={handleContactClick} 
                className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer p-5 border-none text-[16px] mt-3"
                
            >
                Contact Us
            </button>
        </>
    );
};

export default Gmap;
