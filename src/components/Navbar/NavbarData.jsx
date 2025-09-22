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
      { title: "Web Development", href: "/Web " },
      { title: "Mobile App DEvelopment", href: "/" },
      { title: "Customer Software Development", href: "CSD" },
      { title: "E-Commerce Solution", href: "/Web " },
      { title: "Cloud Solution & DevOps", href: "/Web " },
      { title: "UI/UX Design", href: "/Web " },
      { title: "Digital Marketing", href: "/Web " },
      { title: "IT Consultancy & Support", href: "/Web " },
    ],
  },
  {
    title: "Projects",
    href: "/Projects",
  },
  {
    title: "Contact Us",
    href: "/ContactUs",
  },
];

export default NavbarData;
