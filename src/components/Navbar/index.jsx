import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
    <>
    <div className="flex gap-2 justify-around bg-slate-300 pb-5 text-center font-semibold">
    <Link to="/">Home</Link>
    <Link to="/login">Sign in</Link>
    <Link to="/detail">Detail pages</Link>
    </div>
    </>
    )
}
export default Navbar