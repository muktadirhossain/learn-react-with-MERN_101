export default function TaskInputForm(props) {
    return (<div className='max-w-[500px] mx-auto bg-slate-800 px-5 py-10 rounded-md'>
        <h1 className='text-center font-bold text-2xl text-white'>Tasker</h1>
        <div>
            <form onSubmit={props.submitHandler}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="task">Task</label>
                    <input value={props.input} onChange={e => {
                        props.setInput(e.target.value);
                    }} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="task" id="task" placeholder='Enter your task here...' />
                </div>
                <input className='bg-red-500 my-3 rounded px-4 py-2 text-white' type="submit" value="Submit" />
            </form>
        </div>
    </div>);
}