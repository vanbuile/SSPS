// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Button from "@mui/material/Button";
import React from "react";
import PropTypes from "prop-types";
import BuyForm from "../../components/BuyForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Handle on submit funct

const HandleFormSubmit = (values) => {
  console.log("Form submit: ", values);
};

function buy(props) {
  return (
    <div>
      <BuyForm onSubmit={HandleFormSubmit} />
    </div>
  );
}

export default buy;
