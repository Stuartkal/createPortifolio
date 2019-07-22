import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

export class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}> 
                        <h2>Yonja Mobile Solutions</h2>

                        <img 
                        src={require("../assets/images/logo2.png")}
                        alt="avatar"
                        style={{height:'250px'}}
                        />
                        
                        <p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Us</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (256) 705-905805
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                   <i className="fa fa-twitter-square" aria-hidden="true"/>
                                   Yonja,Inc
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                  <i className="fa fa-facebook-square" aria-hidden="true"/> 
                                  Yonja,Inc
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                  <i className="fa fa-youtube-square" aria-hidden="true"/> 
                                  YonjaInc
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                  <i className="fa fa-envelope-square" aria-hidden="true"/> 
                                  yonjaug@gmail.com
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact
