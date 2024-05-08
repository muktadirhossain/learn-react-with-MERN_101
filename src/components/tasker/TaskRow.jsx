import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartFill, TrashIcon, } from '@heroicons/react/24/solid'
import React from 'react'

function TaskRow({ task ,favoriteToggler,deleteHandler}) {
    return (
        <div className='flex justify-between items-center my-2 border-b border-b-slate-300 pb-1.5'>
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
    )
}

export default TaskRow