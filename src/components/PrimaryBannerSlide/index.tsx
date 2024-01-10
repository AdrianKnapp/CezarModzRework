/* eslint-disable @typescript-eslint/ban-ts-comment */
import Image from 'next/image';
import React from 'react';

import Slider from 'react-slick';

import styles from './styles.module.scss';

type Banner = {
  id: number;
  title: string;
  banners: {
    url: string;
  };
};

type PrimaryBannerSlideProps = {
  banners: Banner[];
};

type ImageLoaderProps = {
  src: string;
};

export const PrimaryBannerSlide: React.FC<PrimaryBannerSlideProps> = ({
  banners,
}) => {
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

  const ImageLoader = ({ src }: ImageLoaderProps) => src;

  const bannersList = banners.map((banner) => (
    <div key={banner.id}>
      <Image
        key={banner.title}
        src={banner.banners.url}
        alt={banner.title}
        width={1060}
        height={335}
        quality={65}
        layout="responsive"
        className={styles.bannerImage}
        loader={ImageLoader}
        unoptimized
      />
    </div>
  ));

  return (
    <div className={styles.bannerContainer}>
      <Slider {...sliderSettings}>{bannersList as any}</Slider>
    </div>
  );
};

export default PrimaryBannerSlide;
