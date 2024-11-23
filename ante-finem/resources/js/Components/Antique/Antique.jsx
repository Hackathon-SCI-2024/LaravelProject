import React from 'react';
import { motion } from 'framer-motion'; // Animation library

export default function Antique({ setPuzzle }) {
	return (
		<div
			className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center px-6 md:px-20"
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-white bg-opacity-30"></div>

			{/* Content */}
			<div className="relative text-center text-gray-800 tracking-wider">
				{/* Title */}
				<motion.h1
					className="text-4xl md:text-6xl font-extrabold mb-6 antique-font"
					initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					Step into the Antique Era
				</motion.h1>

				{/* Description */}
				<motion.p
					className="text-base p_coolFont md:text-xl mb-8 antique-font text-gray-800 text-opacity-80"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
					style={{ lineHeight: "1.8", maxWidth: "75%", margin: "0 auto" }}
				>
					Travel back to the age of empires, philosophers, and wonders of the ancient world. Uncover stories
					written on scrolls, carved in stone, and told through timeless art. The adventure awaits!
				</motion.p>

				{/* Start Button */}
				<motion.button
					className="px-8 py-3 bg-indigo-600 mt-12 text-white text-lg font-semibold rounded-full antique-font hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					whileHover={{
						scale: 1.1,
						rotate: 5,
						boxShadow: "0px 8px 20px rgba(129, 140, 248, 0.8)",
					}}
					whileTap={{ scale: 0.95 }}
					transition={{
						delay: 0,
						type: "spring",
						stiffness: 200,
						damping: 12,
					}}
					onClick={() => setPuzzle(6)}
				>
					Start Exploring
				</motion.button>
			</div>
		</div>
	);
}
