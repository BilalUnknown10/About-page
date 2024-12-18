// import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function Lets_talk_Social_icon() {
    const iconStyle = {
        marginRight : "15px",
        // border : "1px solid white",
        fontSize : "40px",
        padding: "5px",
        borderRadius : "50px",
        boxShadow : " 0px 1px 5px blue"
    }
  return (
    <div className='py-5 px-20 bg-[#020229] text-white last_Section'>
            <div className='flex justify-between py-5'>
                <div>
                    <div>
                        <LinkedInIcon style={iconStyle}/>
                         <XIcon style={iconStyle}/>
                        <LinkedInIcon style={iconStyle} />
                        <XIcon style={iconStyle}/>
                    </div>
                    <div className=' list-none flex my-10 tracking-wide'>
                        <li className='mr-5'>Home</li>
                        <li className='mr-5'>About Us</li>
                        <li className='mr-5'>Services</li>
                        <li className='mr-5'>Blogs</li>
                        <li className='mr-5'>Contact Us</li>
                        <li className='mr-5'>Site Map Privacy Policy</li>
                    </div>
                    
                </div>
                <div>
                    <h1 className='font-extrabold text-5xl text-yellow-500'>Let`s Talk?</h1>
                    <div className='my-5'>
                        <h3>Contact Us</h3>
                        <p>Phone : +971 54 220 3330</p>
                        <p>Email : info@codehive.ae</p>
                    </div>
                </div>
            </div>      
                <p> 2023 codehive. All Rights Reserved</p>
    </div>
  )
}

export default Lets_talk_Social_icon
