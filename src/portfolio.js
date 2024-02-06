/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Debaditya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Debaditya Singh Portfolio",
    type: "website",
    // url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Debaditya Singh",
  logo_name: "Debaditya Singh",
  nickname: "Software Engineer",
  subTitle:
    "A passionate individual, always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1ExGWr8llvJDG0BAbihWdpYMWup2-FL_8/view?usp=sharing",
  portfolio_repository: "https://github.com/debadityasingh8972",
  githubProfile: "https://github.com/debadityasingh8972",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/debadityasingh8972",
  // linkedin: "https://www.linkedin.com/in/debaditya-singh-402846198/",
  // gmail: "ds.developer21@gmail.com",
  // twitter: "https://twitter.com/debaditya5972",
  // instagram: "https://www.instagram.com/debaditya_singh_5972/"

  {
    name: "Github",
    link: "https://github.com/debadityasingh8972",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/debaditya-singh-402846198/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ds.developer21@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/debaditya5972",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/debaditya_singh_5972/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Using Next.js for both frontend and server side rendering and app routing",
        "⚡ Creating application backend in Node, Express",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          fontAwesomeClassname: "simple-icons:la:node",
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
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
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
      profileLink: "https://leetcode.com/debaditya_007/",
    },
    {
      siteName: "Code Sandbox",
      iconifyClassname: "simple-icons:codesandbox",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://codesandbox.io/u/debadityasingh8972",
    },
    {
      siteName: "Coding Ninjas Studio",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://www.codingninjas.com/studio/profile/dev_debaditya",
    },
    {
      siteName: "Upwork",
      iconifyClassname: "simple-icons:upwork",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.upwork.com/freelancers/~0161891d7c1e235507",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Neotia Institute of Technology Management and Science (MAKAUT)",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "nitmas.png",
      alt_name: "NITMASl",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied software engineering subjects like DS, Algorithms, DBMS, OS, CA, Networks etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development, Deep Learning and Cloud Computing.",
        "⚡ I was selected for Merit cum Means Scholarship in college.",
        "⚡ Organised Tech hackathons and skill development bootcamp in campus.",
      ],
      website_link: "https://www.tnu.in/",
    },
    {
      title: "Berhampore J.N.Academy",
      subtitle: "Class 5 to 10th and 12th",
      logo_path: "school.png",
      alt_name: "Berhampore J.N.Academy",
      duration: "2011 - 2019",
      descriptions: [
        "⚡ Completed my secondary & higher secondary education from here, excelling in subjects like pure science, mathematics, physics, and biology, while also delving into computer science through extracurricular activities.",
        "⚡ Achieved outstanding academic results, successfully passing both 10th(90%) and 12th-grade(82%) board exams with flying colors.",
        "⚡ Actively participated in various school events, competitions, and clubs, contributing to the vibrant academic and extracurricular environment of the institution.",
      ],
      website_link: "https://school.banglarshiksha.gov.in/ws/website/index/19073101607",
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
        "https://coursera.org/share/f7c1f06669017d5065802523679c7fc7",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to Cloud Identity",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/e789daf6d4e9bc8a83aa45aa61d7d534",
      alt_name: "google_cloud",
      color_code: "#00000099",
    },
    {
      title: "Version Control with Git",
      subtitle: "- Steve Byrnes",
      logo_path: "Atlassian-Logo.png",
      certificate_link:
        "https://coursera.org/share/3b0c11703a8b4d71acfcd7e45d6fefc9",
      alt_name: "Atlassian",
      color_code: "#0C9D5899",
    },
    {
      title: "AWS Machine Learning",
      subtitle: "- Blaine Sundrud",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/ZD97WXS8CDQ9",
      alt_name: "AWS",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Computer Vision and Image Processing",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/8cd3b84022c203ef5d9ca571ba64b975",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Java Programming: Solving Problems with Software",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/fc69e48bdcaa796396e79311eca3be14",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with mostly evolving startups as Software Developer(Front end based Fullstack), Designer and Software Architect. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate Software Engineer (ASE)",
          company: "Accenture",
          company_url: "https://www.accenture.com/in-en",
          logo_path: "accenture1.jfif",
          duration: "Currently on training",
          location: "Remote",
          description:
            "Implementing efficient algorithms for the clients in a serverless architecture. Learning about testing and debugging in a collaborative team. creating and maintaining documentation related to software design, implementation, and testing procedures.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "SDE Backend",
          company: "O(1) Coding Club",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "O(1).jfif",
          duration: "Aug 2023 - Nov 2023",
          location: "Remote",
          description:
            "Developed and deployed a URL Shortener web application using Django, React, and Python, enabling users to efficiently shorten long URLs for easy sharing and management. Implemented RESTful API endpoints for the URL Shortener project, allowing seamless integration with external services and enabling advanced functionality such as custom URL aliases and analytics tracking.",
          color: "#000000",
        },
        {
          title: "Blockchain UI Developer Intern",
          company: "RadicalX",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "radical.jfif",
          duration: "Sep 2022 - Dec 2022",
          location: "Work From Home",
          description:
            "Modified UI components and updated smart contracts on a team-based project. Added documents page from scratch being in a team. Leveraged plugins expertise for web3 applications within project. Employed Agile methodologies for efficient project workflow and management. Utilized Solidity for smart contract revision, introducing future-applicable features.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Gaudmire Member",
          company: "Buildspace",
          company_url: "https://buildspace.so/",
          logo_path: "buildspace.png",
          duration: "Aug 2023 - Sept 2023",
          location: "Remote",
          description:
            "As a member of the BuildSpace development team, I actively participated in the creation and deployment of a new chat application. Collaborating with a multidisciplinary team, I contributed to various aspects of the project lifecycle, including software development, operations, and DevOps tasks.",
          color: "#D83B01",
        },
        {
          title: "Open Source Contributor",
          company: "Girl Script Summer Of Code",
          company_url: "https://gssoc.girlscript.tech/",
          logo_path: "gssoc.jfif",
          duration: "May 2023 - July 2023",
          location: "Remote",
          description:
            " Implemented variable UI changes and updates across multiple projects within the Girl Scripts and World of Code open source program, enhancing user experience and visual appeal. Developed new features from scratch based on project requirements, contributing to the growth and functionality of the open source ecosystem.",
          color: "#4285F4",
        },
        
        {
          title: "Program Developer",
          company: "Forage",
          company_url: "https://www.theforage.com/",
          logo_path: "forage.png",
          duration: "June 2022 - August 2022",
          location: "Remote",
          description:
            "Identified what data are considered sensitive personal data and advised the client on how to proceed with the planned machine learning algorithm. Conducted a security maturity assessment for a new client Implemented the right access policies for different kinds of data Secured the software development lifecycle (SDLC)",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Front end and Full stack projects and deploy them to web applications using cloud infrastructure.",
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
    profile_image_path: "logo.png",
    description:
      "I am available on social media. You can message me, I will reply within 24 hours. I can help you with React, Next, Web3, Docker, Cloud and Open Source Development.",
  },
  blogSection: {
    title: "",
    subtitle: "",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "170 Bishnupur Road, Madhpur, Berhampore, Murshidabad, WB - 742102",
    locality: "Kanodar",
    country: "IN",
    region: "West Bengal",
    postalCode: "742102",
    streetAddress: "170 Bishnupur Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/tCNdZRbtTQA2BJSs5",
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
  // publicationsHeader,
  // publications,
  contactPageData,
};
