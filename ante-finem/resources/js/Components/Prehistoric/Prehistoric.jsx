import React from 'react';
import { motion } from 'framer-motion'; // Animation library

export default function Prehistoric({ setPuzzle }) {
	return (
		
		<div
			className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center px-6 md:px-20"
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-60"></div>

			{/* Content */}
			<div className="relative text-center text-yellow-200 tracking-wider">
				{/* Title */}
				<motion.h1
					className="text-4xl md:text-6xl font-extrabold mb-6 prehistoric-font"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Enter the Prehistoric World
				</motion.h1>

				{/* Description */}
				<motion.p
					className="text-base p_coolFont md:text-xl mb-8 prehistoric-font text-yellow-200 text-opacity-75"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					style={{ lineHeight: "1.8", maxWidth: "70%", margin: "0 auto" }}
				>
					Venture into the dawn of humanity, where survival meant harnessing fire, carving tools from stone,
					and leaving the first marks of culture in ancient caves. Let the journey begin!
				</motion.p>

				{/* Start Button */}
				<motion.button
					className="px-8 py-3 bg-orange-500 mt-12 text-yellow-100 text-lg font-semibold rounded-full prehistoric-font focus:outline-none focus:ring-4 focus:ring-orange-300"
					initial={{ scale: 0.75, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					whileHover={{ scale: 1.15, boxShadow: "0px 8px 20px rgba(255, 165, 0, 0.8)" }}
					whileTap={{ scale: 0.95 }}
					transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
					onClick={() => setPuzzle(2)}
				>
					Start Exploring
				</motion.button>
			</div>
		</div>
	);
}
