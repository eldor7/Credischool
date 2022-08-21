import React from 'react'
import {Bgimg, Container1,Leftimg, Mapimg, Paragrif, Paragrif1, Register, Result, Resultleft, Resultright, Rightimg, Student } from './style'
import mapimg from '../../assest/img/Map.png'
import leftimg from '../../assest/img/leftimg.png'
import rightimg from '../../assest/img/rightimg.png'




const StudentPage = () => {
  return (
    <Container1>
        <Student>
            <h1>More than 50.000 students <br />
                 has enrolled this year</h1>
        </Student>
        <Mapimg src={mapimg}/>
        <Result>
             <Resultleft>
                <Leftimg src={leftimg}/>
                <Paragrif>
                    <h1>Students</h1>
                    <p>150.000+</p>
                </Paragrif>
             </Resultleft>
             <Resultright>
                  <Rightimg src={rightimg}/>
                  <Paragrif1>
                    <h1>Time Zones</h1>
                    <p>10+</p>
                  </Paragrif1>
             </Resultright>
        </Result>
        <Register>
            <h1>Interested? Let’s get you started</h1>
            <button>Register</button>
        </Register>
        <Bgimg></Bgimg>
    </Container1>
  )
}

export default StudentPage