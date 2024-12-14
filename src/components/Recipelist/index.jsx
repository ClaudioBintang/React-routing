import { Link } from "react-router-dom";
const Recipelist = (props) => {
    const {id, name, ingredients, prepTimeMinutes, cookTimeMinutes, difficulty} = props.recipe;
    return (
    <>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap text-center">
        <h1>{name}</h1>
        {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
        ))}
        <p>{prepTimeMinutes}</p>
        <p>{cookTimeMinutes}</p>
        <p>{difficulty}</p>
        <button className="bg-purple-600 rounded-sm mx-2 px-3"><Link to={`/detail/${id}`}>click to open a receipe</Link></button>
    </div>
    </>
    )
}
export default Recipelist
// ini tempat melakukan render, dijabarkan data mana saja yang ingin ditampilkan di UI
// yang akan dikirimkan menuju pages/homepage