import ChooseSubject from "./components/ChooseSubject";
import GradeFrom from "./components/GradeFrom";

export default async function FinalGrade() {
  const res = await fetch(`https://lets-learn-nine.vercel.app/api/courses`);
  const data = await res.json();
  return (
    <div className="container w-full pt-24 mb-10">
      <div className="flex flex-col my-4 md:flex-row justify-between gap-2">
        <h1 className="text-2xl">Calculate Your Final Grade</h1>
        <ChooseSubject data={data} />
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-10">
        <GradeFrom />
      </div>
    </div>
  );
}
