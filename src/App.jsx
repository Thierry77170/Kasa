import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Header from './components/header/Header.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />
  },
  {
    path: '/aPropos',
    element: <Header />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
