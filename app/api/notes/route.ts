import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import * as courseData from "@/app/api/notes/data.json";

export async function GET(req: Request) {
  const filePath = path.join(process.cwd(), "@/app/api/notes/data.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return NextResponse.json(JSON.parse(fileContents));
}
