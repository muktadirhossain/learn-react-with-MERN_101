import React from 'react'

export default function Country({ country }) {
    return (
        <div className='border rounded-md p-5 m-2 '>
            <h2 className='text-center mb-2 text-xl font-semibold'>{country.name.common}</h2>
            <div className='flex justify-between items-center flex-row-reverse gap-x-2'>
                <div>

                    <h2>Official Name: {country.name.official}</h2>
                    <p>continents: {country.continents}</p>
                    <p>population: {country.population} </p>
                </div>
                <div>
                    <img alt='flag' src={country.flags.png} />
                </div>
            </div>
            <button className='bg-violet-600 my-2 px-3 py-2 rounded-md hover:bg-violet-700 cursor-pointer'>Know more</button>
        </div>
    )
}
