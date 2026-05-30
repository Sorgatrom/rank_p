import Headerinv from '../assets/components/Headerinv.jsx'
import CatBar from '../assets/components/minis/CatBar'
import PrewipeInvitados from '../assets/muros/PrewipeInvitados.jsx'
import {CategoriaProvisor} from '../assets/components/minis/CategoriasProvisor' //La emisora de radio!

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