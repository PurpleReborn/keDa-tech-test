import React from "react";
import { Modal, TextField, Box } from "@mui/material";
import CustomButton from "../../../components/Button";
import Title from "../../../components/Title";
import { ReactComponent as ILLogin } from "../../../assets/ILLogin.svg";

const ModalLogin = (props) => {
  const { open, handleClose } = props;

  return (
    <>
      <Modal open={open} onClose={handleClose} style={styles.modalStyle}>
        <Box sx={styles.boxStyle}>
          <Title text="Login" fontSize={{ xs: "28px", md: "30px" }} />
          <Box sx={styles.illus}>
            <ILLogin width={"60%"} height={"60%"} />
          </Box>
          <form onSubmit={handleClose}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              required
            />
            <CustomButton
              text="Login"
              style={styles.btnLogin}
              onClick={handleClose}
              fullWidth
            />
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default ModalLogin;

const styles = {
  modalStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxStyle: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "10px",
    minWidth: "400px",
  },
  submitButtonStyle: {
    marginTop: "16px",
  },
  btnLogin: {
    py: '10px',
    mt: '40px'
  },
  illus: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  }
};
