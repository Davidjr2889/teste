import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Livros from './pages/Livros'
import { AuthContext, AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import { useContext } from 'react'
import Livro from './pages/Livro'
import CadastroPage from './pages/Cadastro'
import GetLivrosPor from './utils/getLivrosPor'
import PaginaConta from './pages/Conta'
import Busca from './pages/Busca'

 const AppRoutes = () => {
    const Private = ({children}) =>{
        const {authenticate, loading} = useContext(AuthContext);
        if(loading){
            return <div className='loading'>carregando...</div>
        }

        if(!authenticate){
            return <Navigate to='/Login'/>;
        }

        return children;
    }

     return (
        <BrowserRouter>
        <AuthProvider>
        
        <Routes>
            <Route path='/' index element={  <Home/> }/>
            <Route path='/sobre' element = {<Sobre/>} />

            <Route  path='/login' element= {<Login/>}  />
            <Route path="/Cadastro" element={<CadastroPage/>}/>
            <Route path='/conta' element={<PaginaConta/>} />
            <Route path='/busca' element={<Busca/>} />
           <Route path="/procurar/:titulo" element={<GetLivrosPor/>}/>
          
           <Route path='/livros' element = {<Livros/>}  />
           <Route path="/livro/:titulo" element={<Livro/>}/>
            </Routes>
            </AuthProvider>
        </BrowserRouter>
       
     )



 } 






 export default AppRoutes;