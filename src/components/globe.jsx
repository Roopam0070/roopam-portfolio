import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex w-[400px] h-[400px] items-center justify-center overflow-hidden rounded-lg bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
