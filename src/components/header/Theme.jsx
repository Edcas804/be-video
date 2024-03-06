import { SunIcon, MoonIcon } from "@heroicons/react/20/solid/index.js"
import { useEffect, useState } from "react"

const Theme = () => {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )
    const handleToggle = (e) => {
        e.target.checked ? setTheme("dark") : setTheme("light")
    }
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        if (localTheme === "dark") {
            document.querySelector(".sun").classList.add("hidden")
            document.querySelector(".moon").classList.remove("hidden")
        } else {
            document.querySelector(".sun").classList.remove("hidden")
            document.querySelector(".moon").classList.add("hidden")
        }
    }, [theme])
    return (
        <label className="w-12 h-12">
            <input
                type="checkbox"
                id="themeSelector"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
                className="hidden"
            />
            <div className="sun">
                <SunIcon className="w-5 h-5 text-orange-600" />
            </div>
            <div className="moon">
                <MoonIcon className="w-5 h-5 text-orange-500" />
            </div>
        </label>
    )
}

export default Theme
