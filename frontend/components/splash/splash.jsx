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
                            <h1>Todollo lets you work together easily and achieve more.</h1>
                            <p>Todollo organizes your projects in a flexible and rewarding way. Our boards, lists, cards can help you achieve more in your projects.</p>
                        </div>
                        <div className="splash-img">
                            <img src={window.splash_img} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Splash;


