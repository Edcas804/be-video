const ListSkeleton = () => {
	const rows = new Array(5).fill("listSkeleton")
	return (
		<div
			role="status"
			className="max-w-full p-4 rounded-lg animate-pulse md:p-6"
		>
			{rows.map((row) => (
				<div
					key={`${row}-${Math.random()}`}
					className="flex items-center justify-between p-2 m-2 border-b-2 border-gray-300"
				>
					<div>
						<div className="h-2.5 bg-gray-400 rounded-full w-24 mb-2.5"></div>
						<div className="w-32 h-2 bg-gray-300 rounded-full"></div>
					</div>
					<div className="h-2.5 bg-gray-400 rounded-full w-12"></div>
				</div>
			))}
		</div>
	)
}

export default ListSkeleton
