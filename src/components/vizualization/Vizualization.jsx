import { AiOutlineCloudUpload, AiOutlineTable } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setOpenAuth } from "../../lib/slices/headerSlice";
import { setCurrView } from "../../lib/slices/homeSlice";
import { useState } from "react";
import PieChartViz from "./PieChartViz";
import {
  HiDownload,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi";
import BarChartViz from "./BarChartViz";
import LineGraphViz from "./LineGraphViz";

const Vizualization = () => {
  const { have_unsave } = useSelector((state) => state?.home);
  const dispatch = useDispatch();
  const [chartIndex, setChartIndex] = useState(1);

  return (
    <div>
      <div
        style={{
          padding: "20px 0",
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              height: "35px",
              padding: "0 15px",
              backgroundColor: "#5986d9",
              border: "none",
              color: "#fff",
              fontSize: "14px",
              borderRadius: "3px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            onClick={() => dispatch(setCurrView("table"))}
          >
            <AiOutlineTable fontSize={19} />
            <span>View In Table</span>
          </button>
          {have_unsave && (
            <button
              style={{
                height: "35px",
                padding: "0 15px",
                border: "1px solid #5986d9",
                backgroundColor: "#fff",
                color: "#5986d9",
                fontSize: "14px",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              onClick={() => dispatch(setOpenAuth(true))}
            >
              Save Data
            </button>
          )}
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              height: "35px",
              padding: "0 15px",
              border: "1px solid #5986d9",
              backgroundColor: "#fff",
              color: "#5986d9",
              fontSize: "14px",
              borderRadius: "3px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <HiDownload fontSize={19} />
            <span>Download Chart</span>
          </button>
          <button
            style={{
              height: "35px",
              padding: "0 15px",
              border: "1px solid #5986d9",
              backgroundColor: "#fff",
              color: "#5986d9",
              fontSize: "14px",
              borderRadius: "3px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            onClick={() => dispatch(setCurrView("fu"))}
          >
            <AiOutlineCloudUpload fontSize={19} />
            <span>Upload Another File</span>
          </button>
        </div>
      </div>
      <div
        style={{
          height: "calc(100vh - 160px)",
          overflowY: "auto",
          borderTop: "1px solid #ddd",
        }}
      >
        <div className="chart-header">
          <button
            onClick={() => setChartIndex(chartIndex === 1 ? 3 : chartIndex - 1)}
            className="chart-header-btn"
          >
            <HiOutlineChevronLeft />
          </button>
          <p className="chart-title">
            {chartIndex === 1
              ? "Check in and check out time frame"
              : chartIndex === 2
              ? "Employee-wise Total Working Hours"
              : "Date-wise Total Working Hours"}
          </p>
          <button
            onClick={() => setChartIndex(chartIndex === 3 ? 1 : chartIndex + 1)}
            className="chart-header-btn"
          >
            <HiOutlineChevronRight />
          </button>
        </div>
        {chartIndex === 1 ? (
          <BarChartViz />
        ) : chartIndex === 2 ? (
          <PieChartViz />
        ) : (
          <LineGraphViz />
        )}
      </div>
    </div>
  );
};

export default Vizualization;
