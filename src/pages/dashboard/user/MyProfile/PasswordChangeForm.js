import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PUT } from "../../../../apis/requests";
import Popup from "../../../../components/popUp/popUp";
import Images from "../../../../constants/images";

export default function PasswordChangeForm({ setFormChange}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const { token } = useSelector((state) => state.authReducer);
  const [isLoading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const onsubmit = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Password does not match");
    } else {
      PUT("/users/update_password", token, "", data)
        .then((response) => {
          if (response.success === false) {
            toast.error(response.message);
            setLoading(false);
          } else {
            toast.success(response.message);
            setLoading(false);
            setPopupOpen(true)
            // CLEARING VALUES
            setValue("password", "");
            setValue("newPassword", "");
            setValue("confirmPassword", "");
          }
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
        });
    }
  };
  return (
    <>
    <form
      className="row password-change-form"
      onSubmit={handleSubmit(onsubmit)}
    >
      <div className="col-6">
        <div className="col-12">
          <label htmlFor="password" className="form-label">
            Current Password
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => {
              return (
                <input
                  className="form-control form-control-white"
                  type="password"
                  name={field.name}
                  value={field.value}
                  placeholder="Current Password"
                  onChange={field.onChange}
                  error={errors.password}
                  required
                />
              );
            }}
          ></Controller>
        </div>
        <div className="col-12">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <Controller
            name="newPassword"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => {
              return (
                <input
                  className="form-control form-control-white"
                  type="password"
                  name={field.name}
                  value={field.value}
                  placeholder="New Password"
                  onChange={field.onChange}
                  error={errors.newPassword}
                  required
                />
              );
            }}
          ></Controller>
        </div>
        <div className="col-12">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={({ field }) => {
              return (
                <input
                  type="password"
                  className="form-control form-control-white"
                  name={field.name}
                  value={field.value}
                  placeholder="Confirm Password"
                  onChange={field.onChange}
                  error={errors.confirmPassword}
                  required
                />
              );
            }}
          ></Controller>
        </div>
        <div className="col-12">
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-solid btn-solid-primary btn-full"
          >
            Update Password
          </button>
        </div>
      </div>

      <div className="col-lg-6"></div>
    </form>
     <Popup open={popupOpen} setOpen={setPopupOpen}>
     <div className="model-wrapper">
       <img
         src={Images.Pictures.successCheck}
         className="model-wrapper_image"
         alt="success"
       />
       <p className="model-wrapper_text">Password Updated Successfully</p>
       <button
         onClick={() => {
           setPopupOpen(false);
           setFormChange(false)
         }}
         className="btn btn-solid btn-solid-primary-rounded model-wrapper_button "
       >
         Close
       </button>
     </div>
   </Popup>
   </>
  );
}
