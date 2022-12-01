/*eslint-disable*/
import React, { useState } from "react";

function Insert() {
  //insert
  const [todo, settodo] = useState({
    title: "",
    description: "",
  });
  //insert
  const onChange = (e) => {
    const { name, value } = e.target;
    settodo({
      ...todo,
      [name]: value,
    });
  };

  //insert
  const onClick = () => {
    const menu = {
      title: todo.title,
      description: todo.description,
    };
    fetch("http://localhost:8080/create", {
      method: "post", // 생성
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(menu),
    })
      .then((res) => res.json())
      .then((json) => {
        settodo({
          title: json.text,
          description: json.text,
        });
      });
  };

  return (
    <div className="center">
      <input
        placeholder="title"
        name="title"
        value={todo.title}
        onChange={onChange}
      />
      <input
        placeholder="description"
        name="description"
        value={todo.description}
        onChange={onChange}
      />
      <button onClick={onClick}>Button</button>
      <br />
    </div>
  );
}

export default Insert;
