import React, { useEffect, useState } from "react";
import "../AddContactScreen/AddContactScreen.css";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function AddContactScreen() {
  const { state } = useLocation();
  const navigation = useNavigate();

  const [idState, setIdState] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateData, setStateData] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    //Get id from the params routing
    if (state) {
      setIdState(state.id);
    }
    if (idState) {
      //Get data, find the items and mount the value
      const items = JSON.parse(localStorage.getItem("data"));
      if (items) {
        const filterItems = items?.find((item: any) => {
          return item.id == idState;
        });
        if (filterItems) {
          setFirstName(filterItems?.firstName);
          setLastName(filterItems?.lastName);
          setEmail(filterItems?.email);
          setPhoneNumber(filterItems?.phoneNumber);
          setAddress(filterItems?.address);
          setCity(filterItems?.city);
          setStateData(filterItems?.state);
          setCountry(filterItems?.country);
          setPostalCode(filterItems?.postalCode);
        }
      }
    }
  }, [idState, state]);

  const addContactFunc = () => {
    //regular expression for mail
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //Validation
    if (firstName?.length == 0) {
      return alert("Please enter the first name");
    }
    if (email?.length == 0) {
      return alert("Please enter the email");
    }
    if (lastName?.length == 0) {
      return alert("Please enter the valid email");
    }
    if (re.test(String(email).toLowerCase()) === false) {
      return alert("Please enter the valid email");
    }
    if (phoneNumber.toString().length == 0) {
      return alert("Please enter the Phone number");
    }
    if (phoneNumber?.length != 10) {
      return alert("Please enter the valid Phone number");
    }
    if (address?.length == 0) {
      return alert("Please enter the address");
    }
    if (city?.length == 0) {
      return alert("Please enter the city");
    }
    if (stateData?.length == 0) {
      return alert("Please enter the state");
    }
    if (country?.length == 0) {
      return alert("Please enter the country");
    }
    if (postalCode.toString().length == 0) {
      return alert("Please enter the Postal Code");
    }
    if (postalCode.toString().length != 6) {
      return alert("Please enter the valid Postal Code");
    }
    let obj = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      city: city,
      state: stateData,
      country: country,
      postalCode: postalCode,
    };
    if (!idState) {
      //Save the data
      const getData = JSON.parse(localStorage.getItem("data"));
      if (getData) {
        let includeData = getData;
        includeData.unshift(obj);
        localStorage.setItem("data", JSON.stringify(includeData));
      } else {
        let includeData = [];
        includeData.push(obj);
        localStorage.setItem("data", JSON.stringify(includeData));
      }
      navigation("/ContactList");
    } else {
      //Update the data
      const getData = JSON.parse(localStorage.getItem("data"));
      if (getData) {
        const findIndex = getData?.findIndex((item: any) => {
          return item.id == idState;
        });
        const filterItems = getData?.find((item: any) => {
          return item.id == idState;
        });
        if (filterItems) {
          const fetchData = getData;
          fetchData.splice(findIndex, 1, obj);
          localStorage.setItem("data", JSON.stringify(fetchData));
          navigation("/ContactList");
        }
      }
    }
  };
  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">
              {" "}
              {idState ? "Edit Contact" : "Add Contact"}
            </h2>
            <form>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">first name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="first_name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">last name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="last_name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Email</label>
                    <input
                      className="input--style-4"
                      type="email"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Phone Number</label>
                    <input
                      className="input--style-4"
                      type="number"
                      value={phoneNumber}
                      name="phone"
                      maxLength={10}
                      // onChange={(e) => setPhoneNumber(e.target.value)}
                      onChange={(e) => {
                        if (e?.target?.value?.length > 10) {
                          e.target.value = e.target.value.slice(0, 10);
                        }
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Address</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">City</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">State</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="State"
                      value={stateData}
                      onChange={(e) => setStateData(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Country</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="input-group">
                  <label className="label">Postal Code</label>
                  <input
                    className="input--style-4"
                    type="number"
                    name="Postal Code"
                    value={postalCode}
                    maxLength={6}
                    onChange={(e) => {
                      if (e?.target?.value?.length > 6) {
                        e.target.value = e.target.value.slice(0, 6);
                      }
                      setPostalCode(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="p-t-15">
                <div
                  onClick={addContactFunc}
                  className="btn btn--radius-2 btn--blue"
                >
                  Submit
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
