import React from 'react';
import {useState} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Slider1 from '../assets/images/Slider1.png';

const items = [
  {
    id: 1,
    src: Slider1
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    src: 'https://picsum.photos/id/123/1200/600'
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/123/1200/600'
  },
];

function CarouselEx(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating)
            return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating)
            return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating)
            return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            ><img src={item.src} alt={item.altText} />
                <CarouselCaption
                    className="text-danger"
                    captionText={item.caption}
                    captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div style={{margin: '20px'}}>
            <style>
                {`.custom-tag {
              max-width: 100%;
              height: 550px;
              background: black;
            }`}
            </style>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex} />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous} />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default CarouselEx;