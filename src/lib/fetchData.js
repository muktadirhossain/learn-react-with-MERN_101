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

export const allCountryLoader = async () =>{
    try {
        const res = await axios.get(`https://restcountries.com/v3.1/all`)
        const result = res?.data
        // console.log("SUCCESSFULLY Fetch Data")
        return result
    } catch (e) {
        console.log(e)
        return []
        throw new Error(error)
    }
}