import React from "react";
import Gmap from "./Gmap";
import Contact from "./Contact";

const Merge = () => {
    return (
        <>
            <div className="bg-custom-bg bg-cover bg-center block gap-2 w-[100%] md:grid md:grid-cols-2">
                
                {/* map */}
                <Gmap />
                {/* contact  */}
                <Contact />

            </div>
        </>
    )
}

export default Merge;