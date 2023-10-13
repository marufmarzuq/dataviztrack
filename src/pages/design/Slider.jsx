import useSliderData from "../../hooks/useSliderData";

const Slider = ({ sliderIndex = 0 }) => {
  const data = useSliderData();

  return (
    <div className="review-image-slider-container">
      <div
        className="review-boxes"
        style={{
          transform: `translateX(${sliderIndex * -100}%)`,
        }}
      >
        <div className="review-box">
          <img src={data[sliderIndex]?.img} alt="" />
        </div>
        <div className="review-box">
          <img src={data[sliderIndex]?.img} alt="" />
        </div>
        <div className="review-box">
          <img src={data[sliderIndex]?.img} alt="" />
        </div>
        <div className="review-box">
          <img src={data[sliderIndex]?.img} alt="" />
        </div>
        <div className="review-box">
          <img src={data[sliderIndex]?.img} alt="" />
        </div>
        <div className="review-box">
          <img src={data[sliderIndex]?.img} alt="" />
        </div>
        <div className="review-box">
          <img src={data[sliderIndex]?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
