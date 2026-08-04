import { ArrowUpRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "JWT Authentication Without the Confusion",
    description:
      "A practical guide to authentication, authorization, JWTs, access tokens and protected routes in modern backend applications.",
    topic: "Backend",
    link: "https://medium.com/@alyamkarim97/jwt-authentication-without-the-confusion-ce22d80f3cc1?sharedUserId=alyamkarim97",
  },
  {
    title: "I Thought AI Was Just About Building Better Models",
    description:
      "How learning software engineering changed my perspective on AI, showing that production systems matter just as much as machine learning models.",
    topic: "AI Engineering",
    link: "https://medium.com/@alyamkarim97/i-thought-ai-was-just-about-building-better-models-i-couldnt-have-been-more-wrong-690ecac992d2?sharedUserId=alyamkarim97",
  },
  {
    title: "From Lab Reports to Log Files",
    description:
      "A personal story about moving from applied physics into software engineering, and how scientific thinking still shapes the way I design, debug and build software.",
    topic: "Career",
    link: "", // add when published
  },
];

function Articles() {
  return (
    <section className="section writing-section" id="articles">
      <div className="writing-blob" />

      <div className="container">
        <div className="writing-heading">
          <div>
            <p className="section-label">Articles</p>
            <h2 className="section-title">Thoughts on software, AI and lifelong learning.</h2>
          </div>

          <BookOpen size={42} strokeWidth={1.5} />
        </div>

        <div className="writing-grid">
          {articles.map((article, index) => (
            <article className="writing-card" key={article.title}>
              <div>
                <span>{article.topic}</span>
                <span>0{index + 1}</span>
              </div>

              <h3>{article.title}</h3>
              <p>{article.description}</p>

            {article.link ? (
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-link"
              >
                Read article
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-label={`${article.title} coming soon`}
              >
                Coming soon
                <ArrowUpRight size={18} />
              </button>
            )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
