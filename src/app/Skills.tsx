import ArrowIcon from "@/components/ArrowIcon";

const skills = [
  {
    id: 1,
    title: "Frontend",
    items: [
      { id: 100, name: "Next.js", skill: 5, image: "next" },
      { id: 101, name: "React", skill: 5, image: "react" },
      { id: 102, name: "PlayWright", skill: 5, image: "PlayWright" },
      { id: 103, name: "Jest", skill: 5, image: "Jest" },
      { id: 104, name: "Vitest", skill: 4, image: "Vitest" },
      { id: 105, name: "Angular", skill: 4, image: "angular" },
      { id: 106, name: "Cypress", skill: 3, image: "Cypress" },
      { id: 107, name: "SvelteKit", skill: 3, image: "sveltekit" },
      { id: 108, name: "Svelte", skill: 3, image: "svelte" },
      { id: 109, name: "Nuxt", skill: 3, image: "nuxt" },
      { id: 110, name: "Vue", skill: 3, image: "vue" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    items: [
      { id: 200, name: "Node.js", skill: 5, image: "node" },
      { id: 201, name: "Express", skill: 5, image: "express" },
      { id: 202, name: "FastAPI", skill: 4, image: "fastapi" },
      { id: 203, name: "Bun", skill: 4, image: "bun" },
      { id: 204, name: "NestJS", skill: 4, image: "nestjs" },
      { id: 205, name: "Deno", skill: 3, image: "deno" },
      { id: 206, name: "Hono", skill: 3, image: "hono" },
      { id: 207, name: "Django", skill: 3, image: "django" },
      { id: 208, name: ".Net", skill: 2, image: "net" },
    ],
  },
  {
    id: 3,
    title: "AI",
    items: [
      { id: 300, name: "AI gateway", skill: 4, image: "aigateway" },
      { id: 301, name: "PyTorch", skill: 4, image: "pytorch" },
      { id: 302, name: "TensorFlow", skill: 3, image: "tensorflow" },
      { id: 303, name: "OpenRouter", skill: 3, image: "openrouter" },
      { id: 304, name: "CUDA", skill: 3, image: "cuda" },
      { id: 305, name: "ComfyUI", skill: 2, image: "comfyui" },
    ],
  },
  {
    id: 4,
    title: "Cloud / DevOps",
    items: [
      { id: 400, name: "SST", skill: 5, image: "aigateway" },
      { id: 401, name: "Vercel", skill: 5, image: "aigateway" },
      { id: 402, name: "Docker", skill: 5, image: "aigateway" },
      { id: 403, name: "AWS", skill: 4, image: "aigateway" },
      { id: 404, name: "git", skill: 4, image: "aigateway" },
      { id: 405, name: "Google", skill: 4, image: "aigateway" },
      { id: 406, name: "Kubernetes", skill: 3, image: "aigateway" },
      { id: 407, name: "Terraform", skill: 3, image: "aigateway" },
      { id: 408, name: "Hetzner", skill: 3, image: "aigateway" },
      { id: 409, name: "RabbitMQ", skill: 2, image: "aigateway" },
    ],
  },
  {
    id: 5,
    title: "Mobile",
    items: [
      { id: 501, name: "React Native", skill: 5, image: "aigateway" },
      { id: 503, name: "Expo", skill: 5, image: "aigateway" },
      { id: 500, name: "Flutter", skill: 4, image: "aigateway" },
      { id: 502, name: "ElectricSQL", skill: 3, image: "aigateway" },
    ],
  },
  {
    id: 6,
    title: "Languages",
    items: [
      { id: 600, name: "JavaScript", skill: 5, image: "" },
      { id: 604, name: "TypeScript", skill: 5, image: "" },
      { id: 601, name: "Python", skill: 4, image: "" },
      { id: 603, name: "SQL", skill: 4, image: "" },
      { id: 605, name: "PHP", skill: 4, image: "" },
      { id: 602, name: "GO", skill: 3, image: "" },
      { id: 606, name: "C#", skill: 3, image: "" },
      { id: 607, name: "Dart", skill: 3, image: "" },
      { id: 608, name: "Solidity", skill: 2, image: "" },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <p className="text-center">Skills</p>
      <h2 className="text-center text-4xl font-semibold mt-2">
        Things I’m Pretty Great At
      </h2>
      <ArrowIcon />

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="flex">
              <p className="flex-1 text-xl font-medium">{skill.title}</p>

              <div className="flex-2 flex flex-wrap gap-4">
                {skill.items.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="shadow-[inset_0_0_3em_.1em_#fff] bg-gray-400/50 rounded-full px-2 py-1 flex gap-1 border border-zinc-200"
                    >
                      <img
                        src="/skills/nextjs.svg"
                        className="object-contain bg-white rounded-lg"
                      />
                      <p className="text-sm">{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
