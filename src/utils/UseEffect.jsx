import { useEffect } from "react";
import { getElement, getElements, setAttributes } from "./Handler";

export const InitializeHome = () => {

    useEffect(() => {

    // FILLING THE ADDRESS BLOCK WITH THE ADDRESS ITEMS
    getElements("address").forEach((item) => {
        console.log(item)
        const addressContainer = getElement("addressContainer");
        // console.log(addressContainer)
        if (addressContainer) {
            const heading = document.createElement('h3');
            heading.textContent = 'Address';
            addressContainer.appendChild(heading);
            addressContainer.appendChild(item);
        }
    });

    // HANDLING MIN / MAX AGE FOR DATE OF BIRTH INPUT
    const age = (n) => {
        let current = new Date();
        current.setFullYear(current.getFullYear() - n);
        return current.toISOString().split("T")[0];
    };

    // SETTING DATE OF BIRTH MIN / MAX ATTRIBUTES
    // choosen values for this context: from 68 to 16 years old
    // replace by any other values as needed
    const dateOfBirthElement = getElement("dateOfBirth");
    if (dateOfBirthElement) {
        setAttributes(dateOfBirthElement, {
            min: age(68),
            max: age(16),
        });
    }

    // HANDLING MIN / MAX DATE FOR START DATE INPUT
    const start = (n) => {
        let current = new Date();
        current.setDate(current.getDate() - n);
        return current.toISOString().split("T")[0];
    };

    // SETTING START DATE MIN / MAX ATTRIBUTES
    // choosen values for this context: from the last 30 days to today
    // replace by any other values as needed
    const startDateElement = getElement("startDate");
    if (startDateElement) {
        setAttributes(startDateElement, {
            min: start(30),
            max: start(0),
        });
    }
}, []); // Empty dependency array ensures this effect runs only once on mount

return null; // This component doesn't render anything
};