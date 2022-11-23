import React from "react";
import {
  vendorServiceOrders,
  VendorProductsDetails,
} from "../../../../DummyData/vendorData";
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
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  const action = 1;
  return { name, code, population, size, density, action };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];
const TableComponent = ({
  tHeadData,
  tRowData,
  activeCard,
  edit,
  open,
  setOpen,
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
      sx={{
        margin: "20px",
        border: "1px solid white",
        // borderColor: "white",
      }}
      // elevation={24}
    >
      <TableContainer
        className="scroll-bar-hide"
        sx={{
          maxHeight: "360px",
          maxWidth: "80vw",
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
                                className="btn btn-solid btn-solid-primary table-btn"
                                onClick={() => {
                                  if (edit == "services") {
                                    navigate("/agricultural-services/details", {
                                      state: { data: row },
                                    });
                                  } else if (edit == "serviceOrder") {
                                    navigate("/vendor-serviceorders/details", {
                                      state: { data: row },
                                    });
                                  } else if (edit == "productOrderDetails") {
                                    navigate("/vendor-productorders/details", {
                                      state: { data: row },
                                    });
                                  } else if (edit == "products") {
                                    navigate("/my-products/details", {
                                      state: { data: row },
                                    });
                                  } else if (edit == "featured") {
                                    navigate(
                                      "/make-it-featured/view-featured-details"
                                    );
                                  }
                                }}
                              >
                                View
                              </button>
                              {edit == "services" ? (
                                <button
                                  onClick={() => {
                                    setOpen(true);
                                  }}
                                  className="btn btn-solid btn-solid-danger table-btn"
                                  style={{ marginLeft: "10px" }}
                                >
                                  Delete
                                </button>
                              ) : (
                                edit == "products" && (
                                  <button
                                    onClick={() => {
                                      setOpen(true);
                                    }}
                                    className="btn btn-solid btn-solid-danger table-btn"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    Delete
                                  </button>
                                )
                              )}
                            </div>
                          ) : column.id == "price" ? (
                            `$${value}`
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
