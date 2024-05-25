"use client";
import React, { useEffect, useState } from "react";
import CategoryFilter from "./_components/CategoryFilter";
import { getCourseList } from "@/app/_services";
import CourseList from "./_components/CourseList";

function Browse() {
  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = () => {
    getCourseList().then((res) => {
      console.log(res);
      setCourses(res.courseLists);
    });
  };
  const [courses, setCourses] = useState([]);

  return (
    <div className="">
      <CategoryFilter />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  );
}

export default Browse;
