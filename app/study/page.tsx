import { redirect } from "next/navigation";

export default function page() {
  redirect("/study/notes");
  return <div>Study redirect</div>;
}
