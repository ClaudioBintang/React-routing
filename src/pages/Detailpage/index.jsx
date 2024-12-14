import { useState } from "react";
import Navbar from "../../components/Navbar"
import { useParams } from "react-router-dom"

const Detailpage = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();

    const getDetail = async () => {
        try {
            response = await axios.get(`https://dummyjson.com/recipes/${id}`);
            setDetail(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getDetail();
    }, [])
    
    return (
    <>
    <div>
    <Navbar />
        <h2>dan, kamu sekarang ada di halaman detailpage</h2>
        <h3>dan ini id ke {id}</h3>
    </div>
    </>
    )
}
export default Detailpage
