import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

export class Companies extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop:'0px', fontFamily: 'Oxygen'}}>{this.props.companyName}</h4>
                        <p style={{fontFamily: 'Oxygen', fontSize:'16px'}}>{this.props.companydescription}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Companies
