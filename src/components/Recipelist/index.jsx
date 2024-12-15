import { Link } from "react-router-dom";
const Recipelist = (props) => {
    const {id, name, image, ingredients, prepTimeMinutes, cookTimeMinutes, difficulty, rating} = props.recipe;
    return (
    <>    
    <div className="">
        <img src={image} alt="food img" className="h-50 w-72" />
        <h1 className="text-xl font-bold text-center">{name}</h1>
        <p className="pl-4 font-semibold">ingredients</p>
        {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
        ))}
        <p> preparation time = {prepTimeMinutes}</p>
        <p>cooking time = {cookTimeMinutes}</p>
        <p> difficulty = {difficulty}</p>
        <p className="">Rating = {rating} of 5</p>
        <button className="px-3 mx-2 text-white bg-purple-600 rounded-lg"><Link to={`/detail/${id}`}>click to open a receipe</Link></button>
    </div>
    </>
    )
}
export default Recipelist
// ini tempat melakukan render, dijabarkan data mana saja yang ingin ditampilkan di UI
// yang akan dikirimkan menuju pages/homepage