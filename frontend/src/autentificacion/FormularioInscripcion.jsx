import React from "react";
import { Button, TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { registroUsuario } from "../Store/Auth/Action";
import { useNavigate } from "react-router-dom";

const FormularioInscripcion = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: 1, label: "Enero" },
    { value: 2, label: "Febrero" },
    { value: 3, label: "Marzo" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Mayo" },
    { value: 6, label: "Junio" },
    { value: 7, label: "Julio" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Septiembre" },
    { value: 10, label: "Octubre" },
    { value: 11, label: "Noviembre" },
    { value: 12, label: "Diciembre" },
  ];

  const formik = useFormik({
    initialValues: {
      nombreCompleto: "",
      correo: "",
      password: "",
      fechaNacimiento: { day: "", month: "", year: "" },
    },
    onSubmit: (values) => {
      const {day, month, year} = values.fechaNacimiento;

    const formattedMonth = month.toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");

      const fechaNacimiento = `${year}-${formattedMonth}-${formattedDay}`;
      console.log("Datos enviados:", values);
      values.fechaNacimiento = fechaNacimiento;

      dispatch(registroUsuario(values));
      navigate("/inicio");
      

    },
  });

  const handleDateChange = (name) => (event) => {
    formik.setFieldValue("fechaNacimiento", {
      ...formik.values.fechaNacimiento,
      [name]: event.target.value,
    });
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      {/* Campo Nombre */}
      <div className="mb-4">
        <TextField
          fullWidth
          label="Nombre Completo"
          name="nombreCompleto"
          variant="outlined"
          value={formik.values.nombreCompleto}
          onChange={formik.handleChange}
        />
      </div>

      {/* Campo Email */}
      <div className="mb-4">
        <TextField
          fullWidth
          label="Correo"
          name="correo"
          variant="outlined"
          value={formik.values.correo}
          onChange={formik.handleChange}
        />
      </div>

      {/* Campo Password */}
      <div className="mb-4">
        <TextField
          fullWidth
          label="Contraseña"
          name="password"
          variant="outlined"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>

      {/* Fecha de Nacimiento */}
      <div className="mb-4 flex justify-between">
        {/* Día */}
        <div className="w-1/3">
          <InputLabel>Dia</InputLabel>
          <Select
            name="day"
            fullWidth
            value={formik.values.fechaNacimiento.day}
            onChange={handleDateChange("day")}
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </div>

        {/* Mes */}
        <div className="w-1/3">
          <InputLabel>Mes</InputLabel>
          <Select
            name="month"
            fullWidth
            value={formik.values.fechaNacimiento.month}
            onChange={handleDateChange("month")}
          >
            {months.map((month) => (
              <MenuItem key={month.value} value={month.value}>
                {month.label}
              </MenuItem>
            ))}
          </Select>
        </div>

        {/* Año */}
        <div className="w-1/3">
          <InputLabel>Año</InputLabel>
          <Select
            name="year"
            fullWidth
            value={formik.values.fechaNacimiento.year}
            onChange={handleDateChange("year")}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      {/* Botón de Envío */}
      <div className="mt-6">
        <Button
          sx={{
            borderRadius: "29px",
            py: "12px",
            bgcolor: blue[500],
            "&:hover": { bgcolor: blue[700] },
          }}
          type="submit"
          fullWidth
          variant="contained"
          size="large"
        >
          Crear
        </Button>
      </div>
    </form>
  );
};

export default FormularioInscripcion;
