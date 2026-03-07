import { useState } from "react";
import "./index.css";
import heroBook from "./assets/IMAGE.png";
import darkLightBook from "./assets/IMAGE (1).png";
import atomicBook from "./assets/IMAGE (2).png";
import authorPhoto from "./assets/IMAGE (3).png";
import learnPhoto from "./assets/IMAGE (4).png";
import avatar1 from "./assets/IMAGE (5).png";
import avatar2 from "./assets/IMAGE (6).png";
import avatar3 from "./assets/IMAGE (7).png";
import article1 from "./assets/IMAGE (10).png";
import article2 from "./assets/IMAGE (9).png";
import article3 from "./assets/IMAGE (8).png";
import ctaImage from "./assets/IMAGE (11).png";
import logo1 from "./assets/IMAGE (12).png";
import logo2 from "./assets/IMAGE (13).png";
import logo3 from "./assets/IMAGE (14).png";
import logo4 from "./assets/IMAGE (15).png";

const books = [
  {
    title: "Atomic One's",
    image: atomicBook,
    price: "$13.84 USD",
    description:
      "As the book contains theoretical content as well as solved questions.",
  },
  {
    title: "The Dark Light",
    image: darkLightBook,
    price: "$86.11 USD",
    description:
      "As the book contains theoretical content as well as solved questions.",
  },
];

const trustLogos = [logo1, logo2, logo3, logo4];

const learnPoints = [
  "Use HDFS, & Map Reduce for storing & analyzing data at scale.",
  "Consume streaming data using Spark Streaming, Flink, and Storm.",
  "Choose an appropriate data storage technology for your application.",
  "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
];

const chapters = [
  {
    title: "Chapter- 01 Get Started Intro",
    pages: "Pages : 85 pages",
    length: "Length : 1 Hour 15 mins",
  },
  {
    title: "Chapter- 02 The Roman Culture",
    pages: "Pages : 72 pages",
    length: "Length : 1 Hour 05 mins",
  },
  {
    title: "Chapter- 03 The Greek Iskandiy",
    pages: "Pages : 92 pages",
    length: "Length : 1 Hour 20 mins",
  },
  {
    title: "Chapter- 04 The End Persia",
    pages: "Pages : 88 pages",
    length: "Length : 1 Hour 10 mins",
  },
];

const testimonials = [
  {
    name: "James Williams",
    role: "Founder",
    avatar: avatar1,
    text: "Great book quality and useful lessons. Everything is clear and practical.",
  },
  {
    name: "Chris Adams",
    role: "Designer",
    avatar: avatar3,
    text: "The best structure I have seen in a writing guide. Helpful chapter by chapter.",
  },
  {
    name: "Angelina Flora",
    role: "Reader",
    avatar: avatar2,
    text: "Loved the tone and clarity. The examples helped me improve immediately.",
  },
];

const articles = [
  {
    image: article1,
    title: "Significant reading has more info number",
    text: "Override the digital divide with additional clickthroughs from DevOps.",
  },
  {
    image: article2,
    title: "Many variations of pass majority have suffered",
    text: "Capitalize on low-hanging fruit to identify value-added beta activity.",
  },
  {
    image: article3,
    title: "Words which don't look even slightly believable",
    text: "Podcasting operational change management inside of workflows.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Pages", "Contact Us"];

  return (
    <div className="site">
      <header className="hero">
        <div className="container">
          <div className="topbar">
            <div className="brand-row">
              <strong className="brand">Pages</strong>
              <div className="socials">
                <a href="#" aria-label="facebook">
                  f
                </a>
                <a href="#" aria-label="twitter">
                  t
                </a>
                <a href="#" aria-label="linkedin">
                  in
                </a>
              </div>
            </div>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
            <nav
              id="primary-navigation"
              className={`nav ${menuOpen ? "nav-open" : ""}`}
            >
              {navItems.map((item) => (
                <a key={item} href="#" onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </nav>
            <button className="btn primary">Order Today</button>
          </div>

          <div className="hero-grid">
            <div>
              <p className="eyebrow">Welcome To Pages!!!</p>
              <h1>Your Books From The Best Writer.</h1>
              <p className="hero-text">
                We believe that reading books are essential to a healthy
                culture. They&apos;re where authors can connect with readers.
              </p>
              <div className="hero-actions">
                <button className="btn primary">Order Today</button>
                <a href="#">Read Free Demo</a>
              </div>
              <div className="hero-stats">
                <div>
                  <span className="dot" />
                  <div>
                    <strong>Pages:</strong>
                    <p>250 pages</p>
                  </div>
                </div>
                <div>
                  <span className="dot" />
                  <div>
                    <strong>Length:</strong>
                    <p>10 Hours</p>
                  </div>
                </div>
                <div>
                  <span className="dot" />
                  <div>
                    <strong>Ratings:</strong>
                    <p>4.5/5 (305 ratings)</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="hero-book"
              src={heroBook}
              alt="The Dark Light cover"
            />
          </div>
        </div>
      </header>

      <section className="section books-section">
        <div className="container">
          <h2 className="section-title">The Author&apos;s Book</h2>
          <div className="books-grid">
            {books.map((book) => (
              <article key={book.title} className="book-card">
                <img src={book.image} alt={book.title} />
                <div>
                  <h3>{book.title}</h3>
                  <p className="price">{book.price}</p>
                  <p className="muted">{book.description}</p>
                  <p className="meta">Printed Book</p>
                  <button className="btn line">Order Now</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="author-frame">
            <img src={authorPhoto} alt="Author portrait" />
          </div>
          <article>
            <h2 className="section-title left">About The Author</h2>
            <p className="muted">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true value
              generator.
            </p>
            <div className="about-stats">
              <div>
                <strong>02</strong>
                <p>Books Published</p>
              </div>
              <div>
                <strong>4.5</strong>
                <p>User Reviews</p>
              </div>
              <div>
                <strong>04</strong>
                <p>Best Seller Awards</p>
              </div>
            </div>
            <div className="author-card">
              <div className="qr" />
              <div>
                <h4>John Abraham, Ph.D</h4>
                <p>Mail: johnabraham@gmail.com</p>
                <p>Phone: (+2) 123 545 9000</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container">
          <h2 className="section-title">Trusted By The Best</h2>
          <div className="logo-grid">
            {trustLogos.map((logo, i) => (
              <div key={logo} className="logo-item">
                <img src={logo} alt={`Partner ${i + 1}`} />
                <h4>
                  {["Amazen Corp", "Megan Books", "Los Books", "Urban Lib"][i]}
                </h4>
                <p>Lorem ipsum dolor amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-grid">
          <div>
            <h2>Get Book Copy Today!</h2>
            <p>
              We believe that bookstores are essential to a healthy culture.
              They&apos;re where authors can connect with readers.
            </p>
            <button className="btn line light">Order Today</button>
          </div>
          <img src={ctaImage} alt="Open book and coffee cup" />
        </div>
      </section>

      <section className="section learn-section">
        <div className="container">
          <h2 className="section-title">What Will You Learn?</h2>
          <div className="learn-grid">
            <div className="point-grid">
              {learnPoints.map((point, i) => (
                <article key={point} className="point-card">
                  <span>{`0${i + 1}`}</span>
                  <p>{point}</p>
                </article>
              ))}
            </div>
            <div className="learn-photo">
              <img src={learnPhoto} alt="Person reading a book" />
            </div>
          </div>
        </div>
      </section>

      <section className="section chapters-section">
        <div className="container">
          <h2 className="section-title">Enhance Knowledge & Vision</h2>
          <div className="chapter-grid">
            {chapters.map((chapter) => (
              <article key={chapter.title} className="chapter-card">
                <h3>{chapter.title}</h3>
                <p className="muted">
                  Web development with React and APIs. Build modern interfaces
                  with reusable components and clear architecture.
                </p>
                <div className="chapter-meta">
                  <span>{chapter.pages}</span>
                  <span>{chapter.length}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="chapter-action">
            <button className="btn primary">Start a 15-Days Free Trial</button>
            <p>
              Short description about each chapter have your contact details.
            </p>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container testimonial-grid">
          <article className="testimonial-copy">
            <h2 className="section-title left">Words From Our Readers</h2>
            <p className="muted">
              We have made this in all the ways we can to provide your reading
              joy and support. Discover how readers rate this collection.
            </p>
            <div className="stars">★★★★★</div>
            <small>(4.8/5 from 3,000+ reviews)</small>
          </article>
          <div className="testimonial-cards">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="user">
                  <img src={item.avatar} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>★★★★★</p>
                  </div>
                </div>
                <strong>{item.role}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section articles-section">
        <div className="container">
          <h2 className="section-title">Articles & Resources</h2>
          <div className="article-grid">
            {articles.map((article) => (
              <article key={article.title} className="article-card">
                <img src={article.image} alt={article.title} />
                <div className="article-body">
                  <h3>{article.title}</h3>
                  <p className="muted">{article.text}</p>
                  <div>
                    <a href="#">Readmore</a>
                    <span>Author - 23.05.2022</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section subscribe-wrap">
        <div className="container">
          <div className="subscribe-box">
            <h2>Get The Best Updates</h2>
            <p>
              Subscribe with your mail id to know the current update in book
              edition at your fingertip with in a minute
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email ID..."
                aria-label="Email"
              />
              <button className="btn dark" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <article>
            <h3>Pages</h3>
            <div className="socials">
              <a href="#" aria-label="facebook">
                f
              </a>
              <a href="#" aria-label="twitter">
                t
              </a>
              <a href="#" aria-label="linkedin">
                in
              </a>
            </div>
          </article>
          <article>
            <h4>Explore</h4>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Articles</a>
            <a href="#">Our Store</a>
          </article>
          <article>
            <h4>Utility Pages</h4>
            <a href="#">Style Guide</a>
            <a href="#">404 Not Found</a>
            <a href="#">Password Protected</a>
            <a href="#">Licenses</a>
          </article>
          <article>
            <h4>Keep In Touch</h4>
            <p>Address : 24A Kingston St, Los Vegas NC 28202, USA.</p>
            <p>Mail : support@pages.com</p>
            <p>Phone : (+22) 123 - 4567 - 900</p>
          </article>
        </div>
      </footer>
    </div>
  );
}

export default App;
