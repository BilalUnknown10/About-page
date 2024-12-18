// import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function They_say_about_us() {

    const leftArrowCss = {
        // border: " 1px solid red",
        color : "white",
        backgroundColor : "grey",
        borderRadius : "50px",
        fontSize : "30px"
    }

    const rightArrowCss = {
        // border: " 1px solid red",
        color : "white",
        backgroundColor : "#307a97",
        marginLeft : "10px",
        borderRadius : "50px",
        fontSize : "30px"
    }

    const quoteStyle = {
        color : "#307a97",
        rotate : "180deg",
        fontSize : "30px"
    }


  return (
    <div className=" py-10 px-10 sm:px-28 ">
        <div className="flex flex-wrap justify-between py-8">
            <h1 className="sm:text-3xl text-xl font-bold">What They <span className=" text-[#307a97]"> Say</span> About us</h1>
            <div>
                <KeyboardArrowLeftIcon style={leftArrowCss}/>
                <KeyboardArrowRightIcon style={rightArrowCss}/>
            </div>
        </div>
        <div className='what_They_say sm:flex'>
            <div className='what_They_say_details sm:mr-4 my-5 py-5 px-5 rounded-xl'>
                <FormatQuoteIcon style={quoteStyle}/>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero beatae rerum dolor explicabo ratione! Id quam aspernatur dicta ullam similique ex voluptate doloremque culpa. Numquam dicta placeat molestias at atque.
                    Provident, suscipit
                </p>
                <h1 className='text-xl font-bold text-white pt-3'>Ibrahim Alawar</h1>
                <p className=' text-white'>Alawar General Trading Est</p>
            </div>
             <div className='what_They_say_details sm:mr-4 my-5 py-5 px-5 rounded-xl'>
                <FormatQuoteIcon style={quoteStyle}/>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero beatae rerum dolor explicabo ratione! Id quam aspernatur dicta ullam similique ex voluptate doloremque culpa. Numquam dicta placeat molestias at atque.
                    Provident, suscipit
                </p>
                <h1 className='text-xl font-bold text-white pt-3'>Ibrahim Alawar</h1>
                <p className=' text-white'>Alawar General Trading Est</p>
            </div>
             <div className='what_They_say_details sm:mr-4 my-5 py-5 px-5 rounded-xl'>
                <FormatQuoteIcon style={quoteStyle}/>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero beatae rerum dolor explicabo ratione! Id quam aspernatur dicta ullam similique ex voluptate doloremque culpa. Numquam dicta placeat molestias at atque.
                    Provident, suscipit
                </p>
                <h1 className='text-xl font-bold text-white pt-3'>Ibrahim Alawar</h1>
                <p className=' text-white'>Alawar General Trading Est</p>
            </div>
        </div>
    </div>
  )
}

export default They_say_about_us
