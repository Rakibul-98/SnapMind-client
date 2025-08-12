"use client";

import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import Link from "next/link";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../../redux/hooks";
import { setCredentials } from "../../../redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

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
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-[400px] p-5 shadow-2xl">
        <div className="mb-5">
          <h2 className="text-xl font-medium capitalize">
            Welcome back to SnapMind!
          </h2>
          <small>Log in to continue your learning journey</small>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`w-full outline-0 border border-gray-50/10 bg-gray-50/10 py-1 px-2 ${
              errors.email && "border-red-500"
            }`}
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />

          <input
            className={`w-full outline-0 border border-gray-50/10 bg-gray-50/10 py-1 px-2 ${
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

          <p className="text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link className="italic underline" href="/registration">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
