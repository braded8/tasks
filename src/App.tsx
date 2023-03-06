import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import truffles from "./images/truffles.jpeg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ background: "#5878BF" }}>
                UD CISC275 with React Hooks and TypeScript, Brad Daugherty
            </header>
<<<<<<< HEAD
            <h1 style={{ background: "#184E54" }}>What am I doing?</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <div style={{ border: "3px solid green", padding: "3px" }}>
                <ol>
                    <li>Finish Task 3</li>
                    <li>Complete Physics Notes</li>
                    <li>Sleep</li>
                    <li>How do I fix these margins</li>
                </ol>
            </div>
            <div className="truffles">
                <img
                    src={truffles}
                    width="250"
                    height="250"
                    alt="A picture of my axolotl, Truffles."
                />
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "50px",
                                    backgroundColor: "red",
                                    border: "1px solid black"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "50px",
                                    backgroundColor: "red",
                                    border: "1px solid black"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
