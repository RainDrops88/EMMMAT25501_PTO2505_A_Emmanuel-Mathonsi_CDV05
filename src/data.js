export const projects = [
    {
        id: 1,
        year: 2026,
        title: "React Podcast Landing Page",
        brief: "Create dynamic Podcast App using React.js, fetch podcast data from an external API and dynamically render a responsive grid of podcast previews",
        technologies: ["HTML", "CSS", "Javascript", "React"],
        responsibilities: "Fetch podcast data from an API on initial page load, display a loading indicator while data is being fetched, and handle errors or empty results with a clear user message. Render a responsive grid layout of podcast previews using modular, reusable React components. Pass podcast data into components via props and render each podcast card.",
        link: "https://github.com/RainDrops88/EMMMAT25501_PTO2505_A_Emmanuel-Mathonsi_DJS03.git",
    },

    {
        id: 2,
        year: 2026,
        title: "Web Component Podcast Preview",
        brief: "Build a reusable and encapsulated custom HTML element that displays a podcast preview. The component should be designed to accept podcast data via attributes or properties, display relevant UI elements.",
        technologies: ["HTML", "CSS", "Javascript"],
        responsibilities: "Create a custom HTML element using customElements.define(), accept data as attributes or properties. Trigger a custom event when a user interacts with the component (e.g., clicking), so that the parent application can open a modal or take other actions without tightly coupling to the component's logic.",
        link: "https://github.com/RainDrops88/EMMMAT25501_PTO2505_A_Emmanuel-Mathonsi_DJS02.git",
    },

    {
        id: 3,
        year: 2025,
        title: "Kanban Task App",
        brief: "Implement a task management system where tasks are persisted in local storage, ensuring that tasks remain available even after refreshing the page or reopening the application",
        technologies: ["HTML", "CSS", "Javascript"],
        responsibilities: "On page load, the application should load tasks from local storage so that the latest task list is available, even after a refresh. Ensure that tasks are saved in local storage every time a new task is added so that tasks persist after the page refreshes. Tasks should be categorized correctly into their respective columns (e.g., To Do, Doing, Done) based on their status when loaded from local storage.",
        link: "https://github.com/RainDrops88/EMMMAT25501_PTO2505_A_Emmauel-Mathonsi_JSLPP.git",
    },

]