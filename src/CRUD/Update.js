import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  let navigate = useNavigate(); //페이지 전환
  const a = useParams(); //url params값 가져오기
  const [todo, settodo] = useState({
    id: a.id,
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

  const onClick = () => {
    const menu = {
      id: a.id,
      title: todo.title,
      description: todo.description,
    };
    fetch("http://localhost:8080/update", {
      method: "PUT", // 업데이트
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
    navigate("/"); // 수정 후 메인으로 이동
  };
  const onNo = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>업데이트</h1>
      <input
        placeholder="title"
        name="title"
        value={todo.title}
        onChange={onChange}
      />
      <input
        placeholder="desc"
        name="description"
        value={todo.description}
        onChange={onChange}
      />
      <button onClick={onClick}>업데이트</button>
      <br />
      <button onClick={onNo}>취소</button>
    </div>
  );
}

export default Update;
