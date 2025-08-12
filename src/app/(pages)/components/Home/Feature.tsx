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
      title: "Pioneer education",
      description: "",
    },
    {
      icon: <IoAttach />,
      title: "cultivating engagement",
      description: "",
    },
    {
      icon: <ImConnection />,
      title: "building connections",
      description: "",
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
      <div className="grid grid-cols-2 gap-5 my-10">
        <div>
          <Image
            className="w-full h-[65vh] object-cover rounded-2xl"
            src={featureImg}
            alt="feature image"
          />
        </div>
        <div className="flex flex-col justify-between">
          {features.map((feature, i) => (
            <div
              className="bg-gray-50/5 py-3 px-2 text-center shadow-2xl rounded-2xl"
              key={i}
            >
              <p className="text-3xl">{feature.icon}</p>
              <h3 className="my-2 capitalize text-base">{feature.title}</h3>
              {/* <p>{p.desc}</p> */}
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                explicabo?
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
