import React from "react";
// import resume from "../../assets/webDevResume.pdf";
import frontendProficiencies from "../../utils/database/front-prof";
import backendProficiencies from "../../utils/database/back-prof";
import FrontProf from "./prof/FrontProf";

const styles = {
  outterDiv: {
    backgroundColor: "rgb(40, 40, 41)",
    // color: "white",
    marginBottom: "10px",
    paddingBottom: "5rem",
  },
  title: { color: "rgb(211, 213, 0)" },
  proficency: {
    maxWidth:"50%"
  },
};

export default function Resume() {
  return (
    <div style={styles.outterDiv}>
      <h3 className="container p-4" style={styles.title}>
        Resume
      </h3>
      <div className="container d-flex justify-content-end">
        <a className="btn btn-primary " target="_blank" href="https://drive.google.com/file/d/1aJuxZFj6LHLKlxx4XYPekEiUYh65J-zk/view?usp=sharing" download>
          Download
        </a>
      </div>
      <div className="container-fluid d-flex flex-wrap p-2 mt-5">
        <div style={styles.proficency}>
          <h5 className="container text-white">Frontend Proficiencies</h5>

          <div className="container d-flex flex-wrap justify-content-center well">
            {frontendProficiencies.map((prof) => {
              return (
                <FrontProf prof={prof.prof} img={prof.img} key={prof.id} />
              );
            })}
          </div>
        </div>
        <div style={styles.proficency}>
          <h5 className="container text-end text-white">
            Backend Proficiencies
          </h5>
          <div className="container d-flex flex-wrap justify-content-center">
            {backendProficiencies.map((prof) => {
              return (
                <FrontProf prof={prof.prof} img={prof.img} key={prof.id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
