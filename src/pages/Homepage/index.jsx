import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import Recipelist from "../../components/Recipelist"
import { Link } from "react-router-dom"
const Homepage = () => {
 const [recipes, setRecipe] = useState([]);

 const getRecipe = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/recipes');
        setRecipe(response.data.recipes);
        
    } catch (error) {
        console.log(error);
    }
 }
 useEffect(() => {
    getRecipe()
 }, [])

    return (
        <>
        <Navbar />
        <div className="">
            {recipes.map((recipe) => (
                <Recipelist  recipe={recipe}/>
            ))}
        </div>
        
        </>
    )
}
export default Homepage