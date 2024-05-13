import React from 'react'
import CountryList from '../components/CountryList'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='min-h-screen bg-slate-800 text-white'>
            {/* <Link to="/about"><button className='m-5 bg-red-500 px-3 py-2 rounded'>About</button></Link> */}
            <CountryList />
        </div>
    )
}
