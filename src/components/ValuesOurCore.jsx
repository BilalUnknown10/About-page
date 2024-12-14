// import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EastIcon from '@mui/icons-material/East';

function ValuesOurCore() {
  return (
    <>
    <div className="py-6 px-20 bg-[#03032e]">
        <div className=" ">
            <div className="text-white w-[600px] mt-10">
                <h1 className=" mb-3 font-bold text-3xl tracking-wide">Values Our <span className="text-[#307a97]">Core</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero beatae rerum dolor explicabo ratione! Id quam aspernatur dicta ullam similique ex voluptate doloremque culpa. Numquam dicta placeat molestias at atque.</p>
            </div>
            <div className="py-20 flex justify-between">
                <div className="values_our_care w-[200px] h-[200px] flex flex-col justify-center items-center  ">
                    <EmojiEventsIcon style={{color:"#307a97",fontSize:"50px"}}/>
                    <h1 className='text-white'>Success</h1>
                </div>
                <div className="values_our_care w-[200px] h-[200px] flex justify-center flex-col items-center bg-white ">
                    <h1 className='text-white mb-5 text-xl'>Innovation</h1>
                    <p className=' text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero beatae rerum dolor explicabo ratione! Id quam aspernatur dicta ullam similique </p>
                </div>
                <div className="values_our_care w-[200px] h-[200px] flex flex-col justify-center items-center bg-white ">
                    <Diversity3Icon style={{color:"#307a97",fontSize:"50px"}}/>
                    <h1 className='text-white'>Partnership</h1>
                </div>
                <div className="values_our_care w-[200px] h-[200px] flex flex-col justify-center items-center bg-white ">
                    <StorageIcon style={{color:"#307a97",fontSize:"50px"}}/>
                    <h1 className='text-white'>Accessability</h1>
                </div>
            </div>
            <div className='text-center text-3xl mt-10 font-extrabold text-white tracking-wide'>
                <h1>Ready to Experience the Future of <br /> Technology with Codehive?</h1>
            </div>
            <div className='text-center my-10'>
                <button className='lets_talk text-center border py-1.5 pr-2 pl-9 bg-slate-500 border-none text-white rounded-full'>
                    <span className='mr-4'><PhoneInTalkIcon/></span>
                    <span>Let's Talk</span>
                    <span className='ml-4 bg-[#307a97] text-white rounded-full py-1 px-2 text-clip'>
                        <EastIcon style={{fontSize: "12px"}}/>
                    </span>
                </button>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default ValuesOurCore
