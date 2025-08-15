export interface ApiResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}

export type userType = {
  email: string;
  exp?: number;
  iat?: number;
  isDeleted?: boolean;
  role: "admin" | "student";
  name: string;
  _id?: string;
  createdAt?: string;
};

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface RegisterData {
  id: string;
  email: string;
}

export type RegisterResponse = ApiResponse<RegisterData>;

export interface Course {
  _id: string;
  user: string;
  title: string;
  outline: string[];
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
