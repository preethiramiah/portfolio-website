import { CarouselContent } from '../model'
import Slider from 'react-slick'

const Carousel = ({ content }: { content: CarouselContent[] }) => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='slider-container h-16 w-[60%] mt-28'>
      <Slider {...settings}>
        {content.map((item: CarouselContent, index) => {
          const { text, image } = item
          return (
            <div key={`carousel-content-${index}`} className='w-fit bg-gradient-to-r from-[#0077b5] from-50% via-red-700 via-60% to-star-green to-90% inline-block text-transparent bg-clip-text'>
              {image ? <img alt={text} src={image} className='h-8 w-fit' /> : <p className='font-extrabold text-3xl ml-20'>{text}</p>}
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel
