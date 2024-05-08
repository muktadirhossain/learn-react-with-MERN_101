import image from '../assets/images.jpeg'
export default function FoodCard({title, price}) {
    return (
        <div className="border-2 m-1 rounded shadow-lg p-5 bg-lime-600/60 w-56 text-center">
            <img className='rounded-lg w-40' src={image} alt="img" />
            <h2 className='text-xl  my-2 text-red-600 font-semibold'>{title}</h2>
            <p className='text-xs font-mono'>Lorem ipsum dolor sit amet consectetur.</p>
            <p className='text-red-700'>$ <span className='font-bold'>{price}</span></p>
            <button className='bg-orange-600 rounded-md px-3 py-2 text-black font-semibold text-sm hover:bg-orange-700 mt-3'>Order Now</button>
        </div>
    )
}
