// import { href } from "react-router";

const NavbarData = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/About",
  },
  {
    title: "Services",
    href: "/Services",
    submenu: [
      { title: "Web Development", href: "/WebDevelopment" },
      { title: "Mobile App Development", href: "/MobileAppDevelopment" },
      {
        title: "Customer Software Development",
        href: "/CustomSoftwareDevelopment",
      },
      { title: "E-Commerce Solution", href: "/ECommerceSolution" },
      { title: "Cloud Solution & DevOps", href: "/CloudSolutionDevOps" },
      { title: "UI/UX Design", href: "/UIUXDesign" },
      { title: "Digital Marketing", href: "/DigitalMarketing" },
      { title: "IT Consultancy & Support", href: "/ITConsultancySupport" },
    ],
  },
  {
    title: "Projects",
    href: "/Projects",
  },
  // {
  //   title: "Contact Us",
  //   href: "/Consultation",
  // },
];

export default NavbarData;
