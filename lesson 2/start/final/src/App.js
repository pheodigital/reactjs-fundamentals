import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import "./App.css";
import Edit from "./Edit";
import Display from "./Display";

function App() {
  const [modifyResponse, setModifyResponse] = useState(null);

  const btnClick = (name, flag) => {
    const newmodifiedRes = modifyResponse.map((res) =>
      res.name === name
        ? { ...res, editable: flag }
        : { ...res, editable: false }
    );

    setModifyResponse(newmodifiedRes);
  };
  console.log("y", modifyResponse);
  const callApi = async () => {
    let result;
    try {
      const apiResult = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      result = apiResult;
    } catch (e) {
      throw e;
    }
    const modifiedResults =
      result &&
      result.map((item) => ({
        ...item,
        editable: false,
      }));
    setModifyResponse(modifiedResults);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      {modifyResponse &&
        modifyResponse.map((item, index) => {
          return (
            <Box
              component="span"
              sx={{
                display: "inline-block",
                mx: "2px",
                transform: "scale(0.8)",
              }}
            >
              {!item.editable ? (
                <Display
                  txtColor={"red"}
                  btnClick={btnClick}
                  userName={item.username}
                  name={item.name}
                  email={item.email}
                />
              ) : (
                <Edit
                  txtColor={"red"}
                  btnClick={btnClick}
                  userName={item.username}
                  name={item.name}
                  email={item.email}
                />
              )}
            </Box>
          );
        })}
    </div>
  );
}

export default App;
