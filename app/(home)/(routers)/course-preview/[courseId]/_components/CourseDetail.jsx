import { Book } from "lucide-react";
import React from "react";

const CourseDetail = ({ courseDetail }) => {
  return (
    <div className="mt-5 mb-5 p-5 border rounded-md">
      <h2 className="text-[20px] font-bold">{courseDetail.name}</h2>
      <div>
        <Book className="h-6 w-6 text-purple-600 rounded-lg bg-purple-100 p-1 mt-2" />
      </div>
      <p className="line-clamp-4 mt-5 text-gray-500">
        {courseDetail.description}
      </p>
    </div>
  );
};

export default CourseDetail;
