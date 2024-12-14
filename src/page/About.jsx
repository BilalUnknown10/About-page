import About_codeHive from "../components/About_codeHive"
import Navbar from "../components/Navbar"
import Our_mission from "../components/Our_mission"
import Partnered_industry from "../components/Partnered_industry"
import ValuesOurCore from "../components/ValuesOurCore"
import What_makes_us_different from "../components/What_makes_us_different"


function About() {
  return (
    <div>
        <Navbar/>
        <About_codeHive/>
        <Our_mission/>
        <ValuesOurCore/>
        <What_makes_us_different/>
        <Partnered_industry/>
    </div>
  )
}


export default About
