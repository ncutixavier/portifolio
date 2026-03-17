import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders the hero section with animation classes", () => {
    const { container, getByRole } = render(<Home />);

    const profileImage = getByRole("img", { name: /Xavier Ncuti/i });
    expect(profileImage.className).toMatch(/\bmotion-safe:animate-float\b/);

    const animatedSection = container.querySelector(".motion-safe\\:animate-fade-up");
    expect(animatedSection).not.toBeNull();
  });
});
