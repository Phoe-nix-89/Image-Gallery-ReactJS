import { Link } from "react-router-dom";

function Image({url,id}) {
    return (
        <Link to={`/img/${id}`}>
            <div>
                <img style={{height : '200px', flexBasis : '20%' , margin : '20px' , borderRadius : '20px'}} src={url} alt="" />
            </div>
        </Link>
    );
}
export default Image;