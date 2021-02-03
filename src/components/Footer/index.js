import React from 'react';

import { Container } from './styles';

import logo from '../../assets/images/logo-footer.png'

function Footer() {
  return (
    <Container>
        <div class="container order-now">
            <h1>ALTAIR GAMING LAPTOP</h1>
            <a href="#">ORDER NOW</a>
        </div>
        

        <div class="container">
            <div class="row footer-container">
                <div class="col-md-4 col-xs-6">
                    <img src={logo} />
                </div>
                <div class="col-md-8 col-xs-6 row">
                    <div class="col-md-3 footer-links">
                        <h1>ALTAIR</h1>
                        <p>CORPORATE</p>
                        <p>SUPPORT</p>
                        <p>FAQ</p>
                        <p>CONTACT</p>
                        <p>PRIVACY POLICY</p>
                    </div>
                    <div class="col-md-3 footer-links">
                        <h1>PRODUCT</h1>
                        <p>ABOUT</p>
                        <p>TECH SPECS</p>
                        <p>BUYING OPTIONS</p>
                    </div>
                    <div class="col-md-3 footer-links">
                        <h1>EQUIP</h1>
                        <p>KEYBOARD</p>
                        <p>MOUSE</p>
                        <p>AUDIO DEVICES</p>
                        <p>MERCH</p>
                    </div>
                    <div class="col-md-3 footer-links">
                        <h1>FOLLOW US</h1>
                        <p>FACEBOOK</p>
                        <p>TWITTER</p>
                        <p>INSTAGRAM</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row copyright">
            <p>©2021 ALTAIR. ALL RIGHTS RESERVED</p>
        </div>
    </Container>
    )
}

export default Footer;