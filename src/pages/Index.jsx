import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to CodeLand</h1>
          <p className="text-xl mb-8">Your journey into the world of code starts here</p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About CodeLand</h2>
          <p className="text-lg max-w-2xl mx-auto">
            CodeLand is your go-to resource for learning and mastering coding skills. 
            Whether you're a beginner or an experienced developer, we have something for you.
          </p>
        </div>
      </section>

      {/* Placeholder Sections */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore our tutorials and guides.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Build</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Build projects with our hands-on exercises.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Grow</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Grow your skills with advanced topics and challenges.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto text-center">
          <nav>
            <ul className="flex justify-center space-x-6">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;