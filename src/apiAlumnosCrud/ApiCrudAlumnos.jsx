import { apiAlumnos } from "../apiAlumnos/apiAlumnos";

export const getAlumno = async () => {
  const response = await apiAlumnos.get("/lista");
  return response.data;
};
export const getAlumnoPatch = async (id) => {
  const response = await apiAlumnos.get(`/detail/${id}`);
  return response.data;
};

export const deleteAlumno = async (id) => {
  const response = await apiAlumnos.delete(`/delete/${id}`);
  return response.data;
};

export const onPostAlumno = (
  nombre,
  apellido,
  edad,
  domicilio,
  localidad,
  fechaNacimiento
) => {
  const body = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    domicilio: domicilio,
    localidad: localidad,
    fechaNacimiento: fechaNacimiento,
  };
  apiAlumnos.post(`/crear`, body).then((response) => {
    return response.data.data;
  });
};

export const onPutAlumno = (
  id,
  nombre,
  apellido,
  edad,
  domicilio,
  localidad,
  fechaNacimiento
) => {
  const body = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    domicilio: domicilio,
    localidad: localidad,
    fechaNacimiento: fechaNacimiento,
  };
  apiAlumnos.put(`/update/${id}`, body).then((response) => {
    return response.data.data;
  });
};
