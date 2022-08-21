import React from 'react'
import { Container, Homecon, Homeleftcon, Hometotal, Lectures, Lecturesimg, Logo, Navbarcon, Navleftcon, NavMenucon, Navrightcon, Payments, Paymentsimg, Support, Supportimg} from './style'
import logo from '../../assest/img/Logo.png'
import supportimg from '../../assest/img/support.png'
import paymentsimg from '../../assest/img/payments.png'
import lecturesimg from '../../assest/img/lectures.png'


const HomePage = () => {
  return (
    <Container>
        <Homecon>
        <Navbarcon>
            <Navleftcon>
                <Logo src={logo}/>
                <p>Credischool</p>
            </Navleftcon>
            <NavMenucon>
                <h4>Home</h4>
                <p>Campus</p>
                <p>Education</p>
                <p>Alumni</p>
                <p>About</p>
            </NavMenucon>
            <Navrightcon>
                <p>Login</p>
                <button>Register</button>
            </Navrightcon>
        </Navbarcon>
            <Homeleftcon>
                <h1>A virtual university, <br /> with real degrees</h1>
                <p>Credischool is an accredited virtual university built <br />
                 by top professors from Harvard, Stanford, MIT, and <br />
                  many more. The students at Credischool are <br />
                 welcome to study at their own pace.</p>
                 <button>Learn more</button>
            </Homeleftcon>
            <Hometotal>
                <Support>
                    <Supportimg src={supportimg}/>
                    <h1>24/7 Support</h1>
                    <p>Always online to help you</p>
                </Support>
                <Payments>
                    <Paymentsimg src={paymentsimg}/>
                    <h1>Secure Payments</h1>
                    <p>Pay your semesters fast & secure</p>
                </Payments>
                <Lectures>
                    <Lecturesimg src={lecturesimg}/>
                    <h1>Online Lectures</h1>
                    <p>Study in real time, review later</p>
                </Lectures>
            </Hometotal> 
        </Homecon>

    </Container>
  )
}

export default HomePage