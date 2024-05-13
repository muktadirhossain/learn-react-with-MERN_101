import { useEffect, useState } from "react"
import Country from "./Country"
import axios from "axios"

export default function CountryList() {
    const [country, setCountry] = useState([])
    const fetchCountries = async () => {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/all`)
            setCountry(res.data)
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
