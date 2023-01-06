import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper'
import Image from 'next/image'

export default function homePageSwiper() {
  
 
    
SwiperCore.use([Navigation, Pagination, Mousewheel])
  return (
    <div>
    <Swiper
    direction={"vertical"}
    mousewheel={{releaseOnEdges: true}}
    pagination={{clickable: true}}
    className="h-screen w-full"
    >

    <SwiperSlide>
    <Image
        src="https://storage.googleapis.com/lullipop-image-dump/003%20Petra%20Photo%20Shoots/Hollidays_Lullipop/JEZ_0607.jpg"
        alt=""
        fill
        className='h-full w-full realtive object-cover'
        
    />
    </SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </div>
  )
}


