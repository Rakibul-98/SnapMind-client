/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { RegisterFormValues } from "../../../types";
import Link from "next/link";
import { useRegisterMutation } from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import Image from "next/image";
import registerImg from "../../../assets/registerImg.jpg";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>();

  const [registerUser, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const res = await registerUser(data).unwrap();
      toast.success("Registration successful:", res);
      reset();
    } catch (err: any) {
      console.error("❌ Registration failed:", err);
      toast.error(err?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="">
      <div className="w-[400px] shadow-2xl bg-gray-50/10">
        <Image
          className="h-40 w-full object-cover object-bottom"
          src={registerImg}
          alt="register Image"
        />
        <div className="p-4">
          <div className="">
            <h2 className="text-xl font-medium capitalize">
              Start your learning with us!
            </h2>
            <p className="text-sm my-2">
              Already registered?{" "}
              <Link className="italic underline" href="/login">
                Just Login
              </Link>{" "}
            </p>
          </div>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              className={`w-full border border-gray-50/10 outline-0 focus:outline-0 bg-gray-50/10 p-2 ${
                errors.name && "border border-red-500"
              }`}
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            <input
              className={`w-full outline-0 border border-gray-50/10 focus:outline-0 bg-gray-50/10 p-2 ${
                errors.email && "border border-red-500"
              }`}
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />

            <input
              className={`w-full outline-0 border border-gray-50/10 focus:outline-0 bg-gray-50/10 p-2 ${
                errors.password && "border border-red-500"
              }`}
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />

            <button
              className="w-full outline-0 focus:outline-0 bg-gray-50/10 p-2 cursor-pointer"
              type="submit"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
