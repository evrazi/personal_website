import Image from "next/image";

const whatIDo = [
  {
    id: 0,
    title: "Full stack",
    description: "Building modern, performant, and scalable web applications",
    image: "/do/webApp.png",
  },
  {
    id: 1,
    title: "Mobile apps",
    description:
      "Delivering mobile-first experiences with offline capabilities",
    image: "/do/mobileApp.png",
  },
  {
    id: 2,
    title: "AI",
    description: "Enhancing apps with AI-driven features",
    image: "/do/designSystem.png",
  },
  {
    id: 3,
    title: "Dev Ops",
    description:
      "Shipping, scaling, and maintaining applications in production",
    image: "/do/consulting.png",
  },
];

export default function Hero() {
  return (
    <>
      <div className="z-10 mx-auto flex max-w-6xl text-xs md:text-base flex-col items-center text-center px-4">
        <p>👋 Hi, I'm Lukas. A senior fullstack developer</p>
        <div>
          <h1 className="text-4xl mt-4 md:mt-8 font-semibold text-pretty lg:text-8xl">
            I build modern software solutions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base font-light">
            With over 7+ years of professional experience building enterprise
            ready web, backend, and mobile applications, I have experience in
            everything from AI to ERP systems and have built solutions with
            wonderful people from logistic, hospitality, energy and gaming
            sector
          </p>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-visible w-full mt-12">
        <div className="flex w-fit mx-auto gap-4 pb-2">
          {whatIDo.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl px-6 pb-6 shadow-[inset_0_0_5em_.1em_#fff] bg-gray-200/65 flex-shrink-0 w-60 backdrop-blur-lg`}
            >
              <Image
                alt={item.title + "image"}
                src={item.image}
                className="object-contain"
                height={120}
                width={200}
              />
              <p className="text-2xl font-semibold mt-8">{item.title}</p>
              <p className="text-xs mt-2 text-gray-800">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
