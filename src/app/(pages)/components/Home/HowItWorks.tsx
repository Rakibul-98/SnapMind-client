import React from "react";
import { BiSearch } from "react-icons/bi";
import { GrPlan } from "react-icons/gr";
import { MdQuiz } from "react-icons/md";
import { SiStudyverse } from "react-icons/si";

export default function HowItWorks() {
  const process = [
    {
      icon: <GrPlan />,
      title: "Set Your Plan",
      desc: "Choose your learning goals and preferred pace — SnapMind will customize your journey from day one.",
    },
    {
      icon: <BiSearch />,
      title: "Search Your Course",
      desc: "Browse or type in any topic, and let our AI instantly generate a personalized, up-to-date course outline.",
    },
    {
      icon: <SiStudyverse />,
      title: "Study the Topic",
      desc: "Learn through curated articles, videos, and resources pulled in real time to keep your knowledge fresh.",
    },
    {
      icon: <MdQuiz />,
      title: "Take Quiz to Evaluate",
      desc: "Test your understanding with dynamic AI-generated quizzes and track your progress instantly.",
    },
  ];

  return (
    <div className="py-10">
      <h3 className="capitalize text-center text-3xl font-semibold">
        How it works
      </h3>
      <p className="text-center text-sm mt-1">
        From idea to mastery — your AI-powered learning journey in four simple
        steps.
      </p>
      <div className="py-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {process.map((p, i) => (
          <div className="bg-gray-50/5 p-3 text-center shadow-2xl" key={i}>
            <p className="text-5xl flex justify-center">{p.icon}</p>
            <h3 className="my-2 capitalize text-lg font-semibold">{p.title}</h3>
            <p className="text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
