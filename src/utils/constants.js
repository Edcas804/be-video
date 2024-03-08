export const LANGUAGES = [
    { label: "🇨🇴", code: "es" },
    { label: "🇺🇸", code: "en" },
    { label: "🇵🇹", code: "pt" }
]

export const API_MARVEL_PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY
export const API_MARVEL_PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY
export const API_MARVEL_API_URL = import.meta.env.VITE_MARVEL_API_URL
export const API_URL_CHARACTERS = "characters"

export const NAMES_MAP = {
    comics: "title",
    characters: "name",
    events: "title",
    stories: "title",
    series: "title"
}
