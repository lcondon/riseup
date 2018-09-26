import React from 'react';
import Button from '@material-ui/core/Button';

const logStyles = {
    width: "100%",
    margin: "5px",
    backgroundColor: "#B21A2A"
}

const signStyles = {
    width: "100%",
    margin: "5px",
    backgroundColor: "#44C2CE"
}

const Landing = () => (
    <div className="container center-align">
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <img className="responsive-img" src="../../images/riseUp.png"></img>
            </div>
            <div className="col s12">
                <h1>riseUP</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero metus, posuere quis odio sed, molestie ornare urna. Curabitur pulvinar vulputate augue ac blandit. Nulla dictum eu neque ac consectetur. Sed ut nisl ut lacus tincidunt bibendum eu ut velit. Donec eu leo ligula. Nullam posuere lobortis laoreet. Morbi maximus ultricies lorem, quis maximus ligula tincidunt in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas condimentum, lacus nec egestas scelerisque, massa ligula ultrices mi, ac ullamcorper ante nisi at leo. Integer condimentum metus odio, vitae maximus nulla lobortis a. Quisque iaculis et nunc id pretium. Curabitur facilisis iaculis dapibus. Pellentesque dignissim velit ac lectus euismod, eu placerat est ultrices. Etiam ut mi feugiat, cursus.</p>
            </div>
            <div className="col s12 m6">
                <Button id="landingLogBtn" style={logStyles} variant="contained" color="primary">
                    Login
                </Button>
            </div>
            <div className="col s12 m6">
                <Button id="landingSignBtn" style={signStyles} variant="contained" color="secondary">
                    Sign Up
                </Button>
            </div>
        </div>

    </div>
  </div>
);

export default Landing;
