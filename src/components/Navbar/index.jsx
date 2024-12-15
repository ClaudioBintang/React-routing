import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const token = localStorage.getItem("access_token");
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.clear();
        setTimeout(() => {
            navigate("/login");
        }, 2000);
    }
    return (
    <>
    <div className="flex justify-around gap-2 pb-5 font-mono text-xl font-semibold text-center bg-slate-300">
    <Link to="/">Home</Link>
   
    {token ? (
        <button onClick={handleLogout}>Logout</button>
    ) : (
        <Link to="/login">Sign in</Link>
    )}
    <Link to="/profile">Profile</Link>
    </div>
    </>
    )
}
export default Navbar