import React,{Component} from 'react'
import {Container,Row,} from 'react-bootstrap'
import {TextField,Button, Typography} from '@material-ui/core'
import './Home.css'



export default class Home extends Component {
     
   // constructor(props){
      //  super(props)
      //  this.state = {
      //      email:"",
      //      pass:""
      //  }

       // this.onInputChange = this.onInputChange.bind(this)
      //  this.onsubmitInput = this.onsubmitInput.bind(this)
    //}
     
   // componentDidMount(){
       
     //   const container = document.querySelector('.container')
    //    const btn = document.querySelector('#login')
    //    const message = document.querySelector('#message')
    //   container.addEventListener('click', (e) => {
   //        message.textContent='Message sent'
   //    })
  //  }   

    // onInputChange(event){
      //  const {name, value} = event.target
     //   this.setState({[name]:value})
    //    console.log(name,value)
   // }
    
    render(){
             
        return(
            <div className="bgImage">
            <center>
            <Container className="container">
                <Typography
                variant="h4"
                gutterBottom 
                >
                    Login
                </Typography>
                <Typography className="message"
                variant="body1" 
                gutterBottom 
                id="messageText"
                >  
                </Typography>
                
                <Row>
                    <TextField className="email"
                     name="email" 
                    // value={this.state.email}
                    // onChange={this.onInputChange}
                     id="userName"
                     label="Username"
                    />
                </Row>
                <Row>
                    <TextField
                    id="password"
                    label="Password"
                    type="password"
                    name="pass"
                  //  value={this.state.pass}
                  //  onChange={this.onInputChange}
                    />
                </Row>
                <Row  className="btn">
                   <Button className="login"
                 //  onSubmit={this.onsubmitInput}
                   variant="contained"
                   id="login"
                   >
                    Login
                   </Button>
                </Row>
            </Container>
            
            </center>
            </div>
            
        )
    }
}