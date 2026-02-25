export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  techTags: string[];
  features: string[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    slug: "css-frameworks",
    title: "CSS Frameworks",
    description:
      "A front-end project built using CSS frameworks to create a responsive and modern user interface. Demonstrates efficient use of utility-first CSS for rapid development and consistent styling.",
    longDescription:
      "This project was built to explore and apply CSS frameworks in a real-world scenario. The goal was to create a responsive, modern user interface using utility-first CSS tools like Tailwind CSS and Bootstrap. The project demonstrates how frameworks can speed up development while maintaining design consistency across different screen sizes. It served as an excellent exercise in understanding component-based styling and responsive design patterns.",
    image: "/images/css-frameworks.png",
    liveUrl: "https://css-frameworks-rust.vercel.app",
    repoUrl: "https://github.com/BiankaSzabo/css-frameworks",
    techTags: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    features: [
      "Fully responsive layout using CSS framework utilities",
      "Modern and clean user interface design",
      "Component-based styling approach",
      "Deployed on Vercel for fast delivery",
      "Cross-browser compatible styling",
    ],
    challenges: [
      "Learning the utility-first approach was initially challenging compared to writing custom CSS, but it greatly improved development speed.",
      "Ensuring the design remained consistent across different breakpoints required careful planning of responsive classes.",
      "Balancing framework defaults with custom design requirements taught valuable lessons about CSS specificity.",
    ],
  },
  {
    slug: "auction-house",
    title: "Auction House",
    description:
      "A semester project building a full-featured online auction platform. Users can create listings, place bids, and manage their profiles in a dynamic, real-time bidding environment.",
    longDescription:
      "The Auction House was developed as a semester project to build a complete online auction platform. Users can register, create auction listings with images and descriptions, place bids on items, and track their bidding history. The project features user authentication, dynamic bid updates, and a clean interface for browsing active auctions. It was a comprehensive exercise in building interactive web applications with real-time data.",
    image: "/images/auction-house.png",
    liveUrl: "https://semester-project-2-auctionhouse.vercel.app/",
    repoUrl:
      "https://github.com/EkremGursoy/semester-project-2-auctionhouse",
    techTags: ["JavaScript", "REST API", "Authentication", "Responsive Design"],
    features: [
      "User registration and authentication system",
      "Create, edit, and delete auction listings",
      "Real-time bidding functionality",
      "User profile with bidding history",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing the bidding logic to handle concurrent bids and ensure data integrity was a key technical challenge.",
      "Building a complete authentication flow with token management taught important lessons about web security.",
      "Designing an intuitive UX for the auction process required careful consideration of user flows and edge cases.",
    ],
  },
  {
    slug: "js-frameworks",
    title: "JS Frameworks",
    description:
      "A JavaScript frameworks course assignment showcasing modern frontend development with React. Features component-based architecture, state management, and API integration.",
    longDescription:
      "This project was built as a course assignment to demonstrate proficiency with modern JavaScript frameworks, specifically React. It features a component-based architecture, client-side routing, state management, and integration with external APIs. The project showcases best practices in React development including hooks, context, and responsive design. It served as a hands-on exercise in building scalable, maintainable frontend applications.",
    image: "/images/js-frameworks.png",
    liveUrl: "https://jsfw-2025-v1-bianka-jsframeworks.vercel.app",
    repoUrl:
      "https://github.com/BiankaSzabo/jsfw-2025-v1-bianka-jsframeworks",
    techTags: ["React", "JavaScript", "API Integration", "React Router"],
    features: [
      "Component-based architecture with React",
      "Client-side routing with React Router",
      "API integration for dynamic content",
      "State management with React hooks",
      "Responsive and accessible UI",
    ],
    challenges: [
      "Managing complex state across multiple components taught valuable lessons about React's state management patterns.",
      "Integrating with external APIs and handling loading states and errors required building robust data fetching logic.",
      "Structuring the project for scalability and maintainability was an important architectural exercise.",
    ],
  },
];
