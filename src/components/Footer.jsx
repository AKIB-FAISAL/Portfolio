import React from 'react';

// --- Configuration Data ---
const footerData = {
    developerName: "MD AKIB FAISAL",
    startYear: 2023, // Set the year you started development/website creation
    currentYear: new Date().getFullYear(),
    copyrightText: "All Rights Reserved",
};

export const Footer = () => {
    const { developerName, currentYear, copyrightText } = footerData;

    // Determine the year range for the copyright notice
    const year = currentYear 
                      ? currentYear 
                      : ` ${currentYear}`;

    return (
        <footer className="py-6 px-4 bg-[#1e2329] text-gray-400 border-t border-gray-700">
            <div className="max-w-4xl mx-auto text-center text-sm font-bold">
                
                {/* Copyright Line */}
                <p>
                    &copy; {year} Devloper {developerName}. {copyrightText}.
                </p>

    
            </div>
        </footer>
    );
};