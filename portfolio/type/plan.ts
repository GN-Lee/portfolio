interface Plan {
  projectName: string;
  startDate: string;
  endDate: string;
  description: string;
}

const plan = () => {
  const plans: Plan[] = [
    {
      projectName: "Project Meagabox",
      startDate: "2025.01.09",
      endDate: "2025.01.13",
      description:
        "메가박스 앱을 HTML5와 CSS 효과를 사용하여 4명의 팀원이 Clone Coding 을 진행한 프로젝트",
    },
    {
      projectName: "Project KIA",
      startDate: "2025.02.03",
      endDate: "2025.02.10",
      description:
        "HTML, CSS, JS를 기반으로 4명의 팀원이 기아자동차 차량 및 상세 페이지를 구현한 프로젝트",
    },
    {
      projectName: "Project KGM",
      startDate: "2025.02.12",
      endDate: "2025.02.19",
      description:
        "GSAP 라이브러리와 Swiper 프레임 워크를 적극 활용하여 메인페이지를 Clone Coding 진행한 프로젝트",
    },
    {
      projectName: "Project To-Do List",
      startDate: "2025.03.03",
      endDate: "2025.03.07",
      description:
        "TS와 React를 사용하여 단페이지인 투두 리스트를 구현한 프로젝트",
    },
    {
      projectName: "Project Spotify",
      startDate: "2025.03.20",
      endDate: "2025.03.27",
      description: "Next.js와 Firebase를 사용하여 4명의 팀원이 진행한 프로젝트",
    },
    {
      projectName: "Project Portfolio",
      startDate: "2025.04.23",
      endDate: "2025.05.02",
      description: "Next.js와 NextJs를 사용하여 포트폴리오를 구현한 프로젝트",
    },
  ];
  const nextProject = [
    {
      projectName: "Project OTT",
      startDate: "2025.05.12",
      endDate: "",
      description:
        "Next.js와 NestJS를 기반으로 4~6명이 진행 예정인 프로젝트로 OTT사이트 혹은 삼성이나 애플같은 브랜드의 사이트를 Clone Coding 할 예정",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return { plans, nextProject, containerVariants, itemVariants };
};

export default plan;
