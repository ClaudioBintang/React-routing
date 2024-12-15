import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import Recipelist from "../../components/Recipelist"
import { Link } from "react-router-dom"
const Homepage = () => {
 const [recipes, setRecipe] = useState([]);
 const [pagination, setPagination] = useState(1);
 const [skip, setSkip] = useState(0);
 const [totallist, setTotalList] = useState(0);
 const limit = 9;
 const getRecipe = async () => {
    try {
        const response = await axios.get(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`);
        console.log(response.data.recipes);
        setRecipe(response.data.recipes);
        setTotalList(response.data.total);
    } catch (error) {
        console.log(error);
    }
 }
 const totalPage = Math.ceil(totallist / limit);

 const previousPage = () => {
    if (pagination > 1) {
        setPagination(pagination - 1);
        setSkip(skip - limit);
    }
 }
 const nextPage = () => {
     if (pagination < totalPage) {
        setPagination(pagination + 1);
        setSkip(skip + limit)
     }
 }
 useEffect(() => {
    getRecipe()
 }, [skip])
 
    return (
        <>
        <Navbar />
        <header>
            <h2 className="text-4xl font-bold text-center">This is the our Menu</h2>
        <div className="flex flex-wrap justify-center">
            {recipes.map((recipe) => (
                <div className="flex flex-wrap m-5 border-4">
                <Recipelist  recipe={recipe}/>
                </div>
            ))}
        </div>
        <div className="flex justify-center gap-4 mt-5 mb-11">
            <button onClick={previousPage} disabled={pagination === 1} className="px-3 py-2 bg-indigo-500 border rounded-lg disabled:opacity-50">Previous</button>
            <span>{`page ${pagination} of ${totalPage}`}</span>
            <button onClick={nextPage} disabled={pagination === totalPage} className="px-3 py-2 bg-indigo-500 border rounded-lg disabled:opacity-50">Next</button>
        </div>
        </header>
        </>
    )
}
export default Homepage