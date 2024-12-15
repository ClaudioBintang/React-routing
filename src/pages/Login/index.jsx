import axios from "axios";
import Navbar from "../../components/Navbar"
import { useState } from "react" 
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [succes, setSucces] = useState("")
    const navigate = useNavigate()
    
    const handleChange  = e => {
        console.log(e.target.name);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
    try {
        const response = await axios.post("https://dummyjson.com/user/login", form)
        console.log(response);
        localStorage.setItem("access_token", response.data.accessToken)
        localStorage.setItem("refresh_token", response.data.refreshToken)
        setSucces("Redirecting to Main Menu")
        setTimeout(() => { //set time untuk mengalihkan ke halaman page
            navigate("/") //navigasi ke halaman homepage
        }, 2000); // set waktu detik
    } catch (error) {
        console.log(error.response);
        setError(error.response.data.message)
    } finally {
        setLoading(false)
    }
    }
    return (
    <>
    <header>
        <Navbar />
        <div className="items-center justify-center text-center border-lime-300">
            <h4 className="font-mono text-3xl ">Login</h4>
            {succes && <p className="text-lime-600">{succes}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <form action="login" className="flex flex-col items-center gap-1 ">
                <label htmlFor="email" className="font-semibold">Email or username</label>
                <input type="text" name="username" id="email" placeholder="input email" className="border-2 rounded-sm" onChange={handleChange}/>
                <label htmlFor="password" className="font-semibold">Password</label>
                <input type="password" name="password" id="password" placeholder="input password" className="border-2 rounded-sm" onChange={handleChange}/>
                <button type="submit" className="px-5 mx-2 bg-indigo-700 rounded-full" onClick={handleLogin}>{loading? "loading..." : "Login"}</button>
            </form>
            <div className="flex justify-center gap-2 text-lg font-semibold">
                <p>don't have any account?</p>
                <button className="px-5 mx-2 bg-indigo-700 rounded-full">Sign up</button>    
                
            </div>
        </div>
    </header>
    </>
    )
}
export default Login