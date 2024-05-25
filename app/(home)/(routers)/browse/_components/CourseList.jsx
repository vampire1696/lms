import { Book } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseList = ({ courses }) => {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
      {courses.map((course, index) => (
        <Link
          href={"/course-preview/" + course.id}
          className="border rounded-lg p-2 cursor-pointer hover:border-purple-300"
        >
          <div key={index} className="">
            <Image
              src={course.banner.url}
              width={800}
              height={400}
              className="rounded-lg"
            />
            <div className="">
              <h2 className="mt-2 text-[18px] md:text-[16px] font-bold">
                {course.name}
              </h2>
            </div>

            <div>
              <Book className="h-6 w-6 text-purple-600 rounded-lg bg-purple-100 p-1 mt-2" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
