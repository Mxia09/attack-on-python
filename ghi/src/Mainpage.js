import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carousel.css";
import "./slider.css";
import useToken from "@galvanize-inc/jwtdown-for-react";
import axios from 'axios';


function Mainpage() {
  const [testimonials, setTestimonials] = useState([])
  const { token } = useToken();

  async function getTestimonials() {
    const url = `${process.env.REACT_APP_API_HOST}/api/testimonials`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setTestimonials(data)
    } else {
      console.error(response)
    }
  }

  const deleteTestimonial = async (testimonialId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_HOST}/api/testimonials/${testimonialId}`);
      const filteredTestimonials = testimonials.filter((testimonial) => testimonial.id !== testimonialId);
      setTestimonials(filteredTestimonials);
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  }

  // Carousel
  const carousel = (slider) => {
    const z = 400
    function rotate() {
      const deg = 360 * slider.track.details.progress
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
      })
      rotate()
    })
    slider.on("detailsChanged", rotate)
  }

  const [carouselRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap"
    },
    [carousel]
  );

  // Slider
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })


  useEffect(() => {
    getTestimonials();
  }, [])

  return (
    <div className="px-4 py-5 my-5 text-center ">
      <div style={{ marginTop: 0, marginBottom: 150 }}>
        <h1 className="display-5 fw-bold">Attack on Python</h1>

        <div>
          <div className="wrapper" style={{ margin: 20 }}>
            <div className="scene">
              <div className="carousel keen-slider" ref={carouselRef}>
                <div className="carousel__cell number-slide1 ">1</div>
                <div className="carousel__cell number-slide2">2</div>
                <div className="carousel__cell number-slide3">3</div>
                <div className="carousel__cell number-slide4">4</div>
                <div className="carousel__cell number-slide5">5</div>
                <div className="carousel__cell number-slide6">6</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Learn Python
          </p>
          {token ?
            <NavLink to='/play'><button className="btn btn-primary" style={{ height: 80, width: 250, fontSize: 30 }}>Play</button></NavLink>
            :
            <NavLink to='/login'><button className="btn btn-primary" style={{ height: 80, width: 250, fontSize: 30 }}>Play</button></NavLink>
          }
        </div>
      </div>

      <div className="testimonials-slider">
        {testimonials.length > 0 ? (
          <div>
            <h3>Testimonials</h3>
            <div ref={sliderRef} className="keen-slider" style={{ marginTop: 15 }}>
              {testimonials.map((review, index) => (
                <div className="keen-slider__slide num-slide" key={index} style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                  <img src={review.profile_picture} style={{ height: 100, width: 100, marginRight: 20, borderRadius: '50%' }} alt="profile_pic" />
                  <div>
                    <p style={{ fontWeight: "bold", marginBottom: 5 }}>{review.name}</p>
                    <p style={{ marginBottom: 5 }}>{review.review}</p>
                    <p style={{ fontStyle: "italic" }}>"{review.comments}"</p>
                    <button style={{ backgroundColor: "red", color: "white" }} onClick={() => deleteTestimonial(review.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading testimonials...</p>
        )}
      </div>

    </div>
  );
}

export default Mainpage;
