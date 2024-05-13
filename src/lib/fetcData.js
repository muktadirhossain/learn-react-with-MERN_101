import axios from "axios"

export const countryLoader = async ({ params: { countryCca3Code } }) => {
    // * const code = params.countryCca3Code
    const url = `https://restcountries.com/v3.1/alpha/${countryCca3Code}`

    try {
        const res = await axios.get(url)
        const result = res?.data[0]
        return result
    } catch (error) {
        throw new Error(error)
    }

}