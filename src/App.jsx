import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

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
        path:'*',
        element: <PageError />
      },
      {
        path: '/',
        element: <Home />
      },
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
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
