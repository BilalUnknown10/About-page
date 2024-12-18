/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Input from './Input'
import EastIcon from '@mui/icons-material/East';

function Connect_with_us() {
  return (
    <div className=' bg-[#03032e] py-28 sm:px-96 lets_talk_form_main'>
        <div className=' py-10 px-10 sm:px-24 lets_talk_form rounded-md '>
            <div className='text-white text-center'>
                <h3 className='text-xl'>Let's Talk</h3>
                <h1 className='text-3xl font-bold tracking-wide'><span className='text-[#307a97]'>Connect </span> with us</h1>
            </div>
            <form onSubmit={'submit'} className=' my-4'>
                <div className='pt-6 flex flex-wrap justify-between'>
                    <Input text={'name'} placeholder={"Name"} className={'min-w-[330px] sm:w-[300px] input'}/>
                    <Input text={'name'} placeholder={"Email Address"} className={'min-w-[330px] w-[400px] sm:w-[300px] input'}/>
                    <Input text={'name'} placeholder={"phone"} className={'min-w-[330px] sm:w-[300px] input'}/>
                    <Input text={'name'} placeholder={"Current Website"} className={'min-w-[330px] sm:w-[300px] input'}/>
                </div>
                <Input text={"text"} placeholder={"i'm intrested in website design"} className={'input to-100%'}/>
                <Input text={"text"} placeholder={"Message"} className={'input to-100%'}/>
                <div className='text-center my-4'>
                    <button className='px-20 py-2 relative rounded-full bg-[#307a97] text-white'>
                        Submit Now
                        <span className=' py-[1px] px-[2px] absolute right-[7px] top-[3.3px] rounded-full bg-white text-[#307a97]'>
                            <EastIcon/>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Connect_with_us
