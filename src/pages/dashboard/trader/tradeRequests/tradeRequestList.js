import { useState, useEffect } from "react";
import { FaSearch, FaAngleDown, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { GET_All_SELLER_TRADES } from "../../../../redux/actions/trades";
import TradeRequestItem from "./TradeRequestItem";
import TableComponent from "../Table";
export default function TradeList({ setView, view }) {
  const dispatch = useDispatch();
  const [tableHeadData, seTableHeadData] = useState([
    { id: "tradecode", label: "Trade code" },
    { id: "inSearchOf", label: "In Search Of" },
    { id: "exchangeWith", label: "Exchange With" },
    { id: "unreadComments", label: "Unread Comments" },
    { id: "lastCommentDate", label: "last Comment Date" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([
    {
      tradecode: "01",
      lastCommentDate: "2022-01-22",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
    {
      tradecode: "01",
      lastCommentDate: "2022-01-23",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
    {
      tradecode: "01",
      lastCommentDate: "2022-01-24",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
    {
      tradecode: "01",
      lastCommentDate: "2022-01-25",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
    {
      tradecode: "01",
      lastCommentDate: "2022-01-26",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
  ]);
  // const { traderTrades } = useSelector((state) => state.TradesReducers);

  const traderTrades = [
    { _id: "1", inSearchOf: "sajgd", toExchangeWith: "kjhakjh" },
  ];
  const [sortType, setsortType] = useState("Ascending");
  const [search, setSearch] = useState("");
  const [dateSelectedFilter, setdateSelectedFilter] = useState({
    fromDate: "",
    toDate: "",
  });
  const [rowData, setRowData] = useState(tableRowData);
  // const { _id } = JSON.parse(localStorage.getItem("userData"));

  // useEffect(() => {
  //   dispatch(GET_All_SELLER_TRADES(_id, localStorage.getItem('token')))
  // }, [])

  const handleSortProducts = (a, b) => {
    if (sortType === "Newest First") {
      return new Date(b.lastCommentDate) - new Date(a.lastCommentDate);
    } else if (sortType === "Oldest First") {
      return new Date(a.lastCommentDate) - new Date(b.lastCommentDate);
    }
  };

  const filterByDateHandler = () => {
    const arr = tableRowData.filter((item) => {
      let filterPass = true;
      const date = new Date(item.lastCommentDate);
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
          regex.test(item?.unreadComments) ||
          regex.test(item?.lastCommentDate)
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

  return (
    <>
      <article className="trader-trade-requests-main">
        <header>
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
                      placeholder="02/03/2022"
                      onChange={(event) =>
                        setdateSelectedFilter({
                          ...dateSelectedFilter,
                          toDate: event.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    onClick={() => {
                      filterByDateHandler();
                      // setsortType("Filter Date");
                    }}
                    className="btn btn-solid btn-solid-primary mx-auto"
                  >
                    Apply
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* <div className="table-content table-container">
          <table className="table table-container__table table-container__table--break-md">
            <thead>
              <tr>
                <th className="li-product-remove">Trade Code</th>
                <th className="li-product-thumbnail">In Search Of</th>
                <th className="cart-product-name">Exchange With</th>
                <th className="li-product-price">Unread Comments</th>
                <th className="li-product-price">Last Commented Date</th>
                <th
                  className="li-product-subtotal"
                  style={{ textAlign: "left" }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {traderTrades?.map((order, index) => {
                return <TradeRequestItem props={order} setView={setView} />;
              })}
            </tbody>
          </table>
        </div> */}
        <TableComponent
          edit={"tradeRequest"}
          tHeadData={tableHeadData}
          tRowData={rowData}
          setView={setView}
        />
      </article>
    </>
  );
}
