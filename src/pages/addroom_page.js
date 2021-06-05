import AddRoomTitle from '../components/addroom_page/addroom_title';
import AddRoomForm from '../components/addroom_page/addroom_form';
import LoadingIcon from '../components/common_components/LoadingIcon';
import { useContext, useState } from 'react';
import AuthContext from '../context/authcontext';
import NotFound from '../components/common_components/NotFound';
import { Link } from 'react-router-dom';

const AddRoomPage = () => {
    const ctx = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const isLoadingHandler = (ifLoading) => {
        setIsLoading(ifLoading)
    }

    return (
        isLoading ? 
        <LoadingIcon /> :
        (ctx.isLoggedIn ?
        <>
        <AddRoomTitle />
        <AddRoomForm isLoadingHandler={isLoadingHandler}/>
        </> :
        <NotFound>
            <i className="fas fa-sad-tear" style={{fontSize: '50px'}}/>
            <div>Seems like you are not logged in</div>
            <div><Link style={{textDecoration: 'none', color: 'var(--blue)'}} to="/login">Login </Link>first</div>
        </NotFound>)

    )
}

export default AddRoomPage;