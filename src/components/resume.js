import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
import Companies from './companies'
import Experience from './experience'
import Skills from './skills'

export class Resemy extends Component {
    render() {
        return (
            <div>
                <Grid className="resume-content">
                    <Cell col={4}>
                        <div className="left-column">
                            <img 
                            src={require("../assets/images/logo2.png")}
                            alt="avatar"
                            style={{height:'250px'}}
                            />
                        </div>

                        <h2>Yonja Mobile Solutions</h2>
                        <h4>Software Development and Consultancy</h4>
                        <hr/>
                        <p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </p>
                        <hr/>
                        <h5>Address</h5>
                        <p style={{fontWeight:'bold'}}>Muyenga, Kalungi Road</p>
                        <h5>Phone</h5>
                        <p style={{fontWeight:'bold'}}>(256) 705-905805</p>
                        <h5>Email</h5>
                        <p style={{fontWeight:'bold'}}>yonjaug@gmail.com</p>
                        <h5>Web</h5>
                        <p style={{fontWeight:'bold'}}>www.yonja.io</p>
                        <hr/>

                    </Cell>
                    <Cell className="right-column" col={5}>
                        <h3>Workers/Developers</h3>
                        <Experience/>

                        <hr/>
                        
                        <h3>Companies Worked With</h3>
                        <Companies
                        startYear={2019}
                        endYear = "Till now"
                        companyName = "Deers Mart"
                        companydescription = "Some quick example text to build on the card title and make up the bulk of
                        the cards content. Some quick example text to build on the card title and make up the bulk of
                        the card's content."
                        />
                        <Companies
                        startYear={2019}
                        endYear = "Till now"
                        companyName = "Bin it"
                        companydescription = "Some quick example text to build on the card title and make up the bulk of
                        the cards content.Some quick example text to build on the card title and make up the bulk of
                        the card's content."
                        />

                        <hr/>
                        <h3>Skills</h3>
                        <Skills
                            skill="Javascript"
                            progress={98}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={90}
                        />
                        <Skills
                            skill="Python"
                            progress={90}
                        />
                        <Skills
                            skill="Java"
                            progress={70}
                        />
                        <Skills
                            skill="React"
                            progress={95}
                        />
                        <Skills
                            skill="React-Native"
                            progress={95}
                        />
                        <Skills
                            skill="PHP"
                            progress={50}
                        />
                        <Skills
                            skill="Firebase"
                            progress={80}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={95}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resemy
