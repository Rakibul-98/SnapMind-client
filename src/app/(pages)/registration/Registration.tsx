/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { RegisterFormValues } from "../../../types";
import Link from "next/link";
import { useRegisterMutation } from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";

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
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-[400px] p-5 shadow-2xl">
        <div className="mb-5 spay3">
          <h2 className="text-xl font-medium capitalize">
            Start your learning with us!
          </h2>
          <small>No registration overhead!</small>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`w-full border border-gray-50/10 outline-0 focus:outline-0 bg-gray-50/10 py-1 px-2 ${
              errors.name && "border border-red-500"
            }`}
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          <input
            className={`w-full outline-0 border border-gray-50/10 focus:outline-0 bg-gray-50/10 py-1 px-2 ${
              errors.email && "border border-red-500"
            }`}
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />

          <input
            className={`w-full outline-0 border border-gray-50/10 focus:outline-0 bg-gray-50/10 py-1 px-2 ${
              errors.password && "border border-red-500"
            }`}
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />

          <button
            className="w-full outline-0 focus:outline-0 bg-gray-50/10 p-2"
            type="submit"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
          <p className="text-sm text-center">
            Already registered?{" "}
            <Link className="italic underline" href="/login">
              Login here
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
