import Link from "next/link";
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container featured">
        <h2 className="sectionTitle">Featured Articles</h2>

        <div className="articleGrid">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/article/${article.slug}`}
            >
              <div className="articleCard">
                <span className="badge">Trending</span>
                <h3>{article.title}</h3>
                <p>
                  Discover practical strategies and real
                  opportunities to increase your income.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter container">
        <div className="newsletterBox">
          <h2>Join Our Newsletter</h2>

          <p>
            Get weekly side hustle ideas and online income tips.
          </p>

          <div className="newsletterForm">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footerContent">
          <div>
            <h3>SideHustleHub</h3>
            <p>
              Professional side hustle and passive income platform.
            </p>
          </div>

          <div>
            <h4>Pages</h4>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
