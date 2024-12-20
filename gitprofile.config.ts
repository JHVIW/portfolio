// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JHVIW', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 20, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['JHVIW/buff163-ids', 'JHVIW/2048_Python'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
       // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Portfolio of Rick',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'rickviwaarden',
    stackoverflow: '18847956/salt', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.cs2locker.com',
    phone: '',
    email: 'saltssecurity@proton.me',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'C#',
    'Node.js',
    'MySQL',
    'PLSQL',
    'Git',
    'Docker',
    'CSS',
  ],
  experiences: [
    {
      company: 'Bodegro',
      position: 'Software Developer',
      from: 'July 2024',
      to: 'Present',
      companyLink: 'https://www.bodegro.com/',
    },
    {
      company: 'Katocraft',
      position: 'Full stack developer',
      from: 'January 2024',
      to: 'May 2024',
      companyLink: 'https://katocraft.com/',
    },
  ],
  certifications: [
    {
      name: 'IELTS CEFR C1',
      body: 'International English Language Testing System (IELTS) | CEFR C1',
      year: 'July 2020',
      link: '20NL001016VANJ011A',
    },
  ],
  educations: [
    {
      institution: 'Fontys University of Applied Sciences',
      degree: 'Bachelor Informatica (Software engineering)',
      from: '2022',
      to: '2026',
    };
  ],
  publications: [
    {
      title: 'Unmasking the Cheats: A Deep Dive into Counter-Strike 2 Vulnerabilities',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'Myself',
      link: 'https://jhviw.github.io/',
      description:
        'Results of my research I have done on CVE-2021-30481 and on wallhacks in the videogame Counter-Strike 2',
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



  enablePWA: true,
};

export default CONFIG;
