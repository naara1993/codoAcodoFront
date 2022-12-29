import { useState, useEffect } from "react";
import {
  onPutAlumno,
} from "../../apiAlumnosCrud/ApiCrudAlumnos";
const FormularioActualizar = (alumno) => {
let array=alumno.alumno;
  function cerrar() {
    const ocu = document.getElementById("ocu");
    if (ocu.matches(".vis")) {
      ocu.classList.remove("vis");
    }
  }
  const [todo, setTodo] = useState({
    nombre:"",
    apellido:"",
    domicilio: "",
    edad: undefined,
    localidad: "",
    fechaNcimiento: undefined,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre2").value;
    console.log(nombre);
    const apellido = document.getElementById("apellido2").value;
    const domicilio = document.getElementById("domicilio2").value;
    const edad = document.getElementById("edad2").value;
    const localidad = document.getElementById("localidad2").value;
    const fecha = document.getElementById("fecha2").value;
    onPutAlumno(array.id,nombre,apellido,edad,domicilio,localidad,fecha);
    alert("se actualizo correctamente");
    window.location.reload(true);
  };

  const handleChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-75 actualizar">
      <h2>Actualizar Socio</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder={array.nombre}
          name="nombre"
          value={todo.nombre} 
          id="nombre2"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder={array.apellido}
          name="apellido"
          id="apellido2"
          value={todo.apellido}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder={array.domicilio}
          name="domicilio"
          id="domicilio2"
          value={todo.domicilio}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="number"
          placeholder={array.edad}
          name="edad"
          id="edad2"
          value={todo.edad}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder={array.localidad}
          name="localidad"
          id="localidad2"
          value={todo.localidad}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="date"
          placeholder={array.fechaNacimiento}
          name="fechaNacimiento"
          value={todo.fechaNcimiento}
          onChange={handleChange}
          id="fecha2"
        />
        <div>
          <button className="btn btn-primary" type="submit">
            Actualizar
          </button>

          <button
            className="btn btn-primary ms-3"
            type="button"
            onClick={cerrar}
          >
            cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioActualizar;
