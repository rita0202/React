import React from "react";
import styles from "./ProjectList.module.css"


function ProjectList({projects, onFilter}) {
    let firstColumn =[];
    let secondColumn = [];
    let thirdColumn = [];
    console.log(projects);

    for (let i = 0; i < projects.length; i++) {
        if (i % 3 == 0) {
            firstColumn.push(
                <img className={styles.img} key={i} src={projects[i].img} alt="img" /> 
            );
        } else if (i % 3 == 1) {
            secondColumn.push(
                <img className={styles.img} key={i} src={projects[i].img} alt="img" />
            );
        } else {
            thirdColumn.push(
                <img className={styles.img} key={i} src={projects[i].img} alt="img" />
            );
        }
    }

    return ( 
        <div className={styles.list}>
            <div className={styles.column}>{firstColumn}</div>
            <div className={styles.column}>{secondColumn}</div>
            <div className={styles.column}>{thirdColumn}</div>
        </div>
        
    ); 
    
}

export default ProjectList;
