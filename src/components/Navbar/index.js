import React from 'react'
import {Container} from './style'
import logo from '../../assets/images/Union.png'
import './menu'

export default function Navbar(){
    return(
        <Container>
            <div class="container">
                <div class="menu-section">
                    <div class="menu-toggle">
                        <div class="one"></div>
                        <div class="two"></div>
                        <div class="three"></div>
                    </div>
                    <nav>
                        <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">CORPORATE</a>
                        </li>
                        <li>
                            <a href="#">PRODUCT</a>
                        </li>
                        <li>
                            <img src={logo} />
                        </li>
                        <li>
                            <a href="#">EQUIP</a>
                        </li>
                        <li>
                            <a href="#">SUPPORT</a>
                        </li>
                        <li>
                            <a href="#">CONTACT</a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Container>
    )
}