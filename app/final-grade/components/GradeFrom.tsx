"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { defaultFromType } from "@/types/defaultFormType";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GradeCard from "./GradeCard";
import { z } from "zod";
import { useState } from "react";
import { ScoresTypes } from "@/types/scores";

export default function GradeFrom() {
  const [scores, setScores] = useState<ScoresTypes>();
  const form = useForm<z.infer<typeof defaultFromType>>({
    resolver: zodResolver(defaultFromType),
    defaultValues: {
      // gaa: 0,
      // quiz1: 0,
      // quiz2: 0,
      // finalQuiz: 0,
      // bonus: 0,
    },
  });

  function onSubmit(values: z.infer<typeof defaultFromType>) {
    setScores(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="gaa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GAA Score</FormLabel>
              <FormControl>
                <Input placeholder="55%" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quiz1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quiz 1 Score</FormLabel>
              <FormControl>
                <Input placeholder="55%" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quiz2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quiz 2 Score</FormLabel>
              <FormControl>
                <Input placeholder="55%" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="finalQuiz"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Final Quiz Score</FormLabel>
              <FormControl>
                <Input placeholder="55%" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bonus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bonus</FormLabel>
              <FormControl>
                <Input placeholder="1 to 5" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Check Score
        </Button>
      </form>
      {scores && <GradeCard scores={scores} />}
    </Form>
  );
}
