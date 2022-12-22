import './CartWidget'


function Navbar() {

    return (
        <>
            {/* <p>Navbar working!!</p>*/}

              <nav className="navbar navbar-dark bg-dark ">

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="./CartWidget">CartWidget</a>
                        <a className="nav-link" href="./">Home</a>
                    </div>
                </div>
              </nav>

        </>
    )
}

export default Navbar