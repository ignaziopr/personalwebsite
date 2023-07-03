import {
 
  reactjs,
  tailwind,
  nodejs,

  git,
  docker,
  python,
  aws,
  graphql,
  java,
  ocaml,
  sonar,
  swift,
  toyota,
  cvusd,
  cu,
  twenty,
  soilie,
  sudoku
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Puerto Rico, 2003-2017",
    points: "My culture and my people. Here my love for soccer grew as in elementary school, debates between Ronaldo and Messi were common. In Puerto Rico, my values were formed alongside the people I truly care about today: my family... after a day of school, my grandparents would always pick me up and make pastelón or arroz y habichuelas and then take me to Taekwondo practice. It is my home and always will be."

  },
  {
    title: "California, 2017-2021",
    points: "I was forced to adapt to a new language, pushing myself out of my confort zone as I walked into a 2500 person school without knowing anyone. I learned about the blessing of starting over and being adaptable and how that can lead to understanding different perspectives and connecting with people of different backgrounds. I became a leader and realized the importance of maintaining a balanced lifestyle.",
  },
  {
    title: "New York, 2021-Present",
    points: "After moving three thousand miles away from my family, I realized the importance of responsibility and holding myself accountable, making sure that I do not fall behind. I had to learn to be vulnerable with myself, open up and trust others."
  },
  {
    title: "FUTURE",
    points: "I'm ambitious, dreaming about what is yet to come and excited to learn more!",
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "OCaml",
    icon: ocaml,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "sonar",
    icon: sonar,
  },
  {
    name: "swift",
    icon: swift,
  },
  {
    name: "python",
    icon: python
  },
];

const experiences = [
  {
    title: "Backend Software Developer",
    company_name: "Toyota Motors North America",
    icon: toyota,
    iconBg: "#aaaaaa",
    date: "May 2023 - Present",
    points: [
      "Enhanced the efficiency of API calls by integrating GraphQL to replace previous REST implementations and reducing the amount of data being fetched.",
      "Worked with SonarQube to improve over 200 issues of code quality and reduce technical debt for three distinct services.",
      "Learned about the Sprint system and how program management occurs at a large production scale level.",
    ],
  },
  {
    title: "CSMore Alumni",
    company_name: "Cornell Bowers: College of Computer and Information Science (CIS)",
    icon: cu,
    iconBg: "#aaaaaa",
    date: "July 2022 - August 2022",
    points: [
      "Completed an intense 4-week program that gave diverse students a preview into higher-level classes such as Discrete Math, Functional Programming, and Introduction to Computer Organization and Systems Programming",
      "Only 30 applicants were chosen from over 100, all from Cornell’s Top 10 CS program and paid a stipend."
    ],
  },
  {
    title: "Multi-Disciplinary Head Tutor",
    company_name: "Conejo Valley Unified School District",
    icon: cvusd,
    iconBg: "#aaaaaa",
    date: "August 2020 - May 2021",
    points: [
      "Administered tutoring as the head tutor for both the science center and world language center.",
      "Collaborated with UX developers and the school district board to tutor on the new CVUSD online platform during the peak of COVID-19.",
      "Worked with students from elementary school to high school, helping them understand class material 5 days a week." ],
  }
];

const testimonials = [
  {
    testimonial:
      "Reading \"Can't Hurt Me\" by David Goggins is a must! It changes your perception on human limits.",
    image: "../assets/davidgogging.jpg",
    link: "https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512287"
  },
  {
    testimonial:
      "My friend Hunter wrote a great article about dopamine sensitivity called \"Dangers of Being Happy\".",
    image: "../assets/dangershappy.png",
    link: "https://medium.com/@profoundthoughts/dopamine-detox-high-threshold-life-and-low-threshold-life-a95fb390989f"
  },
  {
    testimonial:
      "Here's a poetry collection I authored for a past English class, titled \"Reflections of Poetry\".",
    image: "../assets/covertwopoetry.jpeg",
    link: "../assets/IgnazioprPoetry.pdf"
  },
  
];

const projects = [
  {
    name: "Sudoku Solver",
    description:
    "Created a solver which would take a picture of an unsolved sudoku board and return the finished board. Integrated machine learning through a simple handwritten number recognition neural network to receive the input and combined that with various Python scripts that utilized camera and GUI APIs.",
    
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "neural networks",
        color: "green-text-gradient",
      },
    ],
    image: sudoku,
    source_code_link: "https://github.com/ignaziopr",
  },
  {
    name: "2048: Terminal Game",
    description:
      "Composed the game 2048 using the functional language OCaml completely from scratch for my Functional Programming final project.",
    tags: [
      {
        name: "OCaml",
        color: "blue-text-gradient",
      },
      {
        name: "TUI",
        color: "green-text-gradient",
      },
    ],
    image: twenty,
    source_code_link: "https://github.com/ignaziopr",
  },
  {
    name: "Soilie",
    description:
      "Created Soil-E, which suggests cover crops for farmers based on crop history, which aims to increase crop yield for farmers internationally and increase efficiency of farming through ensuring the soil has adequate nutrients. Utilized React Native to create a simple frontend, which I later connected with a backend that my teammate made.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo cli",
        color: "green-text-gradient",
      },
    ],
    image: soilie,
    source_code_link: "https://github.com/ignaziopr",
  },
];

export { services, technologies, experiences, testimonials, projects };