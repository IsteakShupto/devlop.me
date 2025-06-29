import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WorkProcessCard from "../components/WorkProcessCard";

describe("WorkProcessCard", () => {
  it("renders title and description", () => {
    render(
      <WorkProcessCard
        id={1}
        title="Planning"
        desc="Plan everything carefully"
      />
    );

    expect(screen.getByText("Planning")).toBeInTheDocument();
    expect(screen.getByText("Plan everything carefully")).toBeInTheDocument();
    expect(screen.getByText("card-1")).toBeVisible();
  });
});
