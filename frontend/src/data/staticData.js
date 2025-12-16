// Static data for the portfolio website
// This replaces the API calls with static data

export const staticProjects = [
  {
    id: 1,
    title: 'The Wordle',
    description: 'Created a Python-based Wordle game variant with a custom Scrabble dictionary class for word validation. This project demonstrates object-oriented programming principles, dictionary manipulation, and game logic implementation. The game provides a challenging word-guessing experience with custom word validation rules.',
    icon: '🎮',
    tags: ['Python'],
    link: 'https://github.com/priyanshupusola/the-wordle',
    image_url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Mongo-Twitter',
    description: 'Developed Python scripts for MongoDB management, focusing on batch processing, error handling, and real-time analytics. Included dynamic database interaction for tweet composition and analytics. This project showcases database optimization, data processing pipelines, and analytics dashboard creation with real-time updates.',
    icon: '🐦',
    tags: ['Python', 'MongoDB', 'SQL'],
    link: 'https://github.com/priyanshupusola/mongo-twitter',
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'AI Chat Bot',
    description: 'Built a Python AI chat interface using OpenAI\'s GPT model, providing real-time answers from documents. Implemented text extraction from PDFs, Excel, CSV, and images with Tkinter for the GUI. The application features document parsing, vector embeddings, and conversational AI for intelligent Q&A functionality.',
    icon: '🤖',
    tags: ['Python', 'OpenAI', 'NLP'],
    link: 'https://github.com/priyanshupusola/ai-chatbot',
    image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Cobra Chickens',
    description: 'Developed a mobile app using Android and Java that includes user account management, QR code scanning, location services, photo posting, real-time notifications, and secure data handling. The app features a complete authentication system, geolocation tracking, camera integration, and push notification services.',
    icon: '📱',
    tags: ['Java', 'Android'],
    link: 'https://github.com/priyanshupusola/cobra-chickens',
    image_url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'Travel Companion',
    description: 'Developed an Agentic AI responsible for finding flights and hotels and preparing a travel itinerary based on the travel budget and dates given to it. The system integrates with multiple APIs to provide comprehensive travel planning, including flight comparisons, hotel recommendations, and optimized itinerary scheduling.',
    icon: '✈️',
    tags: ['AI', 'Agentic AI', 'Python'],
    link: 'https://github.com/priyanshupusola/travel-companion',
    image_url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop'
  }
]

export const staticInternships = [
  {
    id: 1,
    title: 'Functional Safety Coop',
    company: 'BlackBerry',
    date: 'May 2024 – Aug 2024',
    description: 'Wrote automated/functional tests for 10+ libc functions, validating kernel/standard behavior and maintaining compatibility across two major product releases.',
    responsibilities: [
      'Wrote automated/functional tests for 10+ libc functions, validating kernel/standard behavior and maintaining compatibility across two major product releases',
      'Built a FastAPI + Python service to interact with JIRA, streamlining engineering workflows',
      'Partnered with the OS team for test planning, code reviews (Review Board), merges, and function migrations; worked daily in Vim, JIRA; followed SDLC/SCRUM practices'
    ]
  },
  {
    id: 2,
    title: 'Software Developer Coop',
    company: 'Newgen Software',
    date: 'Jun 2023 – Aug 2023',
    description: 'Curated and cleaned 2000+ text documents to produce high-quality training data. Fine-tuned OpenAI GPT-3.5 on user Q&A, boosting accuracy by 25%.',
    responsibilities: [
      'Curated and cleaned 2000+ text documents to produce high-quality training data',
      'Fine-tuned OpenAI GPT-3.5 on user Q&A, boosting accuracy by 25%',
      'Designed and deployed a Gradio app to analyze documents, audio, CSV, and Excel; applied NLP techniques end-to-end',
      'Key Results: Used Vector Store Index by LlamaIndex for better search similarity, was able to decrease the response time by 10%'
    ]
  }
]

export const staticAwards = [
  {
    id: 1,
    title: 'University of Alberta International Country Scholarship',
    organization: 'University of Alberta',
    description: 'Awarded the University of Alberta International Country Scholarship',
    date: '2022',
    icon: '🏆'
  },
  {
    id: 2,
    title: 'International Student Scholarship',
    organization: 'University of Alberta',
    description: 'Awarded the International Student Scholarship',
    date: '2022',
    icon: '⭐'
  },
  {
    id: 3,
    title: 'HackEd 2022',
    organization: 'University of Alberta',
    description: 'Participated in HackEd 2022',
    date: '2022',
    icon: '💻'
  },
  {
    id: 4,
    title: 'Nathacks 2024',
    organization: 'Nathacks',
    description: 'Participated in Nathacks 2024',
    date: '2024',
    icon: '🚀'
  },
  {
    id: 5,
    title: 'ODSC Agentic AI 2025',
    organization: 'ODSC',
    description: 'Participated in ODSC Agentic AI 2025',
    date: '2025',
    icon: '🤖'
  }
]

export const staticHobbies = [
  {
    id: 1,
    title: 'Soccer',
    description: 'Love playing and watching soccer',
    icon: '⚽'
  },
  {
    id: 2,
    title: 'Gaming',
    description: 'Enjoy video games and game development',
    icon: '🎮'
  },
  {
    id: 3,
    title: 'Hiking',
    description: 'Exploring nature and trails',
    icon: '🥾'
  },
  {
    id: 4,
    title: 'Cats',
    description: 'Cat enthusiast',
    icon: '🐱'
  },
  {
    id: 5,
    title: 'Anime',
    description: 'Anime fan and watcher',
    icon: '🎌'
  },
  {
    id: 6,
    title: 'Hackathons',
    description: 'Participating in coding competitions',
    icon: '💻'
  }
]

