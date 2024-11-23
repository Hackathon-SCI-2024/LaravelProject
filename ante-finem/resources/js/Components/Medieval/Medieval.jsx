import React from 'react';
import { motion } from 'framer-motion';

export default function Medieval({ setPuzzle }) {
	return (
		<div
			className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center px-6 md:px-20"
			style={{
				backgroundImage: "url('/path-to-medieval-background.jpg')", // Replace with a medieval-themed background image
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-70"></div>

			{/* Content */}
			<div className="relative text-center text-gray-200 tracking-wide">
				{/* Title */}
				<motion.h1
					className="text-4xl md:text-6xl font-extrabold mb-6"
					style={{ fontFamily: "'Uncial Antiqua', serif" }} // Medieval font
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Explore the Medieval World
				</motion.h1>

				{/* Description */}
				<motion.p
					className="text-base md:text-xl mb-8 text-gray-300 text-opacity-80"
					style={{
						lineHeight: "1.8",
						maxWidth: "75%",
						margin: "0 auto",
						fontFamily: "'Uncial Antiqua', serif",
					}}
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
				>
					Step into a fascinating era that shaped Europe and the Middle East alike. From the bustling bazaars of
					Baghdad to the majestic castles of Europe, the medieval world was a time of knights, scholars, and
					adventurers. Experience a golden age of art, science, and valor!
				</motion.p>

				{/* Start Button */}
				<motion.button
					className="px-8 py-3 bg-red-700 mt-12 text-white text-lg font-semibold rounded-full hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-400"
					style={{ fontFamily: "'Uncial Antiqua', serif" }}
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					whileHover={{
						scale: 1.1,
						boxShadow: "0px 8px 20px rgba(139, 0, 0, 0.8)",
					}}
					whileTap={{ scale: 0.95 }}
					transition={{
						delay: 1,
						type: "spring",
						stiffness: 200,
						damping: 10,
					}}
					onClick={() => setPuzzle(10)}
				>
					Start Your Quest
				</motion.button>
			</div>
		</div>
	);
}
