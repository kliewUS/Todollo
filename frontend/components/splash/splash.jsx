import React from 'react';
import LoginBar from '../loginbar/loginbar';
import { Link } from 'react-router-dom';

class Splash extends React.Component{

    render(){
        return(
            <div>
                <LoginBar />

                <section id="splash">
                    <div className="container">
                        <div className="splash-text">
                            <h1>Todollo allows everyone to work together much easily and achieve more tasks with less time.</h1>
                            <p>Todollo organizes your projects to be flexible and readable for everyone. You can create boards, cards, and lists that allows you to manage your projects easily.</p>
                        </div>
                        <div className="splash-img">
                            <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/38267aef7dab0104ab5d0939e21bc3fe5b59c51a/splash-img.png" />
                        </div>
                    </div>
                </section>

                <section id="teamwork-section">
                    <div className="teamwork-container">

                        <div>
                            <div className="teamwork-text">
                                <h2>Work with any team you like</h2>
                                <p>Whether it's for a job, a hobby, or a family event. Todollo helps keep your team organized.</p>
                                <Link className="splash-login-btn" to="/signup">Start working →</Link>
                            </div>
                        </div>

                        <div className="teamwork-img">
                            <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/36896678a2d9eceddfe026434e8f9ea0df615fcd/8d86a350-28d8-4c1d-9a84-f5cc84d9ac33-resized.png" />
                        </div>
                    </div>
                </section>

                <section id="info-section">
                    <div className="info-container">
                        <div className="info-img">
                            <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/24dcf48c459a09ac70a3466f2e64a0bf4654ed2a/6919a1ab-3749-48eb-ab55-23c3b9ded246.png" />
                        </div>
                        <div>
                            <div className="info-text">
                                <h2>Information at a peek</h2>
                                <p>See into the details by adding comments and labels directly to Todollo Cards. Work together on project from start to finish.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="startup-section">
                    <div className="startup-container">
                        <div className="startup-text">
                            <h2>Start Planning Now</h2>
                            <p>Sign up and be a part of the millions of teams who are using Todollo to get more done.</p>
                            <Link className="splash-login-btn" to="/signup">Get Started - It's Free!</Link>
                        </div>
                    </div>
                </section>


                <footer id="splash-footer">
                    <ul id="footer-menu">
                        <li>
                            <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/24dcf48c459a09ac70a3466f2e64a0bf4654ed2a/icons8-github-24.png" />
                            <a href="https://github.com/kliewUS">Github</a>
                        </li>
                        <li>
                            <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/24dcf48c459a09ac70a3466f2e64a0bf4654ed2a/icons8-linkedin-24.png" />
                            <a href="https://www.linkedin.com/in/khai-yuan-liew-397600143/">Linkedin</a>
                        </li>
                        <li>
                            <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/24dcf48c459a09ac70a3466f2e64a0bf4654ed2a/icons8-angellist-24.png" />
                            <a href="https://angel.co/u/khai-yuan-liew">AngelList</a>
                        </li>
                        <li>
                            <img src="https://gist.githubusercontent.com/kliewUS/049d8cfda828ab0fe5a9caaf7270c6aa/raw/8cadfb044098e47a00582e2ba0003f04ab5fac6f/icons8-person-24.png" />
                            <a href="https://kliewus.github.io/portfolio/">Portfolio</a>
                        </li>                        
                    </ul>
                </footer>
            </div>
        );
    }
}

export default Splash;


