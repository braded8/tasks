import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";

export const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "brown"
];

export function ChangeColor(): JSX.Element {
    const [currentColor, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <div>
                {colors.map((color: string) => (
                    <FormCheck
                        inline
                        key={color}
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        label={color}
                        style={{ backgroundColor: color }}
                        value={color}
                        checked={currentColor === color}
                    />
                ))}
            </div>
            <span>You have chosen </span>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: currentColor }}
            >
                {currentColor}
            </div>
        </div>
    );
}
