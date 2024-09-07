"use client";
import { coursesByCategory } from "@/data/courses/courses";
import { FaRegNewspaper } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [level, setLevel] = useState<string>("Foundation");
  const levelCategory = {
    Foundation: coursesByCategory.foundation,
    Diploma: coursesByCategory.diploma,
    Degree: coursesByCategory.degree,
  };
  const handleCategoryChange = (value: string) => {
    setLevel(value);
  };
  const displayedLevel = levelCategory[level as keyof typeof levelCategory];

  return (
    <div className="p-4">
      <div className="mb-4">
        <Select onValueChange={handleCategoryChange}>
          <SelectTrigger className="font-semibold py-6">
            <SelectValue placeholder="Choose Degree Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Your Degree Level</SelectLabel>
              <SelectItem value="Foundation">Foundation</SelectItem>
              <SelectItem value="Diploma">Diploma</SelectItem>
              <SelectItem value="Degree">Degree</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {displayedLevel.map((course) => (
        <Link key={course.id} href={`/study/notes/${course.id}`}>
          <p className="border border-slate-600 p-4 my-1 rounded-sm cursor-pointer transition-all hover:bg-primary hover:text-secondary flex justify-between items-center">
            {course.title}
            <span>
              <FaRegNewspaper size={15} />
            </span>
          </p>
        </Link>
      ))}
    </div>
  );
}
