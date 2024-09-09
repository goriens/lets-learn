"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourseDataType } from "@/types/courseDataType";
import { useState } from "react";

export default function ChooseSubject({ data }: { data: CourseDataType }) {
  const [selectedLevel, setSelectedLevel] = useState<keyof CourseDataType | "">(
    ""
  );
  const [subject, setSubject] = useState<string>("");

  const handleSelectValue = (value: string) => {
    setSelectedLevel(value as keyof CourseDataType);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <Select onValueChange={handleSelectValue}>
        <SelectTrigger className="w-full md:w-[250px]">
          <SelectValue placeholder="Choose Level" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(data).map((level: string) => (
            <SelectItem key={level} value={level}>
              {level}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedLevel && (
        <Select onValueChange={(value: string) => setSubject(value)}>
          <SelectTrigger className="w-full md:w-[250px]">
            <SelectValue placeholder="Choose Subject" />
          </SelectTrigger>
          <SelectContent>
            {data[selectedLevel]?.map((sub: string) => (
              <SelectItem key={sub} value={sub}>
                {sub}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
