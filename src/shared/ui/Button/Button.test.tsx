import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ThemeButton } from "./Button";


describe("Button", () => {
    test("Test render with text", () => {
        render(<Button>Text</Button>)
        expect(screen.getByText('Text')).toBeInTheDocument();
    });

    test("Test render with class", () => {
        render(<Button theme={ThemeButton.CLEAR}>Text</Button>)
        expect(screen.getByText('Text')).toHaveClass("clear");
        screen.debug()
    });
});
