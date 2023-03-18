import { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import axios from 'axios';
import './header.css'


const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then((response) => {
            setCategories(response.data);
        });
    }, [])
    return (
        <div className='header'>
            <div className='container row headerContainer' >
                <div className="col-md-7 col-sm-7 headerLeft nopadding">
                    <div className='col-md-2 col-sm-2 logo-container pl-0'>
                        <a href='/'>
                            <img alt='logo' src='./logo.png' className='logo bg-transparent' />
                        </a>

                    </div>
                    <div className='col-md-9 col-sm-8 search-container'>
                        <select className='cat-div'>
                            <option>All Categories</option>
                            {categories && categories.map((el, index) => {
                                return (
                                    <option>{`${el[0].toUpperCase()}${el.slice(1, el.length)}`}</option>
                                )
                            })}
                        </select>

                        <input className='search-input' type={'text'} placeholder='Search for products' />
                        <span className='search-icon'>
                            <SearchIcon fontSize='large' />
                        </span>

                    </div>
                </div>
                <div className='col-md-5 col-sm-5 right-group'>
                    <div className='assist-container'>
                        <p>call us now</p>
                        <a href='#' className='contact-container'>
                            <HeadphonesIcon />
                            <p>01521-453231</p>

                        </a>
                        <a href='#'>Sign In</a>
                    </div>
                    <div className='user-div'>
                        <a href='#'>
                            < PermIdentityOutlinedIcon />
                        </a>
                    </div>
                    <div className='fav-div'>
                        <a href='#'>
                            <  FavoriteBorderOutlinedIcon /> 
                        </a>
                    </div>
                    <div className='cart-div'>
                        <a href='#'>
                            <ShoppingCartOutlinedIcon /> <span>Cart</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header