import { Box, Alert, AlertTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an order —{" "}
        <strong>Thank you for choosing us!</strong>
        <br />
        <br />
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          Return to home page.
        </Box>
      </Alert>
    </Box>
  );
};

export default Confirmation;
