import React, { useState } from "react";
import {
    Button,
    FormControl,
    FormSelect,
    FormLabel,
    FormGroup
} from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);

    return (
        <div>
            <FormGroup controlId="userOptions">
                <FormLabel>What is your answer?</FormLabel>
                <FormSelect value={userChoice}></FormSelect>
            </FormGroup>
            <h3>Multiple Choice Question</h3>
        </div>
    );
}
