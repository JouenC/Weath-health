import { InitializeHome } from "../utils/UseEffect";
import Form from "../components/Form"


/**
 * Home
 * @returns {Reactnode}  jsx injected in DOM
 */
const Home = () => {
  InitializeHome ()

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