import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { setCurrData, setCurrView } from "../../lib/slices/homeSlice";
import { useDispatch } from "react-redux";
import formatDate from "../../utils/formatDate";

const FilesList = () => {
  const { fetchData } = useApi();
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  console.log(list);

  useEffect(() => {
    const getFiles = async () => {
      const endpoint = {
        method: "get",
        url: "/auth/employee/management/",
      };
      const res = await fetchData(endpoint);
      if (res?.results) setList(res?.results);
    };
    getFiles();
  }, []);

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
          Left side
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
          onClick={() => dispatch(setCurrView("fu"))}
        >
          <AiOutlineCloudUpload fontSize={19} />
          <span>Upload Another File</span>
        </button>
      </div>
      <div className="grid-table-row header">
        {["Index", "File", "Created At", "Data Length"]?.map(
          (singleItem, i) => (
            <div key={i} className="grid-table-cell">
              {singleItem}
            </div>
          )
        )}
      </div>
      {list?.map((singleItem, i) => (
        <div key={i} className="grid-table-row body">
          <div className="grid-table-cell">{singleItem?.id}</div>
          <div
            className="grid-table-cell"
            onClick={() => {
              dispatch(setCurrData(singleItem?.attendance_info));
              dispatch(setCurrView("table"));
            }}
          >
            {singleItem?.created_at + "-" + singleItem?.id}.csv
          </div>
          <div className="grid-table-cell">
            {formatDate(singleItem?.created_at)}
          </div>
          <div className="grid-table-cell">
            {singleItem?.attendance_info?.length}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilesList;
