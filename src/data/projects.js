export const projectsData = [
  {
    id: 1,
    title: "Tastio",
    category: "Full Stack",
    description:
      "Tastio is a multi-vendor food discovery platform connecting foodies with local restaurants. Featuring role-based dashboards, real-time reviews, and menu management, it delivers a secure and interactive experience using React, MongoDB, and Firebase.",
    image: "https://i.ibb.co.com/G4HCjGN0/Home.png",
    images: [
      "https://i.ibb.co.com/G4HCjGN0/Home.png",
      "https://i.ibb.co.com/C3X7184k/Screenshot-2026-01-16-172027.png",
      "https://i.ibb.co.com/G4HkVc9N/Screenshot-2026-01-16-173109.png",
      "https://i.ibb.co.com/1fxV8smx/Screenshot-2026-01-16-173121.png",
      "https://i.ibb.co.com/n8QFX8XW/Screenshot-2026-01-16-173133.png",
      "https://i.ibb.co.com/ks4QwYpm/Screenshot-2026-01-16-173142.png",
      "https://i.ibb.co.com/DgR73MWS/Review-Details.png",
      "https://i.ibb.co.com/5h1wQ7XF/Admin.png",
      "https://i.ibb.co.com/xtCPDY0P/Seller.png",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "TanStack Query",
    ],
    details:
      "Tastio transforms local food discovery into a SaaS-style ecosystem. It features a secure 3-tier architecture (Admin, Seller, User) where sellers manage digital menus and admins moderate content. Users can discover foods using advanced server-side filtering, share moments on a social feed, and earn badges on a dynamic leaderboard powered by MongoDB aggregations.",
    challenges:
      "Designing a scalable Role-Based Access Control (RBAC) system to secure routes and APIs for different user types was complex. Optimizing database performance using MongoDB Aggregation pipelines for the Leaderboard and Analytics dashboard required deep backend knowledge.",
    improvements:
      "Future updates will include a real-time chat system between sellers and customers, AI-powered dish recommendations based on user taste profiles, and a dedicated mobile application using React Native.",
  },
  {
    id: 2,
    title: "ScholarStream",
    category: "Full Stack",
    description:
      "ScholarStream is a comprehensive Scholarship Management System bridging students with universities. It features secure Stripe payments, role-based dashboards (Student, Moderator, Admin), and a seamless application workflow powered by the MERN stack.",
    image: "https://i.ibb.co.com/v674G1h1/Screenshot-2026-01-16-174314.png",
    images: [
      "https://i.ibb.co.com/v674G1h1/Screenshot-2026-01-16-174314.png",
      "https://i.ibb.co.com/x8Bbgx1y/Screenshot-2026-01-16-174354.png",
      "https://i.ibb.co.com/fYf0pS8g/Screenshot-2026-01-16-174406.png",
      "https://i.ibb.co.com/d9LtzzD/Screenshot-2026-01-16-174458.png",
      "https://i.ibb.co.com/d4HmPrGg/Screenshot-2026-01-16-174512.png",
      "https://i.ibb.co.com/b5Shpq7T/Screenshot-2026-01-16-174712.png",
      "https://i.ibb.co.com/z0psFxB/Screenshot-2026-01-16-174722.png",
      "https://i.ibb.co.com/kjxF9c5/Screenshot-2026-01-16-174758.png",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
      "TanStack Query",
      "JWT",
    ],
    details:
      "ScholarStream serves as a centralized platform for financial aid, managing the complete lifecycle from search to approval. It utilizes a secure 3-tier architecture where Admins manage the system, Moderators review applications, and Students apply/pay via Stripe. Key technical features include advanced server-side filtering, JWT-secured API endpoints, visual analytics with Recharts, and interactive feedback using Framer Motion.",
    challenges:
      "One significant challenge was orchestrating the multi-step application process involving payment verification; ensuring the database only updated application status after a confirmed Stripe payment intent required precise backend logic. Additionally, designing custom middleware to strictly separate Moderator and Admin capabilities to prevent unauthorized access to sensitive user data and analytics required complex validation.",
    improvements:
      "Future updates will focus on an AI-based recommendation system to automatically suggest scholarships based on user profiles, a live chat feature for real-time support between students and moderators, and an automated email notification service for application status updates.",
  },
  {
    id: 3,
    title: "Gamespace",
    category: "Frontend / React",
    description:
      "Gamespace is an engaging online library for discovering indie games. Built with React 19, it allows users to explore curated collections, filter by category, view system requirements, and manage a personal wishlist via Firebase.",
    image: "https://i.ibb.co.com/DfkRpy6R/Screenshot-2026-01-16-175116.png",
    images: [
      "https://i.ibb.co.com/DfkRpy6R/Screenshot-2026-01-16-175116.png",
      "https://i.ibb.co.com/N6qcSjMz/Screenshot-2026-01-16-175133.png",
      "https://i.ibb.co.com/vvRH1V0S/Screenshot-2026-01-16-175145.png",
      "https://i.ibb.co.com/8nFTJx3s/Screenshot-2026-01-16-175153.png",
      "https://i.ibb.co.com/23WqgGTz/Screenshot-2026-01-16-175211.png",
    ],
    techStack: [
      "React 19",
      "React Router 7",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Framer Motion",
      "Swiper.js",
    ],
    details:
      "Gamespace is a non-profit single-page application designed to connect gamers with indie developers. It leverages the latest React 19 and React Router 7 features for a fast, seamless user experience. Users can perform advanced searches, filter games by genre, and sort by ratings. The platform provides comprehensive game details—including PC system requirements, age ratings, and estimated playtimes—and allows users to bookmark favorites to a protected wishlist using Firebase Authentication.",
    challenges:
      "Adopting the newest React 19 and React Router 7 standards required adapting to new routing patterns and data loading strategies. Additionally, creating a complex filtering system that works simultaneously with search queries while maintaining smooth UI animations (via Framer Motion and Lottie) required careful state management and optimization.",
    improvements:
      "Future plans include integrating a public Game API (like RAWG) to automate library updates, adding a user review/comment section for community interaction, and implementing a dark/light mode toggle for better accessibility.",
  },
  {
    id: 4,
    title: "Green Fabric",
    category: "Next.js / Full Stack",
    description:
      "Green Fabric is a modern T-Shirt ecommerce platform built with Next.js 16 (App Router). It features secure Firebase authentication, product management with ImgBB image uploads, and a responsive UI powered by Tailwind CSS 4 and DaisyUI 5.",
    image: "https://i.ibb.co.com/Lz8y8TYw/Screenshot-2026-01-16-175521.png",
    images: [
      "https://i.ibb.co.com/Lz8y8TYw/Screenshot-2026-01-16-175521.png",
      "https://i.ibb.co.com/cKm4WDFS/Screenshot-2026-01-16-175533.png",
      "https://i.ibb.co.com/QjMbX8DT/Screenshot-2026-01-16-175603.png",
      "https://i.ibb.co.com/tPbT9DqQ/Screenshot-2026-01-16-175613.png",
      "https://i.ibb.co.com/pv4h1W3X/Screenshot-2026-01-16-175624.png",
      "https://i.ibb.co.com/XTxVsmn/Screenshot-2026-01-16-175632.png",
      "https://i.ibb.co.com/v4m2knyb/Screenshot-2026-01-16-175640.png",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "DaisyUI 5",
      "Firebase",
      "TanStack Query",
      "MongoDB",
      "Express.js",
    ],
    details:
      "Green Fabric is a lightweight yet powerful eCommerce web application designed for selling premium T-shirts. Built on the bleeding edge of the React ecosystem (Next.js 16, React 19, Tailwind 4), it utilizes the App Router for server-side optimization. Key features include a public-facing store with search and filtering, and a protected admin area where authenticated users can upload product images via ImgBB and manage the inventory using a MongoDB backend.",
    challenges:
      "One of the main technical hurdles was integrating Firebase Authentication seamlessly with Next.js 16's App Router to handle protected routes securely without hydration mismatches. Additionally, managing form state for product creation—including asynchronous image uploads to ImgBB and subsequent data storage—required careful orchestration using React Hook Form and TanStack Query.",
    improvements:
      "Future iterations will implement a full shopping cart and checkout process using Stripe, user-generated reviews for products, and an advanced dashboard for tracking sales and order history.",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    category: "Frontend / Creative",
    description:
      "A modern, interactive personal portfolio website built with React 19 and Vite. It features advanced animations using GSAP and Framer Motion, dynamic project filtering, and a fully responsive design to showcase my professional journey.",
    image: "https://i.ibb.co.com/xSV0CmvB/Screenshot-2026-01-16-180727.png",
    images: [
      "https://i.ibb.co.com/xSV0CmvB/Screenshot-2026-01-16-180727.png",
      "https://i.ibb.co.com/DDvhYnhc/Screenshot-2026-01-16-180746.png",
      "https://i.ibb.co.com/0RYfKqSN/Screenshot-2026-01-16-180755.png",
      "https://i.ibb.co.com/wFH5Lc06/Screenshot-2026-01-16-180802.png",
      "https://i.ibb.co.com/XrjrX2c0/Screenshot-2026-01-16-180811.png",
      "https://i.ibb.co.com/N6kZycHG/Screenshot-2026-01-16-180836.png",
      "https://i.ibb.co.com/mVSxrxcr/Screenshot-2026-01-16-180847.png",
    ],
    techStack: [
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "React Router v7",
      "Swiper.js",
      "EmailJS",
    ],
    details:
      "This portfolio serves as a comprehensive showcase of my skills and projects, designed with a focus on UI/UX and performance. Built on the React 19 ecosystem with Vite, it utilizes Tailwind CSS for a responsive layout that adapts seamlessly to all devices. The site features a native dark mode, a dynamic project filtering system, and detailed project pages with image galleries powered by Swiper.js. Advanced interactivity is achieved through a combination of Framer Motion for page transitions and GSAP for scroll-triggered effects.",
    challenges:
      "The primary challenge was orchestrating complex animations using both GSAP and Framer Motion without compromising performance or causing layout shifts. Ensuring that these animations felt smooth on mobile devices while maintaining a high Lighthouse score required code splitting and careful component optimization. Additionally, implementing a functional contact form without a backend server was solved by integrating EmailJS.",
    improvements:
      "Future plans include integrating a Headless CMS (like Sanity or Contentful) to manage project data and blog posts dynamically without redeploying code, as well as adding server-side rendering (SSR) for improved SEO performance.",
  },
  {
    id: 6,
    title: "Zap Shift",
    category: "MERN",
    description:
      "ZapShift is a fast and intuitive delivery application designed to streamline ordering, real-time tracking, and secure payments through a modern, user-friendly interface.",
    image: "https://i.ibb.co.com/W47Nk1Pv/Screenshot-2026-01-16-180038.png",
    images: [
      "https://i.ibb.co.com/W47Nk1Pv/Screenshot-2026-01-16-180038.png",
      "https://i.ibb.co.com/wZgv0BDK/Screenshot-2026-01-16-180059.png",
      "https://i.ibb.co.com/wZk8gZnZ/Screenshot-2026-01-16-180109.png",
      "https://i.ibb.co.com/N6MZ88Gn/Screenshot-2026-01-16-180117.png",
      "https://i.ibb.co.com/6JHvGSKN/Screenshot-2026-01-16-180126.png",
      "https://i.ibb.co.com/XxJsRHqL/Screenshot-2026-01-16-180147.png",
      "https://i.ibb.co.com/4ggChDC1/Screenshot-2026-01-16-180200.png",
      "https://i.ibb.co.com/4RVYCxqn/Screenshot-2026-01-16-180419.png",
      "https://i.ibb.co.com/QFFWQwNK/Screenshot-2026-01-16-180443.png",
    ],
    github: "https://github.com/hasnatfahmidkhan/zap-shift-client",
    demo: "https://zap-shift-web.web.app/",
    techStack: ["React", "Stripe", "MongoDB", "Express", "Firebase"],
    details:
      "ZapShift connects local businesses with customers requiring instant delivery. It manages the entire lifecycle of an order from request to pickup and final delivery, with role-based dashboards for admins, riders, and customers.",
    challenges:
      "Real-time location tracking for riders and updating the customer UI instantly (using WebSockets or polling) was the most complex feature. Securely handling payments via Stripe also required strict adherence to security protocols.",
    improvements:
      "Real-time map tracking integration with Google Maps API, a rider mobile app, and AI-based route optimization for deliveries.",
  },
];
