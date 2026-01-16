import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const logout = () => {
const handleClearAll = () => {
  // fetch("http://localhost:8000/api/logout.php", {
  // credentials: "include"
  // });

    localStorage.clear(); // すべてのローカルストレージデータをクリア
    alert('すべてのローカルストレージデータがクリアされました。');
  };

  return (
    <div>
    <button onClick={handleClearAll}>
        すべてのデータをクリア
    </button>
    </div>
  )
}

export default logout