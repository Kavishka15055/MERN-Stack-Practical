import { Box, Paper, Typography } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  // Fetch users when component loads
  useEffect(() => {
    getUsers();
  }, []);

  // ✅ Fetch all users
  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  // ✅ Add user
  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/createuser", payload)
      .then(() => {
        getUsers(); // refresh
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  // ✅ Update user (fixed: using PUT instead of POST)
  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.put("http://localhost:3001/api/updateuser", payload) // ✅ changed from POST → PUT
      .then(() => {
        getUsers(); // refresh table after update
        setSubmitted(false);
        setIsEdit(false);
        setSelectedUser({});
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  // ✅ Delete user 
const deleteUser = (data) => {
  Axios.delete(`http://localhost:3001/api/deleteuser?id=${data.id}`)
    .then(() => {
      getUsers(); // refresh the list
    })
    .catch((error) => {
      console.error("Axios error:", error);
    });
};

  return (
    <Box
  sx={{
    width: "150%",
    minHeight: "100vh",
    background: "linear-gradient(120deg, #00c6ff, #0072ff)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "80px",
    paddingBottom: "60px",
    boxSizing: "border-box",
    marginLeft: "-25%",
  }}
>
  <Typography
    variant="h3"
    sx={{
      color: "#fff",
      fontWeight: 700,
      mb: 4,
      letterSpacing: "1px",
      textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
    }}
  >
    Manage Users
  </Typography>

  <Paper
    elevation={10}
    sx={{
      width: { xs: "90%", sm: "80%", md: "70%" },
      padding: "40px",
      borderRadius: "25px",
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      boxShadow: "0px 8px 30px rgba(0,0,0,0.3)",
      color: "#fff",
    }}
  >
    <UserForm
      addUser={addUser}
      updateUser={updateUser}
      submitted={submitted}
      data={selectedUser}
      isEdit={isEdit}
    />

    <Box sx={{ mt: 6 }}>
      <UsersTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={(data) =>
          window.confirm("Are you sure you want to delete this user?") &&
          deleteUser(data)
        }
      />
    </Box>
  </Paper>
</Box>
  );
};

export default Users;



//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk