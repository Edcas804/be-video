import ContentCategoryCard from "./ContentCategoryCard"

const data = [
    {
        name: "Default",
        description: "This is the default item",
        picture:
            "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"
    },
    {
        name: "Default",
        description: "This is the default item",
        picture:
            "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"
    },
    {
        name: "Default",
        description: "This is the default item",
        picture:
            "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"
    },
    {
        name: "Default",
        description: "This is the default item",
        picture:
            "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"
    },
    {
        name: "Default",
        description: "This is the default item",
        picture:
            "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"
    },
    {
        name: "Default",
        description: "This is the default item",
        picture:
            "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"
    },
    {
        name: "Default",
        description: "This is the default item",
        picture:
            "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"
    },
    {
        name: "Default",
        description: "This is the default item",
        picture:
            "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"
    }
]
const ContentCategory = () => {
    return (
        <div className="w-full grid grid-cols-5 gap-3">
            {data.map((item, index) => {
                return <ContentCategoryCard key={index} item={item} />
            })}
        </div>
    )
}

export default ContentCategory
