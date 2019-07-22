import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'


export class Home extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img className="avatar"
                        src={require("../assets/images/logo.png")}
                        alt="avatar"
                        />
                        <div className="banner">
                            <h1>Software Developing and Consultancy</h1>


                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | React-Native | Express | Python | PHP | NodeJS | Firebase</p>

                            <div className="social-links">

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true"/>
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home
