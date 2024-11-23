import React from "react";

const Popup = ({ title, content, img_popup, onClose, bgColor }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className={`${bgColor} rounded-lg shadow-lg max-w-md w-full p-6 relative`}>
				{/* Optional image */}
				{img_popup && (
					<img
						src={img_popup}
						alt="Popup icon"
						className="rounded-full h-16 w-16 mx-auto mb-4 object-cover"
					/>
				)}

				{/* Title */}
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{title}</h2>

				{/* Content */}
				<p className="text-gray-600 text-center mb-6">{content}</p>

				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				{/* Action Button */}
				<div className="flex justify-center">
					<button
						onClick={onClose}
						className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
