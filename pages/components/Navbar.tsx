import Logo from "./parts/Logo";
import Button from "./parts/Button";
import Nav from "./parts/Nav";

const Navbar = () => {
    return (
        <div className="flex items-center mx-5">
            <div className='w-3/12'>
                <Logo />
            </div>
            <div className="w-6/12">
                <Nav />
            </div>
            <div className='w-3/12 text-right'>
                <Button pill className='border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500'>Kontak</Button>
            </div>
        </div>
    )
}

export default Navbar; 