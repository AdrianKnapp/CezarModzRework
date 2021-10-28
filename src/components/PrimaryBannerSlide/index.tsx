import Image from 'next/image';

import Slider from 'react-slick';

import styles from './styles.module.scss';

export default function PrimaryBannerSlide() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  return (
    <div className={styles.bannerContainer}>
      <Slider {...sliderSettings}>
        <Image
          src="/images/banner1.png"
          alt="Banner"
          width={1060}
          height={335}
          quality={65}
          layout="responsive"
          className={styles.bannerImage}
        />
        <Image
          src="/images/banner2.png"
          alt="Banner"
          width={1060}
          height={335}
          quality={65}
          layout="responsive"
          className={styles.bannerImage}
        />
      </Slider>
    </div>
  );
}
