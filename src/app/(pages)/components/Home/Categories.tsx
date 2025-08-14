import Image from "next/image";
import React from "react";
import tech from "../../../../assets/tech.jpg";
import business from "../../../../assets/business.jpg";
import arts from "../../../../assets/arts.jpg";
import personal from "../../../../assets/personal.jpg";
import science from "../../../../assets/science.jpg";
import language from "../../../../assets/language.jpg";
import entrepreneurship from "../../../../assets/enterpreneur.jpg";
import health from "../../../../assets/health.jpg";

export default function Categories() {
  const categories = [
    {
      title: "Technology & Programming",
      img: tech,
    },
    {
      title: "Business & Entrepreneurship",
      img: entrepreneurship,
    },
    {
      title: "Creative Arts & Design",
      img: arts,
    },
    {
      title: "Personal Development & Lifestyle",
      img: personal,
    },
    {
      title: "Science & Engineering",
      img: science,
    },
    {
      title: "Language & Communication",
      img: language,
    },
    {
      title: "Health & Wellness",
      img: health,
    },
    {
      title: "Finance & Investment",
      img: business,
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-center">
        Explore Our Learning Worlds
      </h2>
      <p className="text-center text-sm mt-2">
        Choose your path and dive into courses curated by AI — from tech{" "}
        <br className="hidden md:block" /> and science to creativity and
        personal growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-50/10">
            <Image
              className="w-full grayscale-50"
              src={category.img}
              alt={category.title}
            />
            <h3 className="text-center p-2">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
