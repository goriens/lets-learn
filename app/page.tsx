import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { homeCard } from "@/data/homeCard";
import { AnimatedButton } from "@/components/buttons/AnimatedButton";

export default function Home() {
  return (
    <main>
      <section className="container w-full border pt-24">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="text-sm py-2">
              <span className="mr-2 text-primary">
                <Badge>New</Badge>
              </span>
              <span> IIT BS Degree Courses </span>
            </Badge>
            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1>
                Learn with
                <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  Let&apos;s Learn
                </span>
                BS Degree Courses
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              We&apos;re more than just a group, we&apos;re a community of
              passionate educate students. Get access to exclusive resources,
              and support.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <AnimatedButton>Explore courses</AnimatedButton>
              <Button
                asChild
                variant="outline"
                className="w-5/6 md:w-1/4 font-bold"
              >
                <Link href="#" target="_blank">
                  Join Our Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-8">
        <div className="text-center w-full text-4xl mt-10">
          <h2>OUR SUPER POWER</h2>
        </div>
        <HoverEffect items={homeCard} />
      </section>
    </main>
  );
}
