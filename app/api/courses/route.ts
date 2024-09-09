import { CourseDataType } from "@/types/courseDataType";
import { NextResponse } from "next/server";

export async function GET() {
  const course: CourseDataType = {
    Degree: [
      "Software Engineering",
      "Software Testing",
      "AI: Search Methods for Problem Solving",
      "Deep Learning",
      "Programming in C for DS",
      "Computer Systems Design",
      "RL",
      "SPG",
      "Industry 4.0",
      "Financial Forensics",
    ],
    Diploma: [
      "DBMS",
      "PDSA",
      "MAD I",
      "ML Foundations",
      "JAVA",
      "MAD II",
      "MLT",
      "MLP",
      "BDM",
      "BA",
      "System Commands",
      "TDS",
    ],
    Foundation: [
      "CT",
      "Python",
      "English II",
      "Mathematics I",
      "Statistics I",
      "Mathematics II",
      "Statistics II",
    ],
  };

  return NextResponse.json(course);
}
