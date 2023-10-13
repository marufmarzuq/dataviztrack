import "./design.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import review1 from "../../assets/review1.jpg";

const Design = () => {
  return (
    <div className="container">
      <div style={{ marginTop: "50px" }}>
        <div className="slider-grid">
          <div className="slider-arrow-container left">
            <div className="slider-left">
              <img src={review1} alt="" />
            </div>
            <div className="slider-nav-overlay">
              <FiChevronLeft />
            </div>
          </div>
          <div className="main-slider-container">
            <div className="main-slider-grid">
              <div className="grid-img-container">
                <img src={review1} alt="" />
              </div>
              <div className="main-slider-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate ut doloribus provident voluptate fugit dolores
                pariatur in, ad aut temporibus odit.
              </div>
            </div>
          </div>
          <div className="slider-arrow-container right">
            <div className="slider-left">
              <img src={review1} alt="" />
            </div>
            <div className="slider-nav-overlay">
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
