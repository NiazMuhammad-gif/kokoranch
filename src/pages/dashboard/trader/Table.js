import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { IndeterminateCheckBox } from "@mui/icons-material";

const TableComponent = ({
  tHeadData,
  tRowData,
  activeCard,
  edit,
  open,
  setOpen,
  setView,
  setRecordForEdit,
  setEditAble,
  setNewRecord,
}) => {
  const navigate = useNavigate();
  // console.log("activeCard", activeCard);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper
      root={{ minHeight: "10%" }}
      sx={{
        margin: "20px",
        border: "1px solid white",
        // borderColor: "white",
        // minHeight: 50,
        backgroundColor: "#1e1e1e",
      }}
      // elevation={24}
    >
      <TableContainer
        className="scroll-bar-hide"
        sx={{
          maxHeight: "360px",
          maxWidth: "80vw",
          // minHeight: "100px",
          backgroundColor: "white",
        }}
      >
        <Table
          size="medium"
          stickyHeader
          aria-label="sticky table"
          sx={{
            color: "white",
            overflowX: "scroll",
            backgroundColor: "white",
          }}
        >
          <TableHead>
            <TableRow>
              {tHeadData.map((column) => (
                <TableCell
                  sx={{
                    backgroundColor: "#1e1e1e",
                    color: "#FFFFFF",
                    fontSize: "13px",
                  }}
                  key={column.id}
                  align={"center"}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "#1e1e1e", color: "#FFFFFF" }}>
            {tRowData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                    {tHeadData.map((column) => {
                      // console.log(column.id, row[column.id]);
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={"center"}
                          sx={{
                            color: "#FFFFFF",
                            height: "50px",
                            fontSize: "13px",
                          }}
                        >
                          {column.id == "action" ? (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                              }}
                            >
                              <button
                                className="btn btn-solid btn-solid-primary px-4 me-3 color-white"
                                onClick={() => {
                                  // dispatch(EDIT_TRADE_INFO_DETAIL_ACTION(order));
                                  if (edit == "tradeRequest") {
                                    setView("single-trader-request");
                                  } else {
                                    setView("view");
                                    setRecordForEdit(null);
                                    setEditAble(false);
                                  }
                                }}
                              >
                                View
                              </button>
                              {edit != "tradeRequest" && (
                                <button
                                  className="btn btn-solid btn-solid-warning px-4 me-3 color-white"
                                  onClick={() => {
                                    setView("view");
                                    // // dispatch(EDIT_TRADE_INFO_DETAIL_ACTION(order));
                                    setEditAble(true);
                                    setNewRecord(false);
                                  }}
                                >
                                  Edit
                                </button>
                              )}
                              {edit != "tradeRequest" && (
                                <button
                                  onClick={() => {
                                    // dispatch(
                                    //   DELETE_TRADE_ACTION(
                                    //     order._id,
                                    //     localStorage.getItem("token")
                                    //   )
                                    // );
                                  }}
                                  className="btn btn-solid btn-solid-danger px-4 color-white"
                                >
                                  Delete
                                </button>
                              )}
                            </div>
                          ) : column.id == "price" ? (
                            `$${value}`
                          ) : column.id == "unreadComments" ? (
                            <>
                              <span className="title-color">{value}</span>
                              &nbsp;Comments
                            </>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{
          backgroundColor: "#1e1e1e",
          color: "white",
        }}
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={tRowData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableComponent;
