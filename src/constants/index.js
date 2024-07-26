import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  os,
  dbms,
  sql,
  reactjs,
  htmlcss,
  
  nodejs,
  mongodb,
  git,
  python,
  java,
  nitw,
  abhyaz,
  unknown,
  AIPodcaster,
  SocialMediaApp,
  bingezone,
  musicacademy,
  ReactAdminDashboard,

  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML Css",
    icon: htmlcss,
  },
  
  {
    name: "OS",
    icon: os,
  },
  {
    name: "Dbms",
    icon: dbms,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Bachelor's Degree in Computer Science",
    company_name: "Nit Warangal",
    icon: nitw,
    iconBg: "#383E56",
    date: "December 2020 - May 2024",
    points: [
      "Studied core subjects including Data Structures, Algorithms, Operating Systems, and Database Management.",
      "Worked on various projects involving web development, database management, and software engineering principles.",
      "Participated in coding competitions and hackathons, enhancing problem-solving skills and teamwork.",
     
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Abhyaz",
    icon: abhyaz,
    iconBg: "#E6DEDD",
    date: "April 2024 - May 2024",
    points: [
      "Contributed to the development of the Campus Recruitment System, enhancing efficiency in the placement process",
       " Developed detailed documentation and user guides for the software",

      
    ],
  },
  {
    title: "Upcoming Role",
    company_name: "Software Engineer at [XXXXX]",
    icon: unknown,
    iconBg: "#383E56",
    date: "july 2024 - Jan 2050",
    points: [
      "Excited  for future opportunities to join [XXXXX] and contribute to their innovative projects.",
      " I'm always eager to take on new challenges and collaborate with forward-thinking teams. If you are looking for a dedicated and skilled developer to join your team, let's connect and discuss how I can contribute to your projects. Together, we can build something remarkable!",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "His participation in Deep learning based Final year Project at NITW and hackathons showcased his strong problem-solving skills and teamwork.",
    name: "Dr. M Srinivas",
    designation: "Asst. Professor",
    company: "Nitw CSE Department",
    image: "https://erp.nitw.ac.in/ext/profile/getUserImage/cs-msv",
  },
  {
    testimonial:
      "Amit's performance as a Software Development Intern at Abhyaz was outstanding. His contributions to our CRS projects were invaluable.",
    name: "Shruti Gupta",
    designation: "Project Manager",
    company: "Abhyaz",
    image: "https://media.licdn.com/dms/image/D5635AQHKfLe1OgmbgA/profile-framedphoto-shrink_400_400/0/1713447087456?e=1722531600&v=beta&t=MnSTbc_qeoC76iY4q62-cEsouvhvT0gSmwXZZOBDNRA",
  },
  {
    testimonial:
      "Amit's leadership and organizational skills are evident from his role as Class Representative and Subcore in Springspree at NIT Warangal,showcasing his ability to engage and lead large groups.",
    name: "Bidyadhar Subudhi",
    designation: "Prof.",
    company: "Nitw Director",
    image: "https://iitgoa.ac.in/~bidyadhar/img1.png",
  },
 
];

const projects = [
  {
    name: "AIPodcaster",
    description:
      "Developed AIPodcaster, an AI SaaS platform for creating, discovering, and enjoying podcasts with advanced features like AI-generated text-to-audio conversion with multi-voice functionality and AI-generated thumbnails",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
        {
          name:"clerk",
          color: "orange-text-gradient",
        },
        {
          name: "convex",
          color:"blue-text-gradient",
        }
      ],
    image: AIPodcaster,
    source_code_link: "https://github.com/Akmeena4u/AIPodcaster",
    live_demo_link: "https://ai-podcaster-pi.vercel.app/",
  },
  {
    name: "Snapgram",
    description:
      "Implemented a Full-Stack Social Media Application that ensures secure user authentication, profile management, seamless follower interactions, and allows users to perform CRUD operations on their posts with real-time chat functionality",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: SocialMediaApp,
    source_code_link: "https://github.com/",
    live_demo_link: "https://ai-podcaster-pi.vercel.app/",
  },
  {
    name: "ReactAdmin-dashboard",
    description: "Developed an admin dashboard application using React, providing a user-friendly interface for managing shoping data, monitoring users, and generating reports.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: ReactAdminDashboard, // replace with the actual image import or path
    source_code_link: "https://github.com/Akmeena4u/ReactAdmin-dashboard",
    live_demo_link: "https://main--admindashboardfor4u.netlify.app/", // replace with the actual live demo link
  },
  {
    name: "Music-Academy",
    description: "Developed an interactive UI of music academy website featuring diverse courses, personalized instruction, and real-time feedback.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "aceternityUI",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: musicacademy, // replace with the actual image import or path
    source_code_link: "https://github.com/Akmeena4u/MusicAcademy",
    live_demo_link: "https://main--musickaschool.netlify.app/", // replace with the actual live demo link
  },
  {
    name: "Bingezone",
    description: "Developed a static movie website featuring various categories such as Trending and New Releases. The site includes an attractive hero section and offers a dark mode functionality for an enhanced user experience",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "responsiveness",
        color: "orange-text-gradient",
      },
    ],
    image: bingezone, // replace with the actual image import or path
    source_code_link: "https://github.com/Akmeena4u/BasicMovieApp",
   live_demo_link: "https://akmeena4u.github.io/BasicMovieApp/", // replace with the actual live demo link
  },
  
];

export { services, technologies, experiences, testimonials, projects };
