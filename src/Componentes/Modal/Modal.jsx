function Modal(alumno){
  function cerrar(){
    const modal =document.getElementById('mod');
    if(modal.matches(".es-visible")){
      modal.classList.remove('es-visible');
    }
  }
return(
  <>
  <div>
  <h2>Datos del alumno</h2>
  <div>
      <table className="table " id="table">
      <thead>
        <tr>
          <th>nombre</th>
          <th>apellido</th>
          <th>edad</th>
          <th>domicilio</th>
          <th>localidad</th>
          <th>fecha nacimiento</th>
          <th>cerrar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{alumno.alumno.nombre}</td>
          <td>{alumno.alumno.apellido}</td>
          <td>{alumno.alumno.edad}</td>
          <td>{alumno.alumno.domicilio}</td>
          <td>{alumno.alumno.localidad}</td>
          <td>{alumno.alumno.fechaNacimiento}</td>
          <td>
            <button type="button" className="btn btn-danger" onClick={cerrar}>
              cerrar
            </button>
          </td>
        </tr>
      </tbody>
    </table> 
    
  </div>
</div>
</>
)
}
export default Modal;