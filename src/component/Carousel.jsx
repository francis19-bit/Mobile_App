import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ReactCarousel = ({ image, idName, countryName }) => {
  // const [itemName, setItemName] = useState("");
  // const handleImage = () => {};

  // useEffect(() => {
  //   // alert(itemName);
  // }, [itemName]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ width: "100vw" }}>
      <Carousel
        responsive={responsive}
        infinite={false}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {image.map((data) => (
          <div
            onClick={(e) => {
              idName(data.strMeal);
              countryName(data.strArea);
              // const otherNames = e.target.classList[data.strMeal];
              // console.log(otherNames);
            }}
            style={{
              background: "red",
              height: "30vh",
              width: "100vw",
              backgroundImage: `url(${data.strMealThumb})`,
              backgroundPosition: "center",
            }}
          >
            {/* {data.strMeal} */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReactCarousel;
