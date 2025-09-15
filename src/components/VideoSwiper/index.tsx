'use client';

import styles from './style.module.scss';
import Vid1 from '/vid-1-thumb.jpg';
import Vid2 from '/vid-2-thumb.jpg';
import Vid3 from '/vid-3-thumb.jpg';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import ReactPlayer from 'react-player/youtube';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

/* eslint-disable @typescript-eslint/no-explicit-any */

type VideoSwiperType = {
  _id: string;
  title: string;
  youTubeId: string;
  mainImage: {
    asset: string;
    alt: string;
  };
  lqip: string;
  body: string;
};

const data: VideoSwiperType[] = [
  {
    _id: '1',
    title: 'Bob Vylan',
    youTubeId: 'Zl2v-_PugVk',
    mainImage: {
      asset: Vid1,
      alt: 'Bob Vylan Thumbnail',
    },
    lqip: '',
    body: 'Bob Vylan',
  },
  {
    _id: '2',
    title: 'Craig Mokhiber',
    youTubeId: '-wTtpof_duc',
    mainImage: {
      asset: Vid2,
      alt: 'Craig Mokhiber',
    },
    lqip: '',
    body: 'Craig Mokhiber',
  },
  {
    _id: '3',
    title: 'Liam Cunningham',
    youTubeId: 'hn_WAvFD4Es',
    mainImage: {
      asset: Vid3,
      alt: 'Liam Cunningham',
    },
    lqip: '',
    body: 'Liam Cunningham',
  },
];

const VideoSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index on slide change
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <Swiper
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={0}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          onSlideChange={handleSlideChange}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((slide: VideoSwiperType, idx: number) => {
            return (
              <SwiperSlide key={slide._id}>
                <Dialog>
                  <DialogTrigger asChild>
                    <FaCirclePlay
                      className={`${activeIndex === idx ? 'absolute-center cursor-pointer text-boycott-light hover:text-gray-300' : 'hidden'}`}
                      size={48}
                    />
                  </DialogTrigger>
                  <DialogContent
                    className={cn('sm:max-w-[600px]', styles.dialogOverlay)}
                  >
                    <DialogHeader>
                      <DialogTitle>{slide.title}</DialogTitle>
                      {/* <DialogDescription>{slide.body}</DialogDescription> */}
                    </DialogHeader>
                    <div className="aspect-video h-full w-auto md:w-full md:h-auto mx-auto overflow-hidden">
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${slide.youTubeId}`}
                        controls={true}
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <img
                  src={slide.mainImage.asset as string}
                  alt={slide.mainImage.alt as string}
                  className="rounded-lg object-cover h-64 w-96 mx-auto"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className="w-fit mx-auto mt-16 mb-8">
          <CopButton text="Act now" className="mx-auto" />
        </div> */}
      </div>
    </div>
  );
};

export default VideoSwiper;
