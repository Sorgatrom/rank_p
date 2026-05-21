import './headerinv.css';


function Headerinv({}) {

    return (
        <>
            <div className="header-main">
                <div className="header-main-logo" src="./resources/Iconos/logo ppal svg.svg"/>
                <div className="header-main-info">
                    <form>
                        <input
                            className='header-main-input1'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            aria-label='Correo de Usuario'
                        />

                        <input
                            className='header-main-input2'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            aria-label='Constraseña de Usuario'
                        />

                        <button className="header-main-button" type='submit'>Go</button>

                    </form>
                </div>  
            </div>
        </>
    )};

    export default Headerinv;