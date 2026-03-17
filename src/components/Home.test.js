import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders the hero section with animation classes", () => {
    const { container, getByAltText } = render(<Home />);

    const profileImage = getByAltText(/Xavier Ncuti - Full Stack Developer/i);
    expect(profileImage.className).toMatch(/\bmotion-safe:animate-float\b/);

    const animatedSection = container.querySelector(".motion-safe\\:animate-fade-up");
    expect(animatedSection).not.toBeNull();
  });
});
