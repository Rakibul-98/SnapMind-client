import React from "react";
import { useForm } from "react-hook-form";
import { GrSend } from "react-icons/gr";

interface CourseFormData {
  courseName: string;
}

export default function CourseCreate() {
  const { register, handleSubmit, watch, reset } = useForm<CourseFormData>();

  const courseNameValue = watch("courseName", "");

  const onSubmit = (data: CourseFormData) => {
    console.log("Creating course:", data.courseName);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md rounded-2xl flex flex-col gap-2 mt-2"
    >
      <div className="relative ">
        <input
          type="text"
          placeholder="Enter course details"
          {...register("courseName", { required: true })}
          className="peer w-full bg-[#134172] px-4 py-3 pr-12 rounded-4xl focus:outline-none z-10 relative shadow-2xl border border-gray-500"
        />

        {courseNameValue.trim() && (
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 transition-transform z-50 bg-gray-50/20 rounded-full p-2.5"
          >
            <GrSend className="hover:scale-125 duration-300" size={20} />
          </button>
        )}
      </div>
    </form>
  );
}
