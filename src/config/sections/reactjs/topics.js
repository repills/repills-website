const adjustTopics = require('../utils/adjustTopics')

const topics = {
  why_react: {
    title: 'Why React is awesome',
    slug: 'why-you-should-use-react',
    description: `Ever wondered why React is one of the most popular libraries
out there? Developers love React and for many different reasons.
This topic provides a collection of resources that will help you to discover React
and its good parts.
`,
    similar: [
      'Reasons to use React',
      'Why I should use React',
      'Benefits of React',
      'React js props & cons',
      'What is React good for',
      'React advantages and disadvantages'
    ]
  },
  get_started: {
    title: 'Getting started with React',
    slug: 'getting-started-with-react',
    description: `The first step is always the most important step. Speaking of
React, it's probably easier done than said and this topic is going to help you
getting started with it on the right foot.
`,
    similar: [
      'React introduction',
      'Understanding React',
      'What is React',
      'React hello world',
      'React for newbies',
      'Things every React.js beginner should know',
      'React starter kit',
      'React tutorials for beginners',
      'Best way to learn React',
      'Create React app',
      'How to run React'
    ]
  },
  jsx: {
    title: 'JSX (JavaScript XML)',
    slug: 'jsx',
    description: `One of the most powerful, distinguishable and often most
criticised features of React is JSX, an HTML-like language that can be used to
define the markup of React components. This topic collects the best resources
that allows you to get more confident and understand all the details of JSX.
`,
    similar: [
      'What is JSX',
      'How to use JSX',
      'JSX syntax',
      'JSX vs HTML',
      'Props in JSX',
      'Children in JSX',
      'Functions as JSX Children',
      'JSX In Depth',
      'Advantages to use JSX',
      'Using inline CSS in JSX'
    ]
  },
  react_components: {
    title: 'React Components',
    slug: 'react-components',
    description: `In React components are the key unit used to build powerful web
applications. It's vital to understand how components work, how to combine them and
what's their lifecycle in order to be able to use React efficiently. This topic
has a great selection of resources to get you confident with React components.
`,
    similar: [
      'What is a React component',
      'How to write React component',
      'Communication between React components',
      'Best practices to write a React component',
      'React stateless components',
      'Composing React components',
      'React pure components',
      'Rendering a React component',
      'Writing highly reusable React components',
      'React class components',
      'React functional components'
    ]
  },
  props_proptypes: {
    title: 'Props & PropTypes in React',
    slug: 'react-props-proptypes',
    description: `Props allow you to pass data to components, attach events or
nest components. Props constitute another fundamental unit of knowledge needed
to really understand how React works and how to use it efficiently.
`,
    similar: [
      'How to use React PropTypes',
      'Reasons to use PropTypes',
      'What PropTypes are available',
      'Static PropTypes',
      'Why React PropTypes are important',
      'Typechecking with PropTypes',
      'Defining PropTypes on components',
      'Using PropTypes with ES2015 Class-based and stateless components',
      'Validating Props easily with React PropTypes'
    ]
  },
  react_managing_application_state: {
    title: 'Managing application state in React.js',
    slug: 'react-managing-application-state',
    description: `One of the hardest parts of large application development is managing state. In this topics you will
find ways to manage application state. They each are intended to solve some specific problems.`,
    similar: [
      'How to manage the application state in React',
      'Best practices to manage the application state',
      'React state management libraries',
      'React state management 2018',
      'React without state management',
      'React Context api vs Redux',
      'React context api tutorial',
      'React context provider'
    ]
  },
  component_state: {
    title: 'React Component State',
    slug: 'react-component-state',
    description: `State is what makes any app actually do something useful.
React has a powerful API that allows you to manage the state of every component.
In this topic you'll find a number of links to understand all the options and
approaches that are commonly used when managing state in React.
`,
    similar: [
      'What is the React component State',
      'How to use the React component State',
      'Best practices to use the component State',
      'Updating the component State',
      'React State vs props',
      'Set the React component State',
      'Component initial state',
      'Adding local state to a Class component',
      "How to define a component's initial State",
      'React setState callback',
      'Understanding State in React Components',
      'State anti patterns',
      'Asynchronous State Updates',
      'Using State correctly'
    ]
  },
  functional_components: {
    title: 'React functional Components',
    slug: 'react-stateless-functional-components',
    description: `In React you can define and instantiate components in many
different ways. One of the most common and most concise way is to use
"functional components". This topic is all about exploring functional components
and learning how they work and how to use them.
`,
    similar: [
      'What is a functional React component',
      'What are functional components good for',
      'How to access props in a Functional Component',
      'React functional components vs class',
      'ES6 classes vs. function components: which to use?'
    ]
  },
  lifecycle_methods: {
    title: 'React component Lifecycle Methods',
    slug: 'react-lifecycle-methods',
    description: `In React every component has a well defined lifecycle that
determines how the component is going to interact with the DOM. If you want to
build very interactive components make sure you explore few links in this topic.
`,
    similar: [
      'Lifecycle Methods Overview',
      'How To Use React.js Component Lifecycle Methods',
      'When to use React Lifecycle',
      'State and Lifecycle in React',
      'Understanding the React Component Lifecycle',
      'Mastering the React Lifecycle Methods',
      'React Lifecycle diagram',
      'Manage React Component State with Lifecycle Methods',
      'React unmount Component'
    ]
  },
  forms: {
    title: 'React Forms',
    slug: 'react-forms',
    description: `At some point, every app needs a form to collect some sort of
user input. Managing forms in React might be a little bit different than you are
used to, so it's important to figure out what's the React-way of dealing with
forms. This topic offers you a collection of links to cover everething there's to
know about forms in React.
`,
    similar: [
      'Understanding forms in React',
      'React form validation library',
      'React controlled and uncontrolled components',
      'React form examples',
      'React form submit',
      'React form libraries',
      'React Redux form validation',
      'React multiple checkboxes',
      'React select example',
      'React get form values on submit',
      'React onchange pass value',
      'Handling multiple inputs on React form',
      'Alternatives to controlled components',
      'Recommended way of working with Forms in React',
      'Defining the form and its events in React',
      'Forms and events in React',
      'onChange vs onInput'
    ]
  },
  react_events: {
    title: 'Events in React',
    slug: 'react-sytnthetic-events',
    description: `This topic collects a number of resources that can help you
understand how the React event system works.
`,
    similar: [
      'How to work with Events in React',
      'React SyntheticEvent library',
      'React event click',
      'React event prevent default',
      'React onclick pass parameter'
    ]
  },
  react_patterns: {
    title: 'React design patterns',
    slug: 'react-development-design-patterns',
    description: `It's no secret that React is a very flexible, but still
opinionated library which comes with its own best practices and design patterns.
In this topic you will learn about some of the most used patterns like higher
order components (HOC), the provider pattern, etc.
`,
    similar: [
      'React composition patterns',
      'React communication patterns',
      'React provider pattern',
      'Event switch',
      'React higher order components (HOC)',
      'React HOC decorator',
      'React component context',
      'Container component',
      'Controlled input',
      'Destructuring arguments',
      'Array as children',
      'Container presentational pattern'
    ]
  },
  react_hooks: {
    title: 'React hooks',
    slug: 'react-hooks',
    description: `Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
In this topic you will learn why Hooks are added to React and how they can help you write great applications.
`,
    similar: [
      'What react hooks are',
      'How to use react hooks',
      'How to build custom Hooks',
      'Test component that use hooks',
      'How lifecycle methods correspond to Hooks',
      'How hooks replace render props and higher-order components',
      'Data fetching with hooks',
      'UseState hook',
      'UseCallback hook',
      'Effect hook',
      'UseMemo hook',
      'useRef hook',
      'How to get the previous props or state with hooks',
      'How to memoize calculations with hooks'
    ]
  },
  routing_client_side: {
    title: 'React routing client side',
    slug: 'react-routing-client-side',
    description: `Most of single page applications (SPAs) will need to display
different sections to the user, hence you'll probably need a routing layer to
be able to switch across them. React doesn't come with a baked in router, but
there are libraries or techniques that you can use to adopt routing in your
React app. Find out what are all the option with the links in this topic.
`
  },
  miscellaneous: {
    title: 'Miscellaneous',
    slug: 'react-miscellaneous',
    description: `A topic that contains links that are relevant to React but
hard to classify under other topics.
`
  },
  react_tests: {
    title: 'React Tests',
    slug: 'react-tests',
    description: `There's no such thing as a bug-free application, every good
developer knows that. Tests are your friends with the never ending battle
against bugs. In this topic you'll learn a lot about how to test React
applications.
`
  },
  react_redux: {
    title: 'React with Redux',
    slug: 'react-redux',
    description: `Redux is a library built for state management which is often
used in combination with React. In this topic you'll find some resources
that will get you started quickly with the Redux-React combo.
`,
    similar: [
      'React Redux architecture',
      'React Redux boilerplate',
      'React Redux reducer',
      'React Redux dispatch action',
      'Why React with Redux is good for you',
      'React Redux tutorial',
      'React Redux form',
      'Replacing Redux with the new React context API',
      'React Redux universal boilerplate',
      'React Redux best practices',
      'Redux integration'
    ]
  },
  react_tips: {
    title: 'React tips',
    slug: 'react-tips',
    description: `A topic with a resourceful collection of tips and ticks for React.`
  },
  react_style: {
    title: 'Styling in React',
    slug: 'react-style',
    description: `How to style React components? This is a very big question
with a lot of possible answers. In this topic we collected some of the most
common approaches and libraries that can help you with defining the style of
your react components.
`,
    similar: [
      'Ways to style React components',
      'Inline Styles with React',
      'How to style React Components with styled-components',
      'React style attribute',
      'JSX className attribute',
      'Using CSS Modules with React'
    ]
  },
  hoc: {
    title: 'React HOC - Higher Order Components',
    slug: 'higher-order-components',
    description: `Higher Horder Component or HOC is one of the most common
design patterns when it comes to React components. In this topic you will be
able to learn why and when to use it.
`,
    similar: [
      'Understanding Higher Order Components',
      'Composing Higher-Order Components (HOCs)',
      'Reusing React Component logic with Higher Order Components',
      'React HOC: Theory and Practice'
    ]
  },
  react_performance_increasing_optimizations: {
    title: 'React Performance increasing & optimizations',
    slug: 'react-performance-increasing-optimizations',
    description: `How to make a React app performant? If that's your current
task, this topic will be very useful to you.
`
  },
  react_case_studies: {
    title: 'React case studies',
    slug: 'react-case-studies',
    description: `Case studies are always great to understand how other
developers are taking advantage of specific techologies. In this topic we
collected for you a number of über interesting links about React performance.
`
  },
  react_reviews: {
    title: 'React reviews',
    slug: 'react-reviews',
    description: `This topic collects useful reviews about React
applications and libraries.
`
  },
  react_sample_applications: {
    title: 'React sample applications',
    slug: 'react-sample-applications',
    description: `In this topic you will find a collection of sample
applications that can be very useful if you are learning React and you want to
compare your code with some ready-made applications.`
  },
  react_server_side_rendering: {
    title: 'React server side rendering (SSR)',
    slug: 'react-server-side-rendering',
    description: `One of the most appreciated features of React is the
possibility to render the markup of one or more components directly to HTML from
the server side. This characteristic opens up a lot of interesting opportunities
like the possibility to generate static websites using React as a template
engine, or the possibility to build "Universal" JavaScript applications.
`
  },
  react_comparison: {
    title: 'React comparison',
    slug: 'react-frameworks-libraries-comparison',
    description: `If you are coming from another framework or just trying to
pick up a framework to use for a given project, you are probably wondering how
does React compares to other frameworks... In this topic we aggregated some
interesting comparison between React, Angular, Vue and other famous JavaScript
frontend frameworks.
`,
    similar: [
      'Advantages of React js over Angular js',
      'React vs Angular',
      'React vs Vue'
    ]
  },
  react_transitions_animations: {
    title: 'Transitions & animations in React',
    slug: 'react-transitions-animations',
    description: `How to add animations in a React app? This topic collects
links that can help you with answering this question.
`
  }
}

module.exports = function (sectionId) {
  return adjustTopics({ topics, sectionId })
}
