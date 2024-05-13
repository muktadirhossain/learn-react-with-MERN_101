import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className='min-h-screen bg-slate-800 text-white'>

            <h1>This is my About Page</h1>
            <Link to="/"><button className='bg-red-500 px-3 py-2 rounded m-5'>Go to Home</button></Link>

        </div>
    )
}
