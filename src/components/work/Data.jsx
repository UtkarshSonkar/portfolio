import chatapp from "../../assets/chat-app.jpg";
import taskmanager from "../../assets/task-manager.png";
import Fitness from "../../assets/Fitness.png";
import openapi from "../../assets/openapi.png";
import bookscart from "../../assets/bookscart.jpg";
import tablebooking from "../../assets/tablebooking.png";
import weatherapi from "../../assets/weatherapi.png";
import Dashboard from "../../assets/Dashboard.png";
import SearchImage from "../../assets/optimized-searching-image2.png";
import jsscribbleImage from "../../assets/jsscribble.png";

export const projectsData = [
  {
    id: 1,
    image: jsscribbleImage,
    title: "JS Runtime code editor (js-scribble)",
    category: "frontend",
    url: "https://github.com/UtkarshSonkar/js-scribble",
    skills: "React, Redux, Typescript, CLI, NPM, Lerna, ",
    demo: "https://www.npmjs.com/package/js-scribble",
  },
  {
    id: 2,
    image: Dashboard,
    title: "Company Dashboard",
    category: "frontend",
    url: "https://github.com/UtkarshSonkar/company-dashboard-MERN",
    skills: "MERN, RTK Query, Redux, Material UI",
    demo: "https://company-dashboard-frontend.onrender.com",
  },
  {
    id: 3,
    image: Fitness,
    title: "Fitness Application",
    category: "frontend",
    url: "https://github.com/UtkarshSonkar/Gym-typescript-react",
    skills: "React, TypeScript, Vite, CSS",
    demo: "https://2ad36b25.gym-typescript-react.pages.dev/",
  },
  {
    id: 4,
    image: SearchImage,
    title: "Optimized-searching-images",
    category: "frontend",
    url: "https://github.com/UtkarshSonkar/Optimized-search-application",
    skills: "React, TypeScript, CSS, APIs",
    demo: "https://optimized-search-application.vercel.app/",
  },
  {
    id: 5,
    image: chatapp,
    title: "Chatting Application",
    category: "backend",
    url: "https://github.com/UtkarshSonkar/Chat-app",
    skills: "Nodejs, Web-sockets",
    demo: "https://chat-app-ztgd.onrender.com",
  },
  {
    id: 6,
    image: taskmanager,
    title: "Task Manager",
    category: "backend",
    url: "https://github.com/UtkarshSonkar/task-manager",
    skills: "Nodejs, JavaScript, MongoDB, Express",
  },
  {
    id: 7,
    image: openapi,
    title: "Openapi-To-ZodSchema converter",
    category: "frontend",
    url: "https://github.com/UtkarshSonkar/openapi-to-zod-converter",
    skills: "TypeScript, OpenAPI",
  },
  {
    id: 8,
    image: bookscart,
    title: "BooksCart App",
    category: "projects",
    url: "https://github.com/UtkarshSonkar/Books-Cart",
    skills: "React, TypeScript, Redux",
  },
  {
    id: 9,
    image: tablebooking,
    title: "Table Booking",
    category: "projects",
    url: "https://github.com/UtkarshSonkar/restaurant",
    skills: "React, Redux",
  },
  {
    id: 10,
    image: weatherapi,
    title: "Live Weather Application",
    category: "projects",
    url: "https://github.com/UtkarshSonkar/live-weather",
    skills: "Nodejs, JavaScript, APIs",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "frontend",
  },
  {
    name: "backend",
  },
  {
    name: "projects",
  },
];
