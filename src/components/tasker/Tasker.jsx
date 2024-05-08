import React, { useEffect, useState } from 'react'
import { HeartIcon as HeartFill, TrashIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'
import NoDataFound from './NoDataFound'
import TaskRow from './TaskRow'
import TaskInputForm from './TaskInputForm'


function Tasker() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        const localDbData = localStorage.getItem("taskData");
        if (localDbData) {
            setTasks(JSON.parse(localDbData))
        }
    }, [])


    const saveToLocalDb = (tasks) => {
        localStorage.clear()
        localStorage.setItem("taskData", JSON.stringify(tasks))
    }


    const submitHandler = () => {
        event.preventDefault();
        setTasks((prev) => {
            return [...prev, { id: crypto.randomUUID(), task: input, isFavorite: false }]
        });
        saveToLocalDb(tasks)
        setInput("")
    }

    const deleteHandler = (taskId) => {
        const filteredTasks = tasks.filter((task) => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
        saveToLocalDb(filteredTasks)
    }

    const favoriteToggler = (taskId) => {
        const newTaskList = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isFavorite: !task.isFavorite
                }
            } else {
                return task
            }
        })

        saveToLocalDb(newTaskList)

        setTasks(newTaskList)

    }


    return (
        <>
            <TaskInputForm
                input={input}
                setInput={setInput}
                submitHandler={submitHandler}
            />
            <div className='max-w-[500px] mx-auto bg-slate-800 px-5 mt-5 py-4 rounded-md'>
                {
                    tasks.length > 0 ?
                        tasks.map((task) => <TaskRow
                            deleteHandler={deleteHandler}
                            favoriteToggler={favoriteToggler}
                            key={task.id}
                            task={task} />)
                        :
                        <NoDataFound text="No task Found 😔" />
                }

            </div>
        </>
    )
}

export default Tasker