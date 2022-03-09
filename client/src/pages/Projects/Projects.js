import React from "react";
import Project from "./Project/Project";

import data from '../../utils/database/projects.js'


const styles = {
  outterDiv: { backgroundColor: "rgb(40, 40, 41)",
marginBottom:'10px',
paddingBottom:'5rem' },
  title: { color: "rgb(211, 213, 0)" },
};

export default function Projects() {
  return (
    <div style={styles.outterDiv}>
      <h3 className="container p-4"style={styles.title}>Projects</h3>
      <div className="container d-flex flex-wrap justify-content-center">
      
        {data.map((proj) => {
          return (
            <Project
              title={proj.title}
              img={proj.img}
              link={proj.link}
              repo={proj.repo}
              desc={proj.desc}
              key={proj.id}
            />
          );
        })}
      </div>
    </div>
  );
}
