import { Button, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUsuario } from "../Store/Auth/Action";


const validationSchema = Yup.object({
  email: Yup.string().email("Correo invalido").required("Correo electrónico requerido"),
  password: Yup.string().required("Contraseña requerida"),
})

const FormularioEntrada = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
        dispatch(loginUsuario(values));
        navigate("/inicio");
        console.log("form value ", values)
      }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="py-5">
          <TextField
            className="bg-white rounded-3xl"
            fullWidth
            label="Correo"
            name="email"
            variant="outlined"
            size="large"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
        </div>
        <div>
          <TextField
            className="bg-white rounded-3xl"
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            variant="outlined"
            size="large"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
        </div>
        <div className="mt-20">
          <Button
            sx={{
              borderRadius: "29px",
              py: "15px",
              bgcolor: blue[500],
            }}
            type="submit"
            fullWidth
            variant="contained"
            size="large"
          >
            Ingresar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormularioEntrada;




