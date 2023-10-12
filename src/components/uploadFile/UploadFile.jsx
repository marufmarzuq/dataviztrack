import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { saveAsUnsavedFile } from "../../lib/slices/homeSlice";

const UploadFile = () => {
  const dispath = useDispatch();
  const fileName = useSelector((state) => state?.home?.unsaved_file);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "text/csv": [],
    },
  });

  console.log(fileName);

  useEffect(() => {
    if (acceptedFiles?.length) {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          dispath(saveAsUnsavedFile(event.target.result));
        };
        reader.readAsDataURL(file);
      }
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
          cursor: "pointer",
        }}
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "18px", marginBottom: "-5px" }}>
            Drag and Drop, <b>browse from your device</b>
          </p>
          <p>(You can select only CSV file)</p>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
