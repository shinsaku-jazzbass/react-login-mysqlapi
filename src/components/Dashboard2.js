import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard2 = () => {
  //   useEffect(() => {
  //   fetch("http://localhost:8888/api/logout.php", {
  //     credentials: "include"
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);
const naviget = useNavigate();
function handleClearAll() {
  fetch("http://localhost:8888/api/logout.php", {
  credentials: "include"
  }).then(res => res.json())
  .then(data => console.log(data));
  
    localStorage.clear(); // すべてのローカルストレージデータをクリア
    alert('すべてのローカルストレージデータがクリアされました。');
    naviget("/");
  };
  return (
          <div>
        <h2>Dashboard</h2>
        <button onClick={handleClearAll}>
        ログアウト
         </button>
      </div>
  )
}

export default Dashboard2