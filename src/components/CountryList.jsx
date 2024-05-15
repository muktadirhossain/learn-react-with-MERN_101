import { useEffect, useState } from "react"
import Country from "./Country"
import axios from "axios"

export default function CountryList({data}) {

    return (
        <div>
            <h2 className="text-center font-bold text-4xl">Country List</h2>
            <section className="grid grid-cols-3 mx-5">
                {
                    data.map((country, idx) => {

                        return <Country key={idx} country={country} />
                    })
                }
            </section>
        </div>
    )
}
