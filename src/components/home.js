import './ho.css';

function Home()
{
    return(
        <div>
            <nav>
                <ul>
                    <li className="lg"><h3>Train</h3></li>
                    <li className="left"><a href="#">Trains</a></li>
                    <li className="left"><a href="#">Offers</a></li>
                    <li><a href="#">Customer Service</a></li>
                    <li><a href="http://localhost:3003/?">Login</a></li>
                    <li><a href="http://localhost:3000/?" >SignUp</a></li>
                </ul>
            </nav>
            <div className="box">
                <div className="inbox">
                    <div className="temp"></div>
                    <forms>

                <h1>Book Ticket</h1>
                <br></br>
                <h2>From the destination</h2>
                <input placeholder="Start Location"></input>
                <br></br>
                <h2>To the destination</h2>
                <input placeholder="End Location"></input>
                <br></br>
                <h2>Journey</h2>
                <select>
                    <option>One-way-Journey</option>
                    <option>two-way-Journey</option>
                </select>
                <br></br>
                <h2>Date of Travel</h2>
                <input className="dat" placeholder="Select Date" type="Date"></input>
                <br></br>
                <h2>Ticket types</h2>
                <select>
                    <option>High-Class</option>
                    <option>Eco-Class</option>
                    <option>General-Class</option>
                </select>
                <br></br>
                <h2>Seat Type</h2>
                <select>
                    <option>Recliner</option>
                    <option>Semi-Recliner</option>
                    <option>Sleeper</option>
                </select>
                <br></br>
                <h2>Passengers</h2>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>

                </select>
                <br></br><br></br><br></br>
                <button className="but"><h3>
                    <a href="https://www.irctc.co.in/nget/train-search" target="blank" Style="text-decoration: none">Search Train</a>
                    </h3>
                    </button>
                    </forms>

                </div>
                <div className="Temp">
                </div>
            </div>
            
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='fc'>
                            <h4>Company</h4>
                             <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our services</a></li>
                                <li><a href="#">Privacy policy</a></li>
                             </ul>
                        </div>
                        <div className='fc'>
                            <h4>Get help</h4>
                             <ul>
                                <li><a href="#">IRS</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Train status</a></li>
                                <li><a href="#">Payment options</a></li>
                             </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='fc'>
                            <h1 className='mart'>Train</h1>
                            <div className='log'>
                                <h4>Instagram</h4>
                                <h4>Google</h4>         
                                <h4>Twitter</h4>    
                                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    ) 
}
export default Home;