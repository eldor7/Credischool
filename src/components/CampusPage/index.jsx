import React from 'react'
import { Departament, Economics, Economicsimg, Economicsleft, Engineering, Engineeringimg, Engineeringleft, Maincontainer, Science, Scienceimg, Scienceleft } from './style'
import scienceimg from '../../assest/img/science.png'
import engineeringimg from '../../assest/img/engineering.png'
import econimicsimg from '../../assest/img/economic.png'



const CampusPage = () => {
  return (
    <Maincontainer>
        <Departament>
            <h1>Explore the departments</h1>
            <Science>
                <Scienceimg src={scienceimg}/>
                <Scienceleft>
                    <h2>Computer Science</h2>
                    <p>Our computer science department has multiple <br />
                    learning paths, from Mobile and Web development, <br />
                    to Machine Learning and Data Science.</p>
                    <button>Learn more</button>
                </Scienceleft>
            </Science>
            <Engineering>
                <Engineeringleft>
                <h2>Chemical Engineering</h2>
                <p>All of the students that are enrolled in the <br />
                 Chemical Engineering program receive a <br />
                  Chemist’s Kit to practice while learning from <br />
                 home.</p>
                 <button>Learn more</button>
                </Engineeringleft>
                <Engineeringimg src={engineeringimg}/>
            </Engineering>
            <Economics>
                <Economicsimg src={econimicsimg}/>
                <Economicsleft>
                    <h2>Business & Economics</h2>
                    <p>The future CEOs and Entrepreneurs have an <br />
                    opportunity to study the business climate and <br />
                    analyize real world case studies of business <br />
                    success stories.</p>
                    <button>Learn more</button>
                </Economicsleft>
            </Economics>
        </Departament>
    </Maincontainer>
  )
}

export default CampusPage