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
    href: "/Service",
    submenu: [
      { title: "Web Development", href: "/WebDevelopment" },
      { title: "Mobile App DEvelopment", href: "/MobApp" },
      { title: "Customer Software Development", href: "/SoftDev" },
      { title: "E-Commerce Solution", href: "/ECommerce" },
      { title: "Cloud Solution & DevOps", href: "/Cloud" },
      { title: "UI/UX Design", href: "/OurUI" },
      { title: "Digital Marketing", href: "/DigitalMarket" },
      { title: "IT Consultancy & Support", href: "/ITSupport" },
    ],
  },
  {
    title: "Projects",
    href: "/Projects",
  },
  {
    title: "Contact Us",
    href: "/Consultation",
  },
];

export default NavbarData;
