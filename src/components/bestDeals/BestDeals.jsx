import './bestdeals.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function BestDeals() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([products]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProducts(response.data);
            setFilter(response.data)
        });
    }, [])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then((response) => {
            setCategories(response.data);
        });
    }, [])

    const filterProduct = (cat) => {
        const updateList = products && products.filter((x) => x.category === cat);
        setFilter(updateList)
    }


    const Category = () => {
        return (
            <>
                < div className="buttons" >
                    {categories && categories.map((el, index) => {
                        return (
                            <button type="button" className="btn btn-outline-dark" onClick={() => filterProduct(el)}> {`${el[0].toUpperCase()}${el.slice(1, el.length)}`}</button>
                        )
                    })}
                </div >
            </>
        )
    };
    return (
        <div>
            <div className='section'>
                <p className="sectionTitle"> <span>Best </span>Deals</p>
                <Category />
            </div>

            <div className="row pb-10">

                {
                    (filter.length > 1) && (
                        <>
                            <div className="col-md-4 bestDealLeft">
                                <div className="row bestDealMiniCard bestDealLeftTop" >
                                    <div className="col-md-6 col-sm-6 nopadding">
                                        <p className="bestdealproductName">{filter[0].title.substring(0, 16)}..</p>
                                        <div className="bestdealPrice">
                                            <p className="bestdealCurrPrice">RS {filter[0].price}</p>
                                            <p className="bestdealPrevPrice">RS 60.000</p>

                                        </div>
                                        <div className="bestDealSavings">
                                            <div className="bestDealSavingsvalue">Save 10%</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="specialOffer">
                                            <p className="specialoffertext"><span>Special</span> Offer</p>
                                            <img src={filter[0].image} alt="" className="specialOfferImg" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row bestDealMiniCard bestDealLeftBottom" >
                                    <div className="col-md-6 col-sm-6 nopadding">
                                        <p className="specialoffertext"><span>Special</span> Offer</p>
                                        <p className="bestdealproductName">{filter[1].title.substring(0, 16)}..</p>
                                        <div className="bestdealPrice">
                                            <p className="bestdealCurrPrice">RS {filter[1].price}</p>
                                            <p className="bestdealPrevPrice">RS 60.000</p>
                                        </div>
                                        <div className="stock">
                                            <p className="sold">Already Sold: 6</p>
                                            <p className="avilable">Available: 30</p>
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="bestDealSavings">
                                            <div className="bestDealSavingsvalue">Save 10%</div>

                                        </div>
                                        <img src="https://s3-alpha-sig.figma.com/img/1c1b/a1dc/754b3910aba0da5651006de67f959bba?Expires=1679875200&Signature=Ke9Z6Wq55imBuGFjOPkL1bDrRAXAOQ2gMK35ae-iqlajdhdiZU1WG7SVLIFAstPiQy14zvz8fZNajE97WUkLlcW5uWFWvtR5OWgYGSon7YhfGbY5fVaxf9Y8P4NXvKspCjA8qZoqgPyIhNi7GAV5WK~nLj21ZiDKYpvDK6Ncf5ik24bcOHWmPwEnl3N7QSnw6AYnAL~YPgjfSs1xNi6iGWhTeSTujDC~mi1KZZBr3rXzBtmU1ojpLbSv3wriCveD8HIgLXo4~BFstBMPKZq-U8fTVMFMsyagVT8YWzBvjudCNlSczWv3pEabT5gJfvlqmNeW4GkR3W5FFO8Xknbzhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="specialOfferImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 bestDealMiddle">
                                <div className="row bestDealBigCard" >
                                    <div className="row bestDealMiddleTop nomargin">
                                        <p className="specialoffertext"><span>Special</span> Offer</p>
                                        <img src={filter[1].image} alt="" className="specialOfferImg" />
                                        <div className="bestDealSavings">
                                            <div className="bestDealSavingsvalue">Save 10%</div>
                                        </div>
                                    </div>
                                    <div className="bestDealMiddleBottom">
                                        <p className="bestdealproductName">{filter[1].title.substring(0, 16)}..</p>
                                        <div className="bestdealPrice">
                                            <p className="bestdealCurrPrice">RS {filter[1].price}</p>
                                            <p className="bestdealPrevPrice">RS 60.000</p>
                                        </div>
                                        <div className="stock">
                                            <p className="sold">Already Sold: 6</p>
                                            <p className="avilable">Available: 30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 bestDealright">
                                <div className="row bestDealMiniCard bestDealrightTop" >
                                    <div className="col-md-6 col-sm-6 nopadding">
                                        <p className="bestdealproductName">{filter[1].title.substring(0, 16)}..</p>
                                        <div className="bestdealPrice">
                                            <p className="bestdealCurrPrice">RS {filter[1].price}</p>
                                            <p className="bestdealPrevPrice">RS 60.000</p>

                                        </div>
                                        <div className="bestDealSavings">
                                            <div className="bestDealSavingsvalue">Save 10%</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="specialOffer">
                                            <p className="specialoffertext"><span>Special</span> Offer</p>
                                            <img src={filter[0].image} alt="" className="specialOfferImg" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row bestDealMiniCard bestDealLeftBottom" >
                                    <div className="col-md-6 col-sm-6 nopadding">
                                        <p className="specialoffertext"><span>Special</span> Offer</p>
                                        <p className="bestdealproductName">{filter[1].title.substring(0, 16)}..</p>
                                        <div className="bestdealPrice">
                                            <p className="bestdealCurrPrice">RS {filter[1].price}</p>
                                            <p className="bestdealPrevPrice">RS 60.000</p>
                                        </div>
                                        <div className="stock">
                                            <p className="sold">Already Sold: 6</p>
                                            <p className="avilable">Available: 30</p>
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="bestDealSavings">
                                            <div className="bestDealSavingsvalue">Save 10%</div>

                                        </div>
                                        <img src="https://s3-alpha-sig.figma.com/img/1c1b/a1dc/754b3910aba0da5651006de67f959bba?Expires=1679875200&Signature=Ke9Z6Wq55imBuGFjOPkL1bDrRAXAOQ2gMK35ae-iqlajdhdiZU1WG7SVLIFAstPiQy14zvz8fZNajE97WUkLlcW5uWFWvtR5OWgYGSon7YhfGbY5fVaxf9Y8P4NXvKspCjA8qZoqgPyIhNi7GAV5WK~nLj21ZiDKYpvDK6Ncf5ik24bcOHWmPwEnl3N7QSnw6AYnAL~YPgjfSs1xNi6iGWhTeSTujDC~mi1KZZBr3rXzBtmU1ojpLbSv3wriCveD8HIgLXo4~BFstBMPKZq-U8fTVMFMsyagVT8YWzBvjudCNlSczWv3pEabT5gJfvlqmNeW4GkR3W5FFO8Xknbzhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="specialOfferImg" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4 bestDealright">
                                <div className="row bestDealMiniCard bestDealrightTop" >
                                    <div className="col-md-6 col-sm-6 nopadding">
                                        <p className="bestdealproductName">{filter[1].title.substring(0, 16)}..</p>
                                        <div className="bestdealPrice">
                                            <p className="bestdealCurrPrice">RS {filter[1].price}</p>
                                            <p className="bestdealPrevPrice">RS 60.000</p>

                                        </div>
                                        <div className="bestDealSavings">
                                            <div className="bestDealSavingsvalue">Save 10%</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="specialOffer">
                                            <p className="specialoffertext"><span>Special</span> Offer</p>
                                            <img src={filter[1].image} alt="" className="specialOfferImg" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row bestDealMiniCard bestDealrightBottom" >
                                    <div className="row bestDealrightBottomTop nomargin">
                                        <p className="specialoffertext"><span>Special</span> Offer</p>
                                        <img src={filter[2].image} alt="" className="specialOfferImg" />
                                        <div className="bestDealSavings">
                                            <div className="bestDealSavingsvalue">Save 10%</div>
                                        </div>
                                    </div>
                                    <div className="bestDealrightBottomBo">
                                        <p className="bestdealproductName"> {filter[2].title.substring(0, 16)}..</p>
                                        <div className="bestdealPrice">
                                            <p className="bestdealCurrPrice">RS {filter[2].price}</p>
                                            <p className="bestdealPrevPrice">RS 60.000</p>
                                        </div>
                                        <div className="stock">
                                            <p className="sold">Already Sold: 6</p>
                                            <p className="avilable">Available: 30</p>
                                        </div>
                                    </div>
                                </div>

                            </div> */}
                        </>
                    )
                }
            </div>
        </div>
    )
}
