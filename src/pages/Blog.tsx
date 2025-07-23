import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "The Art of Storytelling in Academic Applications",
      excerpt: "Discover how to transform your academic journey into a compelling narrative that resonates with admissions committees.",
      author: "Dr. Sarah Mitchell",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Writing Tips",
      featured: true
    },
    {
      title: "Common Mistakes in Statement of Purpose Writing",
      excerpt: "Learn about the most frequent errors that can weaken your SOP and how to avoid them for a stronger application.",
      author: "James Chen",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Application Tips",
      featured: false
    },
    {
      title: "Letters of Recommendation: What Really Matters",
      excerpt: "Insights from former admissions officers on what makes a letter of recommendation truly impactful.",
      author: "Prof. Maria Rodriguez",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "LOR Guidelines",
      featured: true
    },
    {
      title: "International Students: Navigating Cultural Differences",
      excerpt: "How to present your unique international perspective while addressing cultural nuances in applications.",
      author: "Dr. Priya Sharma",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "International Applicants",
      featured: false
    },
    {
      title: "Research Experience: Making It Count in Your Application",
      excerpt: "Strategies for effectively showcasing your research background and its relevance to your future goals.",
      author: "Dr. Michael Thompson",
      date: "November 20, 2024",
      readTime: "9 min read",
      category: "Research",
      featured: false
    },
    {
      title: "MBA Applications: Standing Out in a Competitive Field",
      excerpt: "Unique approaches to differentiate your MBA application from thousands of other qualified candidates.",
      author: "Sarah Park",
      date: "November 15, 2024",
      readTime: "12 min read",
      category: "MBA",
      featured: true
    }
  ];

  const categories = ["All", "Writing Tips", "Application Tips", "LOR Guidelines", "International Applicants", "Research", "MBA"];

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
                Insights & Articles
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Expert advice, application tips, and insights to help you navigate your academic journey with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <Badge className="bg-accent text-accent-foreground mb-4">Featured Article</Badge>
                <h2 className="font-heading text-3xl font-bold text-primary">Latest Insights</h2>
              </div>
              
              <Card className="card-premium max-w-4xl mx-auto">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-heading text-primary mb-4">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {featuredPost.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <button className="btn-accent inline-flex items-center group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading text-primary line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <button className="w-full btn-accent group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest application tips and success strategies.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-accent px-6 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;