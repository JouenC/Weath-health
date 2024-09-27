import React, { useState } from "react";
import INPUT_DATA from "../datas/inputData.json";
import DROPDOWN_DATA from "../datas/dropdownData.json";
import EMPLOYEES_LIST from "../datas/employeesData.json";
import icoAdd from "../assets/ico-user-add.jpg";
import close from "../assets/close.png";
import Input from "./Input";
import Dropdown from "react-dropdown-component-cj";
import Modal from "react-modal";

const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  street: "",
  city: "",
  zipCode: "",
  stateAbbrev: "",
  startDate: "",
  department: "",
};

/**
 * Form
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Form() {

  const [newEmployee, setNewEmployee] = useState(initialState);

  const [modalIsOpen, setIsOpen] = useState(false);

  // Render all component and filter data
  const renderComponents = (data, Component, filterCondition) =>
    data.filter(filterCondition).map((item, index) => (
      <Component
        key={index}
        type={item.type}
        className={item.className}
        htmlFor={item.id}
        label={item.label}
        id={item.id}
        value={newEmployee[item.id]}
        select={item.select}
        handleChange={handleChange}
        autoComplete="off"
      />
    ));

    // Rendering function for in or out fieldset
const renderFilteredComponents = (isAddress) => (
  <>
    {renderComponents(INPUT_DATA, Input, (data) => isAddress ? data.className.includes("address") : !data.className.includes("address"))}
    {renderComponents(DROPDOWN_DATA, Dropdown, (data) => isAddress ? data.className.includes("address") : !data.className.includes("address"))}
  </>
);

  // MODAL
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // ON CHANGE
  const handleChange = (e) => {
    setNewEmployee(prev => ({ ...prev, [e.target.id]: e.target.value.trim() }));
  };

  // GET DATA
  let employeesList =
    JSON.parse(window.localStorage.getItem("employeesList")) || EMPLOYEES_LIST;

  // ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // complete / correct data
    newEmployee.id = employeesList.length;
    newEmployee.dateOfBirth = newEmployee.dateOfBirth.replace(/-/g, "/");
    newEmployee.startDate = newEmployee.startDate.replace(/-/g, "/");

    // update data
    employeesList.push(newEmployee);

    // store data
    window.localStorage.setItem("employeesList", JSON.stringify(employeesList));

    // reset form
    setNewEmployee(initialState);

    openModal();
  };

  return (
    <form action="" className="form-newEmployee" onSubmit={handleSubmit}>
      
      <img className="form-newEmployee--ico" src={icoAdd} alt="add employee icon"/>

      {/* Inputs and Dropdowns without the 'address' class */}
      {renderFilteredComponents(false)}

      {/* Address fieldset */}
      <fieldset id="addressContainer" className="form-newEmployee--addressContainer">
        <legend className="form-newEmployee--addressGroup">Address</legend>
        {renderFilteredComponents(true)}
      </fieldset>
      
      <button type="submit" className="submit form-newEmployee--submit"> Save </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <button onClick={closeModal} className="modal-close">
          <img src={close} className="modal-icon" alt="close modal" />
        </button>
        <div className="modal-text">Employee Created</div><br/>
        <span className="span-icon">👍</span>
      </Modal>

    </form>
  );
};