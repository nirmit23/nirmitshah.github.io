/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nirmit's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Nirmit Shah Portfolio",
    type: "website",
    url: "http://Nirmithathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Nirmit Shah",
  logo_name: "Nirmit Shah",
  // nickname: "layman_brother",
  subTitle:
    "Results-driven developer specializing in full-stack  development. With expertise in technologies like Next.js keeping a track record of optimizing performance, enhancing user experience, and tackling complex challenges.",
  resumeLink:
    "https://drive.google.com/file/d/1q3z7tIrn-JrVzzjYvRbFZaW6axbsn4N3/view?usp=sharing",
  portfolio_repository: "https://github.com/Nirmit1919/masterPortfolio",
  githubProfile: "https://github.com/Nirmit1919",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shah-nirmit/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:shahnirmit231999@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/niirmiit?igsh=dTlvc3N6aHYwNDVu&utm_source=qrv",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Software Engineer ",
      fileName: "FullStackImg",
      skills: [
        "⚡ Create, enhance, and maintain computer programs, ensuring they meet functionality and performance requirements.",
        "⚡Collaborate with teams to solve problems and continuously improve software systems.",
        "⚡Staying updated on industry trends, for implementing innovative solutions for efficient and scalable applications.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-js",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Nirmit_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Nirmit391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Northeastern University, Boston",
      subtitle: "Master's in Software Engineering Systems",
      logo_path: "northeastern.png",
      alt_name: "Northeastern University, Boston",
      duration: "2023 - Pursuing",
      descriptions: [
        "⚡ Web Design and User Experience Engineering",
        "⚡ Object oriented Design",
        "⚡ Program structure Algorithms",
        "⚡ User Experience design and testing",

      ],
      website_link: "",
    },
    {
      title: "University of Mumbai",
      subtitle: "Bachelor's of Engineering in Information Technology",
      logo_path: "uofm.png",
      alt_name: "University of Mumbai",
      duration: "2018 - 2022",
      descriptions: [
        "⚡Data structure & Analysis",
        "⚡ Cloud computing & Services",
        "⚡ Enterprise Network Design"

      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Finalyca Technologies PVT. LTD.",
          company_url: "https://finalyca.com/",
          logo_path: "finalyca.jpg",
          duration: "June 2022 June 2023",
          location: "Mumbai, India",
          description:
            "In a remarkable feat, I spearheaded the development of India's inaugural all-in-one investment analytics platform using Next.js. This achievement not only yielded a substantial 30% enhancement in overall platform performance but also streamlined user onboarding by 1.3 times through seamless integration with payment gateways. Leveraging React's async/await on GitLab for API data fetching, I introduced functional components, reducing loading times by 40% and ensuring a 100% boost in overall application responsiveness. The project, executed within a commendable 9-month timeframe, prioritized user experience with Ant Design, showcasing meticulous design efforts that crafted over 150 software components through Figma for a visually cohesive interface. Additionally, the incorporation of Highcharts into the platform enhanced the visualization of 32 unique AMC data software features, resulting in a notable 30% surge in subscribers. A strong emphasis on search engine optimization (SEO) strategies, including extensive keyword research, technical issue resolution, and building backlinks, propelled the platform to garner 300,000 tracked website views on Google Analytics.",
          color: "#0879bf",
        }

      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Cyber Security and Product Design Intern",
          company: "Samay Infosolutions.",
          company_url: "https://samayinfo.net/",
          logo_path: "samay.png",
          duration: "May 2022 - Aug 2022",
          location: "Mumbai, India",
          description:
            "I showcased adept collaboration skills in various cybersecurity projects, emphasizing my commitment to effectively addressing complex security challenges as part of a cohesive team. Actively engaging with cross-functional teams that included user experience designers, software engineers, and product managers, I contributed to the creation of design solutions that were both cohesive and user-centric. My approach involved merging creativity from Adobe Photoshop and Adobe Illustrator with cybersecurity expertise. This unique blend allowed me to craft compelling advertisements that resulted in a noteworthy 15% boost in sales. This not only highlighted my versatile skill set but also demonstrated a proficiency in integrating creative elements with the technical aspects of cybersecurity.",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "Shaalastic Pvt. Ltd",
          company_url: "https://www.linkedin.com/company/shaalastic/about/",
          logo_path: "shaalastic.png",
          duration: "May 2020 - July 2020",
          location: "Mumbai, India",
          description:
            "I played a key role in the development of an educational website by collaborating on its PHP and Laravel-based backend. My contributions included implementing essential features like user authentication, optimizing the database for a 25% performance boost, and ensuring version control with Git, resulting in a 20% reduction in development time. The backend development was revolutionized by leveraging Laravel's Model-View-Controller (MVC) architecture. I adeptly integrated RESTful APIs, enhancing the website's functionality, and demonstrated a 40% improvement in efficiency in managing dynamic MySQL databases. In terms of quality assurance, I addressed 80% of web application bugs through thorough testing and debugging processes. My commitment to problem-solving was evident in engaging in code reviews and participating in daily stand-ups, showcasing my strong analytical and collaborative skills throughout the development process.",
          color: "#ee3c26",

        },
      ],
    },
    // {
    //   title: "Extra Carricular",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nirmit2.png",
    description:
      "",
  },
 
 
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
