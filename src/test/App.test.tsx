import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { projects } from "../data/projects";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("routing", () => {
  it("renders the homepage with hero, quick facts, featured, about and projects", () => {
    renderAt("/");
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(screen.getByText("Full-stack")).toBeInTheDocument();
    expect(screen.getByText("Applied AI")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Featured work/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /physics to intelligent software/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Projects across software/i })).toBeInTheDocument();
  });

  it("renders the homepage with articles and contact sections", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: /Thoughts on software, AI/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Let's build something/i })).toBeInTheDocument();
  });

  it("renders the full homepage at /articles", () => {
    renderAt("/articles");
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Thoughts on software, AI/i })).toBeInTheDocument();
  });

  it("renders the playground page at /playground", () => {
    renderAt("/playground");
    expect(screen.getByRole("heading", { name: /Take a break and fix some bugs/i })).toBeInTheDocument();
  });

  it("renders the full homepage at /contact", () => {
    renderAt("/contact");
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Let's build something/i })).toBeInTheDocument();
  });

  it("navigates from the navbar to the articles page", async () => {
    renderAt("/");
    const user = userEvent.setup();
    await user.click(screen.getByRole("link", { name: "articles" }));
    expect(screen.getByRole("heading", { name: /Thoughts on software, AI/i })).toBeInTheDocument();
  });
});

describe("data fixes", () => {
  it("uses the real demo link for the portfolio project", () => {
    const portfolio = projects.find((project) => project.id === "portfolio");
    expect(portfolio?.demo).toBe("https://alya-portfolio-jade.vercel.app");
  });

  it("uses a valid image path for data infrastructure", () => {
    const dataInfrastructure = projects.find(
      (project) => project.id === "data-infrastructure",
    );
    expect(dataInfrastructure?.image).toBe("/project-images/analytics.svg");
  });

  it("shows a Live Demo badge on the TaskFlow featured card", () => {
    renderAt("/");
    expect(screen.getByRole("link", { name: /Live Demo/i })).toBeInTheDocument();
  });
});