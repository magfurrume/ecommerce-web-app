import './home.css';
import NewArrival from '../components/newArrival/NewArrival';
import BestDeals from '../components/bestDeals/BestDeals';
import HomeSlider from '../components/homeSlider/HomeSlide';

export default function Home() {
    return (
        <div className="container homePage">
            <HomeSlider />
            <div className="newArrival">
                <p className="sectionTitle"> <span>New </span>Arrivals</p>
                <NewArrival />
            </div>
            <div className="bestDeals">
                <BestDeals />
            </div>

        </div>
    )
}
