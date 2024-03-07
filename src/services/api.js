import md5 from "md5"
import {
    API_MARVEL_API_URL,
    API_MARVEL_PRIVATE_KEY,
    API_MARVEL_PUBLIC_KEY,
    API_URL_CHARACTERS
} from "../utils/constants"
const ts = Date.now()
const hash = md5(ts + API_MARVEL_PRIVATE_KEY + API_MARVEL_PUBLIC_KEY)
/**
 * see: https://developer.marvel.com/documentation/authorization
 */

export async function getCategories({
    category,
    limit = 100,
    page = 1,
    orderBy = ""
}) {
    const offset = (page - 1) * limit
    const url = `${API_MARVEL_API_URL}${category}?ts=${ts}&apikey=${API_MARVEL_PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=${orderBy}`
    console.log(url)
    try {
        const response = await fetch(url)
        const data = await response.json()
        if (data.code === 200) {
            return data.data.results
        } else {
            return []
        }
    } catch (error) {
        console.log(`Error consultando el api:${url} : `, error)
        return {}
    }
}
export async function getCharacters({ limit = 100, page = 1, orderBy = "" }) {
    const offset = (page - 1) * limit
    const url = `${API_MARVEL_API_URL}${API_URL_CHARACTERS}?ts=${ts}&apikey=${API_MARVEL_PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=${orderBy}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        if (data.code === 200) {
            return data.data.results
        } else {
            return []
        }
    } catch (error) {
        console.log(`Error consultando el api:${url} : `, error)
        return {}
    }
}

export async function getHeroDetails({ id }) {
    const url = `${API_MARVEL_API_URL}${API_URL_CHARACTERS}/${id}?ts=${ts}&apikey=${API_MARVEL_PUBLIC_KEY}&hash=${hash}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        if (data.code === 200) {
            return data.data.results[0] instanceof Object
                ? data.data.results[0]
                : {}
        } else {
            return {}
        }
    } catch (error) {
        console.log(`Error consultando el api:${url} : `, error)
        return {}
    }
}
