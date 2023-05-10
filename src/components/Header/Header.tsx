import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../redux/store/store";


const Header = () => {

    const navigate = useNavigate();

    const { username } = useAppSelector(state => state.userReducer)

    const handleLogout = () =>{
        localStorage.removeItem('tokenId');
        navigate('/login')
    }

    return (
        <div>
            <div style={{ display : 'flex' , justifyContent : 'end' , padding:20 }}>
                <p>Wlecome {username}</p>&nbsp;
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Header