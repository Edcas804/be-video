const GallerySkeleton = () => {
    const rows = new Array(20).fill("gallerySkeleton")
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 gap-3 text-cyan-950 relative my-2 animate-pulse p-3">
            {rows.map((row) => (
                <div
                    key={`${row}-${Math.random()}`}
                    className="flex justify-center items-center w-full h-[200px] md:h-[350px] lg:h[400px] xl:h[450px] col-span-1 rounded-xl  border-4 border-transparent hover:border-gray-300 shadow-lg transition-all duration-500 relative overflow-hidden hover:cursor-pointer bg-slate-600"
                >
                    <svg
                        className="w-10 h-10 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                    >
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                </div>
            ))}
        </div>
    )
}

export default GallerySkeleton
