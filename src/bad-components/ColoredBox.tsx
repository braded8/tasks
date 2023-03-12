import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];

interface colorIndexProps {
    colorIndex: number;
    setColorIndex: (colorIndex: number) => void;
}

function ChangeColor({
    colorIndex,
    setColorIndex
}: colorIndexProps): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: colorIndexProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColorIndex={() =>
                        setColorIndex((1 + colorIndex) % COLORS.length)
                    }
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setColorIndex={() => setColorIndex(colorIndex)}
                    colorIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
