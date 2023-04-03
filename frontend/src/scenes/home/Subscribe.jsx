import {
  Box,
  InputBase,
  Divider,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState, useRef } from "react";

const Subscribe = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const subscribeInputRef = useRef(null);
  //useSelector

  function handleSubscribeSubmit() {}
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton
        onClick={() => {
          subscribeInputRef.current.focus();
        }}
      >
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>
        and receive a 10% coupon for your first order when you checkout!
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          inputRef={subscribeInputRef}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button
          sx={{ p: "10px", ":hover": { cursor: "pointer" } }}
          type="submit"
          onSubmit={handleSubscribeSubmit}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default Subscribe;
