// import React from 'react'
import EastIcon from '@mui/icons-material/East';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';

function About_codeHive() {

 
  return (
    <>
      <div className="code_hive px-20 flex justify-evenly items-center bg-[#b3dbeb] pt-10">
        
        {/* Code hive details section */}
        <div className=' w-[600px]  '>
            <h1 className=' font-extrabold text-3xl tracking-wider mb-5'>About <span className='text-[#307a97]'>Codehive</span> </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero beatae rerum dolor explicabo ratione! Id quam aspernatur dicta ullam similique ex voluptate doloremque culpa. Numquam dicta placeat molestias at atque.
                Provident, suscipit quisquam exercitationem omnis corporis, dolorem ipsam officiis at, ratione quia corrupti! Est laboriosam cum cumque aspernatur cupiditate expedita itaque asperiores incidunt deleniti soluta ex, neque, illo et unde!
                Sed nam architecto accusamus quod aliquam veniam? Ipsum, aliquam. Nulla esse ipsa officia fugit nam aliquam impedit modi dicta amet, suscipit maxime in porr
            </p>
            <button className=' bg-[#307a97] my-8 pl-4 pr-2 border-none py-2 tracking-wider flex justify-between items-center  rounded-full text-white'><span>Get Started</span> 
              <span className='ml-2 bg-white text-[#307a97] rounded-full py-1 px-2 text-clip'>
                <EastIcon style={{fontSize: "12px"}}/>
                </span> 
              </button>
        </div>

        {/* Code hive images section */}
        <div className=' '>
          <img className='' src="./images/file (1).png" alt="" />
        </div>
    </div>
   
    {/* code hive last section */}
    <div className='bg-black py-4 flex justify-between items-center'>
        <div className='flex justify-center items-center text-white'>
            <GroupsIcon style={{color:"#b3dbeb",}}/>
            <p className='px-2'>20000+ Successfull Clients</p>
        </div>
        <div className='flex justify-center items-center text-white'>
            <LanguageIcon style={{color:"#b3dbeb",}}/>
            <p className='px-2'>20000+ Successfull Clients</p>
        </div>
        <div className='flex justify-center items-center text-white'>
            <GroupsIcon style={{color:"#b3dbeb",}}/>
            <p className='px-2'>20000+ Successfull Clients</p>
        </div>
        <div className='flex justify-center items-center text-white'>
            <LanguageIcon style={{color:"#b3dbeb",}}/>
            <p className='px-2'>20000+ Successfull Clients</p>
        </div>
    </div>
    </>
  )
}

export default About_codeHive
