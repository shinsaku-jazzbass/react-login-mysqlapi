import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axiosライブラリをインストールしてください (npm install axios)

function UserProfile() {
    const [user, setUser] = useState(null);

    //     axios.get('http://192.168.1.25:8888/api/sessionstart.php')
    //   .then(response => {
    //     console.log(response)
    //     //setData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('データ取得エラー:', error);
    //   });

    useEffect(() => {
        // PHPバックエンドのAPIエンドポイントを叩く
        axios.get('http://localhost:8888/api/user.php', {withCredentials: true})
            .then(response => {
                console.log("ok")
                console.log(response.data)
                if (response.data.loggedIn) {
                    setUser({ id: response.data.userId });
                    console.log("ok2")
                } else {
                    console.log(response)
                    setUser(null);
                    // ログインページにリダイレクトするなどの処理
                }
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
                setUser(null);
            });
    }, []);

    if (!user) {
        return <div>ログインしていません</div>;
    }

    return <div>ようこそ、ユーザーID: {user.id} さん</div>;
}

export default UserProfile;