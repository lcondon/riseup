import React from "react";
import Button from '@material-ui/core/Button';

const Landing = () => (
    <div className="container center-align">
        <div className="row">
            <div className="col s12">
                <img className = "responsive-img" src="../../images/riseUp.png"></img>
                <h>riseUp</h>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero metus, posuere quis odio sed, molestie ornare urna. Curabitur pulvinar vulputate augue ac blandit. Nulla dictum eu neque ac consectetur. Sed ut nisl ut lacus tincidunt bibendum eu ut velit. Donec eu leo ligula. Nullam posuere lobortis laoreet. Morbi maximus ultricies lorem, quis maximus ligula tincidunt in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas condimentum, lacus nec egestas scelerisque, massa ligula ultrices mi, ac ullamcorper ante nisi at leo. Integer condimentum metus odio, vitae maximus nulla lobortis a. Quisque iaculis et nunc id pretium. Curabitur facilisis iaculis dapibus. Pellentesque dignissim velit ac lectus euismod, eu placerat est ultrices. Etiam ut mi feugiat, cursus.</p>
                <Button variant="contained" color="primary">
                    Login
                </Button>
                <Button variant="contained" color="secondary">
                    Sign Up
                </Button>
            </div>
        </div>
    </div>
)

export default Landing;
