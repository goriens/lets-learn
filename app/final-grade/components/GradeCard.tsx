import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScoresTypes } from "@/types/scores";

export default function GradeCard({ scores }: { scores: ScoresTypes }) {
  const { gaa, quiz1, quiz2, finalQuiz, bonus } = scores;
  const totalScore = gaa * 0.1 + quiz1 * 0.2 + quiz2 * 0.3 + finalQuiz * 0.4;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Final Grade</CardTitle>
        <CardDescription>
          If you skip Quiz-1 or Quiz-2 you got marks out of 10
        </CardDescription>
      </CardHeader>
      {gaa && quiz1 && quiz2 && finalQuiz ? (
        <>
          <CardContent className="flex flex-col gap-4">
            <p className="flex justify-between  border-b">
              <span>GAA Score</span> {gaa}
            </p>
            <p className="flex justify-between  border-b">
              <span>Quiz-1 Score</span> {quiz1}
            </p>
            <p className="flex justify-between  border-b">
              <span>Quiz-2 Score</span> {quiz2}
            </p>
            <p className="flex justify-between  border-b">
              <span>End Term Score</span>
              {finalQuiz}
            </p>
            <p className="flex justify-between  border-b">
              <span>Bonus</span> {bonus}
            </p>
          </CardContent>
          <CardFooter>
            {totalScore > 40 ? (
              <p className="font-semibold text-green-600">
                Congratulation, Your score is ({totalScore})! PASS
              </p>
            ) : (
              <p className="font-semibold text-red-600 text-2xl">
                OPPS, Your Score is ({totalScore})! FAIL
              </p>
            )}
          </CardFooter>
        </>
      ) : (
        <CardContent className="text-2xl flex w-full justify-center h-full items-center">
          <p>Enter Your Marks</p>
        </CardContent>
      )}
    </Card>
  );
}
