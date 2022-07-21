/* eslint-disable react/no-array-index-key */
import OffWhiteSection from "../common/OffWhiteSection";
import TechnologyCard from "../common/TechnologyCard";

function Technologies() {
  const technologies = ["react", "webpack", "tailwindcss", "nodejs"];

  const techGallery = technologies.map((technology, index) => (
    <TechnologyCard
      key={index}
      name={technology}
    />
  ));

  return (
    <OffWhiteSection>
      <h1>Technologies I Use</h1>
      <p className="pl-1 py-2">
        I started programming when I started college wher I learned the fundamentals of
      </p>
      <div className="py-5 flex items-center gap-2 overflow-x-scroll w-full">
        {techGallery}
      </div>
    </OffWhiteSection>
  );
}

export default Technologies;
