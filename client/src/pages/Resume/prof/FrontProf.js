import React from "react";
const styles = {
    // rgb(211, 213, 0)
    // rgb(40, 40, 41)
    card:{
        backgroundColor: "rgb(211, 213, 0)",
        border:"2px solid white",
        width:"160px",
        
    },
    img:{
        height:'85px',
        maxWidth:"100px",
        objectFit:'contain',
        margin:"auto",
        
    }
  
  };
export default function FrontProf({prof,img}){
return (
    <div style={styles.card} className="d-flex flex-column m-2 p-2">
  <img className="card-img-top" src={img} alt="Proficency Logo" style={styles.img}/>
  <div className="card-body text-center p-0 pt-3">
    <p className="card-text">{prof}</p>
  </div>
</div>
)
}