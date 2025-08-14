import ArrowIcon from "@/components/ArrowIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";
const pastWork = [
  {
    className: "",
    position: "left",
    items: [
      {
        id: 0,
        name: "Chomp",
        description:
          "Ai optimized CRM and CMS system for the hospitality industry. ",
        image: "mockup0.png",
      },
      {
        id: 1,
        name: "BTV",
        description:
          "Enterprise Logistic and IoT portal that combined real time device tracking with bulk data analytics and visualization",
        image: "mockup1.png",
      },
    ],
  },
  {
    className: "mt-0 sm:mt-16",
    position: "right",
    items: [
      {
        id: 0,
        name: "Input App",
        description: "Allows workers to check containers at port and hubs.",
        image: "mockup3.png",
      },
      {
        id: 1,
        name: "ClipiFly",
        description:
          "Portal for leading TikTok marketing campaigns. System worked by itself to produce content, assign creators to projects and analize data.",
        image: "mockup4.png",
      },
      {
        id: 2,
        name: "OptiForm",
        description:
          "Platform for healthy life style. Complete with e-commerce, video streaming, health tips and influencers as creators.",
        image: "mockup5.png",
      },
    ],
  },
];

export default function Projects() {
  return (
    <>
      <p className="text-center">Work</p>
      <h2 className="text-center text-4xl font-semibold mt-2">
        Projects Worth Bragging About
      </h2>
      <ArrowIcon />

      <div className="flex mt-16 gap-0 sm:gap-24 justify-between flex-wrap">
        {pastWork.map((work, index) => (
          <div
            key={work.position}
            className={cn(`flex flex-col sm:flex-1`, work.className)}
          >
            {work.items.map((item) => (
              <div key={item.id} className="mb-16">
                {/* <CursorImage url={`/work/${item.image}`} /> */}
                <Image
                  alt={item.name + "image"}
                  src={`/work/${item.image}`}
                  className="object-contain w-full rounded-2xl"
                  height={1000}
                  width={600}
                />
                <p className="mt-3">
                  <span className="font-semibold text-black text-xl">
                    {item.name}
                  </span>
                  <span className="text-gray-500 text-lg">
                    {" "}
                    - {item.description}
                  </span>
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
