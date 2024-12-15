import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
    <>
    <div className="flex justify-around gap-2 pb-5 font-mono text-xl font-semibold text-center bg-slate-300">
    <Link to="/">Home</Link>
    <Link to="/login">Sign in</Link>
    </div>
    </>
    )
}
export default Navbar