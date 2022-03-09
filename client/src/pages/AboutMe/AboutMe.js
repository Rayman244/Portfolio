import React from "react";
import myPhoto from "../../assets/my-photo.jpeg";

const styles = {
  outterDiv:{backgroundColor: "rgb(40, 40, 41)",
  color: "white", marginBottom:'10px',
paddingBottom:'5rem'},
  title:{color: "rgb(211, 213, 0)",
 
 }}

export default function AboutMe() {
  return (<div className=" pb-3" style={styles.outterDiv}>
     <h3 className="container p-4"style={styles.title}>About Me</h3>
      <figure className="p-2">
        <div className="container">
          <img src={myPhoto} className="img-fluid w-50 pb-4" alt="Myself" />
        </div>
        <div className='container'> 
        <p>
          I am from a small port town called Cape May in New Jersey. My dad was
          a fisherman and since childhood I was fascinated by fishing and we
          often went camping. By the way, an interesting fact about me due to
          the fact that as a child I had an abundance of fish and seafood for
          11 years now, I have not eaten them at all. Also as a child I was a
          BoyScout, I love nature and out door activities.
        </p>
        <p>
          I was always interested in cars and how they work, I wanted to be able
          to figure out why something didn't work. And that's why I went to
          mechanic school in Philadelphia and transferred there. There I met my
          wife, by the way she is from Belarus, a little country in Europe.
          Thanks to my acquaintance with her, I visited Belarus and other
          European countries a couple of times. There werehard times and I
          worked part-time in a restaurant where I was later promoted to a
          manager and at the same time I wondered where I could direct my
          passion in the desire to figure out how what works. Accidentally
          stumbled upon a book on an initial developer, I was drawn into it and
          I began to lack resources in free access to the poem, I decided to
          undergo training online while working as a manager.
        </p>
        <p>
          Among other things, I have a dog, and a little more about myself, I
          consider my strengths to be hard work and passion for the process, and
          I also like to understand the details. On a minus this is perhaps the
          fact that I really love karaoke, but I'm a bad dancer and can't sing.
        </p></div>
      </figure>
    
    </div>
  );
}
