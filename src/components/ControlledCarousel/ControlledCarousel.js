import  React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react'
import { banner } from '../../firebase'
import './ControlledCarousel.css'
import { Link } from 'react-router-dom'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [items, setItems] = useState([]);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
        (async () => {
            const response = await banner.get();
            setItems(response.docs.map(it => ({id: it.id, ...it.data()})))
        })();
    }, []);
  
    return (
        <div className="container-fluid w-100 containerBanner">
          <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} className="container-fluid carouselContainer">
            {items.map((it) => {
                return <Carousel.Item variant="dark">
                  <Link path={`/detail/${it.id}`}>
                    <img
                        className="carousel"
                        src={it.img}
                        alt="First slide"
                    />
                  </Link>
                </Carousel.Item>
            })}
          </Carousel>
          </div>
          );
      }

export default ControlledCarousel;
