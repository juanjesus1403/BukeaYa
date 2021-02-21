import React from 'react'

export default function Cards() {
    return (
        // Card 1
            
        <div className="row mt-4">
        <div className="col-sm-12 col-lg-6 col-xl-4">
        <div className="card mb-2">
            <img src="https://picsum.photos/200" alt="..."/>
            <div className="card-body d-grid justify-content-center">
                <h5 className="card-tittle"> (Nombre de la empresa)</h5>
                <p className="font-weigth-bold">
                    (Descripción del Servicio)
                </p>
            </div>
            <div className="card-footer">
                <div className="d-grid">
                    <button className="btn btn-primary">
                    Ver detalles
                    </button>
                </div>
             </div>
        </div>
        </div>

        {/* Card2 */}

        <div className="col-sm-12 col-lg-6 col-xl-4">
        <div className="card mb-2">
            <img src="https://picsum.photos/200" alt="..."/>
            <div className="card-body d-grid justify-content-center">
                <h5 className="card-tittle"> (Nombre de la empresa)</h5>
                <p className="font-weigth-bold">
                    (Descripción del Servicio)
                </p>
            </div>
            <div className="card-footer">
                <div className="d-grid">
                    <button className="btn btn-primary">
                    Ver detalles
                    </button>
                </div>
             </div>
        </div>
        </div>

        {/* Card 3 */}
        <div className="col-sm-12 col-lg-6 col-xl-4">
        <div className="card mb-2">
            <img src="https://picsum.photos/200" alt="..."/>
            <div className="card-body d-grid justify-content-center">
                <h5 className="card-tittle"> (Nombre de la empresa)</h5>
                <p className="font-weigth-bold">
                    (Descripción del Servicio)
                </p>
            </div>
            <div className="card-footer">
                <div className="d-grid">
                    <button className="btn btn-primary">
                    Ver detalles
                    </button>
                </div>
             </div>
        </div>
        </div>
        </div>

    
    )
}
