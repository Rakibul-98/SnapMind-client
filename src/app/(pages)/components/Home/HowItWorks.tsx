import React from "react";
import { BiSearch } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { MdQuiz } from "react-icons/md";
import { SiStudyverse } from "react-icons/si";

export default function HowItWorks() {
  const process = [
    {
      icon: <GrPlan />,
      title: "set your plan",
      desc: "",
    },
    {
      icon: <BiSearch />,
      title: "search your course",
      desc: "",
    },
    {
      icon: <SiStudyverse />,
      title: "Study the topic",
      desc: "",
    },
    {
      icon: <MdQuiz />,
      title: "take quiz to evaluate",
      desc: "",
    },
  ];

  return (
    <div className="py-5">
      <h3 className="capitalize text-center text-2xl font-semibold">
        How this works
      </h3>
      <div className="py-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
        {process.map((p, i) => (
          <div
            className="bg-gray-50/5 py-3 px-2 text-center shadow-2xl"
            key={i}
          >
            <p className="text-3xl flex justify-center">{p.icon}</p>
            <h3 className="my-2 capitalize text-base">{p.title}</h3>
            {/* <p>{p.desc}</p> */}
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              explicabo?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
