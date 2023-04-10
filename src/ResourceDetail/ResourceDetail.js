import React from "react";
// import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import "./ResourceDetail.css";
import { BsCalendar4Week } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../redux/action";
import axios from "axios";

function ResourceDetail() {
  const dispatch = useDispatch();

  const userPresent = useSelector((state) => state.addData);
  // console.log("user is", userPresent);
  const [allResourceData, setAllResourceData] = useState([]);
  // const removeResource = async (id) => {
  //   await axios.delete(
  //     `https://repulsive-leotard-fly.cyclic.app/allresource/${id}`
  //   );
  //   const newResourceList = allResourceData.filter((resource) => {
  //     return resource.id !== id;
  //   });
  //   setAllResourceData(newResourceList);
  // };
  const removeResource = async (id) => {
    await axios.delete(
      `https://repulsive-leotard-fly.cyclic.app/allresource/${id}`
    );
    // const newResourceList = allResourceData.filter((resource) => {
    //   return resource.id !== id;
    // });
    // setAllResourceData(newResourceList);
    dispatch(deleteData(id));
  };

  // useEffect(() => {
  //   const retriveData = async () => {
  //     const response = await axios.get(
  //       "https://repulsive-leotard-fly.cyclic.app/allresource"
  //     );
  //     setAllResourceData(response.data);
  //     console.log("the resource is", allResourceData);
  //   };
  //   // retriveData();
  //   setTimeout(retriveData, 1000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    //   const retriveData = async () => {
    //     const response = await axios.get(
    //       "https://repulsive-leotard-fly.cyclic.app/allresource"
    //     );
    //     setAllResourceData(response.data);
    //     console.log("the resource is", allResourceData);
    //   };
    //   // retriveData();
    setAllResourceData(userPresent);
  }, [userPresent]);
  return (
    <div>
      <Navbar2 />
      <div className="addNewResource">
        <p className="resourcesHeading">Resources</p>
        <NavLink to="/addresource">
          <button id="addResource">Add Resource</button>
        </NavLink>
      </div>

      <div className="dataHolder">
        {allResourceData.map((data) => (
          <div className="dataInner" key={data.id}>
            <div className="dataInnerTop">
              <div className="nameAndEmail">
                <p>
                  {data.username}&nbsp;-{data.designation}
                </p>
                <p>{data.email}</p>
              </div>
              <div className="editDelete">
                <Link
                  to={{ pathname: "/editresource" }}
                  state={{ resource: data }}
                >
                  <div>
                    <GrEdit className="iconDesign" />
                  </div>
                </Link>

                <div
                  onClick={() => {
                    removeResource(data.id);
                  }}
                >
                  {" "}
                  <RiDeleteBinLine className="iconDesign" />
                </div>
              </div>
            </div>
            <div className="dataInnerBottom">
              <div className="logoAndFeatureCont">
                <div className="logoDesign">
                  <BsCalendar4Week
                    style={{ color: "#836b4c", fontSize: "0.8rem" }}
                  />
                </div>
                <div className="featureAndTime">
                  <p>Today</p>
                  <p>{data.today}</p>
                </div>
              </div>
              <div className="logoAndFeatureCont">
                {" "}
                <div className="logoDesign">
                  <FaCoins style={{ color: "#836b4c" }} />
                </div>
                <div className="featureAndTime">
                  <p>Billable</p>
                  <p>{data.billable}</p>
                </div>
              </div>
              <div className="logoAndFeatureCont">
                {" "}
                <div className="logoDesign">
                  <TbCurrencyDollarOff style={{ color: "#836b4c" }} />
                </div>
                <div className="featureAndTime">
                  <p>Non-Billable</p>
                  <p>{data.nonbillable}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceDetail;
