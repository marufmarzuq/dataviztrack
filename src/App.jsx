import img from "./assets/react.svg";
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <img src={img} alt="" />
      <p>App Cleaned</p>
    </div>
  );
};

export default App;
