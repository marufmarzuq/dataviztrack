import "./design.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import review1 from "../../assets/review1.jpg";
import review2 from "../../assets/review2.jpg";
import sliderData from "./sliderData";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Design = () => {
  console.log(sliderData);

  return (
    <div className="container">
      <div
        style={{
          height: "calc(100vh - 68px)",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
        }}
      >
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
                <img src={review2} alt="" />
              </div>
              <div className="main-slider-content">
                <div className="review-text-container">
                  <div className="quote-container">
                    <BiSolidQuoteAltLeft />
                    <BiSolidQuoteAltRight />
                  </div>
                  <p>
                    The best solution for anyone who wants to work a flexible
                    banking schedule but still earn a full-time freedom.
                  </p>
                </div>
                <div className="slider-content-footer">
                  <div>Samira Tanzin</div>
                  <div>Project Director</div>
                  <div>Brac Bank</div>
                </div>
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
