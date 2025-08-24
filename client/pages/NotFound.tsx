import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-gradient mb-4">404</div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-foreground/70 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            asChild
            className="bg-gradient-to-r from-portfolio-navy-500 to-portfolio-purple-600 hover:from-portfolio-navy-600 hover:to-portfolio-purple-700 text-white border-0 w-full"
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 w-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
