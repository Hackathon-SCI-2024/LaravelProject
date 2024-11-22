import React from "react";

const SliderTimeline = ({ puzzle, setPuzzle }) => {
	const eras = [
		{ title: "Prehistory", icon: "🪨", startNumber: 1 },
		{ title: "Antique Times", icon: "📜", startNumber: 5 },
		{ title: "Medieval Times", icon: "🏰", startNumber: 9 },
		{ title: "20th Century Wars", icon: "🪖", startNumber: 13 },
	];

	return (
		<div className="absolute bottom-5 w-full flex flex-col items-center">
			{/* Timeline */}
			<div className="relative w-full max-w-lg mt-6">
				{/* Line */}
				<div className="absolute w-full h-1 bg-slate-900 top-1/2 transform -translate-y-1/2"></div>
				{/* Era Circles */}
				<div className="flex justify-between items-center relative">
					{eras.map((era, eraIndex) => (
						<div key={eraIndex} className="relative group">
							{/* Era Circle */}
							<button
								className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-transform ${
									puzzle >= era.startNumber && puzzle < era.startNumber + 4
										? "border-blue-500 text-white scale-110 shadow-lg"
										: "border-slate-800"
								} hover:scale-110 hover:shadow-md hover:border-blue-300 bg-slate-700`}
								onClick={() => setPuzzle(era.startNumber)}
								aria-label={`Switch to ${era.title}`}
								style={{
									transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
								}}
							>
								<span
									className="text-lg group-hover:animate-bounce-short"
									style={{
										display: "inline-block",
										transformOrigin: "bottom center",
									}}
								>
									{era.icon}
								</span>
							</button>

							{/* Task Circles */}
							<div
								className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 flex justify-between w-28 ${
									puzzle >= era.startNumber && puzzle < era.startNumber + 4 ? "opacity-100" : "opacity-0"
								} transition-opacity duration-500`}
								style={{
									pointerEvents: puzzle >= era.startNumber && puzzle < era.startNumber + 4 ? "auto" : "none",
								}}
							>
								{[...Array(3)].map((_, taskIndex) => (
									<button
										key={taskIndex}
										className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-transform ${
											puzzle === era.startNumber + taskIndex + 1
												? "bg-blue-500 border-blue-500  scale-110 shadow-md"
												: " border-slate-800"
										} hover:scale-110 hover:shadow-sm hover:border-blue-300 text-white bg-slate-700`}
										onClick={() => setPuzzle(era.startNumber + taskIndex + 1)}
										aria-label={`Switch to Task ${taskIndex + 1} of ${era.title}`}
										style={{
											transition: "transform 0.4s ease-out, opacity 0.3s ease-in-out, box-shadow 0.2s ease-in-out",
											transform:
												puzzle >= era.startNumber && puzzle < era.startNumber + 4
													? `translate(${taskIndex === 0 ? "-40%" : taskIndex === 2 ? "40%" : "0"}, ${
															taskIndex === 0 || taskIndex === 2 ? "6px" : "0px"
													  })`
													: `translate(0, 0)`,
										}}
									>
										<span className="text-xs font-bold">{taskIndex + 1}</span>
									</button>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SliderTimeline;
