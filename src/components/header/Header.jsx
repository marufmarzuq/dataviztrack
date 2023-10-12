import { useDispatch, useSelector } from "react-redux";
import { setOpenAuth } from "../../lib/slices/headerSlice";
import { RiLogoutCircleLine } from "react-icons/ri";
import { logout } from "../../lib/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);

  return (
    <div style={{ borderBottom: "1px solid #ddd" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "65px",
        }}
      >
        <div style={{ fontSize: "20px", letterSpacing: "1.4px" }}>
          DataVizTrack
        </div>
        <div>
          {auth?.token ? (
            <button
              style={{
                border: "none",
                height: "34px",
                backgroundColor: "#fff",
                cursor: "pointer",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                textTransform: "capitalize",
              }}
              onClick={() => dispatch(logout())}
            >
              <span>{auth?.username}</span>
              <span>
                <RiLogoutCircleLine fontSize={19} color="red" />
              </span>
            </button>
          ) : (
            <button
              style={{
                border: "none",
                height: "34px",
                backgroundColor: "#333",
                color: "white",
                cursor: "pointer",
                padding: "0 24px",
                borderRadius: "25px",
                fontSize: "14px",
              }}
              onClick={() => dispatch(setOpenAuth(true))}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
