import Button from "@/components/UI/Button";
import { render, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("should render button", () => {
    const handleClick = jest.fn();
    const { container } = render(<Button onClick={handleClick}>Click</Button>);
    expect(container).toMatchSnapshot();
  });
  it("should click button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);
    const button = getByText("Click");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
