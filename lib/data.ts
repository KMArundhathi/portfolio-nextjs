import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import certichainImg from "@/public/certichain.png";
import secImg from "@/public/sec.png";
import blockhashImg from "@/public/blockhash.png";
import formImg from "@/public/form.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "R&D Engineer",
    location: "Kerala Blockchain Academy, Thiruvananthapuram",
    description:
      "I spearheaded the creation of a cutting-edge dashboard for Digital University Kerala. Utilizing Next.js and Material UI, I engineered a user-friendly interface that revolutionized academic certification processes. The project, Certichain, harnesses blockchain technology to ensure a secure and tamper-proof certification system.Additionally, I crafted a verification portal using Next.js and Tailwind CSS, enhancing the efficiency of certificate authentication processes.",
    icon: React.createElement(FaReact),
    date: "September 2023 - Present",
  },
  {
    title: "Research Fellow",
    location: "Kerala Blockchain Academy, Thiruvananthapuram",
    description:
      "I delved into blockchain technology, spearheading projects such as developing a website for the Blockchain Annual Summit 2022. Additionally, I crafted a user-friendly dashboard for the Kerala State Election, facilitating election officers in managing tasks efficiently. Leveraging Next.js and Material UI, the web application streamlined processes during and post-election periods.",
    icon: React.createElement(FaHtml5),
    date: "May 2022 - September 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Certichain",
    description:
      " Certichain, a platform that leverages blockchain technology to provide a seamless, tamperproof certification process for academic institutions.Our platform comes with multiple servings, such as multiple user management,  customisable templates,  course management modules, and many other functions, allowing academic institutions to tailor them to their needs. ",
    tags: ["React", "Next.js", "Material UI"],
    imageUrl: certichainImg
  },
  {
    title: "SEC Dashboard",
    description:
      "After declaration of an election, the tasks to be done during and after the election are handled by each election officer through this web app.",
    tags: ["React", "Next.js", "Material UI"],
    imageUrl: secImg,
  },
  {
    title: "BlockHashLive 2022",
    description: "I built a website called BlockHash Live 2022 for the Annual Blockchain Summit organized by Kerala Blockchain Academy. It's a hub for all summit events and programs. You can check it out at [BlockHash Live 2022](https://blockhashlive.kba.ai/).",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: blockhashImg,
  },
  {
    title: "Animated Form Interface",
    description: "Developed an animated form interface similar to Google Forms using HTML, CSS, and JavaScript. This project focused on creating a user-friendly, interactive experience for form submission.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: formImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Material UI",
  "Git",
  "Blockchain"
] as const;
