import { useState } from "react";
import { onPostAlumno } from "../../apiAlumnosCrud/ApiCrudAlumnos";
const FormularioAgregar = () => {
  function cerrar() {
    const vi = document.getElementById("vi");
    if (vi.matches(".visi")) {
      vi.classList.remove("visi");
    }
  }
  const [todo, setTodo] = useState({
    nombre: "",
    apellido: "",
    domicilio: "",
    edad: 0,
    localidad: "",
    fechaNacimiento:undefined,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const domicilio = document.getElementById("domicilio").value;
    const edad = document.getElementById("edad").value;
    const localidad = document.getElementById("localidad").value;
    const fecha = document.getElementById("fecha").value;
    alert("Se agrego un nuevo socio");
    onPostAlumno(nombre, apellido, edad, domicilio, localidad, fecha);
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
      <h2>Agregar socio</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un nombre"
          name="nombre"
          value={todo.nombre}
          id="nombre"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un apellido"
          name="apellido"
          id="apellido"
          value={todo.apellido}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un domicilio"
          name="domicilio"
          id="domicilio"
          value={todo.domicilio}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="number"
          placeholder="Ingrese edad"
          name="edad"
          id="edad"
          value={todo.edad}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese localidad"
          name="localidad"
          id="localidad"
          value={todo.localidad}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          type="date"
          placeholder="Ingrese fecha nacimiento"
          name="fechaNacimiento"
          value={todo.fechaNacimiento}
          onChange={handleChange}
          id="fecha"
        />

        <div>
          <button className="btn btn-primary" type="submit">
            Agregar
          </button>

          <button className="btn btn-primary ms-3" type="button" onClick={cerrar}>
            cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioAgregar;
