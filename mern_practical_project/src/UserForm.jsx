import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  // Reset form when submitted
  useEffect(() => {
    if (submitted) {
      setId(0);
      setName("");
    }
  }, [submitted]);

  // Load selected user data into form for editing
  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  return (
        <Grid
      container
      spacing={2}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        marginBottom: "30px",
      }}
    >
      <Grid item xs={12}>
        <Typography component="h1" sx={{ color: "#fff", fontWeight: 600 }}>
          User Form
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography
          component="label"
          htmlFor="id"
          sx={{
            color: "#fff",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{
            width: "100%",
            maxWidth: "400px",
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            borderRadius: "8px",
            px: 1.5,
          }}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography
          component="label"
          htmlFor="name"
          sx={{
            color: "#fff",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{
            width: "100%",
            maxWidth: "400px",
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            borderRadius: "8px",
            px: 1.5,
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            background: isEdit
              ? "linear-gradient(45deg, #ff416c, #ff4b2b)"
              : "linear-gradient(45deg, #00c6ff, #0072ff)",
            color: "#fff",
            textTransform: "none",
            px: 4,
            py: 1.5,
            borderRadius: "10px",
            "&:hover": {
              opacity: 0.85,
            },
          }}
          onClick={() => (isEdit ? updateUser({ id, name }) : addUser({ id, name }))}
        >
          {isEdit ? "Update User" : "Add User"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserForm;


//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk