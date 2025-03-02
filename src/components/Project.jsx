import project1 from "../../public/project1.webp";
import project2 from "../../public/project2.webp";

const Project = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "6vh",
          fontSize: "5vh",
        }}
        className="variable"
      >
        Projects
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          height: "auto",
          flexWrap: "wrap",
        }}
      >
<div
  style={{
    width: "60vh", // Match the image width
    height: "auto", // Ensures height adjusts dynamically
    padding: "5vh",
    margin: "1vh",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center content
  }}
>
  <img
    src={project1}
    alt="Project 1"
    style={{
      width: "100%", // Makes the image take the full width of the div
      height: "auto",
    }}
  />

          <h1>Name: Dish Scanner</h1>
          <h3>
            Description: This project allows users to easily retrieve the
            calorie content of food items by scanning QR codes or barcodes. Once
            scanned, the information is processed to display nutritional
            details, including calorie count, from our online database. It’s a
            handy tool for tracking calorie intake and making informed food
            choices. The user interface is simple and efficient for quick
            results.
          </h3>
          <h4>TechStack: React | MongoDB | ExpressJS | RestfulAPI</h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <a
              href="https://github.com/Siddhesh-Kolambekar/Dish-Scanner"
              target="_blank"
            >
              <button
                style={{
                  color: "white",
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                  textAlign: "center",
                  backgroundColor:"black",
                  borderRadius:"5px",
                  cursor:"pointer",
                  marginRight:"20vh"
                }}
              >
                Github
              </button>
            </a>
            <a href="https://fastidious-paprenjak-8b655b.netlify.app/" target="_blank">
              <button
                style={{
                  color: "white",
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                  textAlign: "center",
                  backgroundColor:"black",
                  borderRadius:"5px",
                  cursor:"pointer"
                }}
              >Netlify</button>
            </a>
          </div>
        </div>
        <div
  style={{
    width: "60vh", // Match the image width
    height: "auto", // Ensures height adjusts dynamically
    padding: "5vh",
    margin: "1vh",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center content
  }}
>
  <img
    src={project2}
    alt="Project 2"
    style={{
      width: "100%", // Makes the image take the full width of the div
      height: "auto",
    }}
  />

          <h1>Name: Health Tracker</h1>
          <h3>
            This project tracks and manages patient medication dosages, ensuring
            accurate and timely administration. It helps healthcare providers
            monitor schedules, record dosages, and track adherence. With
            reminders for upcoming doses and reports on patient compliance, the
            system improves safety, reduces medication errors, and supports
            better health outcomes.
          </h3>
          <h4>TechStack: React | Firebase</h4>
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <a
              href="https://github.com/Siddhesh-Kolambekar/Health-Tracker"
              target="_blank"
            >
              <button
                style={{
                  color: "white",
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                  textAlign: "center",
                  backgroundColor:"black",
                  borderRadius:"5px",
                  cursor:"pointer",
                  marginRight:"20vh"
                }}
              >Github</button>
            </a>
            <a
              href="https://incredible-llama-01f40f.netlify.app/"
              target="_blank"
            >
              <button
                style={{
                  color: "white",
                  fontSize: "1rem",
                  padding: "0.5rem 1rem",
                  textAlign: "center",
                  backgroundColor:"black",
                  borderRadius:"5px",
                  cursor:"pointer"
                }}
              >Netlify</button>
            </a>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "3vh" }} />
      
      <style>
        {`
          @media only screen and (max-width: 1024px) {
            h1 {
              font-size: 4vh;
            }
            .project-container {
              flex-direction: column;
              align-items: center;
            }
            .project-card {
              width: 80%;
              margin-bottom: 4vh;
            }
          }

          @media only screen and (max-width: 768px) {
            h1 {
              font-size: 3.5vh;
            }
            .project-card {
              width: 90%;
              padding: 4vh;
            }
            .project-card img {
              width: 50vh;
            }
          }

          @media only screen and (max-width: 480px) {
            h1 {
              font-size: 3vh;
            }
            .project-card {
              width: 95%;
              padding: 3vh;
            }
            .project-card img {
              width: 45vh;
            }
          }
        `}
      </style>
    </>
  );
};

export default Project;
