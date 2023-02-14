import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import truffles from "./images/truffles.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="App-header" style={{ background: "#5878BF" }}>
                UD CISC275 with React Hooks and TypeScript, Brad Daugherty
            </h1>
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
        </div>
    );
}

export default App;
