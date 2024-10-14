import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Sobre from './components/Sobre/Sobre.jsx'
import Contato from './components/Contato/Contato.jsx'
import Produtos from './components/Produtos/Produtos.jsx'
import CadastrarUsuario from './components/CadastrarUsuario/CadastrarUsuario.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error/>,

    children: [
      {path: '/', element: <Home/>},
      {path: '/sobre', element: <Sobre/>},
      {path: '/login', element: <Login/>},
      {path: '/contato', element: <Contato/>},
      {path: '/produtos', element: <Produtos/>},
      {path: '/cadastrar-usuario', element: <CadastrarUsuario/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
