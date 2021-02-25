import React,{useState} from 'react'
import {auth} from '../Help/Firebase'

import 'firebase/auth'
// import {useFirebaseApp} from 'reactfire'

export default function Formulario() {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const registrarUsuario = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
            .then ((res)=> alert ('Usuario Registrado')) 
    }


    // const firebase = useFirebaseApp()

    // const submit = async () =>{
    //   await firebase.auth().createUserWithEmailAndPassword(email,password);

    // }



    return (

    <div className="container col-sm-12 col-lg-6 col-xl-4" id="registration-form">
        <div className="image"></div>
        <div className="frm">
            <h1>Sign up</h1>
            <form onSubmit={registrarUsuario}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    placeholder="Enter email" 
                    onChange={(e)=>setEmail(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    placeholder="Enter password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button  
                    className="btn btn-success btn-lg"
                    // onClick={submit}
                    // 
                    value= "Registrar"
                    >Submit
                    
                    </button>
                </div>


            </form>
        </div>
    </div>
    )
}


