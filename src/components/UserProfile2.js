import axios from 'axios';
import React from 'react'

const UserProfile2 = () => {

const api = axios.create({
  baseURL: 'https://api.your-domain.com',
  withCredentials: true // 全リクエストでCookieを送信
});

  return (
    <div>UserProfile2</div>
  )
}

export default UserProfile2