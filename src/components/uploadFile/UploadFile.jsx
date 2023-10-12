import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { setCurrData, setCurrView } from "../../lib/slices/homeSlice";
import Papa from "papaparse";
import ReactLoading from "react-loading";

const UploadFile = ({ setUnsavedFile }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "text/csv": [],
    },
  });

  useEffect(() => {
    if (acceptedFiles?.length) {
      setLoading(true);
      const file = acceptedFiles[0];
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const data = results?.data;
          data?.pop();
          setUnsavedFile(file);
          dispatch(setCurrData(data));
          setLoading(false);
          dispatch(setCurrView("table"));
        },
      });
    }
  }, [acceptedFiles]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "calc(100vh - 65px)",
      }}
    >
      <div
        style={{
          border: "2px dashed #cccccc",
          width: "100%",
          borderRadius: "6px",
          height: "calc(100% - 40px)",
          maxHeight: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: loading ? "auto" : "pointer",
        }}
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        {loading ? (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "-30px",
            }}
          >
            <p style={{ fontSize: "24px" }}>Parsing CSV</p>
            <ReactLoading
              type="spin"
              color="#333"
              height={"80px"}
              width={"80px"}
            />
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "18px", marginBottom: "-5px" }}>
              Drag and Drop, <b>browse from your device</b>
            </p>
            <p>(You can select only CSV file)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
