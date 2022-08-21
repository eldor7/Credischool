import React from 'react'
import { Copycon, Footer1, Footer2, Footercon, Footerleft, Footermenu, Footerright, Leftimg, Menu, Net, Rightimg, Rightin, Rightitube } from './style'
import leftimg from '../../assest/img/Logo.png'
import rightimg from '../../assest/img/twitter.png'
import rightitube from '../../assest/img/tube.png'
import rightin from '../../assest/img/In.png'

const FooterPage = () => {
  return (
    <Footercon>
        <Footer1>
        <Footerleft>
            <Leftimg src={leftimg}/>
            <p>Credischool</p>
        </Footerleft>
        <Footermenu>
            <h4>Home</h4>
            <p>Campus</p>
            <p>Education</p>
            <p>Alumni</p>
            <p>About</p>
        </Footermenu>
        <Footerright>
            <Rightimg src={rightimg}/>
             <Rightitube src={rightitube}/>
            <Rightin src={rightin}/>
        </Footerright>
        </Footer1>
        <Footer2>
            <Copycon>
                <p>Copyright © 2020 Credischool University. <br />
                 All Right Reserved</p>
            </Copycon>
            <Menu>
                <p>Terms</p>
                <p>Privacy</p>
                <p>GDPR</p>
            </Menu>
            <Net>
                <p>Designed with ♥ by <span>nikolovlazar.com</span></p>
            </Net>
        </Footer2>
    </Footercon>
  )
}

export default FooterPage