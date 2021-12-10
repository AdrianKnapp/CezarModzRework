import Image from 'next/image';

import Slider from 'react-slick';

import styles from './styles.module.scss';

type Banner = {
  id: number;
  title: string;
  banners: {
    formats: {
      medium: {
        url: string;
      };
    };
  };
};

type PrimaryBannerSlideProps = {
  banners: Banner[];
};

type ImageLoaderProps = {
  src: string;
};

export default function PrimaryBannerSlide({
  banners,
}: PrimaryBannerSlideProps) {
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

  return (
    <div className={styles.bannerContainer}>
      <Slider {...sliderSettings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <Image
              key={banner.title}
              src={banner.banners.formats.medium.url}
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
        ))}
      </Slider>
    </div>
  );
}
