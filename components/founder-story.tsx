export default function FounderStory() {
  return (
    <section className="py-20 bg-background" data-testid="founder-story">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative max-w-md mx-auto">
              <img
                src="/assets/J.P.-Zhang-1_1763346048430.webp"
                alt="J.P. Zhang, founder of Shenzhen SEO Conference"
                className="w-full h-auto rounded-lg shadow-2xl"
                data-testid="img-jp-zhang"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left" data-testid="text-founder-title">
              Why I Started the Shenzhen SEO Conference
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p data-testid="text-founder-intro">
                Hi, I'm <a href="https://www.linkedin.com/in/jiangpengzhang/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">J.P. Zhang</a>, host of the Shenzhen SEO Conference. After 15+ years in SEO, I've seen what's possible when East and West learn from each other and collaborate.
              </p>

              <p data-testid="text-founder-vision">
                This conference bridges that gap - a place where global SEO professionals meet, share ideas, and build partnerships, while exploring China's fast-moving digital ecosystem.
              </p>

              <p className="font-semibold text-foreground" data-testid="text-founder-closing">
                My goal is simple: build a truly global SEO community. See you in Shenzhen!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
