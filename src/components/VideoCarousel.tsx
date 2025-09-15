import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const videos = [
  { src: '/videos/BobbyVylan.mp4', poster: '/videos/video1.jpg' },
  { src: '/videos/CraigMokhiber.mp4', poster: '/videos/video2.jpg' },
  { src: '/videos/LiamCunningham.mp4', poster: '/videos/video3.jpg' },
  { src: '/videos/TadhgHickey.mp4', poster: '/videos/video4.jpg' },
];

const VideoCarousel = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop
      >
        {videos.map((video, i) => (
          <SwiperSlide key={i}>
            <video
              src={video.src}
              poster={video.poster}
              controls
              preload="metadata"
              className="w-full rounded-2xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
