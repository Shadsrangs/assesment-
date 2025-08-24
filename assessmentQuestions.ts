export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  skill?: string;
  tags?: string[];
}

export interface AssessmentQuestions {
  [assessmentId: string]: Question[];
}

// Enhanced shuffle function with better randomization
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const assessmentQuestions: AssessmentQuestions = {
  '1': [ // JavaScript Fundamentals - Enhanced with more questions
    {
      id: '1-1',
      question: 'What is the primary purpose of version control systems like Git?',
      options: [
        'To store passwords securely',
        'To track changes in code and collaborate with others',
        'To optimize database performance',
        'To create backups of files'
      ],
      correctAnswer: 1,
      explanation: 'Version control systems like Git are designed to track changes in source code, enabling collaboration and maintaining a history of modifications.',
      category: 'Programming',
      difficulty: 'easy',
      skill: 'Version Control',
      tags: ['Git', 'Collaboration']
    },
    {
      id: '1-2',
      question: 'Which of the following is NOT a valid HTTP status code?',
      options: ['200', '404', '500', '999'],
      correctAnswer: 3,
      explanation: 'HTTP status codes are in the range 100-599. 999 is not a valid HTTP status code.',
      category: 'Web Development',
      difficulty: 'easy',
      skill: 'HTTP',
      tags: ['Web', 'API']
    },
    {
      id: '1-3',
      question: 'What is the main principle of responsive design?',
      options: [
        'Using only CSS Grid',
        'Mobile-first approach',
        'Fixed pixel widths',
        'JavaScript-only solutions'
      ],
      correctAnswer: 1,
      explanation: 'Responsive design follows a mobile-first approach, designing for mobile devices first and then scaling up for larger screens.',
      category: 'Web Development',
      difficulty: 'medium',
      skill: 'Responsive Design',
      tags: ['CSS', 'Mobile']
    },
    {
      id: '1-4',
      question: 'What is the difference between let and const in JavaScript?',
      options: [
        'There is no difference',
        'let can be reassigned, const cannot',
        'const is faster than let',
        'let is only for numbers, const is for strings'
      ],
      correctAnswer: 1,
      explanation: 'let allows reassignment of variables, while const creates read-only references that cannot be reassigned.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Variable Declaration',
      tags: ['ES6', 'Variables']
    },
    {
      id: '1-5',
      question: 'What is the purpose of an API?',
      options: [
        'To store data in a database',
        'To provide a way for different software applications to communicate',
        'To create user interfaces',
        'To optimize website performance'
      ],
      correctAnswer: 1,
      explanation: 'APIs (Application Programming Interfaces) allow different software applications to communicate and share data.',
      category: 'Programming',
      difficulty: 'medium',
      skill: 'APIs',
      tags: ['Web', 'Integration']
    }
  ],

  '2': [ // React Development - Enhanced with more questions
    {
      id: '2-1',
      question: 'What is React?',
      options: [
        'A programming language',
        'A JavaScript library for building user interfaces',
        'A database management system',
        'A web server'
      ],
      correctAnswer: 1,
      explanation: 'React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications.',
      category: 'React',
      difficulty: 'easy',
      skill: 'React Basics',
      tags: ['Frontend', 'UI Library']
    },
    {
      id: '2-2',
      question: 'What is a component in React?',
      options: [
        'A CSS file',
        'A reusable piece of UI that can contain its own logic and styling',
        'A JavaScript function',
        'A database table'
      ],
      correctAnswer: 1,
      explanation: 'Components are the building blocks of React applications. They are reusable pieces of UI that can contain their own logic and styling.',
      category: 'React',
      difficulty: 'easy',
      skill: 'Components',
      tags: ['UI', 'Reusability']
    },
    {
      id: '2-3',
      question: 'What is JSX?',
      options: [
        'A new programming language',
        'A syntax extension for JavaScript that allows you to write HTML-like code',
        'A CSS framework',
        'A database query language'
      ],
      correctAnswer: 1,
      explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
      category: 'React',
      difficulty: 'easy',
      skill: 'JSX',
      tags: ['Syntax', 'HTML in JS']
    },
    {
      id: '2-4',
      question: 'What is the difference between props and state?',
      options: [
        'There is no difference',
        'Props are passed down from parent components, state is managed within a component',
        'State is always faster than props',
        'Props are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Props are passed down from parent components and are read-only, while state is managed within a component and can be changed.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Props vs State',
      tags: ['Data Flow', 'Component Communication']
    },
    {
      id: '2-5',
      question: 'What is the purpose of the useEffect hook?',
      options: [
        'To create effects',
        'To perform side effects in functional components',
        'To improve performance',
        'To create new components'
      ],
      correctAnswer: 1,
      explanation: 'The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Hooks',
      tags: ['Functional Components', 'Side Effects']
    }
  ],

  '3': [ // Python Programming Assessment
    {
      id: '3-1',
      question: 'What is the difference between a list and a tuple in Python?',
      options: [
        'There is no difference',
        'Lists are mutable, tuples are immutable',
        'Tuples are faster than lists',
        'Lists can only contain numbers'
      ],
      correctAnswer: 1,
      explanation: 'Lists are mutable (can be changed), while tuples are immutable (cannot be changed after creation).',
      category: 'Python',
      difficulty: 'easy',
      skill: 'Data Structures',
      tags: ['Python', 'Lists', 'Tuples']
    },
    {
      id: '3-2',
      question: 'What is a decorator in Python?',
      options: [
        'A function that modifies another function',
        'A type of variable',
        'A loop construct',
        'A data structure'
      ],
      correctAnswer: 0,
      explanation: 'A decorator is a function that takes another function as input and returns a modified version of that function.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Advanced Python',
      tags: ['Python', 'Decorators', 'Functions']
    },
    {
      id: '3-3',
      question: 'What is the purpose of the __init__ method?',
      options: [
        'To destroy objects',
        'To initialize object attributes when creating a new instance',
        'To import modules',
        'To handle exceptions'
      ],
      correctAnswer: 1,
      explanation: 'The __init__ method is a constructor that initializes object attributes when creating a new instance of a class.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Object-Oriented Programming',
      tags: ['Python', 'Classes', 'OOP']
    },
    {
      id: '3-4',
      question: 'What is the difference between append() and extend() for lists?',
      options: [
        'There is no difference',
        'append() adds one element, extend() adds elements from an iterable',
        'extend() is faster',
        'append() only works with numbers'
      ],
      correctAnswer: 1,
      explanation: 'append() adds a single element to the end of a list, while extend() adds all elements from an iterable.',
      category: 'Python',
      difficulty: 'easy',
      skill: 'List Methods',
      tags: ['Python', 'Lists', 'Methods']
    },
    {
      id: '3-5',
      question: 'What is a lambda function?',
      options: [
        'A function that never ends',
        'An anonymous function defined with the lambda keyword',
        'A function that only works with numbers',
        'A built-in Python function'
      ],
      correctAnswer: 1,
      explanation: 'A lambda function is an anonymous function defined with the lambda keyword, typically used for simple operations.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Functional Programming',
      tags: ['Python', 'Lambda', 'Functions']
    }
  ],

  '4': [ // UI/UX Design Assessment
    {
      id: '4-1',
      question: 'What is the primary goal of user experience (UX) design?',
      options: [
        'To make things look pretty',
        'To create meaningful and relevant experiences for users',
        'To use the latest design trends',
        'To minimize development costs'
      ],
      correctAnswer: 1,
      explanation: 'UX design focuses on creating meaningful and relevant experiences that meet user needs and business goals.',
      category: 'Design',
      difficulty: 'easy',
      skill: 'UX Principles',
      tags: ['UX', 'Design', 'User Experience']
    },
    {
      id: '4-2',
      question: 'What is the purpose of wireframing in the design process?',
      options: [
        'To add colors and images',
        'To create a visual hierarchy and layout structure',
        'To write content',
        'To test functionality'
      ],
      correctAnswer: 1,
      explanation: 'Wireframing helps establish the visual hierarchy and layout structure before adding visual design elements.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Wireframing',
      tags: ['Design', 'Wireframes', 'Layout']
    },
    {
      id: '4-3',
      question: 'What is the difference between UI and UX?',
      options: [
        'There is no difference',
        'UI focuses on visual design, UX focuses on overall user experience',
        'UI is more important than UX',
        'UX is only for mobile apps'
      ],
      correctAnswer: 1,
      explanation: 'UI (User Interface) focuses on visual design and interactions, while UX (User Experience) encompasses the entire user journey.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Design Concepts',
      tags: ['UI', 'UX', 'Design']
    },
    {
      id: '4-4',
      question: 'What is accessibility in design?',
      options: [
        'Making designs look good',
        'Ensuring designs are usable by people with disabilities',
        'Using modern design tools',
        'Creating responsive layouts'
      ],
      correctAnswer: 1,
      explanation: 'Accessibility ensures that designs are usable by people with various disabilities and limitations.',
      category: 'Design',
      difficulty: 'easy',
      skill: 'Accessibility',
      tags: ['Design', 'Accessibility', 'Inclusive Design']
    },
    {
      id: '4-5',
      question: 'What is the purpose of user research in UX design?',
      options: [
        'To waste time',
        'To understand user needs, behaviors, and pain points',
        'To make designs look better',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'User research helps designers understand user needs, behaviors, and pain points to create better solutions.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'User Research',
      tags: ['UX', 'Research', 'User Needs']
    }
  ],

  '5': [ // Data Science Assessment
    {
      id: '5-1',
      question: 'What is the difference between supervised and unsupervised learning?',
      options: [
        'There is no difference',
        'Supervised learning uses labeled data, unsupervised learning finds patterns in unlabeled data',
        'Unsupervised learning is always better',
        'Supervised learning is only for classification'
      ],
      correctAnswer: 1,
      explanation: 'Supervised learning uses labeled training data, while unsupervised learning finds patterns in data without labels.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Machine Learning',
      tags: ['ML', 'Supervised Learning', 'Unsupervised Learning']
    },
    {
      id: '5-2',
      question: 'What is overfitting in machine learning?',
      options: [
        'A good thing',
        'When a model performs well on training data but poorly on new data',
        'When a model is too simple',
        'When data is missing'
      ],
      correctAnswer: 1,
      explanation: 'Overfitting occurs when a model learns the training data too well and fails to generalize to new, unseen data.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Model Validation',
      tags: ['ML', 'Overfitting', 'Generalization']
    },
    {
      id: '5-3',
      question: 'What is the purpose of cross-validation?',
      options: [
        'To make models faster',
        'To assess how well a model will generalize to new data',
        'To reduce data size',
        'To add more features'
      ],
      correctAnswer: 1,
      explanation: 'Cross-validation helps assess how well a model will generalize to new, unseen data by testing on different subsets.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Model Validation',
      tags: ['ML', 'Cross-validation', 'Generalization']
    },
    {
      id: '5-4',
      question: 'What is the difference between correlation and causation?',
      options: [
        'There is no difference',
        'Correlation shows relationship, causation shows one variable causes another',
        'Correlation is always causation',
        'Causation is easier to prove'
      ],
      correctAnswer: 1,
      explanation: 'Correlation shows a relationship between variables, while causation shows that one variable directly causes another.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Statistics',
      tags: ['Statistics', 'Correlation', 'Causation']
    },
    {
      id: '5-5',
      question: 'What is feature engineering?',
      options: [
        'Building houses',
        'Creating new features from existing data to improve model performance',
        'Adding more data',
        'Removing features'
      ],
      correctAnswer: 1,
      explanation: 'Feature engineering involves creating new features from existing data to improve machine learning model performance.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Feature Engineering',
      tags: ['ML', 'Features', 'Data Processing']
    }
  ],

  '6': [ // DevOps & Cloud Assessment
    {
      id: '6-1',
      question: 'What is the primary goal of DevOps?',
      options: [
        'To reduce costs',
        'To improve collaboration between development and operations teams',
        'To automate everything',
        'To replace traditional IT'
      ],
      correctAnswer: 1,
      explanation: 'DevOps aims to improve collaboration between development and operations teams to deliver software faster and more reliably.',
      category: 'DevOps',
      difficulty: 'easy',
      skill: 'DevOps Principles',
      tags: ['DevOps', 'Collaboration', 'Software Delivery']
    },
    {
      id: '6-2',
      question: 'What is Infrastructure as Code (IaC)?',
      options: [
        'Writing code for infrastructure',
        'Managing infrastructure through configuration files and scripts',
        'Building physical servers',
        'Cloud computing only'
      ],
      correctAnswer: 1,
      explanation: 'Infrastructure as Code manages infrastructure through configuration files and scripts, enabling version control and automation.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Infrastructure as Code',
      tags: ['DevOps', 'IaC', 'Automation']
    },
    {
      id: '6-3',
      question: 'What is the purpose of CI/CD pipelines?',
      options: [
        'To build software',
        'To automate the software delivery process from development to production',
        'To test code',
        'To deploy applications'
      ],
      correctAnswer: 1,
      explanation: 'CI/CD pipelines automate the software delivery process, ensuring code is built, tested, and deployed automatically.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'CI/CD',
      tags: ['DevOps', 'CI/CD', 'Automation']
    },
    {
      id: '6-4',
      question: 'What is a container in DevOps?',
      options: [
        'A physical server',
        'A lightweight, isolated environment for running applications',
        'A virtual machine',
        'A cloud service'
      ],
      correctAnswer: 1,
      explanation: 'Containers provide lightweight, isolated environments for running applications, ensuring consistency across different environments.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Containers',
      tags: ['DevOps', 'Containers', 'Docker']
    },
    {
      id: '6-5',
      question: 'What is the purpose of monitoring in DevOps?',
      options: [
        'To watch systems',
        'To track application performance and identify issues proactively',
        'To reduce costs',
        'To automate deployments'
      ],
      correctAnswer: 1,
      explanation: 'Monitoring tracks application performance and identifies issues proactively, enabling quick response and resolution.',
      category: 'DevOps',
      difficulty: 'easy',
      skill: 'Monitoring',
      tags: ['DevOps', 'Monitoring', 'Observability']
    }
  ],

  '7': [ // Mobile Development Assessment
    {
      id: '7-1',
      question: 'What is the difference between native and cross-platform mobile development?',
      options: [
        'There is no difference',
        'Native uses platform-specific languages, cross-platform uses shared codebase',
        'Cross-platform is deprecated',
        'Native is only for iOS'
      ],
      correctAnswer: 1,
      explanation: 'Native development uses platform-specific languages and tools, while cross-platform uses shared codebase for multiple platforms.',
      category: 'Mobile Development',
      difficulty: 'easy',
      skill: 'Mobile Development Types',
      tags: ['Mobile', 'Native', 'Cross-platform']
    },
    {
      id: '7-2',
      question: 'What is the purpose of responsive design in mobile development?',
      options: [
        'To make designs responsive',
        'To ensure apps work well across different screen sizes and orientations',
        'To improve performance',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Responsive design ensures mobile apps work well across different screen sizes and orientations.',
      category: 'Mobile Development',
      difficulty: 'easy',
      skill: 'Responsive Design',
      tags: ['Mobile', 'Responsive', 'UI/UX']
    },
    {
      id: '7-3',
      question: 'What is the difference between iOS and Android development?',
      options: [
        'There is no difference',
        'iOS uses Swift/Objective-C, Android uses Java/Kotlin',
        'Android is deprecated',
        'iOS is only for iPhones'
      ],
      correctAnswer: 1,
      explanation: 'iOS development uses Swift or Objective-C, while Android development uses Java or Kotlin.',
      category: 'Mobile Development',
      difficulty: 'easy',
      skill: 'Platform Differences',
      tags: ['Mobile', 'iOS', 'Android', 'Programming Languages']
    },
    {
      id: '7-4',
      question: 'What is the purpose of mobile app testing?',
      options: [
        'To test apps',
        'To ensure apps work correctly across different devices and scenarios',
        'To improve performance',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app testing ensures apps work correctly across different devices, screen sizes, and usage scenarios.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Testing',
      tags: ['Mobile', 'Testing', 'Quality Assurance']
    },
    {
      id: '7-5',
      question: 'What is the difference between offline and online mobile apps?',
      options: [
        'There is no difference',
        'Offline apps work without internet, online apps require connectivity',
        'Offline apps are deprecated',
        'Online apps are only for web'
      ],
      correctAnswer: 1,
      explanation: 'Offline apps can function without internet connectivity, while online apps require constant internet connection.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Connectivity',
      tags: ['Mobile', 'Offline', 'Online', 'Connectivity']
    }
  ],

  '9': [ // Personality Assessment - Leadership Style
    {
      id: '9-1',
      question: 'When working with a team, I prefer to:',
      options: [
        'Take charge and make decisions',
        'Collaborate and build consensus',
        'Let others lead while I support',
        'Work independently'
      ],
      correctAnswer: 1,
      explanation: 'This question helps identify your leadership style and team collaboration preferences.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Leadership',
      tags: ['Leadership', 'Teamwork', 'Personality']
    },
    {
      id: '9-2',
      question: 'In a crisis situation, I typically:',
      options: [
        'Act quickly and decisively',
        'Analyze the situation thoroughly first',
        'Seek input from others',
        'Wait for instructions'
      ],
      correctAnswer: 1,
      explanation: 'This reveals how you handle pressure and make decisions in challenging situations.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Crisis Management',
      tags: ['Leadership', 'Crisis', 'Decision Making']
    },
    {
      id: '9-3',
      question: 'When giving feedback to team members, I:',
      options: [
        'Focus only on what needs improvement',
        'Provide balanced positive and constructive feedback',
        'Avoid giving feedback to maintain harmony',
        'Let others handle feedback'
      ],
      correctAnswer: 1,
      explanation: 'This shows your approach to team development and communication.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Feedback',
      tags: ['Leadership', 'Feedback', 'Communication']
    },
    {
      id: '9-4',
      question: 'My approach to delegating tasks is:',
      options: [
        'To do everything myself to ensure quality',
        'To assign tasks based on team members\' strengths',
        'To let team members choose their tasks',
        'To avoid delegation altogether'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your trust in team members and your delegation style.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Delegation',
      tags: ['Leadership', 'Delegation', 'Trust']
    },
    {
      id: '9-5',
      question: 'When a team member makes a mistake, I:',
      options: [
        'Immediately replace them',
        'Use it as a learning opportunity for the whole team',
        'Ignore it to avoid conflict',
        'Blame the individual'
      ],
      correctAnswer: 1,
      explanation: 'This shows your approach to handling mistakes and team development.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Mistake Handling',
      tags: ['Leadership', 'Learning', 'Team Development']
    }
  ],

  '11': [ // Aptitude Assessment - Problem Solving
    {
      id: '11-1',
      question: 'If a train travels 120 miles in 2 hours, how fast is it traveling?',
      options: [
        '40 mph',
        '60 mph',
        '80 mph',
        '100 mph'
      ],
      correctAnswer: 1,
      explanation: 'Speed = Distance ÷ Time = 120 miles ÷ 2 hours = 60 mph',
      category: 'Problem Solving',
      difficulty: 'easy',
      skill: 'Mathematical Reasoning',
      tags: ['Math', 'Speed', 'Problem Solving']
    },
    {
      id: '11-2',
      question: 'A sequence follows the pattern: 2, 4, 8, 16, 32. What comes next?',
      options: [
        '48',
        '64',
        '56',
        '40'
      ],
      correctAnswer: 1,
      explanation: 'Each number is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Pattern Recognition',
      tags: ['Math', 'Patterns', 'Sequences']
    },
    {
      id: '11-3',
      question: 'If 3 workers can complete a task in 6 days, how many days would 2 workers take?',
      options: [
        '4 days',
        '6 days',
        '9 days',
        '12 days'
      ],
      correctAnswer: 2,
      explanation: 'More workers = fewer days. 3 workers × 6 days = 18 worker-days. 18 ÷ 2 workers = 9 days',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Work Rate Problems',
      tags: ['Math', 'Work Rate', 'Proportions']
    },
    {
      id: '11-4',
      question: 'What is the missing number: 1, 3, 6, 10, 15, ?',
      options: [
        '18',
        '20',
        '21',
        '25'
      ],
      correctAnswer: 2,
      explanation: 'The difference between consecutive terms increases by 1: +2, +3, +4, +5, +6. So 15 + 6 = 21',
      category: 'Problem Solving',
      difficulty: 'hard',
      skill: 'Number Sequences',
      tags: ['Math', 'Sequences', 'Patterns']
    },
    {
      id: '11-5',
      question: 'A rectangle has a perimeter of 24 units and an area of 35 square units. What are its dimensions?',
      options: [
        '5 × 7',
        '6 × 6',
        '4 × 8',
        '3 × 9'
      ],
      correctAnswer: 0,
      explanation: 'Perimeter = 2(l+w) = 24, so l+w = 12. Area = l×w = 35. 5×7 = 35 and 5+7 = 12',
      category: 'Problem Solving',
      difficulty: 'hard',
      skill: 'Geometry',
      tags: ['Math', 'Geometry', 'Algebra']
    }
  ],

  '13': [ // Career Assessment
    {
      id: '13-1',
      question: 'I enjoy working with:',
      options: [
        'People and teams',
        'Data and analysis',
        'Creative projects',
        'Technical systems'
      ],
      correctAnswer: 1,
      explanation: 'This helps identify your preferred work environment and type of tasks.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Work Preferences',
      tags: ['Career', 'Work Style', 'Preferences']
    },
    {
      id: '13-2',
      question: 'In my ideal job, I would:',
      options: [
        'Have a structured routine',
        'Face new challenges regularly',
        'Work independently',
        'Lead others'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your preference for job variety and challenge level.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Job Characteristics',
      tags: ['Career', 'Job Satisfaction', 'Motivation']
    },
    {
      id: '13-3',
      question: 'I am most motivated by:',
      options: [
        'Financial rewards',
        'Helping others',
        'Recognition',
        'Learning new skills'
      ],
      correctAnswer: 1,
      explanation: 'This helps identify what drives you professionally and personally.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Motivation',
      tags: ['Career', 'Motivation', 'Values']
    },
    {
      id: '13-4',
      question: 'When making career decisions, I prioritize:',
      options: [
        'Job security',
        'Growth opportunities',
        'Work-life balance',
        'Salary and benefits'
      ],
      correctAnswer: 1,
      explanation: 'This shows your career values and decision-making priorities.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Career Planning',
      tags: ['Career', 'Planning', 'Values']
    },
    {
      id: '13-5',
      question: 'I see myself in 5 years:',
      options: [
        'In the same role',
        'In a leadership position',
        'Running my own business',
        'In a different field entirely'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your career aspirations and long-term goals.',
      category: 'Career', 
      difficulty: 'easy',
      skill: 'Career Goals',
      tags: ['Career', 'Goals', 'Aspirations']
    }
  ]
};

// Enhanced function to get questions with better shuffling
export const getQuestionsForAssessment = (assessmentId: string): Question[] => {
  const questions = assessmentQuestions[assessmentId] || [];
  return shuffleArray(questions);
};

// Enhanced scoring function
export const calculateScore = (answers: Record<number, number>, questions: Question[]): number => {
  let correctAnswers = 0;
  questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correctAnswers++;
    }
  });
  return Math.round((correctAnswers / questions.length) * 100);
};

// Function to get detailed results with missed questions
export const getDetailedResults = (answers: Record<number, number>, questions: Question[]): {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  missedQuestions: Question[];
  correctQuestions: Question[];
  performanceByCategory: Record<string, { correct: number; total: number; percentage: number }>;
  performanceByDifficulty: Record<string, { correct: number; total: number; percentage: number }>;
} => {
  let correctAnswers = 0;
  const missedQuestions: Question[] = [];
  const correctQuestions: Question[] = [];
  const performanceByCategory: Record<string, { correct: number; total: number; percentage: number }> = {};
  const performanceByDifficulty: Record<string, { correct: number; total: number; percentage: number }> = {};

  questions.forEach((question, index) => {
    const isCorrect = answers[index] === question.correctAnswer;
    if (isCorrect) {
      correctAnswers++;
      correctQuestions.push(question);
    } else {
      missedQuestions.push(question);
    }

    // Track performance by category
    if (!performanceByCategory[question.category]) {
      performanceByCategory[question.category] = { correct: 0, total: 0, percentage: 0 };
    }
    performanceByCategory[question.category].total++;
    if (isCorrect) {
      performanceByCategory[question.category].correct++;
    }

    // Track performance by difficulty
    if (!performanceByDifficulty[question.difficulty]) {
      performanceByDifficulty[question.difficulty] = { correct: 0, total: 0, percentage: 0 };
    }
    performanceByDifficulty[question.difficulty].total++;
    if (isCorrect) {
      performanceByDifficulty[question.difficulty].correct++;
    }
  });

  // Calculate percentages
  Object.keys(performanceByCategory).forEach(category => {
    const perf = performanceByCategory[category];
    perf.percentage = Math.round((perf.correct / perf.total) * 100);
  });

  Object.keys(performanceByDifficulty).forEach(difficulty => {
    const perf = performanceByDifficulty[difficulty];
    perf.percentage = Math.round((perf.correct / perf.total) * 100);
  });

  return {
    score: Math.round((correctAnswers / questions.length) * 100),
    correctAnswers,
    totalQuestions: questions.length,
    missedQuestions,
    correctQuestions,
    performanceByCategory,
    performanceByDifficulty
  };
};