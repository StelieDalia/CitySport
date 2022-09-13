import logo from '../images/logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Navbar = () => {
    return ( 
        <div className='navbar'>
            <img src={logo} alt="" className='logo'/>
            <AddShoppingCartIcon sx={{fontSize:50}}/>
        </div>
     );
}
 
export default Navbar;