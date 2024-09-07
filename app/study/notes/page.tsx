import { BorderButton } from "@/components/buttons/AnimatedButton";

interface Course {
  id: string;
  title: string;
}

interface CoursesByCategory {
  degree: Course[];
  diploma: Course[];
}

interface CoursesProps {
  courses: CoursesByCategory;
}

async function fetchCourses(): Promise<CoursesByCategory> {
  const res = await fetch("http://localhost:3000/api/notes");
  return res.json();
}

export default async function Notes() {
  const courses = await fetchCourses();
  console.log(courses, "000");

  return (
    <div className="p-4 flex justify-center items-center h-full text-4lg">
      <BorderButton>Choose Your Subject</BorderButton>
    </div>
  );
}
