"use client";
import { getCourseById } from "@/app/_services";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./_components/VideoPlayer";
import CourseDetail from "./_components/CourseDetail";
import Enroll from "./_components/Enroll";

const CoursePreview = ({ params }) => {
  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, []);
  const [courseDetail, setCourseDetail] = useState([]);
  const getCourse = (courseId) => {
    getCourseById(courseId).then((res) => setCourseDetail(res.courseList));
  };
  return (
    courseDetail?.name && (
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            {courseDetail?.chapter[0] ? (
              <VideoPlayer videoUrl={courseDetail?.chapter[0]?.video?.url} />
            ) : null}
            <CourseDetail courseDetail={courseDetail} />
          </div>
          <div className="mx-5">
            <Enroll courseDetail={courseDetail} />
          </div>
        </div>
      </div>
    )
  );
};

export default CoursePreview;
