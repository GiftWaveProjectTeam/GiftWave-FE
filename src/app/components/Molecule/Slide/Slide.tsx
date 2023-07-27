import { useCallback, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import * as styles from "./Slide.css";
import FundingCard from "../FundingCard/FundingCard";
import Left from "../../Atom/Arrow/Left";
import Right from "../../Atom/Arrow/Right";

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
      <div
        className="slider"
        style={{ display: "flex", alignItems: "center", gap: 20 }}
      >
        <Left onClick={prevSlide} />
        <div className={styles.slideWapper}>
          <div className={styles.container} ref={slideWrapper}>
            {data &&
              data.map((value, index) => (
                <div key={index} className={styles.carouselItem}>
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
        <Right onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slide;
