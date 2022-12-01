import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  let navigate = useNavigate();
  const a = useParams(); //url params값 가져오기

  const onDelete = () => {
    const menu = {
      id: a.id,
    };
    fetch("http://localhost:8080/delete", {
      method: "DELETE", // 삭제
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(menu),
    })
      .then((res) => res.json())
      .then((json) => {});
    navigate("/"); // 수정 후 메인으로 이동
  };

  const onNo = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>삭제 하시겠습니까?</h1>
      <button onClick={onDelete}>Yes</button>
      <button onClick={onNo}>No</button>
    </div>
  );
}

export default Update;
