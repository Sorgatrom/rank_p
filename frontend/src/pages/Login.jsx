import Headerinv from '../assets/components/Headerinv.jsx'
import CatBar from '../assets/components/minis/CatBar'
import PrewipeInvitados from '../assets/muros/PrewipeInvitados.jsx'
import {CategoriaProvisor} from '../assets/utils/CategoriasProvisor.jsx' //La emisora de radio!

function Login() {
  //
  return (
    <>
    <CategoriaProvisor>
        <Headerinv/>
        <CatBar/>
        <PrewipeInvitados></PrewipeInvitados>
      </CategoriaProvisor>
    </>
  )
}

export default Login;