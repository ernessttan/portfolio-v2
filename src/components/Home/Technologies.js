/* eslint-disable react/no-array-index-key */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import OffWhiteSection from "../common/OffWhiteSection";
import TechnologyCard from "../common/TechnologyCard";

function Technologies() {
  const technologies = ["react", "webpack", "tailwindcss", "nodejs", "express", "mongodb", "python", "npm", "javascript", "git"];
  // TODO: Make Card bigger on larger screen sizes
  // TODO: Add arrow buttons for gallery on larger screen
  const techGallery = technologies.map((technology, index) => (
    <TechnologyCard
      key={index}
      name={technology}
    />
  ));

  const handleScrollLeft = () => {
    const techCarousel = document.getElementById("techCarousel");
    techCarousel.scrollLeft -= 300;
  };

  const handleScrollRight = () => {
    const techCarousel = document.getElementById("techCarousel");
    techCarousel.scrollLeft += 300;
  };

  return (
    <OffWhiteSection>
      <h1 className="dark:dark-text md:desktop lg:desktop-large">Technologies I Use</h1>
      <p className="py-2 dark:dark-text md:desktop lg:desktop-large">
        I started programming when I started college wher I learned the fundamentals of
      </p>
      <div className="flex items-center gap-5">
        <button onClick={handleScrollLeft} type="button" className="hidden w-16 h-16 dark:text-offwhite md:block">
          <ChevronLeftIcon />
        </button>
        <div className="py-5 flex items-center gap-2 overflow-x-scroll w-full" id="techCarousel">
          {techGallery}
        </div>
        <button onClick={handleScrollRight} type="button" className="hidden w-16 h-16 dark:text-offwhite  md:block">
          <ChevronRightIcon />
        </button>
      </div>

    </OffWhiteSection>
  );
}

export default Technologies;
