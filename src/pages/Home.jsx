import { useLoaderData } from 'react-router-dom'
import CountryList from '../components/CountryList'

export default function Home() {
    const data =  useLoaderData()

    return (
        <div className='min-h-screen bg-slate-800 text-white'>
            {/* <Link to="/about"><button className='m-5 bg-red-500 px-3 py-2 rounded'>About</button></Link> */}
            <CountryList data={data} />
        </div>
    )
}
