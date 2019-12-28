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
              <p>description</p>
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
                <p>description</p>
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