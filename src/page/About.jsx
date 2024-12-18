import About_codeHive from "../components/About_codeHive"
import Connect_with_us from "../components/Connect_with_us"
import Lets_talk_Social_icon from "../components/Lets_talk_Social_icon"
import Navbar from "../components/Navbar"
import Our_mission from "../components/Our_mission"
import Partnered_industry from "../components/Partnered_industry"
import They_say_about_us from "../components/They_say_about_us"
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
        <They_say_about_us/>
        <Connect_with_us/>
        <Lets_talk_Social_icon/>
    </div>
  )
}


export default About
