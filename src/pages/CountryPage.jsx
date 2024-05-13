import { useLoaderData, useParams } from "react-router-dom";

export default function CountryPage() {
    const country = useLoaderData()
    
    return (
        <div className='min-h-screen bg-slate-800 text-white'>
            <div className='border rounded-md p-5 '>
                <h2 className='text-center mb-2 text-xl font-semibold'>{country?.name?.official}</h2>
                <h2 className='text-center mb-2 text-xl font-semibold'>{country?.name?.common}</h2>
                <div className='flex justify-between items-center flex-row-reverse gap-x-2'>
                    <div>

                        <h2>Official Name:</h2>
                        <p>continents: </p>
                        <p>population: </p>
                    </div>
                    <div>
                        <img alt={country?.name?.official} src={country?.flags?.png} />
                    </div>
                </div>
               
            </div>
        </div>
    )
}


    // const { countryCca3Code } = useParams()
    // const [country, setCountry] = useState({})

    // const url = `https://restcountries.com/v3.1/alpha/${countryCca3Code}`

    // const fetchData = async () => {
    //     try {
    //         const res = await axios.get(url)
    //         console.log(res)
    //         setCountry(res.data[0])

    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])