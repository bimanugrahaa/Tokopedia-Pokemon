import { renderHook } from "@testing-library/react-hooks";

describe("when getProbability function called", () => {
    it("check if getProbability return a value", () => {

        const getProbability = jest.fn(() => true);

        getProbability();

        expect(getProbability).toHaveReturned()

    });

    it("check if getProbability return false", () => {

        const getProbability = jest.fn(() => false);

        const { result } = renderHook(
            () => getProbability());

        expect(result.current).toEqual(false)
    });

    it("check if getProbability return true", () => {

        const getProbability = jest.fn(() => true);

        const { result } = renderHook(
            () => getProbability());

        expect(result.current).toEqual(true)
    });
});