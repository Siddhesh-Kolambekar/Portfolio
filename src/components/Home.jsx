import profile from "../../public/profile.jpg";
import wave from "../../public/wave.png";

const Home = () => {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "2vh",
        textAlign: "center"
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            <h2 style={{
              fontSize: "5vh",
              fontWeight: "bold",
              margin: "0 1vh"
            }} className="variable">Hello everyone,</h2>
            <img src={wave} className="hand" alt="" style={{ width: "8vh" }} />
          </div>
          <h1 style={{
            fontSize: "6vh",
            fontWeight: "bold",
            marginTop: "1vh"
          }} className="variable">I am Siddhesh Kolambekar</h1>
          <h2 style={{
            fontSize: "3.5vh",
            marginTop: "1vh"
          }} className="variable">A Front-End Developer</h2>
        </div>
        <img src={profile} alt="" style={{
          width: "45vh",
          maxWidth: "90%",
          borderRadius: "50%",
          marginTop: "2vh"
        }} />
      </div>
      <hr style={{ marginTop: "3vh" }} />
    </>
  );
};

export default Home;
