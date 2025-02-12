import React from 'react';
import Title from '../components/Title';
import {assets} from '../assets/assets';

import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row  gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passin for innovation and a desire to revolutionize the way people shop online . Our journey began with a simple idea to provide a plateform where customer can easly discover , explore and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we have worked tirelessly to curate a diverse of high quality products that cater to every taste and preference.</p>

          <b className='text-gray-800'>Our Mission</b>

          <p>Our mission at Forever is to empower customers with choice , convenience andconfidence . We are dedicated to providing a seamless shopping experience that exceeds expectations , from browsing and ordering to delever and beyond </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='txet-gray-600'>We select an vet each product to ensure it meets our stringent quality standards</p>
        </div>

        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='txet-gray-600'>With our user-friendly interface ordering proe=cess, shopping has never been easier.</p>
        </div>

        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='txet-gray-600'>Our team of dedicated professionals is here to assist you the way , ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      
      <NewsletterBox/>

    </div>
  )
}

export default About