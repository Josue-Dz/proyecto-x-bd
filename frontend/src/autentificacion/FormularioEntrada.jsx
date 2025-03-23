import { Button, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const FormularioEntrada = ({ setIsAuthenticated }) => { 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  

  const CREDENTIALS = {
    email: "AidaRonnyDaniel@unah.hn",
    password: "123456",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.email === CREDENTIALS.email && formData.password === CREDENTIALS.password) {
      setIsAuthenticated(true); 
      navigate("/inicio"); 
    } else {
      alert("Credenciales incorrectas. AidaRonnyDaniel@unah.hn / 123456");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <TextField
            fullWidth
            label="Correo"
            name="email"
            variant="outlined"
            size="large"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            variant="outlined"
            size="large"
            value={formData.password}
            onChange={handleChange}
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




