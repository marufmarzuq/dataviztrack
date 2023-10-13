import { AiOutlineCloudUpload, AiOutlineTable } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setOpenAuth } from "../../lib/slices/headerSlice";
import { setCurrView } from "../../lib/slices/homeSlice";

const Vizualization = () => {
  const { curr_data, have_unsave } = useSelector((state) => state?.home);
  const dispatch = useDispatch();
  console.log(curr_data);

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
          onClick={() => dispatch(setOpenAuth("fu"))}
        >
          <AiOutlineCloudUpload fontSize={19} />
          <span>Upload Another File</span>
        </button>
      </div>
      <div
        style={{
          height: "calc(100vh - 160px)",
          overflowY: "auto",
        }}
      >
        Chart will come here
      </div>
    </div>
  );
};

export default Vizualization;
