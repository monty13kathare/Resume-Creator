import React from "react";
import uniqid from "uniqid";

const autofilledState = {
    info: [
      {
        name: "firstName",
        value: "Arvind",
        id: uniqid()
      },
      {
        name: "lastName",
        value: "Kathare",
        id: uniqid()
      },
      {
        name: "address",
        value: "Raipur CG , IN",
        id: uniqid()
      },
      {
        name: "website",
        value: "arvindkathare.com",
        id: uniqid()
      },
      {
        name: "email",
        value: "arvindkathare@gmail.com",
        id: uniqid()
      },
      {
        name: "phone",
        value: "555-555-5555",
        id: uniqid()
      },
      {
        name: "bio",
        value: "Motivated and results-driven Senior Software Engineer with 8+ years of experience in my field. I have continuously demonstrated experience in improving software performance by implementing new ideas, updating, testing and coding. Experience in development tools which increase accuracy and performance of software, especially in React and with React Redux, are my specialization. In my free time, I go on a walk with the two of my dogs or spend time with friends. I also play chess and appreciate any competitive environment when pursuing sports.",
        id: uniqid()
      },
      {
        name: "universityName",
        value: "CSVTU Raipur",
        id: uniqid()
      },
      {
        name: "universityDegree",
        value: "Bachelor of Engineering",
        id: uniqid()
      },
      {
        name: "universityDate",
        value: "2018 - 2022",
        id: uniqid()
      },
      {
        name: "schoolName",
        value: "Govt. Higher Secondory School  Raipur",
        id: uniqid()
      },
      {
        name: "schoolDegree",
        value: "HS Diploma",
        id: uniqid()
      },
      {
        name: "schoolDate",
        value: "20014 - 2018",
        id: uniqid()
      },
      {
        name: "github",
        value: "monty@kathare.com",
        id: uniqid()
      }
    ],

    experience: [
      { 
        isHovered: false,
        id: uniqid(),
        company: "Dice",
        position: "Senior Software Engineer",
        task: "I provided technical leadership for complex projects. I used the latest technologies such as Cloud Service, Visual Studio 2019 and Azure DevOps. I gained experience with data technologies such as SQL Servers, NoSQL databases, full text search engines and caching. My daily work consisted mostly of maintaining full project life-cycle tasks including testing, debugging, technical analysis, design and coding.",
        start: "2016",
        end: "Present"
      },
      { 
        isHovered: false,
        id: uniqid(),
        company: "Rose International",
        position: "Software Engineer",
        task: "I worked on the company's software development plans including all aspects of the SDLC in collaboration with peer programmers. My daily workflow here consisted of performing error analysis, assisting with IT issues and building/accessing databases including NoSQL and Node.js. I, together with my team of peers, developed 25+ Java Applications in the time of my employment.",
        start: "2014",
        end: "2016"
      }
    ],

    newExperience: { 
      isHovered: false,
      id: uniqid(),
      company: "",
      position: "",
      task: "",
      start: "",
      end: ""
    },

    skills: [
      { 
        isHovered: false,
        id: uniqid(),
        skill: "React"
      },
      { 
        isHovered: false,
        id: uniqid(),
        skill: "Redux toolkit"
      },
      { 
        isHovered: false,
        id: uniqid(),
        skill: "next.js"
      },
     
      { 
        isHovered: false,
        id: uniqid(),
        skill: "Tailwind"
      },
      { 
        isHovered: false,
        id: uniqid(),
        skill: "Typescript"
      },
      { 
        isHovered: false,
        id: uniqid(),
        skill: "Javascript"
      },
      { 
        isHovered: false,
        id: uniqid(),
        skill: "Saas"
      },
      { 
        isHovered: false,
        id: uniqid(),
        skill: "Git"
      },
    ],

    newSkill: {
      isHovered: false,
      id: uniqid(),
      skill: ""
    }
}

export default autofilledState;