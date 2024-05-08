import Logo from '../assets/logo.png'

export default function NavBar() {
    console.log("NOT COunter")
    return (
        <header className='flex justify-between items-center px-2'>
            <div>
                <a href="#">
                    <img className='w-10 h-10' src={Logo} alt="logo" />
                </a>
            </div>
            <div>
                <ul className="flex items-center">
                    <li className="text-blue-700 mx-1 hover:underline cursor-pointer text-xs">Home</li>
                    <li className="text-blue-700 mx-1 hover:underline cursor-pointer text-xs">About</li>
                    <li className="text-blue-700 mx-1 hover:underline cursor-pointer  text-xs">Contact</li>
                    <li className="text-blue-700 mx-1 hover:underline cursor-pointer text-xs">Contact</li>
                </ul>
            </div>
        </header>
    )
}
