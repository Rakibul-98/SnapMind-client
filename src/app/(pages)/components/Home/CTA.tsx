"use client";

import { useForm } from "react-hook-form";
import newsletter from "../../../../assets/newsletter.svg";
import toast from "react-hot-toast";
import Image from "next/image";

type NewsletterFormData = {
  email: string;
};

export default function CTA() {
  const { register, handleSubmit, reset } = useForm<NewsletterFormData>();

  const onSubmit = (data: NewsletterFormData) => {
    if (data) {
      toast.success("Thanks for connect with us!");
      reset();
    }
  };

  return (
    <section className="py-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={newsletter}
            alt="Newsletter"
            className="lg:w-[70%] mx-auto md:mx-0"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Stay in the Loop</h2>
          <p className="my-2">
            Subscribe to our newsletter and never miss an update on new courses,
            AI learning tips, and exciting platform features.
          </p>
          <p className="mb-6 text-sm italic w-[90%]">
            No spam — just valuable insights. Get fresh learning resources,
            success stories from fellow learners, and early access to new
            SnapMind tools delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border focus:outline-none "
            />
            <button
              type="submit"
              className="bg-gray-50/10 text-base-100 px-6 py-2 hover:bg-gray-50/20 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
