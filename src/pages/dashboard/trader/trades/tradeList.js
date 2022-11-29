import React, { useState, useEffect } from "react";
import { FaSearch, FaPlus, FaAngleDown, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  GET_All_SELLER_TRADES,
  EDIT_TRADE_INFO_DETAIL_ACTION,
  DELETE_TRADE_ACTION,
} from "../../../../redux/actions/trades";

import moment from "moment";
import TableComponent from "../Table";

export default function TradeList({
  setView,
  view,
  editAble,
  setEditAble,
  recordForEdit,
  setRecordForEdit,
  setNewRecord,
}) {
  const [tableHeadData, seTableHeadData] = useState([
    { id: "tradecode", label: "Trade code" },
    { id: "inSearchOf", label: "In Search Of" },
    { id: "exchangeWith", label: "Exchange With" },
    { id: "updateDate", label: "Update Date" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([
    {
      tradecode: "01",
      updateDate: "2022-01-22",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      action: "Action",
    },
    {
      tradecode: "01",
      updateDate: "2022-01-23",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      action: "Action",
    },
    {
      tradecode: "01",
      updateDate: "2022-01-24",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      action: "Action",
    },
    {
      tradecode: "01",
      updateDate: "2022-01-25",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      action: "Action",
    },
    {
      tradecode: "01",
      updateDate: "2022-01-26",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      action: "Action",
    },
  ]);
  const dispatch = useDispatch();
  const { deleteTrade } = useSelector((state) => state.TradesReducers);
  const [traderTrades, setTraderTrades] = useState([
    { _id: "1", inSearchOf: "sajgd", toExchangeWith: "kjhakjh" },
  ]);

  const [sortType, setsortType] = useState("Ascending");
  const [search, setSearch] = useState("");
  const [dateSelectedFilter, setdateSelectedFilter] = useState({
    fromDate: "",
    toDate: "",
  });
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [rowData, setRowData] = useState(tableRowData);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleSortProducts = (a, b) => {
    if (sortType === "Newest First") {
      return new Date(b.updateDate) - new Date(a.updateDate);
    } else if (sortType === "Oldest First") {
      return new Date(a.updateDate) - new Date(b.updateDate);
    }
  };

  const filterByDateHandler = () => {
    const arr = tableRowData.filter((item) => {
      let filterPass = true;
      const date = new Date(item.updateDate);
      if (dateSelectedFilter.fromDate) {
        filterPass =
          filterPass && new Date(dateSelectedFilter.fromDate) <= date;
      }
      if (dateSelectedFilter.toDate) {
        filterPass = filterPass && new Date(dateSelectedFilter.toDate) >= date;
      }
      //if filterPass comes back `false` the row is filtered out
      return filterPass;
    });
    setRowData([...arr]);
  };

  const searchBarHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      // regix for filterring by firstName lastName  and  UserName in an array
      const regex = new RegExp(event.target.value, "i");

      const data = tableRowData.filter((item) => {
        return (
          regex.test(item?.exchangeWith) ||
          regex.test(item?.inSearchOf) ||
          regex.test(item?.tradecode) ||
          regex.test(item?.updateDate)
        );
      });
      setRowData(data);
      // console.log(data);
    } else {
      setRowData(tableRowData);
    }
  };

  useEffect(() => {
    if (sortType !== "Ascending") {
      rowData.sort((a, b) => handleSortProducts(a, b));
    }
  }, [sortType]);
  // useEffect(() => {
  //   dispatch(
  //     GET_All_SELLER_TRADES(userData?._id, localStorage.getItem("token"))
  //   );
  // }, [deleteTrade]);

  return (
    <>
      <article className="trader-trades-main">
        <header>
          <h3>
            Trade List{traderTrades ? "(" + traderTrades?.length + ")" : "0"}
          </h3>{" "}
          <div className="right">
            <div className="right_inner-left">
              <div className="table-search-wrappper">
                <input
                  className="form-control"
                  placeholder="Search"
                  onChange={(val) => setSearch(val)}
                />
                <div className="table-icon-wrappper">
                  <FaSearch
                    className="cursor-pointer"
                    onClick={() => searchBarHandler(search)}
                  />
                </div>
              </div>
            </div>
            <div className="right_inner-right">
              <div className="dropdown  custom-dropdown">
                <div
                  className=" dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                  <FaAngleDown />
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={() => {
                        setsortType("Newest First");
                      }}
                    >
                      New to Old
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={() => {
                        setsortType("Oldest First");
                      }}
                    >
                      Old to New
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown  custom-dropdown">
                <div
                  className=" dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaFilter className="title-color" />
                  &nbsp;Filter By Date&nbsp; <FaAngleDown />
                </div>
                <ul
                  className="dropdown-menu filter-dropdown"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <div className="date-input-wrapper">
                    <label>From</label>
                    <input
                      type="date"
                      pattern="yy/mm/dd"
                      placeholder="02/02/2022"
                      onChange={(event) =>
                        setdateSelectedFilter({
                          ...dateSelectedFilter,
                          fromDate: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="date-input-wrapper">
                    <label>To</label>
                    <input
                      type="date"
                      pattern="yy/mm/dd"
                      onChange={(event) =>
                        setdateSelectedFilter({
                          ...dateSelectedFilter,
                          toDate: event.target.value,
                        })
                      }
                      placeholder={new Date()}
                    />
                  </div>
                  <button
                    onClick={() => {
                      console.log(dateSelectedFilter);
                      filterByDateHandler();
                      setsortType("Filter Date");
                    }}
                    className="btn btn-solid btn-solid-primary mx-auto"
                  >
                    Apply
                  </button>
                </ul>
              </div>
              <button
                className="btn btn-solid btn-solid-primary"
                onClick={() => {
                  setView("view");
                  setEditAble(true);
                  setNewRecord(true);
                }}
              >
                <FaPlus />
                &nbsp;Add New Trade
              </button>
            </div>
          </div>
        </header>
        <TableComponent
          tHeadData={tableHeadData}
          tRowData={rowData}
          setView={setView}
          setRecordForEdit={setRecordForEdit}
          setEditAble={setEditAble}
          setNewRecord={setNewRecord}
        />
      </article>
    </>
  );
}
