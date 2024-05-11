import { useEffect, useState } from "react"
import fetchData from "../utils/fetchData"
import Country from "./Country"

export default function CountryList() {
    const [country, setCountry] = useState([])
    const fetchCountries = async () => {
        try {
            const countries = await fetchData(`https://restcountries.com/v3.1/all`)
            setCountry(countries)
        } catch (error) {
            throw new Error(error)
        }

    }
    useEffect(() => {
        fetchCountries()
    }, [])
    return (
        <div>
            <h2 className="text-center font-bold text-4xl">Country List</h2>
            <section className="grid grid-cols-3 mx-5">
                {
                    country.map((country, idx) => {
                        
                        return <Country key={idx} country={country} />
                    })
                }
            </section>
        </div>
    )
}
