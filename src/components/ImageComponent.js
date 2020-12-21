import React, { useState, useEffect } from "react";

function ImageComponent() {
  const [files, setFiles] = useState("");
  const [curr, setCurr] = useState("");
  console.log("Initial State :", files);

  const callApi = () => {
    console.log("Inside func");
    fetch("http://localhost:8080/files")
      .then((res) => res.json())
      .then((resData) => {
        setFiles(resData);
        return resData;
      })
      .catch((err) => console.error("Error Occured", err));
  };

  useEffect(() => {
    callApi();
  }, []);

  function changeHandler(event) {
    setCurr(event.target.value);
    var img = document.querySelector("#image");
    if (event.target.value === "") {
      img.src =
        "https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png";
    } else {
      img.src = event.target.value;
      console.log(event.target.value);
    }
  }

  return (
    <div>
      <label value="cars">Choose a filename:</label>
      <select name="cars" id="cars" onChange={changeHandler}>
        <option value="" defaultValue>
          Select one
        </option>
        {Object.values(files).map((cell) => (
          <option key={cell} value={cell.split("/").pop()}>
            {cell.split("/").pop()}
          </option>
        ))}
      </select>
      <br />
      <br />
      <img
        id="image"
        // src={`%PUBLIC_URL%/${curr}`}
        style={{ width: 450, height: 300 }}
      ></img>
    </div>
  );
}

export default ImageComponent;
