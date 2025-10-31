import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        color: "#fff",
        borderRadius: "15px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ background: "rgba(0, 0, 0, 0.3)" }}>
            <TableCell sx={{ color: "#fff", fontWeight: 600 }}>ID</TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Name</TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id || row._id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    transition: "0.3s",
                  },
                }}
              >
                <TableCell sx={{ color: "#fff" }}>{row.id}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{
                      background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                      color: "#fff",
                      marginRight: "10px",
                      textTransform: "none",
                      "&:hover": {
                        background: "linear-gradient(45deg, #0072ff, #00c6ff)",
                      },
                    }}
                    onClick={() =>
                      selectedUser({ id: row.id || row._id, name: row.name })
                    }
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                      color: "#fff",
                      textTransform: "none",
                      "&:hover": {
                        background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
                      },
                    }}
                    onClick={() =>
                      deleteUser({ id: row.id || row._id })
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center" sx={{ color: "#fff" }}>
                No Users Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;



//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk