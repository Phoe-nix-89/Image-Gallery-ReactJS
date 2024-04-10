import { Routes , Route} from 'react-router-dom';
import Frontpage from './Frontpage';
import DetailedImage from './DetailedImage';

function CustomRouter() {
    return (
        <Routes >
            <Route path='/' element={<Frontpage />} />

            <Route path='/img/:id' element={<DetailedImage />}/>
        </Routes>
    );
}

export default CustomRouter;