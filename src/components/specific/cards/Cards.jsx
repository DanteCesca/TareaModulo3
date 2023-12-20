import React from 'react'

const Cards = ({character: {name, image, species, status, location: { name: locationName }}}) => {
 console.log(location)
    return (    
    <div className="card col-sm-10 col-md-5 col-lg-3">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Especie: {species}</li>
            <li className="list-group-item">Estatus: {status}</li>
            <li className="list-group-item">Visto en: {locationName}</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Ver mas</a>
        </div>
    </div>
  )
}

export default Cards