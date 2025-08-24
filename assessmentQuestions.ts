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
    },
    {
      id: '1-6',
      question: 'What is a closure in JavaScript?',
      options: [
        'A function that has access to variables in its outer scope',
        'A way to close browser windows',
        'A method to end loops',
        'A type of variable declaration'
      ],
      correctAnswer: 0,
      explanation: 'A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Advanced JavaScript',
      tags: ['Functions', 'Scope']
    },
    {
      id: '1-7',
      question: 'What is the event loop in JavaScript?',
      options: [
        'A way to loop through events',
        'A mechanism that handles asynchronous operations',
        'A type of for loop',
        'A method to create events'
      ],
      correctAnswer: 1,
      explanation: 'The event loop is a mechanism that allows JavaScript to perform non-blocking operations by handling asynchronous callbacks.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Asynchronous Programming',
      tags: ['Async', 'Performance']
    },
    {
      id: '1-8',
      question: 'What is the difference between == and === in JavaScript?',
      options: [
        'There is no difference',
        '=== checks both value and type, == only checks value',
        '== is faster than ===',
        '=== is deprecated'
      ],
      correctAnswer: 1,
      explanation: '=== (strict equality) checks both value and type, while == (loose equality) only checks value and performs type coercion.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Comparison Operators',
      tags: ['Operators', 'Type Safety']
    },
    {
      id: '1-9',
      question: 'What is a promise in JavaScript?',
      options: [
        'A guarantee that code will work',
        'An object representing the eventual completion of an asynchronous operation',
        'A type of function',
        'A way to make HTTP requests'
      ],
      correctAnswer: 1,
      explanation: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Promises',
      tags: ['Async', 'ES6']
    },
    {
      id: '1-10',
      question: 'What is the purpose of the "use strict" directive?',
      options: [
        'To make code run faster',
        'To enable strict mode with additional error checking',
        'To disable JavaScript features',
        'To improve browser compatibility'
      ],
      correctAnswer: 1,
      explanation: '"use strict" enables strict mode, which catches common coding mistakes and prevents certain unsafe actions.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Strict Mode',
      tags: ['Best Practices', 'Error Handling']
    },
    {
      id: '1-11',
      question: 'What is the difference between null and undefined?',
      options: [
        'They are the same',
        'null is assigned, undefined is not assigned',
        'undefined is faster than null',
        'null is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'null is an explicitly assigned value representing "no value", while undefined means a variable has been declared but not assigned a value.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Data Types',
      tags: ['Variables', 'Types']
    },
    {
      id: '1-12',
      question: 'What is the purpose of the map() function?',
      options: [
        'To create a map object',
        'To transform each element in an array',
        'To filter array elements',
        'To sort array elements'
      ],
      correctAnswer: 1,
      explanation: 'The map() function creates a new array with the results of calling a provided function on every element in the calling array.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Array Methods',
      tags: ['Arrays', 'Functional Programming']
    },
    {
      id: '1-13',
      question: 'What is the difference between var, let, and const?',
      options: [
        'They are all the same',
        'var has function scope, let/const have block scope',
        'const is the fastest',
        'let is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'var has function scope and can be redeclared, let has block scope and can be reassigned, const has block scope and cannot be reassigned.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Variable Scoping',
      tags: ['ES6', 'Scope']
    },
    {
      id: '1-14',
      question: 'What is the purpose of the reduce() function?',
      options: [
        'To reduce array size',
        'To accumulate values from an array into a single result',
        'To remove duplicates',
        'To reverse array order'
      ],
      correctAnswer: 1,
      explanation: 'The reduce() function executes a reducer function on each element of the array, resulting in a single output value.',
      category: 'JavaScript',
      difficulty: 'hard',
      skill: 'Array Methods',
      tags: ['Arrays', 'Functional Programming']
    },
    {
      id: '1-15',
      question: 'What is the difference between synchronous and asynchronous code?',
      options: [
        'There is no difference',
        'Synchronous blocks execution, asynchronous does not',
        'Asynchronous is always faster',
        'Synchronous is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Synchronous code executes line by line and blocks execution until completion, while asynchronous code allows other operations to continue.',
      category: 'JavaScript',
      difficulty: 'medium',
      skill: 'Asynchronous Programming',
      tags: ['Performance', 'Execution Model']
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
    },
    {
      id: '2-6',
      question: 'What is the difference between controlled and uncontrolled components?',
      options: [
        'There is no difference',
        'Controlled components have their state managed by React, uncontrolled components manage their own state',
        'Uncontrolled components are always better',
        'Controlled components are deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Controlled components have their state managed by React, while uncontrolled components manage their own state internally.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Form Handling',
      tags: ['Forms', 'State Management']
    },
    {
      id: '2-7',
      question: 'What is the purpose of the useCallback hook?',
      options: [
        'To create callbacks',
        'To memoize functions and prevent unnecessary re-renders',
        'To improve performance',
        'To create new functions'
      ],
      correctAnswer: 1,
      explanation: 'useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['Memoization', 'Re-renders']
    },
    {
      id: '2-8',
      question: 'What is the difference between useMemo and useCallback?',
      options: [
        'They are the same',
        'useMemo memoizes values, useCallback memoizes functions',
        'useCallback is always better',
        'useMemo is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useMemo memoizes the result of a computation, while useCallback memoizes a function to prevent unnecessary re-renders.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['Memoization', 'Hooks']
    },
    {
      id: '2-9',
      question: 'What is the purpose of the useContext hook?',
      options: [
        'To create context',
        'To consume React context without nesting',
        'To improve performance',
        'To create new contexts'
      ],
      correctAnswer: 1,
      explanation: 'useContext allows you to consume React context without nesting, making it easier to access context values in functional components.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Context API',
      tags: ['State Management', 'Data Sharing']
    },
    {
      id: '2-10',
      question: 'What is the difference between React.memo and useMemo?',
      options: [
        'They are the same',
        'React.memo memoizes components, useMemo memoizes values',
        'useMemo is always better',
        'React.memo is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'React.memo is a higher-order component that memoizes components, while useMemo is a hook that memoizes values.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Performance Optimization',
      tags: ['Memoization', 'Hooks']
    },
    {
      id: '2-11',
      question: 'What is the purpose of the useReducer hook?',
      options: [
        'To reduce arrays',
        'To manage complex state logic with a reducer function',
        'To improve performance',
        'To create new reducers'
      ],
      correctAnswer: 1,
      explanation: 'useReducer is an alternative to useState for managing complex state logic that involves multiple sub-values.',
      category: 'React',
      difficulty: 'hard',
      skill: 'State Management',
      tags: ['Complex State', 'Reducer Pattern']
    },
    {
      id: '2-12',
      question: 'What is the difference between useState and useReducer?',
      options: [
        'They are the same',
        'useState is for simple state, useReducer is for complex state logic',
        'useReducer is always better',
        'useState is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'useState is ideal for simple state management, while useReducer is better for complex state logic that involves multiple sub-values.',
      category: 'React',
      difficulty: 'medium',
      skill: 'State Management',
      tags: ['Simple vs Complex State', 'Hooks']
    },
    {
      id: '2-13',
      question: 'What is the purpose of the useRef hook?',
      options: [
        'To create references',
        'To persist values between renders without causing re-renders',
        'To improve performance',
        'To create new refs'
      ],
      correctAnswer: 1,
      explanation: 'useRef returns a mutable ref object that persists for the full lifetime of the component without causing re-renders.',
      category: 'React',
      difficulty: 'medium',
      skill: 'Refs',
      tags: ['DOM Access', 'Persistent Values']
    },
    {
      id: '2-14',
      question: 'What is the difference between forwardRef and useImperativeHandle?',
      options: [
        'They are the same',
        'forwardRef forwards refs to child components, useImperativeHandle customizes ref behavior',
        'useImperativeHandle is always better',
        'forwardRef is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'forwardRef forwards refs to child components, while useImperativeHandle customizes the instance value that is exposed to parent components.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Refs',
      tags: ['Ref Forwarding', 'Imperative Handles']
    },
    {
      id: '2-15',
      question: 'What is the purpose of the useLayoutEffect hook?',
      options: [
        'To create layout effects',
        'To perform side effects synchronously after DOM mutations',
        'To improve performance',
        'To create new effects'
      ],
      correctAnswer: 1,
      explanation: 'useLayoutEffect fires synchronously after all DOM mutations, making it useful for measurements and DOM manipulations.',
      category: 'React',
      difficulty: 'hard',
      skill: 'Effects',
      tags: ['DOM Mutations', 'Synchronous Effects']
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
    },
    {
      id: '3-6',
      question: 'What is the difference between == and is in Python?',
      options: [
        'There is no difference',
        '== compares values, is compares object identity',
        'is is faster than ==',
        '== only works with numbers'
      ],
      correctAnswer: 1,
      explanation: '== compares the values of objects, while is checks if two variables point to the same object in memory.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Operators',
      tags: ['Python', 'Operators', 'Identity']
    },
    {
      id: '3-7',
      question: 'What is a generator in Python?',
      options: [
        'A type of loop',
        'A function that yields values one at a time',
        'A data structure',
        'A built-in module'
      ],
      correctAnswer: 1,
      explanation: 'A generator is a function that uses the yield keyword to return values one at a time, creating an iterator.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Generators',
      tags: ['Python', 'Generators', 'Iterators']
    },
    {
      id: '3-8',
      question: 'What is the purpose of the with statement?',
      options: [
        'To create loops',
        'To handle context management and resource cleanup',
        'To define functions',
        'To import modules'
      ],
      correctAnswer: 1,
      explanation: 'The with statement is used for context management, ensuring proper setup and cleanup of resources.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Context Management',
      tags: ['Python', 'Context Managers', 'Resource Management']
    },
    {
      id: '3-9',
      question: 'What is the difference between *args and **kwargs?',
      options: [
        'There is no difference',
        '*args is for positional arguments, **kwargs is for keyword arguments',
        '**kwargs is deprecated',
        '*args only works with functions'
      ],
      correctAnswer: 1,
      explanation: '*args collects positional arguments into a tuple, while **kwargs collects keyword arguments into a dictionary.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Function Arguments',
      tags: ['Python', 'Args', 'Kwargs', 'Functions']
    },
    {
      id: '3-10',
      question: 'What is the purpose of the __str__ method?',
      options: [
        'To convert to string',
        'To provide a string representation of an object',
        'To handle errors',
        'To create new objects'
      ],
      correctAnswer: 1,
      explanation: 'The __str__ method returns a string representation of an object, used when calling str() or print().',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Magic Methods',
      tags: ['Python', 'Magic Methods', 'String Representation']
    },
    {
      id: '3-11',
      question: 'What is the difference between a module and a package?',
      options: [
        'There is no difference',
        'A module is a single file, a package is a directory with __init__.py',
        'Packages are deprecated',
        'Modules are only for built-ins'
      ],
      correctAnswer: 1,
      explanation: 'A module is a single Python file, while a package is a directory containing an __init__.py file and other modules.',
      category: 'Python',
      difficulty: 'medium',
      skill: 'Modules and Packages',
      tags: ['Python', 'Modules', 'Packages', 'Import System']
    },
    {
      id: '3-12',
      question: 'What is the purpose of the @property decorator?',
      options: [
        'To create properties',
        'To define getter and setter methods for attributes',
        'To improve performance',
        'To handle exceptions'
      ],
      correctAnswer: 1,
      explanation: 'The @property decorator allows you to define getter and setter methods for class attributes.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Properties',
      tags: ['Python', 'Properties', 'Decorators', 'OOP']
    },
    {
      id: '3-13',
      question: 'What is the difference between deepcopy and shallow copy?',
      options: [
        'There is no difference',
        'Shallow copy creates a new object, deepcopy creates a completely independent copy',
        'Deepcopy is always faster',
        'Shallow copy is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Shallow copy creates a new object but references the same nested objects, while deepcopy creates a completely independent copy.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Copy Operations',
      tags: ['Python', 'Copy', 'Objects', 'References']
    },
    {
      id: '3-14',
      question: 'What is the purpose of the __slots__ attribute?',
      options: [
        'To define slots',
        'To restrict the attributes that can be assigned to instances',
        'To improve performance',
        'To handle errors'
      ],
      correctAnswer: 1,
      explanation: '__slots__ restricts the attributes that can be assigned to instances, improving memory usage and performance.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Memory Optimization',
      tags: ['Python', 'Slots', 'Memory', 'Performance']
    },
    {
      id: '3-15',
      question: 'What is the difference between a class method and a static method?',
      options: [
        'There is no difference',
        'Class methods receive the class as first argument, static methods don\'t',
        'Static methods are deprecated',
        'Class methods are only for inheritance'
      ],
      correctAnswer: 1,
      explanation: 'Class methods receive the class as the first argument, while static methods don\'t receive any implicit first argument.',
      category: 'Python',
      difficulty: 'hard',
      skill: 'Method Types',
      tags: ['Python', 'Class Methods', 'Static Methods', 'OOP']
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
    },
    {
      id: '4-6',
      question: 'What is the purpose of personas in UX design?',
      options: [
        'To create fictional characters',
        'To represent target users and their characteristics',
        'To make designs more colorful',
        'To reduce design time'
      ],
      correctAnswer: 1,
      explanation: 'Personas represent target users and their characteristics, helping designers make user-centered design decisions.',
      category: 'Design',
      difficulty: 'easy',
      skill: 'Personas',
      tags: ['UX', 'Personas', 'User Research']
    },
    {
      id: '4-7',
      question: 'What is the difference between usability and user experience?',
      options: [
        'There is no difference',
        'Usability focuses on efficiency, UX encompasses the entire experience',
        'UX is only about aesthetics',
        'Usability is deprecated'
      ],
      correctAnswer: 1,
      explanation: 'Usability focuses on efficiency and effectiveness, while UX encompasses the entire user experience including emotions and satisfaction.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'UX Concepts',
      tags: ['UX', 'Usability', 'Design']
    },
    {
      id: '4-8',
      question: 'What is the purpose of A/B testing in UX design?',
      options: [
        'To test two different designs',
        'To compare two versions and determine which performs better',
        'To create backup designs',
        'To reduce development costs'
      ],
      correctAnswer: 1,
      explanation: 'A/B testing compares two versions of a design to determine which performs better based on user behavior and metrics.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'A/B Testing',
      tags: ['UX', 'Testing', 'Optimization']
    },
    {
      id: '4-9',
      question: 'What is the purpose of information architecture?',
      options: [
        'To organize information',
        'To structure and organize content in a way that users can easily navigate',
        'To create databases',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'Information architecture structures and organizes content in a way that users can easily navigate and find what they need.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Information Architecture',
      tags: ['UX', 'Information Architecture', 'Navigation']
    },
    {
      id: '4-10',
      question: 'What is the purpose of user journey mapping?',
      options: [
        'To create maps',
        'To visualize the user\'s experience from start to finish',
        'To track user locations',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'User journey mapping visualizes the user\'s experience from start to finish, identifying pain points and opportunities.',
      category: 'Design',
      difficulty: 'medium',
      skill: 'Journey Mapping',
      tags: ['UX', 'Journey Mapping', 'User Experience']
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
    },
    {
      id: '5-6',
      question: 'What is the purpose of regularization in machine learning?',
      options: [
        'To make models regular',
        'To prevent overfitting by adding constraints to the model',
        'To improve performance',
        'To reduce data size'
      ],
      correctAnswer: 1,
      explanation: 'Regularization prevents overfitting by adding constraints to the model, such as L1 or L2 penalties.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Regularization',
      tags: ['ML', 'Regularization', 'Overfitting']
    },
    {
      id: '5-7',
      question: 'What is the difference between precision and recall?',
      options: [
        'There is no difference',
        'Precision measures accuracy of positive predictions, recall measures ability to find all positives',
        'Precision is deprecated',
        'Recall is only for classification'
      ],
      correctAnswer: 1,
      explanation: 'Precision measures the accuracy of positive predictions, while recall measures the ability to find all positive instances.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Model Evaluation',
      tags: ['ML', 'Precision', 'Recall', 'Metrics']
    },
    {
      id: '5-8',
      question: 'What is the purpose of ensemble methods?',
      options: [
        'To create ensembles',
        'To combine multiple models to improve overall performance',
        'To reduce model complexity',
        'To speed up training'
      ],
      correctAnswer: 1,
      explanation: 'Ensemble methods combine multiple models to improve overall performance and reduce overfitting.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Ensemble Methods',
      tags: ['ML', 'Ensemble', 'Model Combination']
    },
    {
      id: '5-9',
      question: 'What is the difference between classification and regression?',
      options: [
        'There is no difference',
        'Classification predicts categories, regression predicts continuous values',
        'Regression is deprecated',
        'Classification is only for numbers'
      ],
      correctAnswer: 1,
      explanation: 'Classification predicts discrete categories or classes, while regression predicts continuous numerical values.',
      category: 'Data Science',
      difficulty: 'easy',
      skill: 'ML Types',
      tags: ['ML', 'Classification', 'Regression']
    },
    {
      id: '5-10',
      question: 'What is the purpose of dimensionality reduction?',
      options: [
        'To reduce dimensions',
        'To reduce the number of features while preserving important information',
        'To improve performance',
        'To reduce data size'
      ],
      correctAnswer: 1,
      explanation: 'Dimensionality reduction reduces the number of features while preserving important information and reducing noise.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Dimensionality Reduction',
      tags: ['ML', 'Dimensionality', 'Feature Selection']
    },
    {
      id: '5-11',
      question: 'What is the difference between bagging and boosting?',
      options: [
        'There is no difference',
        'Bagging trains models independently, boosting trains models sequentially',
        'Boosting is deprecated',
        'Bagging is only for classification'
      ],
      correctAnswer: 1,
      explanation: 'Bagging trains models independently and averages their predictions, while boosting trains models sequentially, each focusing on previous errors.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Ensemble Methods',
      tags: ['ML', 'Bagging', 'Boosting', 'Ensemble']
    },
    {
      id: '5-12',
      question: 'What is the purpose of hyperparameter tuning?',
      options: [
        'To tune hyperparameters',
        'To find optimal model parameters that maximize performance',
        'To improve performance',
        'To reduce training time'
      ],
      correctAnswer: 1,
      explanation: 'Hyperparameter tuning finds optimal model parameters that maximize performance on validation data.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Hyperparameter Tuning',
      tags: ['ML', 'Hyperparameters', 'Optimization']
    },
    {
      id: '5-13',
      question: 'What is the difference between training and validation sets?',
      options: [
        'There is no difference',
        'Training set is used to train the model, validation set is used to tune hyperparameters',
        'Validation set is deprecated',
        'Training set is only for testing'
      ],
      correctAnswer: 1,
      explanation: 'Training set is used to train the model, while validation set is used to tune hyperparameters and assess performance.',
      category: 'Data Science',
      difficulty: 'easy',
      skill: 'Data Splitting',
      tags: ['ML', 'Training', 'Validation', 'Data']
    },
    {
      id: '5-14',
      question: 'What is the purpose of feature selection?',
      options: [
        'To select features',
        'To identify and use only the most relevant features for modeling',
        'To improve performance',
        'To reduce data size'
      ],
      correctAnswer: 1,
      explanation: 'Feature selection identifies and uses only the most relevant features for modeling, improving performance and reducing noise.',
      category: 'Data Science',
      difficulty: 'medium',
      skill: 'Feature Selection',
      tags: ['ML', 'Feature Selection', 'Data Quality']
    },
    {
      id: '5-15',
      question: 'What is the difference between parametric and non-parametric models?',
      options: [
        'There is no difference',
        'Parametric models have fixed parameters, non-parametric models adapt to data',
        'Non-parametric models are deprecated',
        'Parametric models are only for regression'
      ],
      correctAnswer: 1,
      explanation: 'Parametric models have a fixed number of parameters, while non-parametric models adapt their complexity to the data.',
      category: 'Data Science',
      difficulty: 'hard',
      skill: 'Model Types',
      tags: ['ML', 'Parametric', 'Non-parametric', 'Models']
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
    },
    {
      id: '6-6',
      question: 'What is the difference between horizontal and vertical scaling?',
      options: [
        'There is no difference',
        'Horizontal scaling adds more machines, vertical scaling adds more resources to existing machines',
        'Vertical scaling is deprecated',
        'Horizontal scaling is only for cloud'
      ],
      correctAnswer: 1,
      explanation: 'Horizontal scaling adds more machines to distribute load, while vertical scaling adds more resources to existing machines.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Scaling',
      tags: ['DevOps', 'Scaling', 'Performance']
    },
    {
      id: '6-7',
      question: 'What is the purpose of configuration management?',
      options: [
        'To manage configurations',
        'To automate the setup and maintenance of infrastructure and applications',
        'To reduce costs',
        'To improve security'
      ],
      correctAnswer: 1,
      explanation: 'Configuration management automates the setup and maintenance of infrastructure and applications, ensuring consistency.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Configuration Management',
      tags: ['DevOps', 'Configuration', 'Automation']
    },
    {
      id: '6-8',
      question: 'What is the difference between blue-green and rolling deployments?',
      options: [
        'There is no difference',
        'Blue-green switches between two identical environments, rolling updates gradually',
        'Rolling deployments are deprecated',
        'Blue-green is only for testing'
      ],
      correctAnswer: 1,
      explanation: 'Blue-green switches between two identical environments, while rolling deployments gradually update instances.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Deployment Strategies',
      tags: ['DevOps', 'Deployment', 'Zero Downtime']
    },
    {
      id: '6-9',
      question: 'What is the purpose of log aggregation?',
      options: [
        'To collect logs',
        'To centralize logs from multiple sources for analysis and monitoring',
        'To reduce storage costs',
        'To improve performance'
      ],
      correctAnswer: 1,
      explanation: 'Log aggregation centralizes logs from multiple sources, enabling better analysis, monitoring, and troubleshooting.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Logging',
      tags: ['DevOps', 'Logging', 'Monitoring']
    },
    {
      id: '6-10',
      question: 'What is the difference between stateless and stateful applications?',
      options: [
        'There is no difference',
        'Stateless apps don\'t store session data, stateful apps maintain state',
        'Stateful apps are deprecated',
        'Stateless apps are only for web'
      ],
      correctAnswer: 1,
      explanation: 'Stateless applications don\'t store session data between requests, while stateful applications maintain state.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Application Architecture',
      tags: ['DevOps', 'Architecture', 'State Management']
    },
    {
      id: '6-11',
      question: 'What is the purpose of service mesh?',
      options: [
        'To connect services',
        'To manage service-to-service communication, security, and observability',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Service mesh manages service-to-service communication, security, and observability in microservices architectures.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Service Mesh',
      tags: ['DevOps', 'Service Mesh', 'Microservices']
    },
    {
      id: '6-12',
      question: 'What is the difference between IaaS, PaaS, and SaaS?',
      options: [
        'There is no difference',
        'IaaS provides infrastructure, PaaS provides platform, SaaS provides software',
        'PaaS is deprecated',
        'IaaS is only for large companies'
      ],
      correctAnswer: 1,
      explanation: 'IaaS provides infrastructure, PaaS provides platform, and SaaS provides software as a service.',
      category: 'DevOps',
      difficulty: 'medium',
      skill: 'Cloud Services',
      tags: ['DevOps', 'Cloud', 'IaaS', 'PaaS', 'SaaS']
    },
    {
      id: '6-13',
      question: 'What is the purpose of chaos engineering?',
      options: [
        'To create chaos',
        'To test system resilience by intentionally introducing failures',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Chaos engineering tests system resilience by intentionally introducing failures to identify weaknesses.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Chaos Engineering',
      tags: ['DevOps', 'Resilience', 'Testing']
    },
    {
      id: '6-14',
      question: 'What is the difference between imperative and declarative configuration?',
      options: [
        'There is no difference',
        'Imperative specifies how, declarative specifies what',
        'Declarative is deprecated',
        'Imperative is only for scripts'
      ],
      correctAnswer: 1,
      explanation: 'Imperative configuration specifies how to achieve a state, while declarative specifies the desired state.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'Configuration Management',
      tags: ['DevOps', 'Configuration', 'Declarative']
    },
    {
      id: '6-15',
      question: 'What is the purpose of GitOps?',
      options: [
        'To use Git',
        'To use Git as the single source of truth for infrastructure and application deployment',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'GitOps uses Git as the single source of truth for infrastructure and application deployment, enabling version control and collaboration.',
      category: 'DevOps',
      difficulty: 'hard',
      skill: 'GitOps',
      tags: ['DevOps', 'GitOps', 'Version Control']
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
    },
    {
      id: '7-6',
      question: 'What is the purpose of mobile app performance optimization?',
      options: [
        'To optimize performance',
        'To improve app speed, battery life, and user experience',
        'To reduce development time',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app performance optimization improves app speed, battery life, and overall user experience.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Performance',
      tags: ['Mobile', 'Performance', 'Optimization']
    },
    {
      id: '7-7',
      question: 'What is the difference between mobile web apps and native apps?',
      options: [
        'There is no difference',
        'Mobile web apps run in browsers, native apps are installed on devices',
        'Native apps are deprecated',
        'Mobile web apps are only for testing'
      ],
      correctAnswer: 1,
      explanation: 'Mobile web apps run in web browsers, while native apps are installed directly on mobile devices.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'App Types',
      tags: ['Mobile', 'Web Apps', 'Native Apps']
    },
    {
      id: '7-8',
      question: 'What is the purpose of mobile app security?',
      options: [
        'To secure apps',
        'To protect user data and prevent unauthorized access',
        'To improve performance',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app security protects user data and prevents unauthorized access to app functionality.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Security',
      tags: ['Mobile', 'Security', 'Data Protection']
    },
    {
      id: '7-9',
      question: 'What is the difference between push and pull notifications?',
      options: [
        'There is no difference',
        'Push notifications are sent from server, pull notifications are requested by app',
        'Pull notifications are deprecated',
        'Push notifications are only for iOS'
      ],
      correctAnswer: 1,
      explanation: 'Push notifications are sent from servers to devices, while pull notifications are requested by the app.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Notifications',
      tags: ['Mobile', 'Push Notifications', 'Pull Notifications']
    },
    {
      id: '7-10',
      question: 'What is the purpose of mobile app analytics?',
      options: [
        'To analyze apps',
        'To track user behavior and app performance for insights',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app analytics track user behavior and app performance to provide insights for improvement.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Analytics',
      tags: ['Mobile', 'Analytics', 'User Behavior']
    },
    {
      id: '7-11',
      question: 'What is the difference between mobile app stores and enterprise distribution?',
      options: [
        'There is no difference',
        'App stores are public, enterprise distribution is for internal company use',
        'Enterprise distribution is deprecated',
        'App stores are only for consumers'
      ],
      correctAnswer: 1,
      explanation: 'App stores are public platforms for consumer apps, while enterprise distribution is for internal company app deployment.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Distribution',
      tags: ['Mobile', 'App Stores', 'Enterprise']
    },
    {
      id: '7-12',
      question: 'What is the purpose of mobile app accessibility?',
      options: [
        'To make apps accessible',
        'To ensure apps are usable by people with disabilities',
        'To improve performance',
        'To reduce development time'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app accessibility ensures apps are usable by people with various disabilities and limitations.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Accessibility',
      tags: ['Mobile', 'Accessibility', 'Inclusive Design']
    },
    {
      id: '7-13',
      question: 'What is the difference between mobile app updates and versioning?',
      options: [
        'There is no difference',
        'Updates modify existing apps, versioning creates new app versions',
        'Versioning is deprecated',
        'Updates are only for bug fixes'
      ],
      correctAnswer: 1,
      explanation: 'Updates modify existing apps with new features or fixes, while versioning creates new app versions.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Updates',
      tags: ['Mobile', 'Updates', 'Versioning']
    },
    {
      id: '7-14',
      question: 'What is the purpose of mobile app monetization?',
      options: [
        'To monetize apps',
        'To generate revenue from mobile applications',
        'To improve performance',
        'To reduce costs'
      ],
      correctAnswer: 1,
      explanation: 'Mobile app monetization strategies generate revenue from mobile applications through various methods.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Monetization',
      tags: ['Mobile', 'Monetization', 'Revenue']
    },
    {
      id: '7-15',
      question: 'What is the difference between mobile app development frameworks?',
      options: [
        'There is no difference',
        'Different frameworks offer different features, performance, and development approaches',
        'Frameworks are deprecated',
        'All frameworks are the same'
      ],
      correctAnswer: 1,
      explanation: 'Different mobile development frameworks offer varying features, performance characteristics, and development approaches.',
      category: 'Mobile Development',
      difficulty: 'medium',
      skill: 'Frameworks',
      tags: ['Mobile', 'Frameworks', 'Development Tools']
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
    },
    {
      id: '9-6',
      question: 'When making important decisions, I typically:',
      options: [
        'Rely on my intuition and experience',
        'Gather data and analyze options thoroughly',
        'Seek consensus from the team',
        'Follow established procedures'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your decision-making style and approach to problem-solving.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Decision Making',
      tags: ['Leadership', 'Decision Making', 'Problem Solving']
    },
    {
      id: '9-7',
      question: 'In team meetings, I usually:',
      options: [
        'Take control and direct the discussion',
        'Facilitate discussion and ensure everyone participates',
        'Listen quietly and contribute when asked',
        'Avoid speaking unless necessary'
      ],
      correctAnswer: 1,
      explanation: 'This shows your communication style and meeting participation approach.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Communication',
      tags: ['Leadership', 'Communication', 'Meetings']
    },
    {
      id: '9-8',
      question: 'When team members disagree, I:',
      options: [
        'Choose the best option and move forward',
        'Help find common ground and build consensus',
        'Let them resolve it themselves',
        'Avoid getting involved'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your conflict resolution style and team management approach.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Conflict Resolution',
      tags: ['Leadership', 'Conflict Resolution', 'Team Management']
    },
    {
      id: '9-9',
      question: 'My approach to innovation is:',
      options: [
        'To encourage experimentation and new ideas',
        'To carefully evaluate risks before trying new approaches',
        'To stick with proven methods',
        'To avoid change when possible'
      ],
      correctAnswer: 1,
      explanation: 'This shows your attitude toward innovation and change management.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Innovation',
      tags: ['Leadership', 'Innovation', 'Change Management']
    },
    {
      id: '9-10',
      question: 'When setting team goals, I:',
      options: [
        'Set ambitious targets to push the team',
        'Collaborate with the team to set realistic goals',
        'Let the team set their own goals',
        'Follow organizational guidelines'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your goal-setting approach and team motivation style.',
      category: 'Personality',
      difficulty: 'easy',
      skill: 'Goal Setting',
      tags: ['Leadership', 'Goal Setting', 'Motivation']
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
    },
    {
      id: '11-6',
      question: 'If a car travels at 60 mph for 2.5 hours, how far does it go?',
      options: [
        '120 miles',
        '150 miles',
        '180 miles',
        '200 miles'
      ],
      correctAnswer: 1,
      explanation: 'Distance = Speed × Time = 60 mph × 2.5 hours = 150 miles',
      category: 'Problem Solving',
      difficulty: 'easy',
      skill: 'Distance Problems',
      tags: ['Math', 'Distance', 'Speed', 'Time']
    },
    {
      id: '11-7',
      question: 'What is the next number: 3, 6, 11, 18, 27, ?',
      options: [
        '36',
        '38',
        '40',
        '42'
      ],
      correctAnswer: 1,
      explanation: 'The difference increases by 2: +3, +5, +7, +9, +11. So 27 + 11 = 38',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Number Sequences',
      tags: ['Math', 'Sequences', 'Patterns']
    },
    {
      id: '11-8',
      question: 'If 4 machines can produce 100 widgets in 5 hours, how many widgets can 6 machines produce in 3 hours?',
      options: [
        '60 widgets',
        '90 widgets',
        '120 widgets',
        '150 widgets'
      ],
      correctAnswer: 1,
      explanation: 'Rate: 4 machines × 5 hours = 100 widgets, so 1 machine-hour = 5 widgets. 6 machines × 3 hours × 5 = 90 widgets',
      category: 'Problem Solving',
      difficulty: 'hard',
      skill: 'Work Rate Problems',
      tags: ['Math', 'Work Rate', 'Proportions']
    },
    {
      id: '11-9',
      question: 'What is the sum of the first 10 even numbers?',
      options: [
        '90',
        '100',
        '110',
        '120'
      ],
      correctAnswer: 2,
      explanation: 'First 10 even numbers: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. Sum = 110',
      category: 'Problem Solving',
      difficulty: 'medium',
      skill: 'Number Series',
      tags: ['Math', 'Series', 'Even Numbers']
    },
    {
      id: '11-10',
      question: 'A triangle has angles measuring 45°, 60°, and x°. What is x?',
      options: [
        '65°',
        '70°',
        '75°',
        '80°'
      ],
      correctAnswer: 2,
      explanation: 'Sum of angles in a triangle = 180°. 45° + 60° + x° = 180°. x° = 75°',
      category: 'Problem Solving',
      difficulty: 'easy',
      skill: 'Geometry',
      tags: ['Math', 'Geometry', 'Angles', 'Triangles']
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
    },
    {
      id: '13-6',
      question: 'I prefer work environments that are:',
      options: [
        'Fast-paced and dynamic',
        'Stable and predictable',
        'Creative and flexible',
        'Technical and structured'
      ],
      correctAnswer: 1,
      explanation: 'This helps identify your preferred work environment characteristics.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Work Environment',
      tags: ['Career', 'Work Environment', 'Preferences']
    },
    {
      id: '13-7',
      question: 'When learning new skills, I prefer:',
      options: [
        'Hands-on practice',
        'Reading and research',
        'Group learning',
        'One-on-one mentoring'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your preferred learning style and approach.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Learning Style',
      tags: ['Career', 'Learning', 'Development']
    },
    {
      id: '13-8',
      question: 'I work best when:',
      options: [
        'I have clear deadlines',
        'I can work at my own pace',
        'I collaborate with others',
        'I work independently'
      ],
      correctAnswer: 1,
      explanation: 'This shows your preferred work conditions and productivity factors.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Work Conditions',
      tags: ['Career', 'Productivity', 'Work Style']
    },
    {
      id: '13-9',
      question: 'My ideal manager would:',
      options: [
        'Give me clear direction',
        'Provide guidance and support',
        'Give me autonomy',
        'Focus on results only'
      ],
      correctAnswer: 1,
      explanation: 'This reveals your preferred management style and leadership preferences.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Management Style',
      tags: ['Career', 'Management', 'Leadership']
    },
    {
      id: '13-10',
      question: 'I am most satisfied when my work:',
      options: [
        'Pays well',
        'Makes a positive impact',
        'Is intellectually challenging',
        'Provides work-life balance'
      ],
      correctAnswer: 1,
      explanation: 'This helps identify what brings you job satisfaction and fulfillment.',
      category: 'Career',
      difficulty: 'easy',
      skill: 'Job Satisfaction',
      tags: ['Career', 'Satisfaction', 'Fulfillment']
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