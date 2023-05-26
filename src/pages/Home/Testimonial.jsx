import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then((data) => setReviews(data))
  }, [])
  return (
    <div>
      <SectionTitle
        subHeader="What Our Clients Say"
        header="TESTIMONIALS"
      >
      </SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map(review => <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-center my-8 mx-12">
            <Rating
              style={{ maxWidth: 180 }}
              value={review.rating}
              readOnly
            />
            <p className="py-8">{review.details}</p>
            <h3 className="text-amber-600 text-3xl">{review.name}</h3>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default Testimonial;