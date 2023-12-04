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
  const handleAuthorization = (role) => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if(name === role) {
        return true
      }
    }
    window.location.href = 'http://localhost:3000/login';
  }
  if(handleAuthorization('Student_cookie_id') == true) {
    return (
      <div>
        <BuyForm onSubmit={HandleFormSubmit} />
      </div>
    );
  }
}

export default buy;
