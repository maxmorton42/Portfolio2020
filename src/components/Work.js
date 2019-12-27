import React from "react";
import styled from 'styled-components';


const Work = () => {
  return (
  <div>
    <h1>Work Experience</h1>
    <ul>
    <li> 
        <div>
         <JobTitle>Food Distribution Specialist</JobTitle> <span>Intermountain Healthcare</span>
          <span> &sdot; </span>
            <span>
              Jun 2017 – Aug 2019 (2 years 3 months)
                </span>
          </div>
             <p>LDS Hospital 
             </p>
               <Jobdescription>   Responsible for ordering and receiving food supplies and materials for the whole hospital <br />
                Fostering communication between the hospital and various large-scale food distributors <br />
                Assisting with organization of various events <br />
                Completing required reports and communicating with various medical units/food service areas <br />
                Training new hires according to standards
              </Jobdescription>
      </li>
        <br />
      <li> 
        <div>
         <JobTitle>Outpatient Service Specialist</JobTitle> <span>University of Utah Health</span>
          <span> &sdot; </span>
            <span>
            May 2016 – May 2017 (1 year 1 month)
                </span>
          </div>
             <p>U of U Main Hospital and Orthopedic Center
             </p>
               <Jobdescription>  Scheduled appointments and facilitated patient-doctor communications in a call center based setting <br />
                  Admitted and registered patients by reviewing accounts and other compliance-related documents for completeness and accuracy <br />
                  Entered corrected and new patient data <br />
                  Reconciled against daily charge reports
                </Jobdescription>
      </li>
      <br />
      <li> 
        <div>
         <JobTitle>Direct Support Professional/ Instructor/ UAP/Supervisor</JobTitle> <span>Rha Community Services</span>
          <span> &sdot; </span>
            <span>
                Jan 2014 – Oct 2016 (2 years 10 months)
                </span>
          </div>
             <p>Day Program and Bungalow Care Center
             </p>
               <Jobdescription>  Provided support for special needs individuals both within a group home setting as well as in the community <br />
                  Tracked progress and developed important life skills as a part of individual goals for each client <br />
                  Executed lesson modules for small groups and individuals <br />
                  Assisted with developing job skills and creating work opportunities
                </Jobdescription>
      </li>
    </ul>
    </div>
  )
}
 const JobTitle = styled.h4`
  font-weight: bold;
`

 const Jobdescription = styled.p`
  font-weight: bold;
  display: inline-block;
`


export default Work