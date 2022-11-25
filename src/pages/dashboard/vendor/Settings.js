import React, { useState } from "react";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { PUT } from "../../../apis/requests";
import NavBar from "./NavBar";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const IOSSwitch = styled((props) => (
  <Switch
    focusVisibleClassName=".Mui-focusVisible"
    checked={props.checked}
    onChange={props.handleChange}
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#14A384" : "#14A384",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#14A384",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export default function Settings({ setSidebar, sidebar }) {
  // const [isLoading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.authReducer);
  const [isLoading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const [passwordChanges] = useState({
    currentPawword: "1234567890",
    password: "1234567890",
    confirm: "1234567890",
  });

  const [value, setValue] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log("event.target.checked", event.target.checked);
  };

  return (
    <>
      <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Settings" />
      <article className="vendor-profile-main">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 mb-5">
            <h2 className="fs-3">Update Password</h2>

            <form className="vendor-setting-form-wrapper">
              <input
                type="password"
                className="form-control"
                id="firstName"
                name="password"
                value={value.password}
                onChange={onchange}
                placeholder="Current Password"
                required
              />

              <input
                type="password"
                className="form-control"
                id="firstName"
                name="newPassword"
                value={value.newPassword}
                onChange={onchange}
                placeholder="New Password"
                required
              />

              <input
                type="password"
                className="form-control"
                id="firstName"
                name="confirmPassword"
                value={value.confirmPassword}
                onChange={onchange}
                placeholder="Confirm Password"
                required
              />
              <button
                onClick={() => {
                  onsubmit();
                }}
                className="btn btn-solid btn-solid-primary"
                style={{ overflow: "hidden" }}
              >
                UPDATE
              </button>
            </form>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-5 mb-5">
            <h2 className="fs-3">New Order</h2>
            <div className="vendor-setting-wrapper-right">
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>In App Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Push Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Email Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-5 mb-5">
            <h2 className="fs-3">New Inbox Message</h2>
            <div className="vendor-setting-wrapper-right">
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>In App Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Push Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Email Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
            <h2 className="fs-3">New Review</h2>
            <div className="vendor-setting-wrapper-right">
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>In App Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={
                          <IOSSwitch
                            sx={{ m: 1 }}
                            checked={checked}
                            onChange={handleChange}
                          />
                        }
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Push Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className=" row  justify-content-between align-items-center">
                <div className="col-6 ">
                  <label>Email Notification</label>
                </div>

                <div className="col-6 d-flex justify-content-end">
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Off</Typography>
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
