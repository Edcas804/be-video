import Categories from "../../components/categories/Categories"

const Home = () => {
    return (
        <article className="flex justify-around items-center gap-4 w-full flex-wrap hover:cursor-pointer min-h-screen">
            <div className="banner"></div>
            <Categories />
        </article>
    )
}
export default Home
