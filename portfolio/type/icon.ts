import React from "react";

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

const icon = () => {
  const frontendSkills: Skill[] = [
    {
      name: "HTML",
      icon: "https://cdn.simpleicons.org/html5/E34F26",
      proficiency: 95,
    },
    {
      name: "CSS",
      icon: "https://cdn.simpleicons.org/css3/1572B6",
      proficiency: 95,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      proficiency: 85,
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
      proficiency: 85,
    },
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react/61DAFB",
      proficiency: 90,
    },
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs/000000",
      proficiency: 95,
    },
  ];

  const backendSkills = [
    {
      name: "Database",
      icon: "https://cdn.simpleicons.org/mysql/4479A1",
      proficiency: 75,
    },
    {
      name: "Express.js",
      icon: "https://cdn.simpleicons.org/express/000000",
      proficiency: 80,
    },
    {
      name: "Nest.js",
      icon: "https://cdn.simpleicons.org/nestjs/E0234E",
      proficiency: 75,
    },
    {
      name: "Prisma",
      icon: "https://cdn.simpleicons.org/prisma/2D3748",
      proficiency: 80,
    },
  ];

  return { frontendSkills, backendSkills };
};

export default icon;
