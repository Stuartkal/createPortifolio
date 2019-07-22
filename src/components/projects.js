import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardActions, CardMenu, CardTitle,CardText, IconButton, Button} from 'react-mdl'


export class Projects extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0}
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png') center/cover`}}>
                            React Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png') center/cover`}}>
                            React Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png') center/cover`}}>
                            React Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                    <CardTitle style={{color: '#fff', height:'175px', background: `url('https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png') center/cover`}}>
                    React-Native Project
                    </CardTitle>
                    <CardText>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHuB </Button>
                        <Button colored>Code Pen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                    <CardTitle style={{color: '#fff', height:'175px', background: `url('https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png') center/cover`}}>
                    React-Native Project
                    </CardTitle>
                    <CardText>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHuB </Button>
                        <Button colored>Code Pen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                    <CardTitle style={{color: '#fff', height:'175px', background: `url('https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png') center/cover`}}>
                        React-Native Project
                    </CardTitle>
                    <CardText>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHuB </Button>
                        <Button colored>Code Pen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://content.thriveglobal.com/wp-content/uploads/2017/10/node.jpg') center/cover`}}>
                        NodeJS Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://content.thriveglobal.com/wp-content/uploads/2017/10/node.jpg') center/cover`}}>
                        NodeJS Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://content.thriveglobal.com/wp-content/uploads/2017/10/node.jpg') center/cover`}}>
                            NodeJS Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 3 ){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://scripts.guru/wp-content/uploads/2018/09/php.jpg') center/cover`}}>
                        PHP Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://scripts.guru/wp-content/uploads/2018/09/php.jpg') center/cover`}}>
                        PHP Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://scripts.guru/wp-content/uploads/2018/09/php.jpg') center/cover`}}>
                            PHP Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 4){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://www.innomatics.in/wp-content/uploads/2019/05/Python-Programming-Wallpaper_1.jpg') center/cover`}}>
                        Python Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://www.innomatics.in/wp-content/uploads/2019/05/Python-Programming-Wallpaper_1.jpg') center/cover`}}>
                        Python Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('https://www.innomatics.in/wp-content/uploads/2019/05/Python-Programming-Wallpaper_1.jpg') center/cover`}}>
                            Python Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 5){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('http://is2.4chan.org/g/1562663625949.png') center/cover`}}>
                        Firebase Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('http://is2.4chan.org/g/1562663625949.png') center/cover`}}>
                        Firebase Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auot'}}>
                        <CardTitle style={{color: '#fff', height:'175px', background: `url('http://is2.4chan.org/g/1562663625949.png') center/cover`}}>
                            Firebase Project
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHuB </Button>
                            <Button colored>Code Pen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>
                        React
                    </Tab> 
                    <Tab>
                        React-Native
                    </Tab>
                    <Tab>
                        NodeJS
                    </Tab>
                    <Tab>
                        PHP
                    </Tab>
                    <Tab>
                        Python
                    </Tab>
                    <Tab>
                        Firebase
                    </Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                
            </div>
        )
    }
}

export default Projects
