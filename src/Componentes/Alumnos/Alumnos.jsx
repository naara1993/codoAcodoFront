import { useEffect, useState } from "react";
import {
  getAlumno,
  deleteAlumno,
  getAlumnoPatch,
} from "../../apiAlumnosCrud/ApiCrudAlumnos"
import "../Alumnos/Alumnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from '../../Componentes/Modal/Modal'
import Formulario from '../Formulario/FormularioAgregar'
import FormularioActualizar from '../Formulario/FormularioActualizar'

function Alumnos() {
  const [alumnos, setAlumno] = useState([]);
  useEffect(() => {
    getAlumno().then((alumnos) => {
      setAlumno(alumnos);
    });
  }, []);
  const agregarRow = () => {
  const visible=document.getElementById('vi');
  visible.classList.add('visi');
  };
  const deleteRow = (id, e) => {
    e.preventDefault();
    alert("Se borro al alumno");
    deleteAlumno(id);
    window.location.reload(true);
  };
  const actualizarRow = (id, e) => {
    e.preventDefault();
    const ocu=document.getElementById('ocu');
    ocu.classList.add('vis');
    getAlumnoPatch(id)
    .then((alumno) => {
      setAlum(alumno)      
    })    
  };
  const [alumno, setAlum] = useState([]);
  const detailRow = (id, e) => {
    e.preventDefault();
    const mod =document.getElementById('mod');
    mod.classList.add('es-visible')
     getAlumnoPatch(id)
     .then((alumno) => {
       setAlum(alumno)      
     })
  };

  return (
    <>
      <div className="d-flex justify-content-center pt-3 pb-3">
        <h2>Datos de los alumnos</h2>
        <button
                        type="button"
                        className="btn btn-primary ms-5"
                        onClick={agregarRow.bind()}
                      >
                        agregar
                      </button>
      </div>
            <div>
              <table className="table table-dark ">
                <thead>
                  <tr>
                    <th>nombre</th>
                    <th>apellido</th>
                    <th>edad</th>
                    <th>domicilio</th>
                    <th>localidad</th>
                    <th>fecha nacimiento</th>
                    <th>Actualizar</th>
                    <th>Ver</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                {
        alumnos.length > 0 &&
        alumnos.map((alum, index) => {
          return (
                <tbody key={index}>
                  <tr>
                    <td>{alum.nombre}</td>
                    <td>{alum.apellido}</td>
                    <td>{alum.edad}</td>
                    <td>{alum.domicilio}</td>
                    <td>{alum.localidad}</td>
                    <td>{alum.fechaNacimiento.substring(0,10)}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={actualizarRow.bind(this, alum.id)}
                      >
                        Actualizar
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        id={alum.id}
                        onClick={detailRow.bind(this, alum.id)}
                      >
                        ver
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={deleteRow.bind(this, alum.id)}
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                </tbody>
                          );
                        })}
              </table>
              <div className="mod" id="mod">
              { <Modal alumno={alumno}  /> }
              </div>
              <div className=" vi" id="vi">
              <Formulario />
              </div>
              <div className="formac ocu" id="ocu">
              <FormularioActualizar  alumno={alumno} />
              </div>
            </div>
    </>
  );
}
export default Alumnos;
