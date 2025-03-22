import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Typography, Modal, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 4
};

export default function ModalSuscripcion({ open, handleClose }) {
  const [planSeleccionado, setPlanSeleccionado] = useState("premium");

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      <Box sx={style}>
        {/* Título */}
        <Typography variant="h5" fontWeight="bold" align="center">
          Actualizar a Premium
        </Typography>

        {/* Opciones de suscripción */}
        <RadioGroup value={planSeleccionado} onChange={(e) => setPlanSeleccionado(e.target.value)}>
          
          {/* Plan Básico */}
          <Box p={2} borderRadius={2} border="1px solid #ccc" mb={2}>
            <FormControlLabel value="basico" control={<Radio />} label="Básico - 2.67 US$/mes" />
            <Typography variant="body2" color="textSecondary">
              32,00 US$ facturados anualmente - Ahorra 11%
            </Typography>
          </Box>

          {/* Plan Premium */}
          <Box p={2} borderRadius={2} border="2px solid blue" mb={2}>
            <FormControlLabel value="premium" control={<Radio />} label="Premium - 7.00 US$/mes" />
            <Typography variant="body2" color="textSecondary">
              84,00 US$ facturados anualmente - Ahorra 12%
            </Typography>
          </Box>

          {/* Plan Premium+ */}
          <Box p={2} borderRadius={2} border="1px solid #ccc">
            <FormControlLabel value="premiumPlus" control={<Radio />} label="Premium+ - 32.92 US$/mes" />
            <Typography variant="body2" color="textSecondary">
              395,00 US$ facturados anualmente - Ahorra 17%
            </Typography>
          </Box>
        </RadioGroup>

        {/* Botón de Suscribirse */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, fontWeight: 'bold' }}
        >
          Suscribirse y pagar
        </Button>

        {/* Nota */}
        <Typography variant="caption" color="textSecondary" display="block" mt={2}>
          Si te suscribes, aceptas los <a href="#">Términos de servicio</a>. Puedes cancelar en cualquier momento.
        </Typography>
      </Box>
    </Modal>
  );
}
