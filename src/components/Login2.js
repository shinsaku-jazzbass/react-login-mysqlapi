import React, { useEffect, useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login2 = () => {
  const naviget = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  //const inpdat = {userid:'',username:'',password:''}
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  // if (e.key === 'Enter') {
  //     alert("enter key")
  //   }
  //   console.log(e.target.value)
  // }
  // const handleKeyDown = (event) => {
  //   // Enterキーが押されたかチェック
  //   if (event.key === 'Enter') {
  //     console.log('Enterキーが押されました！');
  //     // ここにEnterキーが押されたときの処理を書く（例：フォーム送信、検索実行など）
  //     console.log('入力値:', inputValue);
  //     // 入力値をクリアするなど、必要に応じて処理を追加
  //     // setInputValue('');
  //   }
  // };
  useEffect(() => {
    console.log('error start')
    console.log(error)
    console.log('error end')
  },[error])
  useEffect(()=>{
    //if(setInputValue){
      //console.count("副作用")
      //console.log(user)
    //}
  },[user])
    useEffect(()=>{
    //if(setInputValue){
      //console.count("副作用")
      //console.log(pass)
    //}
  },[pass])
  console.count("レンダリング")
    function loginSubmit(){
        if(user !== "" && pass != ""){
            //var url = "http://localhost:8888/devtest/reactjs/login.php";
            //var url = "http://133.18.242.109/chat_kww/login_reactapi.php";
            var url = "http://localhost:8888/api/login.php";
            var headers = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            var Data = {
                user: user,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                credentials: "include",
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                console.log(response);
                if(response[0].result === "Invalid username!" || response[0].result === "Invalid password!"){
                    setError(response[0].result);
                }
                else{
                    setMsg(response[0].result);
                    setTimeout(function(){
                        localStorage.setItem("login", true);
                        localStorage.setItem('user', user);
                        naviget("/dashboard2");
                    }, 5000);
                }
            }).catch((err) => {
                setError(err);
                console.log(err);
            })
        }
        else{
            setError("All field are required!")
        }
    }
  return (
    <div>
    <Container>
      <Row>
              <h2>Login2</h2>
              <p>
                  {msg}
              </p>
              <p>UserID:</p>
            <p>
              
            <input 
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            />
            </p>
            <p>Password:</p>
            <p>
              
            <input 
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            />
            </p>
            <p>
            <input 
              type="submit"
              defaultValue="Login"
              className="btn btn-dark btn-lg btn-block"
              onClick={loginSubmit}
            />
            </p>



      </Row>
    </Container>

    </div>
  )
}

export default Login2

