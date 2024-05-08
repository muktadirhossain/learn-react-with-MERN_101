import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const handelIncrement = () => {
        setCount((prev) => {
            return prev + 1
        })
 
    }

    const handelDecrement = () => {
        setCount(count - 1)
    }
    return (
        <div className="max-w-[600px] mx-auto flex flex-col justify-center items-center bg-orange-300/45  rounded-lg my-4">
            <h1 className='text-slate-900 font-bold text-4xl text-center my-2'>{count}</h1>
            <div className="mb-5">
                <button 
                onClick={handelIncrement} 
                className='bg-green-300 rounded-md px-4 py-3 mx-2'>+</button>
                <button onClick={handelDecrement} className='bg-red-300 rounded-md px-4 py-3 mx-2'>-</button>
            </div>

        </div>
    )
}
