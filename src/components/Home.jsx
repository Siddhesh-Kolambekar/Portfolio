import profile from "../../public/profile.jpg"
import wave from "../../public/wave.png"
const Home = () => {
  return (
    <>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <div>
          <div style={{display:"flex",alignItems:"center"}}>
            <h2 style={{fontSize:"5vh",fontWeight:"2500px"}}>Hello everyone,</h2><img src={wave} className="hand" alt="" style={{marginLeft:"2vh",width:"10vh"}}/>
          </div>
          <h1 style={{fontSize:"6vh",fontWeight:"5000px",marginTop:"auto"}}>I am Siddhesh Kolambekar</h1>
          <h2 style={{fontSize:"3vh"}}>A Front-End Developer</h2>
        </div>
        <img src={profile} alt="" style={{width:"55vh",borderRadius:"50vh"}}/>
      </div>
      <hr style={{marginTop:"3vh"}}/>
    </>
  );
};
export default Home