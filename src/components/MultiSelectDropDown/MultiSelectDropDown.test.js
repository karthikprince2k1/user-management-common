import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import MultiSelectDropDown from "./MultiSelectDropDown";

afterEach(cleanup);

describe("Multi Select Drop Down Test Suite", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<MultiSelectDropDown />);

    expect(asFragment(<MultiSelectDropDown />)).toMatchSnapshot();
  });

  it("should take a snapshot with options", () => {
    const options = ["option1", "option2", "option 3"];
    const { asFragment } = render(<MultiSelectDropDown options={options} />);

    expect(
      asFragment(<MultiSelectDropDown options={options} />)
    ).toMatchSnapshot();
  });

  it("should open the dropdown on clicking the dropdown menu and list the items", () => {
    const options = ["option1", "option2", "option 3"];
    const { getByTestId, getAllByTestId } = render(
      <MultiSelectDropDown options={options} />
    );

    fireEvent.click(getByTestId("dropdown-menu"));

    expect(getByTestId("arrow-down").classList.contains("rotate")).toBe(true);
    expect(
      getByTestId("dropdown-list").classList.contains("dropdown-list-visible")
    ).toBe(true);
    expect(getByTestId("dropdown-list").children.length === 3).toBe(true);

    const listItems = getAllByTestId("dropdown-list-item").map(
      (li) => li.textContent
    );
    listItems.forEach((li, i) => {
      expect(li).toBe(options[i]);
    });
  });

  it("should display the unique selected items from the list even though the same item gets clicked again", () => {
    const options = ["option1", "option2", "option 3", "option 4"];
    const { getByTestId, getAllByTestId } = render(
      <MultiSelectDropDown options={options} />
    );
    fireEvent.click(getByTestId("dropdown-menu"));
    const listItems = getAllByTestId("dropdown-list-item");

    fireEvent.click(listItems[0]);
    fireEvent.click(listItems[3]);
    fireEvent.click(listItems[3]);

    console.log(getByTestId("dropdown-menu").textContent);
    expect(getByTestId("dropdown-menu")).toHaveTextContent(
      options[0] + " " + options[3]
    );
  });

  it("should remove the item from the list on click of x button", () => {
    const options = ["option1", "option2", "option 3", "option 4"];
    const { getByTestId, getAllByTestId } = render(
      <MultiSelectDropDown options={options} />
    );
    fireEvent.click(getByTestId("dropdown-menu"));
    const listItems = getAllByTestId("dropdown-list-item");
    fireEvent.click(listItems[0]);
    fireEvent.click(listItems[3]);

    const item1 = getAllByTestId("remove-item")[0];
    fireEvent.click(item1);

    expect(getByTestId("dropdown-menu")).toHaveTextContent(options[3]);
  });
});
