import './Styles.css';
import ItemCount from './ItemCount';


function Item ({nombre, descripcion, modelo, precio, img}) {
    
         return (
              <div className="item">
                    <img src={img} alt="Producto"/>
                    <div className="descripcion-Item">
                       <h3>{nombre}</h3>
                       <p>{descripcion}</p>
                       <p><b>Modelo:</b>{modelo}</p>
                      <div className="precio-cantidad">
                          <h3>${precio}</h3>
                          <div className="buttons">
                            <ItemCount initial={1} stock={6}/>
                          </div>
                      </div>
                    </div>
                    <div className='btn-center'>
                       <button className="btn btn-outline-success">Agregar al Carrito</button>
                    </div>
              </div>
      );
  
  }
 
export default Item