// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'elhardian', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AI Agent - Azara AI',
          description:
            'Building AI Agents with seamless workflows and customizable using Langchain and FastAPI',
          imageUrl:
            'https://static.wixstatic.com/media/956618_52ca6b11fff1441ca54b0c6e562a094d~mv2.png/v1/crop/x_243,y_236,w_542,h_521/fill/w_96,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/956618_52ca6b11fff1441ca54b0c6e562a094d~mv2.png',
          link: 'https://www.azara.ai/',
        },
        {
          title: 'AWS to GCP Migration - Otoklix',
          description:
            'Migrate Infrastructure from AWS environment to GCP working with google partner company with cultural diverse team.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'AI Assistant - Otoklix',
          description:
            'Build a chat bot that help our customer service to perform search a nearby workshop, find similar products and more.',
          imageUrl:
            'https://microsite.otoklix.com/assets/logo/logo.svg',
          link: 'https://otoklix.com',
        },
        {
          title: 'Workshop Marketplace - Otoklix',
          description:
            'Workshop Marketplace that allows customer to book car service appointment, schedule a service, payment, find nearby workshop and more.',
          imageUrl:
            'https://play-lh.googleusercontent.com/YQrI3XWTkcHjsJMXT7jUFCcJddDKc8V0ZIG9kFDsJJtSi0EG5vGka3Rew77Icm64bE0=w5120-h2880-rw',
          link: 'https://play.google.com/store/apps/details?id=com.otoklix.customerapp&hl=id&gl=US',
        },
        {
          title: 'GTS International',
          description:
            'A dynamic and customizable company profile for GTS International',
          imageUrl:
            'https://gtsi.co.id/images/footer-logo.webp',
          link: 'https://gtsi.co.id/',
        },
        {
          title: 'Humpuss Maritim International',
          description:
            'A dynamic and customizable company profile for Humpuss Maritim International.',
          imageUrl:
            'http://hits.co.id/img/resources/hits-logo.png',
          link: 'https://www.hits.co.id/',
        },
        {
          title: 'Nusantara Florist',
          description:
            'Nusantara Florist is an Indonesian marketplace for florist shops with online payment.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Mikro Kapital Indonesia',
          description:
            'A peer to peer landing for a small business in Indonesia that with europe lender.',
          imageUrl:
            'https://mikrokapital.com/wp-content/themes/nm-mikrokapital/img/logo_mikro_kapital.svg',
          link: 'https://mikrokapital.com/',
        },
        {
          title: 'Pasar Yo',
          description:
            'Pasar Yo is an online marketplace that enables our customers to purchase items directly from the local market and have them conveniently delivered to their doorstep.',
          imageUrl:
            'https://play-lh.googleusercontent.com/6NTDduRJvosRjEA1AaHbCeBXjqzqKrzA4Yld1fVIo1oklt1x14y9dAJyn_GykZtsv2w=w1024-h768-rw',
          link: '',
        },
        {
          title: 'Bensupply',
          description:
            'Bensupply is a marketplace for PT Onsu Pangan Perkasa (OPP), enabling their food and beverage outlets across Indonesia to conveniently stock ingredients and equipment with just one click. The app is integrated with BCA (Bank Central Asia) payment for seamless and secure transactions.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'UT Connect',
          description:
            'UT Connect is a mobile application designed for United Tractors customers, providing them with the ability to monitor their heavy equipment and track their orders. This project is directly associated with my work at Ecomindo Sarana Cipta. As a Backend Software Engineer, my responsibilities include developing and maintaining the services that power the application.',
          imageUrl:
            'https://play-lh.googleusercontent.com/SBmsjaU-CoSAEILGM6v4lINGEx4WvSfmEai2jAHnvEyVMd10DaYl2kp0n29uErzqUTE=w5120-h2880-rw',
          link: 'https://play.google.com/store/apps/details?id=com.unitedtractors.customer_portal&hl=id&gl=US',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'lukman-h-b15659123',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'elhardian',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://elhardian.com',
    phone: '',
    email: 'luckman.hrd@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Django',
    'FastAPI',
    'Go',
    'Langchain',
    'Vector DB',
    'SQL',
    'NoSQL',
    'Kubernetes',
    'Docker',
    'Openshift',
    'Google Cloud',
    'AWS',
    '.Net Core',
  ],
  experiences: [
    {
      company: 'Azara AI',
      position: 'Sr. Software Engineer',
      from: 'Feb 2024',
      to: 'Present',
      companyLink: 'https://azara.ai',
    },
    {
      company: 'Otoklix',
      position: 'Sr. Software Engineer',
      from: 'July 2023',
      to: 'March 2024',
      companyLink: 'https://otoklix.com',
    },
    {
      company: 'Otoklix',
      position: 'Associate Software Engineer',
      from: 'Jan 2022',
      to: 'Jul 2023',
      companyLink: 'https://otoklix.com',
    },
    {
      company: 'BNI Life Insurance',
      position: 'Associate Software Engineer',
      from: 'Nov 2020',
      to: 'Jan 2022',
      companyLink: 'https://bni-life.com',
    },
    {
      company: 'Pasar Yo',
      position: 'Founder',
      from: 'Apr 2020',
      to: 'Nov 2020',
      companyLink: '',
    },
    {
      company: 'Ecomindo Sarana Cipta',
      position: 'Jr. Software Engineer',
      from: 'Nov 2018',
      to: 'Apr 2020',
      companyLink: 'https://www.ecomindo.com/',
    },
  ],
  certifications: [
    {
      name: 'Codility Silver Award for the Palladium 2020 Challenge',
      body: '',
      year: 'Jun 2020 - Feb 2022',
      link: 'https://app.codility.com/cert/view/certD79RKT-MWF2GXYV3ZSJYT6K/',
    },
  ],
  educations: [
    {
      institution: 'Telkom University',
      degree: 'Bachelor of Computational Science',
      from: '2014',
      to: '2018',
    }
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'elhardian', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
