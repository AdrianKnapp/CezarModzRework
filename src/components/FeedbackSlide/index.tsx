import Image from 'next/image';

import Slider from 'react-slick';

import { AiFillStar } from 'react-icons/ai/';
import SlideButton from '../SlideButton';
import styles from './styles.module.scss';

type ImageProps = {
  formats: {
    thumbnail: {
      url: string;
    };
  };
};

type Feedback = {
  id: number;
  name: string;
  feedback: string;
  image: ImageProps;
};

type FeedbackSlideProps = {
  feedback: Feedback[];
};

type ImageLoaderProps = {
  src: string;
};

export default function FeedbackSlide({ feedback }: FeedbackSlideProps) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: feedback.length >= 3 ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    nextArrow: <SlideButton side="right" />,
    prevArrow: <SlideButton side="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const ImageLoader = ({ src }: ImageLoaderProps) => src;

  return null;

  // return (
  //   <div className={styles.bannerContainer}>
  //     <h2>Depoimentos</h2>
  //     <Slider {...sliderSettings}>
  //       {feedback.map((item) => (
  //         <div key={item.id} className={styles.feedbackContainer}>
  //           <header>
  //             <div className={styles.userProfileImageBox}>
  //               <Image
  //                 src={item.image.formats.thumbnail.url}
  //                 alt="feedback-1"
  //                 layout="fill"
  //                 loader={ImageLoader}
  //                 className={styles.userProfileImage}
  //                 unoptimized
  //               />
  //             </div>
  //             <div className={styles.profileTitle}>
  //               <h3>{item.name}</h3>
  //               <h6>Cliente</h6>
  //             </div>
  //           </header>
  //           <div className={styles.feedbackText}>
  //             <p>{item.feedback}</p>
  //           </div>
  //           <div className={styles.starsGroup}>
  //             <AiFillStar className={styles.star} />
  //             <AiFillStar className={styles.star} />
  //             <AiFillStar className={styles.star} />
  //             <AiFillStar className={styles.star} />
  //             <AiFillStar className={styles.star} />
  //           </div>
  //         </div>
  //       ))}
  //     </Slider>
  //   </div>
  // );
}
