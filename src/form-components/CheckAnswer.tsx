import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <FormGroup controlId="formAnswer">
                <FormLabel>Check Answer</FormLabel>
                <FormControl value={userAnswer} onChange={updateAnswer} />
            </FormGroup>
            <div>{userAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
