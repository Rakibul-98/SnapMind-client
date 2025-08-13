import Image from "next/image";
import React from "react";
import featureImg from "../../../../assets/future education.jpg";
import { BiBook } from "react-icons/bi";
import { IoAttach } from "react-icons/io5";
import { ImConnection } from "react-icons/im";

export default function Feature() {
  const features = [
    {
      icon: <BiBook />,
      title: "AI-Powered Learning",
      description:
        "Experience personalized education where every course is generated and updated by AI to match your goals and skill level.",
    },
    {
      icon: <IoAttach />,
      title: "Engaging Learning Experience",
      description:
        "Stay motivated through gamified quizzes, points, and leaderboards designed to make learning fun and interactive.",
    },
    {
      icon: <ImConnection />,
      title: "Global Learner Network",
      description:
        "Connect with a vibrant community of learners, share knowledge, and grow together through discussions and collaboration.",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h2 className="capitalize text-4xl font-semibold leading-10 ">
          seamless learning, <br /> anywhere, anytime
        </h2>
        <p className="mt-5 text-sm">
          We prioritize flexibility, ensuring that you have the freedom to{" "}
          <br /> learn at your own pace, own topic, at any time that suits your
          schedule.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 my-10 items-stretch">
        <div className="hidden md:block">
          <Image
            className="w-full h-full object-cover rounded-2xl"
            src={featureImg}
            alt="feature image"
          />
        </div>
        <div className="flex flex-col justify-between gap-3 h-full">
          {features.map((feature, i) => (
            <div
              className="bg-gray-50/5 px-5 py-3 shadow-2xl rounded-2xl"
              key={i}
            >
              <p className="text-3xl">{feature.icon}</p>
              <h3 className="my-2 capitalize text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
