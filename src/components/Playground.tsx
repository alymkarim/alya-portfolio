import BugGame from "./BugGame";

function Playground() {
  return (
    <section className="section" id="playground">
      <div className="container">
        <p className="section-label">Playground</p>

        <h2 className="section-title">
          Take a break and fix some bugs.
        </h2>

        <p className="section-intro">
          A small interactive experiment built with React and TypeScript.
          Squash as many bugs as possible before the timer runs out.
        </p>

        <BugGame />
      </div>
    </section>
  );
}

export default Playground;