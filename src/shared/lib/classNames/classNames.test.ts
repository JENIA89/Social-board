import { classNames } from "./classNames";

describe("classNames", () => {
    test("only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("all params", () => {
        const expected = "someClass class1 class2";
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
    });

    test("all params + mods", () => {
        const expected = "someClass class1 class2 hovered";
        expect(classNames("someClass", { hovered: true }, ["class1", "class2"])).toBe(expected);
    });
});
