import React from 'react';
import { motion } from 'framer-motion';

export default function War({ setPuzzle }) {
	return (
		<div
			className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center px-6 md:px-20"
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-70"></div>

			{/* Content */}
			<div className="relative text-center text-gray-200 tracking-wide">
				{/* Title */}
				<motion.h1
					className="text-4xl md:text-6xl font-extrabold mb-6"
					style={{ fontFamily: "'Special Elite', monospace" }} // Military style font
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					  	Przetrwaj wojny XX wieku
				</motion.h1>

				{/* Description */}
				<motion.p
					className="text-base md:text-xl mb-8 text-gray-300 text-opacity-80"
					style={{
						lineHeight: "1.8",
						maxWidth: "75%",
						margin: "0 auto",
						fontFamily: "'Special Elite', monospace",
					}}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
				>
					Przeżyj na nowo kluczowe momenty XX wieku, od okopów I wojny światowej po pola bitew II wojny światowej. Doświadcz odwagi, poświęcenia i wytrwałości tych, którzy walczyli, aby ukształtować nasz współczesny świat. Czy podejmiesz wyzwanie?
				</motion.p>

				{/* Start Button */}
				<motion.button
					className="px-8 py-3 bg-red-900 mt-12 text-white text-lg font-semibold rounded-full hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600"
					style={{ fontFamily: "'Special Elite', monospace" }}
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					whileHover={{
						scale: 1.1,
						boxShadow: "0px 5px 30px rgba(255, 0, 0, 0.5)", // Red glow for urgency
					}}
					whileTap={{ scale: 0.95 }}
					transition={{
						delay: 0,
						type: "spring",
						stiffness: 150,
						damping: 10,
					}}
					onClick={() => setPuzzle(14)}
				>
					Wejdź na pole bitwy
				</motion.button>
			</div>
		</div>
	);
}
