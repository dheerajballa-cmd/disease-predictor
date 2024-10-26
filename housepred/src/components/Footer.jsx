import React from 'react'

const Footer = () => {
    return(
        <footer className="bg-[#6c809a] text-white py-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className="mt-2 space-x-4">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                <span className="text-gray-400">|</span>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a>
                <span className="text-gray-400">|</span>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
            </div>
        </footer>
    );
}

export default Footer;