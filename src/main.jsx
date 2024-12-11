import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in'
import Home from './home'
import { ClerkProvider } from '@clerk/clerk-react'
import Dashboard from './dashboard'
import EditResume from './dashboard/resume/[resumeid]/edit'
import ViewResume from './my-resume/[resumeid]/view'
import LearnMore from './home/LearnMore'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  
  {
    path:'/',
    element:<Home/>
  },
  {
    element: <App/>,
    children: [

      {
         path:'/learn-more',
         element: <LearnMore/>
      },
    
      {
        path:'/dashboard',
        element: <Dashboard/>
      },
      {
        path:'/dashboard/resume/:resumeid/edit',
        element:<EditResume/>
      },
    ]
  },
  ,
 
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  },
  {
    path:'/my-resume/:resumeid/view',
    element:<ViewResume/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
