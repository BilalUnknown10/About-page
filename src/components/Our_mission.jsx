// import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Our_mission() {

    const playButtonCss = {
        color:"white",
        fontSize: "100px"
    }
  return (
    <>
      <div className='py-24 px-28'>
        <div className='our_mission border border-green-600 py-28 px-6 flex justify-around items-center '>
            <div className="our_mission_details w-[50%]">
                <h1 className=" font-extrabold text-3xl mb-4 text-white">Who are <span className=" text-[#307a97]">we</span></h1>
                 <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero beatae rerum dolor explicabo ratione! Id quam aspernatur dicta ullam similique ex voluptate doloremque culpa. Numquam dicta placeat molestias at atque.
                    Provident, suscipit quisquam exercitationem omnis corporis, dolorem ipsam officiis at, ratione quia corrupti! Est laboriosam cum cumque aspernatur cupiditate expedita itaque asperiores incidunt deleniti soluta ex, neque, illo et unde!
                    Sed nam architecto accusamus quod aliquam veniam? Ipsum, aliquam. Nulla esse ipsa officia fugit nam aliquam impedit modi dicta amet, suscipit maxime in porr
                </p>
            </div>
            <div>
                <PlayCircleIcon style={playButtonCss}/>
            </div>
        </div>

        <div className=' last_section_ourMission out miss flex justify-between'>
            <div className='w-[400px] py-10 px-5'>
                <p className='text-[#307a97]'>01</p>
            </div>
            <div className='w-[400px]  text-center py-10 px-5'>
                <p className='text-[#307a97]'>02</p>
                <h1 className='py-5 font-bold'>Our Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero beatae rerum dolor explicabo ratione! Id quam aspernatur dicta ullam similique ex voluptate doloremque culpa. Numquam dicta placeat molestias at atque.
                        Provident, suscipit quisquam exercitationem omnis corporis,
                    </p>
            </div>
            <div className='w-[400px] py-10 px-5'>
                <p className='text-[#307a97] text-end'>03</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Our_mission