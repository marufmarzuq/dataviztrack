import { useSelector } from "react-redux";
import UploadFile from "../../components/uploadFile/UploadFile";
import TableView from "../../components/tableView/TableView";
import Vizualization from "../../components/vizualization/Vizualization";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import FilesList from "../../components/filesList/FilesList";

const Home = () => {
  const token = useSelector((state) => state?.auth?.token);
  const view = useSelector((state) => state?.home?.curr_view);
  const [unsavedFile, setUnsavedFile] = useState();
  console.log(unsavedFile);
  const { fetchData } = useApi();
  useEffect(() => {
    const uploadFile = async () => {
      const data = FormData();
      data.append("csv", unsavedFile);
      const endpoint = {
        method: "post",
        url: "/auth/employee/management/",
        data: data,
      };
      const res = fetchData(endpoint);
      console.log(res);
    };
    if (token && unsavedFile) uploadFile();
  }, [token]);

  return (
    <div>
      <div className="container">
        {view === "table" ? (
          <TableView />
        ) : view === "viz" ? (
          <Vizualization />
        ) : token && view === "list" ? (
          <FilesList />
        ) : (
          <UploadFile {...{ setUnsavedFile }} />
        )}
      </div>
    </div>
  );
};

export default Home;
