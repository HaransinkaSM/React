import './lo.css';
function Login(){
    return(
       
        <div className="outbox">
            <div className="boxin">
        <div className="box">
            <div>
                <form>
                    <h1>Login</h1>
                    <input className="First" type="text" placeholder="UserName"></input><br></br><br></br>
                    <input className="pass" type="password" placeholder="Password"></input><br></br><br></br><br></br>
                    <button className="but"><h3 className="regest"><a href="http://localhost:3005/" Style="text-decoration: none">Log In</a></h3></button>
                </form>
                <br></br>
                <h5><b1>Log In with different method </b1>
                </h5>
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"></img>
                <img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"></img>
                <img className="img2" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"></img>
            </div>
        </div>
        <div className="bot">
            </div>
            </div>
        </div>
   
)
}
export default Login;