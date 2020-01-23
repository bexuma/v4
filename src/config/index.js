module.exports = {
  siteTitle: 'Bexultan Myrzatayev | Software Engineer',
  siteDescription:
    'Bexultan Myrzatayev is a software engineer based in Boston, MA who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Bexultan Myrzatayev, Bexultan, Myrzatayev, bexuma, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://bexuma.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-156828821-1',
  googleVerification: 'gJHGP_ugiJ7ys0bVHSlYg52uRricPnb3uIpwykjU2VE',
  name: 'Bexultan Myrzatayev',
  location: 'Karaganda, Kazakhstan',
  email: 'youngdeveloper.co@gmail.com',
  github: 'https://github.com/bexuma',
  twitterHandle: '@bexuma',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/bexuma',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bexuma',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
