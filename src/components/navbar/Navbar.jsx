import './navbar.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';

// 
const Navbar = () => {
    return (
        <div className='navbarSection'>
            <div className="row container navContainer">
                <div className="col-md-7 col-sm-9 navLeft nopadding">
                    
                    <div className='navItem'>
                        <a href='#'>
                            <MenuIcon />
                        </a>
                    </div>
                    <div className='navItem navCat'>
                        <a href='#'>Brouse By Category</a>
                    </div>
                    <div className='navItem'>
                        <a href='#'>Easy Monthly Installments</a>
                    </div>
                    <div className='navItem'>
                        <a href='#'>Shop By Brands</a>
                    </div>
                    <div className='navItem'>
                        <a href='#'>Become a Vendor</a>
                    </div>
                </div>
                <div className='col-md-5 col-sm-3 right-group'>

                    <div className='navLeftItem'>
                        <a href='#'>
                            <  FacebookOutlinedIcon className='navIcon'/>
                        </a>
                    </div>
                    <div className='navLeftItem'>
                        <a href='#'>
                            <TwitterIcon  className='navIcon'/>
                        </a>
                    </div>

                    <div className='navLeftItem'>
                        <a href='#'>
                            <LinkedInIcon className='navIcon'/>
                        </a>
                    </div>
                    <div className='navLeftItem'>
                        <a href='#'>
                            <InstagramIcon className='navIcon'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar