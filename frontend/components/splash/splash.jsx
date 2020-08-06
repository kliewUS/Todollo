import React from 'react';
import LoginBar from '../loginbar/loginbar';

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
            </div>
        );
    }
}

export default Splash;


