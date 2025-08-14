import ArrowIcon from "@/components/ArrowIcon";
import Carousel from "@/components/Carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import RagChat from "./RagChat";
import Projects from "./Projects";
import Jobs from "./Jobs";
import Hero from "./Hero";
import Skills from "./Skills";
import BottomPageNavigation from "./BottomPageNavigation";

const certifications = [
  {
    id: 0,
    image: "/associate_dev_badge.png",
  },
  {
    id: 1,
    image: "/billing_dev_badge.png",
  },
  {
    id: 2,
    image: "/professional_dev_badge.png",
  },
];

export default function Home() {
  return (
    <main className="">
      <BottomPageNavigation />
      <header className="mx-2 sm:mx-20 mt-6 absolute top-0 inset-y-0">
        <p className="text-xl sm:text-4xl font-semibold">Lukas</p>
      </header>

      <section
        id="home"
        data-name="home"
        className="h-lvh flex flex-col justify-center"
      >
        <Hero />
      </section>

      <section
        id="personal"
        data-name="personal"
        className="py-32 max-w-4xl mx-auto px-4"
      >
        <p className="text-center">Personal</p>
        <h2 className="text-center text-4xl font-semibold mt-2">
          A little about me
        </h2>

        <p className="mt-4 text-center">
          Hi, I'm Črt Božič — a software developer from Ljubljana, Slovenia,
          with over seven years of professional experience and 12+ years of
          coding experience. I've worked across the full stack, building
          everything from real-time web apps and mobile platforms to AI-powered
          tools and cloud-based systems. My background spans frontend and
          backend development, DevOps, mobile, IoT, and even Web3 and game
          development.
        </p>
        <p className="mt-2 text-center">
          I enjoy solving complex problems, creating practical and scalable
          solutions, and collaborating with teams to build well-designed,
          maintainable products. I care about code quality, user experience, and
          staying curious in a fast-changing field.
        </p>
        <p className="mt-2 text-center">
          Outside of work, I'm into hiking, wingsuiting, and hands-on tech
          projects like home automation, microcontrollers, and experimental
          drones. I'm currently developing an AI-powered documentation tool
          using RAG and collaborating on a custom-built VTOL drone.
        </p>
      </section>

      <section id="work" data-name="work" className="py-40 max-w-7xl mx-auto">
        <Projects />
      </section>

      <section id="jobs" data-name="jobs" className="py-40 max-w-7xl mx-auto">
        <Jobs />
      </section>

      {/*       <section
        id="overview"
        data-name="overview"
        className="py-40 max-w-7xl mx-auto"
      >
        <Skills />
      </section> */}

      {/*       <section
        id="overview"
        data-name="overview"
        className="py-40 max-w-7xl mx-auto"
      >
        <p className="text-center">certifications</p>
        <h2 className="text-center text-4xl font-semibold mt-2">
          Current certifications
        </h2>

        <div className="flex flex-wrap items-center gap-4 w-fit m-auto mt-20">
          {certifications.map((cert) => {
            return (
              <img
                src={`/certificates/${cert.image}`}
                className="size-60"
                key={cert.id}
              />
            );
          })}
        </div>
      </section> */}

      <section id="more" data-name="more" className="py-40 max-w-7xl mx-auto">
        <p className="text-center">More</p>
        <h2 className="text-center text-4xl font-semibold mt-2">
          Ask, and the Retrieval Model Shall Provide
        </h2>

        <div className="max-w-4xl mx-auto mt-20">
          <RagChat />
        </div>
      </section>
    </main>
  );
}
