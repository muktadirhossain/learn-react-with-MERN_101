import { useEffect, useState } from 'react'

export default function PostList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [refetch, setRefetch] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const jsonResponse = await res.json()
            setPosts(jsonResponse)
            console.log(jsonResponse)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)

    }
    useEffect(() => {
        fetchData()
       
    }, [refetch])

    return (
        <div>
            <h2 className='text-center text-4xl text-red-500 my-2 font-bold'>PostList</h2>
            <button 
            onClick={()=> setRefetch((prev)=> !prev)} 
            className='bg-red-500 rounded-sm px-3 py-2'>Re-fetch data</button>
            
            {loading && <h3>Loading...</h3>}
            {
                posts.map((post) => {
                    return <h3 key={post.id}>{post.title}</h3>
                })
            }
        </div>
    )
}
