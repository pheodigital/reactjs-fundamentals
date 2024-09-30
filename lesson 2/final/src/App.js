import { useState, useEffect } from "react";
import "./App.css";
import Edit from "./Edit";
import Display from "./Display";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [response, setResponse] = useState(null);

  const btnClick = (flag) => {
    setIsEditable(flag);
  };

  const callApi = async () => {
    let result;
    try {
      const apiResult = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      result = { ...apiResult };
    } catch (e) {
      throw e;
    }
    return setResponse(result);
  };

  useEffect(() => {
    callApi();
  }, [isEditable]);

  const users = [
    { userName: "test1", editable: false },
    { userName: "test2", editable: false },
  ];

  console.log("response", response);

  return (
    <div className="App">
      {users.map((item, index) => {
        return (
          <div>
            {!isEditable ? (
              <Display
                txtColor={"red"}
                btnClick={btnClick}
                userName={item.userName}
              />
            ) : (
              <Edit
                txtColor={"red"}
                btnClick={btnClick}
                userName={item.userName}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
