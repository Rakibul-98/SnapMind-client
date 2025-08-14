"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../../redux/hooks";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { setCredentials } from "../../../redux/features/auth/authSlice";
import Image from "next/image";
import loginImg from "../../../assets/loginImg.jpg";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "sadiya@example.com",
      password: "secret123",
    },
  });

  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loginUser, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await loginUser(data).unwrap();
      toast.success("Login successful!");
      dispatch(
        setCredentials({
          user: res.data.user,
          accessToken: res.data.accessToken,
        })
      );
      router.push("/dashboard");
      reset();
    } catch (err) {
      console.error("❌ Login failed:", err);
      toast.error(
        (err as { data?: { message?: string } })?.data?.message ||
          "Invalid credentials"
      );
    }
  };

  return (
    <div className="">
      <div className="w-[400px] shadow-2xl bg-gray-50/10">
        <Image
          className="h-40 w-full object-cover"
          src={loginImg}
          alt="login Image"
        />
        <div className="p-4">
          <div className="">
            <h2 className="text-xl font-medium capitalize">Welcome back!</h2>
            <p>Log in to continue your learning journey</p>
            <p className="text-xs py-2">
              Don&apos;t have an account?{" "}
              <Link className="italic underline" href="/registration">
                Register here
              </Link>{" "}
              It will take just a minute...
            </p>
          </div>

          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              className={`w-full outline-0 border border-gray-50/10 bg-gray-50/10 p-2 ${
                errors.email && "border-red-500"
              }`}
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />

            <input
              className={`w-full outline-0 border border-gray-50/10 bg-gray-50/10 p-2 ${
                errors.password && "border-red-500"
              }`}
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />

            <button
              disabled={isLoading}
              className="w-full outline-0 bg-gray-50/10 p-2 cursor-pointer"
              type="submit"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            <div className="flex justify-end text-sm">
              <Link className="underline" href="/registration">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
