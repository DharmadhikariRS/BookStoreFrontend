import React from "react";
import "./customerdetails.css";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { addCustomerDetails } from "../../Service/book.service";
import { textAlign } from "@mui/system";
const useStyle = makeStyles({
  mainContainerCustomer: {
    display: "flex",
    width: "65vw",
    marginTop: "2%",
    flexDirection: "column",
    gap: "15px",
    border: "1px solid #dcdcdc",
    fontSize: " 0.7rem !important",
  },
  addressTypeRadioBtns: {
    display: "flex",
    gap: "8%",
  },
  NameMobileCustomer: {
    display: "flex",
    width: "100%",
    paddingBottom: "2%",
    gap: " 5%",
    marginLeft: "5%",
  },
  fontSizeFields: {},
  cityStateCustomer: {
    display: "flex",
    width: "100%",
    paddingBottom: "2%",
    gap: "5%",
    marginLeft: "5%",
  },
  addressCustomer: {
    display: "flex",
    width: "65%",
    gap: "5px",
    flexDirection: "column",
    paddingBottom: " 2%",
    marginLeft: " 5%",
  },
  ["@media only screen and (min-width: 481px) and (max-width: 899px)"]: {
    mainContainerCustomer: {
      width: "76vw",
    },
    addressTypeRadioBtns: {
      gap: "2%",
    },

    NameMobileCustomer: {
      display: "flex",
      flexDirection: "column",
    },
    fontSizeFields: {
      width: " 90% !important",
      marginBottom: "2% !important",
    },
    cityStateCustomer: {
      display: "flex",
      flexDirection: "column",
    },
    addressCustomer: {
      width: "90%",
      gap: "5px",
    },
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    addressTypeRadioBtns: {
      gap: "0%",
    },
    mainContainerCustomer: {
      width: "70vw",
    },
    NameMobileCustomer: {
      display: "flex",
      flexDirection: "column",
    },
    fontSizeFields: {
      width: " 90% !important",
      marginBottom: "2% !important",
    },
    cityStateCustomer: {
      display: "flex",
      flexDirection: "column",
    },
    addressCustomer: {
      width: "90%",
      gap: "5px",
    },
  },
});
const Customerdetails = ({ OrderSummaryView, orderSummaryView }) => {
  const classes = useStyle();
  const [showError, setShowError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    Addresses: [
      {
        FullName: "",
        MobileNumber: "",
        address: "",
        city: "",
        state: "",
        type: "Home",
      },
    ],
  });
  const handleChange = (event) => {
    setShowError(false);
    setUserDetails({
      ...userDetails,
      Addresses: [
        {
          ...userDetails.Addresses[0],
          [event.target.name]: event.target.value,
        },
      ],
    });
  };
  // setTimeout(() => {

  // }, 2000);
  const addCustomerDetail = async () => {
    console.log("address details are", userDetails.Addresses);

    const details = Object.values(userDetails.Addresses[0]).filter(
      (value) => value === ""
    );
    if (details.length === 0) {
      console.log("inside if");
      OrderSummaryView();
      await addCustomerDetails(userDetails);
    } else {
      console.log("inside else");
      setShowError(true);
    }
  };

  return (
    <>
      <div className={classes.mainContainerCustomer}>
        <div className="first-div-customer">
          <span className="customer-heading">Customer Details</span>{" "}
          <div className="add-new-address">Add New Address</div>
        </div>

        <div className={classes.NameMobileCustomer}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
            name="FullName"
            value={userDetails.Addresses[0].FullName}
            onChange={handleChange}
            sx={{ width: "30%" }}
            className={classes.fontSizeFields}
          />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            size="small"
            name="MobileNumber"
            value={userDetails.Addresses[0].MobileNumber}
            onChange={handleChange}
            sx={{ width: "30%" }}
            className={classes.fontSizeFields}
          />
        </div>
        <div className={classes.addressCustomer}>
          <span className="address-label">Address</span>
          <textarea
            type="text"
            placeholder="Enter your address here"
            name="address"
            value={userDetails.Addresses[0].address}
            onChange={handleChange}
            className="textarea-address"
          />
        </div>
        <div className={classes.cityStateCustomer}>
          <TextField
            id="outlined-basic"
            label="city/town"
            variant="outlined"
            size="small"
            name="city"
            value={userDetails.Addresses[0].city}
            onChange={handleChange}
            sx={{ width: "30%" }}
            className={classes.fontSizeFields}
          />
          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            size="small"
            name="state"
            value={userDetails.Addresses[0].state}
            onChange={handleChange}
            sx={{ width: "30%" }}
            className={classes.fontSizeFields}
          />
        </div>

        <div className={"address-type margin"}>
          <span>Type</span>
          <div className={classes.addressTypeRadioBtns}>
            <input
              type="radio"
              id="html"
              name="type"
              value="Home"
              checked={userDetails.Addresses[0].type === "Home"}
              onChange={handleChange}
            />
             <label htmlFor="home">Home</label>
            <input
              type="radio"
              id="css"
              name="type"
              value="Work"
              checked={userDetails.Addresses[0].type === "Work"}
              onChange={handleChange}
            />
              <label htmlFor="work">Work</label>
            <input
              type="radio"
              name="type"
              value="Other"
              checked={userDetails.Addresses[0].type === "Other"}
              onChange={handleChange}
            />
             <label htmlFor="other">Other</label>
          </div>
        </div>
        {showError && (
          <div
            style={{
              color: "red",
              textAlign: "left",
              paddingLeft: "5%",
              fontSize: "0.78rem",
            }}
          >
            Please enter all the detaitls to proceed
          </div>
        )}
        {!orderSummaryView && (
          <div className="continueButton">
            <button
              type="button"
              className="continue"
              onClick={addCustomerDetail}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Customerdetails;
