import { useEffect } from "react";
import useApi from "../../hooks/useApi";

const FilesList = () => {
  const { fetchData } = useApi();
  useEffect(() => {
    const getFiles = async () => {
      const endpoint = {
        method: "get",
        url: "/auth/employee/management/",
      };
      const res = fetchData(endpoint);
      console.log(res);
    };
    getFiles();
  }, []);

  return <div>This is files list</div>;
};

export default FilesList;
