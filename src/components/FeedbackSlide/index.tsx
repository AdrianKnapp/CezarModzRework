import Image from 'next/image';

import Slider from 'react-slick';

import { AiFillStar } from 'react-icons/ai/';
import SlideButton from '../SlideButton';

import styles from './styles.module.scss';

export default function FeedbackSlide() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
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
  return (
    <div className={styles.bannerContainer}>
      <h2>Depoimentos</h2>
      <Slider {...sliderSettings}>
        <div className={styles.feedbackContainer}>
          <header>
            <div className={styles.userProfileImageBox}>
              <Image
                src="/images/profile.jpg"
                alt="feedback-1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.profileTitle}>
              <h3>Fulando Ciclano</h3>
              <h6>Cliente</h6>
            </div>
          </header>
          <div className={styles.feedbackText}>
            <p>
              If you use this site regularly and would like to help keep the
              site on the Internet, please consider donating a small sum to help
              pay for the hosting and bandwidth bill.
            </p>
          </div>
          <div className={styles.starsGroup}>
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
          </div>
        </div>
        <div className={styles.feedbackContainer}>
          <header>
            <div className={styles.userProfileImageBox}>
              <Image
                src="/images/profile.jpg"
                alt="feedback-1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.profileTitle}>
              <h3>Fulando Ciclano</h3>
              <h6>Cliente</h6>
            </div>
          </header>
          <div className={styles.feedbackText}>
            <p>
              If you use this site regularly and would like to help keep the
              site on the Internet, please consider donating a small sum to help
              pay for the hosting and bandwidth bill.
            </p>
          </div>
          <div className={styles.starsGroup}>
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
          </div>
        </div>
        <div className={styles.feedbackContainer}>
          <header>
            <div className={styles.userProfileImageBox}>
              <Image
                src="/images/profile.jpg"
                alt="feedback-1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.profileTitle}>
              <h3>Fulando Ciclano</h3>
              <h6>Cliente</h6>
            </div>
          </header>
          <div className={styles.feedbackText}>
            <p>
              If you use this site regularly and would like to help keep the
              site on the Internet, please consider donating a small sum to help
              pay for the hosting and bandwidth bill.
            </p>
          </div>
          <div className={styles.starsGroup}>
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
          </div>
        </div>
        <div className={styles.feedbackContainer}>
          <header>
            <div className={styles.userProfileImageBox}>
              <Image
                src="/images/profile.jpg"
                alt="feedback-1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.profileTitle}>
              <h3>Fulando Ciclano</h3>
              <h6>Cliente</h6>
            </div>
          </header>
          <div className={styles.feedbackText}>
            <p>
              If you use this site regularly and would like to help keep the
              site on the Internet, please consider donating a small sum to help
              pay for the hosting and bandwidth bill.
            </p>
          </div>
          <div className={styles.starsGroup}>
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
            <AiFillStar className={styles.star} />
          </div>
        </div>
      </Slider>
    </div>
  );
}
