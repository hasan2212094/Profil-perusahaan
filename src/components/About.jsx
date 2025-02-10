import '../styles/About.css'
import { SiAutodesk } from "react-icons/si";
import { SiAutocad } from "react-icons/si";
import { SiSketchup } from "react-icons/si";
import { TbFile3D } from "react-icons/tb";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>Saya pernah mempunyai pengalman di bidang drafting pada tahun 2012 sampai sekarang </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, saepe velit, blanditiis suscipit odio non architecto ratione magnam cum porro id nesciunt repudiandae optio assumenda ab ducimus. Nesciunt, eligendi ullam!</p>
                <h4>Desain Language & Tools</h4>
                <div className="skills">
                   <SiAutocad /><SiAutodesk /><SiSketchup /><TbFile3D />

                </div>
            </div>
        </section>
    )
}

export default About