import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsWanted, setAttemptsWanted] = useState<string>("");
    const requested = parseInt(attemptsWanted) || 0;

    function updateAttemptsWanted(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsWanted(event.target.value);
    }

    function addAttempts(): void {
        setAttemptsLeft(attemptsLeft + requested);
    }

    function useAttempts(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    return (
        <div>
            <div>
                <FormGroup controlId="formAttempts">
                    <FormLabel>Give Attempts</FormLabel>
                    <FormControl
                        type="number"
                        value={attemptsWanted}
                        onChange={updateAttemptsWanted}
                    ></FormControl>
                </FormGroup>
            </div>
            <div>
                Number of Attempts Left: <span>{attemptsLeft}</span>
            </div>
            <div>
                <Button onClick={addAttempts}>Gain</Button>
                <Button onClick={useAttempts} disabled={attemptsLeft === 0}>
                    Use
                </Button>
            </div>
        </div>
    );
}
