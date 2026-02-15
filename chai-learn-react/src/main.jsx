import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function MyApp() {
//   return (
//     <h1>hi</h1>
//   )
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://www.google.com",
//         target:"_blank",
//     },
//     children:"click me"
// }

// const anotherElement = (
//   <a href="http://google.com" target='_blank'></a>
// )
// const anotherEle="hello"
// const reactElements = React.createElement(
//   'a',//tag
//   { href: "https://www.google.com", target: "_blank" },//props object
//   "click here "//text children
    // anotherEle//string is also a valid react element
// )
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <MyApp />,
  // myApp(),
// reactElement,// Objects are not valid as a React child (found: object with keys {type, props, children}). If you meant to render a collection of children, use an array instead.
  // anotherElement()//not a function
  // anotherElement
    
    <App />

)
