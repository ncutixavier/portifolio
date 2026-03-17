import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders the hero section with animation classes", () => {
    const { container, getByAltText } = render(<Home />);

    const profileImage = getByAltText(/Xavier Ncuti/i);
    expect(profileImage.className).toMatch(/\banimate-float\b/);

    const animatedSection = container.querySelector(".animate-fade-up");
    expect(animatedSection).not.toBeNull();
  });
});
