import Image from "next/image";
import React from "react";
import leaderBoardImage from "../../../../assets/leaderboard.png";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

export default function Gamification() {
  const gamificationSteps = [
    {
      icon: <FaTrophy />,
      title: "Earn Points",
      desc: "Complete courses and quizzes to earn points and track your progress.",
    },
    {
      icon: <FaMedal />,
      title: "Achieve Badges",
      desc: "Unlock badges for milestones and demonstrate your learning achievements.",
    },
    {
      icon: <FaStar />,
      title: "Climb Leaderboards",
      desc: "Compete with learners globally and see your rank improve in real time.",
    },
  ];

  return (
    <section className="py-10">
      <div className="flex flex-col lg:flex-row gap-5 items-stretch">
        <div className="flex-1">
          <Image
            src={leaderBoardImage}
            alt="Leaderboard illustration"
            className="rounded-md h-full w-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Grow with Gamification</h2>
          <p className="my-1 max-w-xl">
            SnapMind makes learning fun and engaging through points, badges, and
            leaderboards. Stay motivated and track your growth as you master new
            skills.
          </p>

          <div className="flex flex-col gap-3">
            {gamificationSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-3xl mt-1.5">{step.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
