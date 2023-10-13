const Slider = ({ sliderIndex = 0, img }) => {
  return (
    <div className="testi-slider-container">
      <div
        className="testi-boxes"
        style={{
          transform: `translateX(${sliderIndex * -100}%)`,
        }}
      >
        <div className="testi-box">
          <img src={img} alt="" />
          <p>
            Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas
            dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis
            mollis leo id ligula pellentesque, at vehicula dui ultrices.
          </p>
          <h4>Sumaiya Nusrat</h4>
          <h5>Ishwardi Express</h5>
        </div>
        <div className="testi-box">
          <img src={img} alt="" />
          <p>
            Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas
            dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis
            mollis leo id ligula pellentesque, at vehicula dui ultrices.
          </p>
          <h4>Mahmudul</h4>
          <h5>Pabna Express</h5>
        </div>
        <div className="testi-box">
          <img src={img} alt="" />
          <p>
            Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas
            dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis
            mollis leo id ligula pellentesque, at vehicula dui ultrices.
          </p>
          <h4>Robin Fahad</h4>
          <h5>Ishwardi Express</h5>
        </div>
      </div>
    </div>
  );
};

export default Slider;
