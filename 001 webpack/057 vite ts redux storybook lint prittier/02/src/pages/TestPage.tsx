import { useNavigate } from "react-router-dom";
import { TestComponent } from "components/TestComponent";


export const TestPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      TESTING DEFAULT FUNCTIONALITY OF WEBPACK
      <hr />
      <br />
      <br />
      <br />
      
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <TestComponent />
      <hr />
      <h3>05 test react-router</h3>
      <button onClick={() => navigate("/test1")}>navigate to test</button>
      <hr />
      <h3>06 use browser back / fowrard buttons (after navigate to /test)</h3>
    </div>
  );
};
