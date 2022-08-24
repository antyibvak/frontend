import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousel1 = ({ imageUrl }) => {

  return (
    <Carousel>
      <Carousel.Item>
        {imageUrl?.map(source => (
          <img
            className="d-block w-100"
            src={source}
            alt="First slide"
          />
        )
      )
      }
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousel1

