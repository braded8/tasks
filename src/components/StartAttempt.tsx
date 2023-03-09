import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz(): void {
        setProgress(true);
    }

    function decreaseAttempts(): void {
        setAttempts(attempts - 1);
    }

    function increaseAttempts(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        startQuiz();
                        decreaseAttempts();
                    }}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => setProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={increaseAttempts} disabled={progress}>
                    Mulligan
                </Button>
                to {attempts}
            </div>
        </div>
    );
}
