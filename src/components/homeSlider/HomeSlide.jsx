import './homeslider.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function HomeSlide() {
  const [categories, setCategories] = useState(["electronics", "jewelery", "men's clothing", "women's clothing"]);


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((response) => {
      setCategories(response.data);
    });
  }, [])
  return (
    <>
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://s3-alpha-sig.figma.com/img/1da7/a342/a16be9eae6debcf93df29a51ae5ddb0e?Expires=1679875200&Signature=phM8PWAc0wW6SvLlj1mXqLrI7KNsR50Lo1lQBuhtejewWLJOacVXLvloCX-KieejqdaFpR~SzjMQmy~EvXh8T0S0z1TdP59F1jpDB76qAz3M0JaBK5aW4dis-RQAvcJc0PZ6MIe8WAhaBFxgOQzq0aNMD98Opggtz2h4EjXXTxdiPZPz6xlL69XxFw4tdqSMR3TMZPin8KLTb6Ynm-O5armWcoEy9DAZ-UCFrXI3i6-tzNRHv4CSWFs2l78y~wyG1CBovMCVrD6hvmXvjw2hBV1HQQ6WWw~DiTW01T955h-eoa7s1PNSv3Y5N0YQB-IfQk1SoC6meL2X9tvSwtqM5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://s3-alpha-sig.figma.com/img/1da7/a342/a16be9eae6debcf93df29a51ae5ddb0e?Expires=1679875200&Signature=phM8PWAc0wW6SvLlj1mXqLrI7KNsR50Lo1lQBuhtejewWLJOacVXLvloCX-KieejqdaFpR~SzjMQmy~EvXh8T0S0z1TdP59F1jpDB76qAz3M0JaBK5aW4dis-RQAvcJc0PZ6MIe8WAhaBFxgOQzq0aNMD98Opggtz2h4EjXXTxdiPZPz6xlL69XxFw4tdqSMR3TMZPin8KLTb6Ynm-O5armWcoEy9DAZ-UCFrXI3i6-tzNRHv4CSWFs2l78y~wyG1CBovMCVrD6hvmXvjw2hBV1HQQ6WWw~DiTW01T955h-eoa7s1PNSv3Y5N0YQB-IfQk1SoC6meL2X9tvSwtqM5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://s3-alpha-sig.figma.com/img/1da7/a342/a16be9eae6debcf93df29a51ae5ddb0e?Expires=1679875200&Signature=phM8PWAc0wW6SvLlj1mXqLrI7KNsR50Lo1lQBuhtejewWLJOacVXLvloCX-KieejqdaFpR~SzjMQmy~EvXh8T0S0z1TdP59F1jpDB76qAz3M0JaBK5aW4dis-RQAvcJc0PZ6MIe8WAhaBFxgOQzq0aNMD98Opggtz2h4EjXXTxdiPZPz6xlL69XxFw4tdqSMR3TMZPin8KLTb6Ynm-O5armWcoEy9DAZ-UCFrXI3i6-tzNRHv4CSWFs2l78y~wyG1CBovMCVrD6hvmXvjw2hBV1HQQ6WWw~DiTW01T955h-eoa7s1PNSv3Y5N0YQB-IfQk1SoC6meL2X9tvSwtqM5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="producCateCaro">
        <Carousel responsive={responsive} arrows={false} autoPlay={true} rewind={true}>
          {categories && categories.map((el, index) => {
            return (
              <div >
                <div className="card" style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/adcb/d666/de85970dbb07beda3a52c7aacd8f3db8?Expires=1679875200&Signature=mpOPzGJimlaYdj1q0V6C0Sat3kwIaqWeJbUnTVY9DhDGWTJ~9qV5GzRJdAiAyiH8kZleiiOMB0b4g69YXwH~X7rvwcDf41Zl~T0y61G6qG0TEfbK7XjiyJ5JoMFYaX86IZ731YoezA7ja4G7ak4Q~fBcatKj1BM0KJTtzPWnDvkZ9QtUegadP3hSWj6RbyqIyREK~AumwJysAHL12MN7GMkpBX~VsCLtzPr2HsnulvnK3xb~OBVoJ4OWtoT~M2VeBx9Cyw7N6bw0ivxpz34ZVQU9t6DyecLVIYxwfodKTDBi8z0qfLXqvRsYEnax3IhMTDYP9d3HRsA5mRHScFDSOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`, backgroundSize: 'cover' }}>
                </div>
                <div className='cateTitle'>
                  <p>{`${el[0].toUpperCase()}${el.slice(1, el.length)}`}</p>
                  <a href='#'>Shop</a>
                </div>
                <div className='poly'></div>
              </div>
            )

          })}



        </Carousel>
      </div>
    </>
  )
}
