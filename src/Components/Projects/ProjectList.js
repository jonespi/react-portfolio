let ProjectList = () => {
  return [
    {
      title: 'TrApp',
      img:
        'https://github.com/cohencodes/trapp-frontend/raw/master/src/assets/trapp.png',
      demo: 'https://trapp-frontend.jonespi.now.sh',
      link: 'https://github.com/jonespi/trapp-frontend',
      description: `TrApp tracks your applications to developer jobs, allowing you to focus on the job search.`,
      languages: [],
      libraries: ['React', 'Express.js', 'MongoDB', 'Mongoose']
    },
    {
      title: 'MediaLog',
      img: 'https://i.imgur.com/T5JtuAs.png',
      demo: 'http://medialog-client.jonespi.now.sh',
      link: 'https://github.com/jonespi/medialog-client',
      description: `MediaLog is your movie and television diary. Track movies and television shows you've seen most recently to keep track of what you're watching. Utilizes TheMovieDB API to surface search results and add to the watch list. I built the full-stack as the sole contributor.`,
      languages: [],
      libraries: ['React', 'Express.js', 'Postgres']
    },
    {
      title: 'Artist Hub',
      img: 'https://i.imgur.com/RDFsDe0.png',
      demo: 'https://cohencodes.github.io/artist-hub/',
      link: 'https://github.com/jonespi/artist-hub',
      description:
        'A search tool to receive information on your favorite musical artists. It utilizes Wikipedia, YouTube, Ticketmaster, and NewsAPI APIs to gather information',
      languages: ['Javascript', 'HTML', 'CSS'],
      libraries: ['jQuery']
    }
  ];
};

export { ProjectList };
