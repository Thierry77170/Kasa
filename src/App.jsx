import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import PageError from './pages/pageError/PageError.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import ListingDetails from './pages/listing/ListingDetails.jsx';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path:'/Listing/:id',
        element: <ListingDetails />
      },
      {
        path:'*',
        element: <PageError />
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return <>
    <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="*" element={<PageError />} /> 
    </Routes>
    <Footer />
  </>
}

export default App
