import headerBg from "../../../assets/courseImg.jpg";
import CourseCreate from "./CourseCreate";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${headerBg.src})`,
      }}
      className="p-5 rounded-lg bg-cover  bg-no-repeat h-60 shadow-2xl flex items-center"
    >
      <div className="">
        <p className="uppercase font-semibold">online course</p>
        <h3 className="capitalize text-3xl py-2">
          Sharpen your skills with <br className="hidden md:block" />
          professional online courses
        </h3>
        <CourseCreate />
      </div>
    </div>
  );
}
