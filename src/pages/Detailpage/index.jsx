import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar"
import { useParams } from "react-router-dom"
import axios from "axios";

const Detailpage = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();

    const getDetail = async () => {
        try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
            setDetail(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getDetail();
    }, [])
    const ingredients = Array.isArray(detail.ingredients) ? detail.ingredients : []; //ternary operation (untuk mendeteksi bahwa ingredients adalah array)
    const instructions = Array.isArray(detail.instructions) ? detail.instructions : [];
    const tags = Array.isArray(detail.tags) ? detail.tags : [];
    return (
    <>
    <div>
    <Navbar />
        
    </div>
    <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold">{detail.name}</h3>
        <img src={detail.image} alt="food image" className="h-auto rounded-3xl w-72"/>
        <p className="font-medium">preparation time = {detail.prepTimeMinutes}</p>
        <p className="font-medium">cooking time = {detail.cookTimeMinutes}</p>
        
        <p className="text-2xl font-bold">ingredients</p>
        <div className="flex flex-col">
        {ingredients.map((ingredients, index) => (
            <li key={index}>{ingredients}</li>
        ))}
        </div>
        <p className="text-2xl font-bold">How to make:</p>
        <div className="flex flex-col">
        {instructions.map((instructions, index) => (
            <li key={index}>{instructions}</li>
        ))}
        </div>
        <p className="text-2xl font-bold">tags</p>
        <div className="flex flex-col">
        {tags.map((tags, index) => (
            <li key={index}>{tags}</li>
        ))}
        </div>
        <p className=""> cuisine = {detail.cuisine}</p>
        <p className=""> servings ={detail.servings}</p>
        <p className="">difficulty = {detail.difficulty}</p>
        <p className=""> preparation time = {detail.prepTimeMinutes}</p>
        <p className="">Rating = {detail.rating}</p>
    </div>
    <p>id = {id}</p>
    </>
    )
}
export default Detailpage
