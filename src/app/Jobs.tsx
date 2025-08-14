import { cn } from "@/lib/utils";
import { BookOpenIcon } from "lucide-react";

const jobs = [
  {
    id: 1,
    name: "Calda",
    duration: "Aug 2024 – Sep 2025",
    icon: "calda.png",
    points: [
      {
        id: 10,
        text: "Developed an IoT web portal for shipment tracking and monitoring",
      },
      {
        id: 11,
        text: "Built a mobile app for package status tracking and verification",
      },
      {
        id: 12,
        text: "Built a chemical analysis tool to extract and display data from documents in a structured, format for enterprise use",
      },
    ],
  },
  {
    id: 2,
    name: "OptiForm",
    duration: "Feb 2024 – Aug 2024",
    icon: "optiform.svg",
    points: [
      {
        id: 20,
        text: "Developed a subscription-based platform with video streaming, event listings, and an integrated e-commerce system",
      },
    ],
  },
  {
    id: 3,
    name: "ClipiFly",
    duration: "May 2023 – Jan 2024",
    icon: "clipifly.svg",
    points: [
      {
        id: 30,
        text: "Integrated with the TikTok API to analyze marketing data",
      },
      {
        id: 31,
        text: "Built a web portal and mobile app for campaign tracking and automated task assignment to content creators using custom algorithms",
      },
    ],
  },
  {
    id: 4,
    name: "CodeLink",
    duration: "Apr 2023 – Dec 2023",
    icon: "codelink.svg",
    points: [
      {
        id: 40,
        text: "Engineered a proprietary low-code/no-code platform for building React applications",
      },
      {
        id: 41,
        text: "Worked on the development of a custom compiler to support dynamic code",
      },
    ],
  },
  {
    id: 5,
    name: "Trogon",
    duration: "Dec 2022 – Apr 2023",
    icon: "trogon.png",
    points: [
      {
        id: 50,
        text: "Maintained a large-scale ERP used by major retail stores",
      },
    ],
  },
  {
    id: 6,
    name: "BattlePets",
    duration: "Dec 2021 – Nov 2022",
    icon: "",
    points: [
      { id: 60, text: "Developed a browser-based Web3 game" },
      { id: 61, text: "Integrated blockchain and smart contracts" },
    ],
  },
];

export default function Jobs() {
  return (
    <>
      <p className="text-center">Jobs</p>
      <h2 className="text-center text-4xl font-semibold mt-2">
        What I've Been Up To
      </h2>
      <div className="max-w-4xl mx-auto mt-10">
        {jobs.map((job) => {
          return (
            <div key={job.id} className="flex mb-4 gap-4">
              <div className="flex flex-col items-center">
                <div className={cn("flex items-center justify-center rounded-xl bg-white/30 p-2.5 size-8 shadow-lg backdrop-blur-lg", !job.icon && "bg-transparent shadow-none")}>
                  {job.icon && (
                    <img src={`/jobs/${job.icon}`} className="object-contain" />
                  )}
                </div>
                <div className="h-full w-1 bg-zinc-300 rounded-xl" />
              </div>
              <div>
                <p className="">
                  <span className="text-2xl font-semibold">{job.name}</span> (
                  {job.duration})
                </p>
                <ul className="list-disc list-inside">
                  {job.points.map((point) => (
                    <li key={point.id} className="">
                      {point.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <div className="flex mb-4 gap-4">
          <div>
            <p className="">
              <span className="text-2xl font-semibold">
                Freelance developer
              </span>{" "}
              (Feb 2018 - present)
            </p>
            <ul className="list-disc list-inside">
              <li className="">
                Delivered software solutions for real estate and hospitality
                businesses
              </li>
              <li className="">
                Implemented CRM systems for customer lifecycle and business
                process management
              </li>
              <li className="">
                Built tools for lead generation, inventory tracking, and sales
                optimization
              </li>
              <li className="">
                Integrated AI technologies including into business solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
