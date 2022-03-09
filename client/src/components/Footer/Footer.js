import React from "react";
import Github from '../../assets/imgs/logos/github/GitHub-Dark.png'
import Linkedin from '../../assets/imgs/logos/linkedin/Li.png'
import Twitter from '../../assets/imgs/logos/twitter/Twitter.png'


const styles = {
    logo: {
      height:'50px',
      margin:'30px',
    },
    footer:{
        backgroundColor: "rgb(211, 213, 0)",
    },
  
  };
  

export default function Footer(){
    return (<footer className="d-flex flex-wrap justify-content-center" style={styles.footer}>
        <div>
          
           <button className="btn" href="https://github.com/Rayman244" target="_blank"> <img src={Github} alt="GitHub Logo" style={styles.logo}/>
           </button>
        </div>
        <div>
        <button className="btn" href="https://www.linkedin.com/in/rayhewitt123/" target="_blank">
        <img  src={Linkedin} alt="LinkedIn Logo" style={styles.logo} />
        </button>

        </div>
        <div>
        <button className="btn" href="https://twitter.com/RayHewitt123" target="_blank">
        <img  src={Twitter}  alt="Twitter Logo" style={styles.logo}/></button>

        </div>
    </footer>)
}