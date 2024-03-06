import Category from "./Category"

const Categories = () => {
    const categories = new Array(5).fill("category")
    return (
        <>
            {categories.map((category, index) => {
                return (
                    <div key={index} className="category">
                        <Category />
                    </div>
                )
            })}
        </>
    )
}

export default Categories
