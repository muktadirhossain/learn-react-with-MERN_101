function Todo({ todo }) {
    return (
        <>
            <div className='ring m-3 p-5 bg-orange-400'>
                <h3>{todo.title}</h3>
                <p>{todo.id}</p>
                <p>Is compelete: {todo.completed.toString()}</p>
            </div>
            <div className='ring m-3 p-5 bg-orange-400'>
                <h3>{todo.title}</h3>
                <p>{todo.id}</p>
                <p>Is compelete: {todo.completed.toString()}</p>
            </div>
        </>
    )
}

export default Todo