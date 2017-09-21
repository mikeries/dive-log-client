import React from 'react';
import { Grid } from 'react-bootstrap'

const About = () => {
  return (
    <Grid>
      <div>
        <h2>About the Dive Log</h2>
        <p>
          The Dive Log is still under construction.  It began as the final project of the
          Full Stack Web Development curriculum at <a href="https://flatironschool.com/programs/online-web-developer-career-course/">Flatiron School</a>, 
          and is now being improved upon for fun and extra learning.
        </p>
        <p>
          The Dive Log is a single-page web application created using React and Redux that interacts with 
          a custom API built with Ruby on Rails and a Postqresql database.
        </p>
        <h2>
          Planned Features
        </h2>
        <ul>
          <li>Better site styling, including animated fish and bubbles.</li>
          <li>An image gallery.</li>
          <li>GPS locations for dives and google maps integration.</li>
          <li>Enhanced datasets for dives, and charts.</li>
        </ul>

        <h2>
          About the Author
        </h2>
        <h3>
          Michael Ries
        </h3>
        <h4>
          Junior Web Developer
        </h4>
        <p>
          Full stack web developer with a passion for constructing complex systems 
          from simple beginnings. When I was about 11, I taught myself to program 
          and fell in love with it. After a successful career in Electrical Engineering, 
          I gave it up to pursue software development. In addition to experience with Ruby, 
          Rails and JavaScript-based programming, I bring strong skills in project and 
          time management, analytical problem solving, and communication. I hope to 
          apply these skills to help a mission-driven organization improve our world.
        </p>

      </div>
    </Grid>
  )
}

export default About;