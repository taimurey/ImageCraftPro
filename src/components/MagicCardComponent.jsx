import React from 'react';
import 
function CardComponent() {
    return (
        <div style={{ minHeight: "60vh", background: "#212534", display: "flex", alignItems: "center", flexDirection: "column", paddingTop: "2rem", paddingBottom: "2rem", boxSizing: "border-box" }}>
            <div className="card relative flex justify-center items-center text-center text-transparent hover:text-[rgba(88,199,250,1)] transition-color duration-1000 cursor-pointer font-cursive w-[calc(65vh/1.5)] h-65vh rounded-md">
                <img src="path-to-image.jpg" alt="Magic Card" className="object-cover w-full h-full z-10" />
            </div>
            <a href="https://mythrillfiction.com/" target="_blank" rel="noopener noreferrer" className="text-[#212534] no-underline font-sans font-bold mt-8">Mythrill</a>
        </div>
    );
}

export default CardComponent;
