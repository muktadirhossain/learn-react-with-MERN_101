import FoodCard from './FoodCard'
// import TodoCard from './Todo'
export default function FoodList() {

    const foods = [
        {
            id: 1,
            title: 'Biriany',
            price: 100
        },
        {
            id: 2,
            title: 'Hydrabadi Briani',
            price: 200
        },
        {
            id: 3,
            title: 'Kolkata Biriani',
            price: 140
        },
        {
            id: 4,
            title: 'Pakki Biriani',
            price: 1000
        },
        {
            id: 5,
            title: 'Mutton Biriani',
            price: 1200
        },
    ]
    const todoList = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        }]
    return (
        <div 
        //className="min-h-[calc(100vh-65px)] bg-red-50 flex flex-wrap"
        >
            {/* Render Food Cards:: */}
            {
                // foods.map((food) => {
                //     return <FoodCard key={food.id} title={food.title} price={food.price} />
                // })
            }
            {
                todoList.map((todo) => {
                    return (
                        <Todo key={todo.id} todo={todo}></Todo>
                    )
                })

            }
        </div>
    )
}
//* DRY : Do not repeat yourself;

// <FoodCard title="Biriany" price="100" />
// <FoodCard title="Hydrabadi Briani" price="200" />
// <FoodCard title="Kolkata Biriani" price="140" />
// <FoodCard title="Kacchi Biriani" price="477" />
// <FoodCard title="Pakki Biriani" price="3434" />
// <FoodCard title="Mutton Biriani" price="343465" />

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