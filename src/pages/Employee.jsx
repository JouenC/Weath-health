// import React, { useEffect } from "react";
// import { getTags, getNestedTags, setAttributes } from "../../utils/handler";
// import Table from "../../components/Table/Table";


/**
 * Employees List with many sorting options
 * @returns {Reactnode}  jsx injected in DOM
 */
 export default function Employees()  {
    // useEffect(() => {
    
    //     // ACCESSIBILITY
    //     // HANDLING ROWS GROUP BY SETTING ATTRIBUTE
    //     getTags("tbody").map((item) => item.removeAttribute("role"));
    
    //     // HANDLING HEADERS SCOPE BY SETTING ATTRIBUTE
    //     // headers level 1
    //     getNestedTags("tr", 0, "th").map((item) =>
    //       setAttributes(item, {
    //         scope: "colgroup",
    //       })
    //     );
    //     // headers level 2
    //     getNestedTags("tr", 1, "th").map((item) =>
    //       setAttributes(item, {
    //         scope: "col",
    //       })
    //     );
    //   });

    return (
        <main aria-labelledby="page-title" className="table">
            <h2 tabIndex="0" id="page-title">
               Current Employees 
            </h2>
            {/* <Table /> */}
        </main>
    );
};