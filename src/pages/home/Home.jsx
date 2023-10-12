import { useSelector } from "react-redux";
import UploadFile from "../../components/uploadFile/UploadFile";

const Home = () => {
  const token = useSelector((state) => state?.auth?.token);
  return (
    <div>
      <div className="container">
        {token ? <table>table</table> : <UploadFile />}
      </div>
    </div>
  );
};

export default Home;
