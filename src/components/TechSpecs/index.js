import React from 'react'
import { Container } from "./styles";

import UnionTech from '../../assets/images/Union-tech.png'

function TechSpecs() {
    return(
        <Container>
            <div>
                <h1>TECH SPECH</h1>
                <table>
                    <tr>
                        <td><span><p>PROCESSADOR</p></span></td>
                        <td><p>intel xeon w-2125 8,25m cache, 4.00 ghz</p></td>
                    </tr>
                    <tr>
                        <td><span><p>OS</p></span></td>
                        <td><p>Windows 10 Home, 64-bit, English </p></td>
                    </tr>
                    <tr>
                        <td><span><p>graphıcs card</p></span></td>
                        <td><p>nvıdıa gtx 3090 8gb 256 bıt cache</p></td>
                    </tr>
                    <tr>
                        <td><span><p>DISPLAY</p></span></td>
                        <td><p>15.6" FHD (1920 x 1080) 144Hz 7ms 300-nits<br/>72% NTSC color gamut</p></td>
                    </tr>
                    <tr>
                        <td><span><p>MEMORY</p></span></td>
                        <td><p>256GB DDR4 2666MHz</p></td>
                    </tr>
                    <tr>
                        <td><span><p>HARD DRIVE</p></span></td>
                        <td><p>512GB (2x256 PCIe M.2 SSD) RAID0</p></td>
                    </tr>
                    <tr>
                        <td><span><p>COLOR</p></span></td>
                        <td><p>Dark Side of the Moon with High Endurance Clear Coat </p></td>
                    </tr>
                    <tr>
                        <td><span><p>CAMERA</p></span></td>
                        <td><p>ALTAIR HD (1280x720 resolution) camera with dual-array <br/> integrated microphones</p></td>
                    </tr>
                    <tr>
                        <td><span><p>AUDIO</p></span></td>
                        <td><p>4-Way (Woofer/Tweeter) Stereo Speaker Design</p></td>
                    </tr>
                </table>
                
            </div>
            <img src={UnionTech} />
        </Container>
    )
}

export default TechSpecs;