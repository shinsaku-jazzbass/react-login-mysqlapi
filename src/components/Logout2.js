import React from 'react'

const Logout2 = () => {
const handleClearAll = () => {
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

export default Logout2