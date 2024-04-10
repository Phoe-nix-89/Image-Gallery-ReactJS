import { useEffect, useState } from "react";
import Image from "./Image";
import axios from 'axios';
import { Link } from "react-router-dom";

function Frontpage() {
    const [api,setapi] = useState([]);
    const [arr,setarr] = useState([]);
    async function fn() {
        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");

        const res = response.data.photos;
        console.log(res);

        setarr(res.map((elem) => elem))

        console.log(arr);
    }
    
    useEffect(() => {
        fn();
    },[])
    // console.log(api);
    return (
        //<Image />
        // const [api,setapi] = useState({});
        
            <div style={{display : "flex" , flexWrap : 'wrap' , justifyContent : 'center'}}>
            {arr.map((elem) => {
                return <Image url={elem.url} id={elem.id} />
            })}
            </div>
    );
}
export default Frontpage;