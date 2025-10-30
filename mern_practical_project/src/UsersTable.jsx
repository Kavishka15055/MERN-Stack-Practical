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

const UsersTable = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id || row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Button
                    sx={{ margin: "0px 10px" }}
                    onClick={() => {
                      // Update user logic here
                      console.log("Update", row);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    sx={{ margin: "0px 10px" }}
                    color="error"
                    onClick={() => {
                      // Delete user logic here
                      console.log("Delete", row);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
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
