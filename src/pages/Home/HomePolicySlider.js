import React from 'react'
import Slider from "react-slick";

function HomePolicySlider(props) {
    console.log(' test '+props.sliderNumber)

    return (
       <div>
            {(() => {
            if (props.sliderNumber == '1') {
              return (
                <div>You are a Admin.</div>
              )
            } else if (props.sliderNumber == '2') {
              return (
                <div>You are a Manager.</div>
              )
            } else {
              return (
                <div>You are a User.</div>
              )
            }
        })()}
       </div>
    )
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };
//   return (
//     <div>
//         <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//       </Slider>
//     </div>
//   )
}

export default HomePolicySlider