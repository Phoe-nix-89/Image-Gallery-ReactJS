import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailedImage() {
    const {id} = useParams();
    const src = `https://api.slingacademy.com/public/sample-photos/${id}.jpeg`;

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
    
    return (
        <div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center'}}>
            <div style={{display : 'flex'}}>
                <div style={{textAlign : 'center' , marginBottom : '5px' , width : '50%' , fontWeight : 'bold'}}>Title : {arr.map((elem) => {
                    if(elem.id == id) return elem.title;
                })}</div>
                <div style={{textAlign : 'center' , marginBottom : '5px' , width : '50%' , fontWeight : 'bold'}}>Description : {arr.map((elem) => {
                    if(elem.id == id) return elem.description;
                })}</div>
            </div>
            <div style={{display : 'flex' , justifyContent : 'center'}}>
            <img src={src} alt="" />
            </div>
        </div>
    );
}

export default DetailedImage;