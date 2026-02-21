import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element:<Home/>
//       }, {
//         path: 'about',
//         element:<About/>
//       }, {
//         path: 'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route path='' element={<Home />} /> */}
      <Route index element={<Home/>}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route
        // loader={()=>{}}
        // loader={({params})=>{return fetch(`https://api.github.com/users/${params.id}`)}}
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
