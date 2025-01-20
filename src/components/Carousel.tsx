import { CarouselContent } from '../model'
import Slider from 'react-slick'

const Carousel = ({ content }: { content: CarouselContent[] }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  }

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {content.map((item: CarouselContent, index) => {
          const { text, image } = item
          return (
            <div key={`carousel-content-${index}`}>
              {image ? <img alt='carousel' src={image} className='h-[40px]' /> : <p className='text-white'>{text}</p>}
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel
