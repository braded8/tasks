import React, { useState } from "react";
import { FormCheck, FormGroup, FormLabel, FormControl } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEdit, setInEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEdit(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <div>
                <FormCheck
                    type="switch"
                    id="in-edit-check"
                    label="Edit Mode"
                    checked={inEdit}
                    onChange={updateMode}
                ></FormCheck>
            </div>
            <div>
                {inEdit ? (
                    <FormCheck
                        type="checkbox"
                        id="is-a-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStatus}
                    ></FormCheck>
                ) : null}
            </div>
            <div>
                {inEdit ? (
                    <FormGroup controlId="formName">
                        {" "}
                        <FormLabel>Edit Name</FormLabel>
                        <FormControl
                            value={name}
                            onChange={updateName}
                        ></FormControl>
                    </FormGroup>
                ) : null}
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            </div>
        </div>
    );
}
