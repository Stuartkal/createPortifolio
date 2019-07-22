import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

export class experience extends Component {
    render() {
        return (
            <div>
                <Grid className="workers-content">
                    <Cell col={2}>
                        <img
                        src={require("../assets/images/eman.png")}
                        alt="avatar"
                        />
                    </Cell>
                    <Cell col={8}>
                        <h4>Eman</h4>
                        <p>Full Stack Developer</p>
                    </Cell>
                </Grid>
                <Grid className="workers-content">
                    <Cell col={2}>
                        <img
                        src={require("../assets/images/kengo.png")}
                        alt="avatar"
                        />
                    </Cell>
                    <Cell col={8}>
                        <h4>Kengo</h4>
                        <p>Backend Engineer</p>
                    </Cell>
                </Grid>
                <Grid className="workers-content">
                    <Cell col={2}>
                        <img
                        src={require("../assets/images/atem.png")}
                        alt="avatar"
                        />
                    </Cell>
                    <Cell col={8}>
                        <h4>Atem</h4>
                        <p>Frontend Engineer</p>
                    </Cell>
                </Grid>
                <Grid className="workers-content">
                    <Cell col={2}>
                        <img
                        src={require("../assets/images/stuart.png")}
                        alt="avatar"
                        />
                    </Cell>
                    <Cell col={8}>
                        <h4>Stuart</h4>
                        <p>Frontend Engineer</p>
                    </Cell>
                </Grid>
                <Grid className="workers-content">
                    <Cell col={2}>
                        <img
                        src={require("../assets/images/vibem.png")}
                        alt="avatar"
                        />
                    </Cell>
                    <Cell col={8}>
                        <h4>Vibem</h4>
                        <p>Backend Engineer</p>
                    </Cell>
                </Grid>
                <Grid className="workers-content">
                    <Cell col={2}>
                        <img
                        src={require("../assets/images/jada.png")}
                        alt="avatar"
                        />
                    </Cell>
                    <Cell col={8}>
                        <h4>Jada</h4>
                        <p>Backend Engineer</p>
                    </Cell>
                </Grid>
                <Grid className="workers-content">
                    <Cell col={2}>
                        <img
                        src={require("../assets/images/mathew.png")}
                        alt="avatar"
                        />
                    </Cell>
                    <Cell col={8}>
                        <h4>Mathew</h4>
                        <p>Backend Engineer</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default experience
