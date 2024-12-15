import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../../components/Navbar";
const ProfilePage =  () => {
    const [profile, setProfile] = useState({});

    const getProfile = async () => {
        //membuat config berisi token
        const token = localStorage.getItem("access_token");
        const config = {
        headers: {
            Authorization: `Bearer ${token}`
         }
        }
       
        try {
            const response = await axios.get("https://dummyjson.com/auth/me", config);
            console.log(response);
            setProfile(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProfile();
    }, [])
    return  (
    <>
    <Navbar />
    <div>
        <h3>{profile.firstName}</h3>
        <h3>{profile.lastName}</h3>
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
        <img src={profile.image} alt="" />
    </div>
    </>
    )
}
export default ProfilePage