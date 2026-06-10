// WhatsAppButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = "923468074294"; // Pakistan code +92 without plus
    const message = "Hi! I'm interested in your services.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-4 shadow-lg hover:shadow-green-500/50 transition-all duration-300 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Pulse animation ring */}
            <motion.span
                className="absolute inset-0 rounded-full bg-green-500"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0, 0.7]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* WhatsApp Icon */}
            <FaWhatsapp className="text-white text-3xl relative z-10" />

            {/* Tooltip on hover */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Chat with me on WhatsApp
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;