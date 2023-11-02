import React from "react";
import styles from "./Toolbar.module.css";

function Toolbar({filters, selected, onSelectFilter}) {

    function changeBackgroundOver(element) {
        element.target.style.background = 'rgb(204, 222, 231)';
    }

    function changeBackgroundLeave(element) {
        element.target.style.background = 'rgb(250, 250, 250)';
    }
    
    return (
        <div className={styles.toolbar}>
                {filters.map((filter) => 
                <div className={styles.filterButton} key={filter.id} onClick={() => onSelectFilter(filter.value)}
                onMouseOver={changeBackgroundOver} onMouseLeave={changeBackgroundLeave}>{filter.value}</div>)}
                
        </div>
    );
}

export default Toolbar;
