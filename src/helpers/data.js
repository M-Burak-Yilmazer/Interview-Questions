const questions = {
  react: [
    {
      id: 1,
      question: "What is the virtual DOM?",
      answer:
        "React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.",
    },
    {
      id: 2,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
    },
    {
      id: 3,
      question: "Why can’t browsers read JSX?",
      answer:
        "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.",
    },
    {
      id: 4,
      question: "What are synthetic events in React?",
      answer:
        "Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.",
    },
    {
      id: 5,
      question: "What are Higher Order Components(HOC)?",
      answer:
        "Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.",
    },
    {
      id: 6,
      question: "What are Pure Components?",
      answer:
        "Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.",
    },
    {
      id: 7,
      question: "What is React Router?",
      answer:
        "React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application. This keeps the URL in sync with data that’s being displayed on the web page. It maintains a standardized structure and behavior and is used for developing single page web applications. React Router has a simple API.",
    },
  ],
  javaScript: [
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.",
    },
    {
      id: 2,
      question: "What are JavaScript Data Types?",
      answer: "Number,String,Boolean,Object,Undefined",
    },
    {
      id: 3,
      question: "Which company developed JavaScript?",
      answer: "Netscape is the software company who developed JavaScript.",
    },
    {
      id: 4,
      question: "What are synthetic events in React?",
      answer:
        "Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.",
    },
    {
      id: 5,
      question: "Is JavaScript a case-sensitive language?",
      answer:
        "Yes, JavaScript is a case sensitive language.  The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.",
    },
    {
      id: 6,
      question:
        "What is the difference between undefined and not defined in JavaScript?",
      answer:
        "PIn JavaScript, if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error var name is not defined and script will stop executing. However, if you use typeof undeclared_variable, then it will return undefined.",
    },
    {
      id: 7,
      question: "What is the difference for let and const?",
      answer: "let will scope for block level and const values never change.",
    },
    {
      id: 8,
      question: "How can you get the list of all properties in an Object?",
      answer:
        "The easy way is using Object.keys(). This will return an array of given object’s own enumerable properties.If we want all properties, even not-enumerable properties also, we can use Object.getOwnPropertyNames().",
    },
  ],
  typeScript: [
    {
      id: 1,
      question: "What is Typescript?",
      answer:
        "TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strongly typed superset of JavaScript that compiles to plain JavaScript. It is a language for application-scale JavaScript development. TypeScript is quite easy to learn and use for developers familiar with C#, Java and all strong typed languages.",
    },
    {
      id: 2,
      question: "What is any type, and when to use it?",
      answer:
        "There are times when you want to store a value in a variable but don’t know the type of that variable in advance. For example, the value is coming from an API call or the user input. The ‘any’ type allows you to assign a value of any type to the variable of type any.",
    },
    {
      id: 3,
      question: "What is void, and when to use the void type?",
      answer:
        "The void indicates the absence of type on a variable. It acts as the opposite type to any. It is especially useful in functions that don’t return a value.If a variable is of type void, you can only assign the null or undefined values to that variable.",
    },
    {
      id: 4,
      question: "How to create objects in TypeScript?",
      answer:
        "Objects are dictionary-like collections of keys and values. The keys have to be unique. They are similar to arrays and are also sometimes called associative arrays. However, an array uses numbers to index the values, whereas an object allows you to use any other type as the key.",
    },
    
  ],
};
export default questions;
