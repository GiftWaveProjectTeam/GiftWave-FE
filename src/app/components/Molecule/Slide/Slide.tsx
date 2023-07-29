import { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";
import * as styles from "./Slide.css";
import { FundingCard, ArrowLeft, ArrowRight } from "@components";

type data = {
  title: string;
  maxAmount: number;
  curAmount: number;
  image?: string | StaticImageData;
};
interface SlideProps {
  data: data[];
}

const Slide = ({ data }: SlideProps) => {
  const slideWrapper = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slideWrapper.current) {
      const slideItems = Array.from(
        slideWrapper.current.children
      ) as HTMLElement[];

      slideItems.forEach((slide, index) => {
        const distanceFromCenter = Math.abs(index - currentIndex);

        slide.style.zIndex =
          distanceFromCenter <= 2 ? `${5 - distanceFromCenter}` : "0";

        slide.style.transform = `translateX(${(index - currentIndex) * 30}%)`;
      });
    }
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ArrowLeft onClick={prevSlide} />
        <div className={styles.slideWapper}>
          <div className={styles.slideContainer} ref={slideWrapper}>
            {data &&
              data.map((value, index) => (
                <div key={index} className={styles.slidelItem}>
                  <FundingCard
                    title={value.title}
                    maxAmount={value.maxAmount}
                    curAmount={value.curAmount}
                    image={value.image}
                  />
                </div>
              ))}
          </div>
        </div>
        <ArrowRight onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slide;
