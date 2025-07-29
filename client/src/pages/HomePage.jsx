import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-900 tracking-tight mb-6">
          Secure and Scalable API Rate Limiting
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Protect your APIs from abuse, ensure fair usage, and maintain optimal performance with Ratelim's powerful and easy-to-implement rate limiting solution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/register" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-200"
          >
            Get Started Free
          </Link>
          <Link 
            to="/guide" 
            className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-semibold py-3 px-8 rounded-md transition duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: '🔑',
            title: 'Easy Integration',
            description: 'Get started in minutes with our simple REST API and comprehensive documentation.'
          },
          {
            icon: '⚡',
            title: 'High Performance',
            description: 'Built for scale with distributed rate limiting that works across your entire infrastructure.'
          },
          {
            icon: '📊',
            title: 'Real-time Analytics',
            description: 'Monitor your API usage and track rate limits in real-time with detailed metrics.'
          },
          {
            icon: '🛡️',
            title: 'Security First',
            description: 'Protect your APIs from abuse and DDoS attacks with intelligent rate limiting.'
          },
          {
            icon: '⚙️',
            title: 'Flexible Configuration',
            description: 'Customize rate limits based on IP, user, API key, or any custom identifier.'
          },
          {
            icon: '🌐',
            title: 'Global Coverage',
            description: 'Low-latency rate limiting with edge locations worldwide for optimal performance.'
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Getting Started Section */}
      <div className="bg-blue-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Get Started in Minutes</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>
{`# Install the client library
npm install ratelim-client

# Initialize with your API key
import { Ratelim } from 'ratelim-client';
const ratelim = new Ratelim({
  apiKey: 'your-api-key',
  projectId: 'your-project-id'
});

# Make API calls with rate limiting
try {
  const response = await ratelim.get('/api/endpoint');
  console.log(response.data);
} catch (error) {
  if (error.status === 429) {
    console.log('Rate limit exceeded. Please try again later.');
  }
}`}
              </code>
            </pre>
          </div>
          <div className="text-center">
            <Link 
              to="/guide" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View Full Documentation
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Trusted by Developers Worldwide</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Ratelim saved us countless hours of development time. Their API is intuitive and the documentation is excellent.",
              author: "Sarah K., Senior Backend Engineer",
              company: "TechCorp"
            },
            {
              quote: "We needed a reliable rate limiting solution that could scale with our growing user base. Ratelim delivered exactly what we needed.",
              author: "Michael T., CTO",
              company: "StartUp Inc."
            },
            {
              quote: "The real-time analytics and easy integration made Ratelim the perfect choice for our API infrastructure.",
              author: "Jennifer L., Lead Developer",
              company: "API Solutions"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-2xl mb-4">"</div>
              <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of developers who trust Ratelim for their API rate limiting needs.
        </p>
        <Link 
          to="/register" 
          className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition duration-200"
        >
          Create Free Account
        </Link>
        <p className="mt-4 text-sm opacity-80">No credit card required. Free tier available.</p>
      </div>
    </div>
  );
}