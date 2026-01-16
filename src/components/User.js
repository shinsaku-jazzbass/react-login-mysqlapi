import React, { useEffect } from 'react'

const User = () => {
useEffect(() => {
  fetch("http://localhost:8888/api/user.php", {
    credentials: "include"
  })
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
  return (
    <div>User</div>
  )
}

export default User