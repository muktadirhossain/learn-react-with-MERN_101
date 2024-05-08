import React, { useState } from 'react'
import { HeartIcon as HeartFill, TrashIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'


function Tasker() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")


    // [
    //     {
    //         "id": "acaa84d0-d078-478c-b4e4-52c9463e048e",
    //         "task": "a",
    //          isFavorite: true
    //     },
    //     {
    //         "id": "acaa84d0-d078-478c-b4e4-52c9463e048e",
    //         "task": "B"
    //           isFavorite: false
    //     },
    //     {
    //         "id": "acaa84d0-d078-468c-b4e4-52c9463e048e",
    //         "task": "C"
    //     }
    // ]

    const submitHandler = () => {
        event.preventDefault();
        setTasks((prev) => {
            return [...prev, { id: crypto.randomUUID(), task: input, isFavorite: false }]
        });
        setInput("")
    }

    const deleteHandler = (taskId) => {
        const filteredTasks = tasks.filter((task) => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    const favoriteToggler = (taskId) => {
        const newTaskList = tasks.map((task) => {
            if(task.id === taskId) {
                return {
                   ...task,
                    isFavorite:!task.isFavorite
                }
            }else{
                return task
            }
        } )

        setTasks(newTaskList)

    }


    return (
        <>
            <div className='max-w-[500px] mx-auto bg-slate-800 px-5 py-10 rounded-md'>
                <h1 className='text-center font-bold text-2xl text-white'>Tasker</h1>
                <div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="task">Task</label>
                            <input
                                value={input}
                                onChange={(e) => {
                                    setInput(e.target.value);
                                }}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="task" id="task" placeholder='Enter your task here...' />
                        </div>
                        <input className='bg-red-500 my-3 rounded px-4 py-2 text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <div className='max-w-[500px] mx-auto bg-slate-800 px-5 mt-5 py-4 rounded-md'>
                {
                    tasks.length > 0 ?
                        tasks.map((task) => {
                            return <div className='flex justify-between items-center my-2 border-b border-b-slate-300 pb-1.5' key={task.id}>
                                <p className={`font-semibold ${task.isFavorite ? "text-red-500" : "text-white"}`}>
                                    {task.task}
                                </p>
                                <button onClick={() => favoriteToggler(task.id)}>
                                    {
                                        task.isFavorite ?
                                            <HeartFill className="h-5 w-5 text-red-500" />
                                            :
                                            <HeartIcon className="h-5 w-5 text-red-500" />
                                    }
                                </button>

                                <button onClick={() => deleteHandler(task.id)}>

                                    <TrashIcon className='h-5 w-5 text-red-700' />
                                </button>
                            </div>
                        })
                        :
                        <p className='text-white/40 text-center font-bold text-xl'>Sorry no task Found 😔</p>

                }

            </div>
        </>
    )
}

export default Tasker