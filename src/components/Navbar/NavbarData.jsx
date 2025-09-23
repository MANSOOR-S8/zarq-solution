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
      { title: "Web Development", href: "/" },
      { title: "Mobile App DEvelopment", href: "/" },
      { title: "Customer Software Development", href: "" },
      { title: "E-Commerce Solution", href: "/" },
      { title: "Cloud Solution & DevOps", href: "/" },
      { title: "UI/UX Design", href: "/" },
      { title: "Digital Marketing", href: "/" },
      { title: "IT Consultancy & Support", href: "/" },
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
