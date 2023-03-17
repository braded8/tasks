import React, { useState } from "react";
import { FormSelect, FormLabel, FormGroup } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoice(event.target.value);
    }

    return (
        <div>
            <FormGroup controlId="userOptions">
                <FormLabel>Select an Option</FormLabel>
                <FormSelect value={userChoice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </FormSelect>
            </FormGroup>
            <div>{userChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
