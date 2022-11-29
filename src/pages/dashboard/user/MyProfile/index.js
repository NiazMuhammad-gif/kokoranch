import React, { useState } from "react";
import UserSideMenu from "../../../../components/userSideMenu";

// components
import InfoForm from "./InfoForm";
import PasswordChangeForm from "./PasswordChangeForm";
import InfoDetails from "./InfoDetails";

export default function MyProfile() {
  const [formChange, setFormChange] = useState(false);

  return (
    <UserSideMenu>
      <div className="my-profile-wrapper">
        <h2 className="fs-2 mb-5">
          <span
            style={
              formChange === "password-form"
                ? { cursor: "pointer" }
                : { cursor: "initial" }
            }
            onClick={
              formChange === "password-form"
                ? () => {
                    setFormChange(false);
                  }
                : null
            }
          >
            My Profile
          </span>
          {formChange === "password-form" ? " > Change Password" : null}
        </h2>
        <div className="row my-profile-wrapper_inner-wrapper">
          {formChange === "info-form" ? (
            <InfoForm setFormChange={setFormChange} />
          ) : formChange === "password-form" ? (
            <PasswordChangeForm setFormChange={setFormChange} />
          ) : (
            <InfoDetails setFormChange={setFormChange} />
          )}
        </div>
      </div>
    </UserSideMenu>
  );
}
