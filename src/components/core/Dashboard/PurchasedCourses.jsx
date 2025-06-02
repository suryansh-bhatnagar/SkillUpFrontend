import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


import { getUserEnrolledCourses } from "../../../services/operations/profileAPI"

export default function PurchasedCourses() {
  const { token } = useSelector((state) => state.auth)
  // const getEnrolledCourses = async () => {
  //   try {
  //     const res = await getUserEnrolledCourses(token);
  //     setEnrolledCourses(res);
  //   } catch (error) {
  //     console.log("Could not fetch enrolled courses.")
  //   }
  // };
  useEffect(() => {
    const getEnrolledCourses = async () => {
      try {
        const res = await getUserEnrolledCourses(token);
        setEnrolledCourses(res);
      } catch (error) {
        console.log("Could not fetch enrolled courses.")
      }
    };
    getEnrolledCourses();
  }, [token])

  return (
    <>
      <div className="text-3xl text-richblack-50">Purchased Courses</div>
        <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not Purchased any course yet.
        </p>
    </>
  )
}