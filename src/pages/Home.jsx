import { useEffect } from "react";
import { getElement, setAttributes } from "../utils/Handler";
import Form from "../components/Form"

/**
 * Home
 * @returns {Reactnode}  jsx injected in DOM
 */
const Home = () => {

  useEffect(() => {
    const formatDate = (date) => date.toISOString().split("T")[0];
  
    const setMinMax = (id, minDate, maxDate) => {
      const element = getElement(id);
      if (element) {
        setAttributes(element, { min: formatDate(minDate), max: formatDate(maxDate) });
      }
    };
  
    // Date of birth: from 68 to 16 years old
    const current = new Date();
    setMinMax("dateOfBirth", new Date(current.setFullYear(current.getFullYear() - 68)), new Date(current.setFullYear(current.getFullYear() + 52)));
  
    // Start date: from the last 30 days to today
    setMinMax("startDate", new Date(current.setDate(current.getDate() - 30)), new Date());
  
  }, []); // Runs only once on mount

  return (
      <main aria-labelledby="page-title">
      <h2 tabIndex="0" id="page-title">
        Create Employee
      </h2>
      <Form />
    </main>
  );
};

export default Home;