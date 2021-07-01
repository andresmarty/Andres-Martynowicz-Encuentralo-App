import React from 'react'
import './footer.css'

function footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <p className="col-sm">
                    &copy;{new Date().getFullYear()} ENCUENTRALO | Todos los derechos reservados |
                    Terminos de Servicio | Privacidad
                    </p>
                </div>
            </div>
        </div>
    )
}

export default footer
