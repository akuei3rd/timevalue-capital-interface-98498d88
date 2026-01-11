import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container-institutional text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="hero" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
