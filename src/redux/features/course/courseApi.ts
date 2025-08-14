/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

export const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyCourses: builder.query<any, void>({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),
  }),
});

export const { useGetMyCoursesQuery } = courseApi;
