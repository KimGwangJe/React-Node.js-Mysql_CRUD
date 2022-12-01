/*eslint-disable*/
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Bpp.css";

function Select() {
  const [view, setview] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/select").then((response) => {
      setview(response.data); //데이터 받아옴
    });
  });
  //map함수의 두번째 인자는 인덱스
  const viewer = view.map((view, i) => (
    <div key={view.id}>
      <h4>
        <hr />
        {view.title}
      </h4>
      <p>{view.description}</p>
      <Link to={`/update/${view.id}`}>
        {/*동적 라우팅 사용*/}
        <button>수정</button>
      </Link>
      <Link to={`/delete/${view.id}`}>
        <button>삭제</button>
      </Link>
    </div>
  ));

  return (
    <div>
      {viewer}
      <hr />
    </div>
  );
}

export default Select;
