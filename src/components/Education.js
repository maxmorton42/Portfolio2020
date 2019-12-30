import React from 'react';
import styled from 'styled-components'

const Education = () => {
  return (
    <div>
  <h1>Education</h1>
       <ul>
         <li>
              <Institution> Dev Point Labs Boot Camp</Institution>
              <div>
                <Degree>
                Full Stack Web Development 
                </Degree>
                <span> &sdot; </span>
                <span>
                2019 to 2020
                </span>
              </div>
              <p>
                This full-time 12 week course is part of the University of Utah Professional Education school, and covers HTML, CSS, Ruby on Rails, SQL, JavaScript, React, Redux, and more.
                 DevPoint Labs' approach to learning combines pair programming with traditional lectures and a mix of group projects, lean methodologies, hackathons and one-on-one mentorship from instructors.
                </p>
              </li>
              <br />
            <li>
              <Institution>University of Utah</Institution>
                <div>
                  <Degree>
                  Elementary Education Bachelors of Science, 
                  </Degree>
                  <span> &sdot; </span>
                  <span>
                  2007 to 2013
                  </span>
                </div>
                <p>The Elementary Teacher Education Program in the Urban Institute for Teacher Education at the University of Utah
                   is designed to effectively prepare teacher candidates to work with students across various age and ability levels, and from diverse cultural, linguistic, and socioeconomic backgrounds.</p>

             </li>
     </ul>
  </div>
  )
}


const Institution = styled.h4`
  font-weight: bold;
`

const Degree = styled.p`
  font-weight: bold;
  display: inline-block;
`


export default Education