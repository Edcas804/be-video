import Card from "../Card"

const itemDefault = {
    name: "Default",
    description: "This is the default item",
    picture: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"
}

const ContentCategoryCard = ({ item = itemDefault }) => {
    return (
        <Card>
            <div className="w-full flex abosolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent hover:brightness-50 p-4 text-white text-center flex-col justify-end items-center gap-2 transition-all duration-300 ease-in-out z-10">
                <h3 className="text-2xl font-bold uppercase tracking-widest  ">
                    {item.name}
                </h3>
                <p className="text-lg font-light tracking-widest">
                    {item.description}
                </p>
            </div>
            <div className="flex w-full h-full absolute ">
                <img
                    src={item.picture}
                    alt={item.name}
                    className="w-full h-full object-cover z-0"
                />
            </div>
        </Card>
    )
}

export default ContentCategoryCard
