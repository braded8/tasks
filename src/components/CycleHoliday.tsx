import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎁" | "☘️" | "🎄" | "🥊" | "🦃";

    const Holiday_by_Alphabet: Record<Holiday, Holiday> = {
        "🥊": "🎁",
        "🎁": "🎄",
        "🎄": "☘️",
        "☘️": "🦃",
        "🦃": "🥊"
    };

    const Holiday_by_Year: Record<Holiday, Holiday> = {
        "☘️": "🦃",
        "🦃": "🎁",
        "🎁": "🥊",
        "🥊": "🎄",
        "🎄": "☘️"
    };

    const [holiday, setHoliday] = useState<Holiday>("☘️");

    function changeByAlphabet(): void {
        const newHoliday = Holiday_by_Alphabet[holiday];
        setHoliday(newHoliday);
    }

    function changeByYear(): void {
        const newHoliday = Holiday_by_Year[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
                <div>
                    <Button onClick={changeByAlphabet}>
                        Advance by Alphabet
                    </Button>
                </div>
                <div>
                    <Button onClick={changeByYear}>Advance by Year</Button>
                </div>
            </div>
        </div>
    );
}
