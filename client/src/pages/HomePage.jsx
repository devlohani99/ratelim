import { Link } from 'react-router-dom';
import AdSenseAd from '../components/AdSenseAd';

const HomePage = () => {
  // Features data
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Low-latency rate limiting that won\'t slow down your API.'
    },
    {
      icon: '🛡️',
      title: 'Secure',
      description: 'Protect your API from abuse and DDoS attacks.'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Monitor your API usage with detailed analytics.'
    },
    {
      icon: '⚙️',
      title: 'Easy Setup',
      description: 'Get started in minutes with our simple API.'
    },
    {
      icon: '🔌',
      title: 'Integrations',
      description: 'Works with all major frameworks and platforms.'
    },
    {
      icon: '📈',
      title: 'Scalable',
      description: 'Grows with your application\'s needs.'
    }
  ];

  // Steps data
  const steps = [
    {
      step: '1',
      title: 'Sign Up & Get API Key',
      description: 'Create an account and get your unique API key in seconds.',
      icon: '🔑',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '2',
      title: 'Integrate with Your API',
      description: 'Add our middleware to your API with just a few lines of code.',
      icon: '🔌',
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: '3',
      title: 'Monitor & Manage',
      description: 'Track usage, set limits, and get alerts through our dashboard.',
      icon: '📊',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              API Rate Limiting <span className="text-blue-600">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Protect your API from abuse, ensure fair usage, and maintain optimal performance with our developer-friendly rate limiting solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/register" 
                className="px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-1"
              >
                Get Started Free
              </Link>
              <Link 
                to="/guide" 
                className="px-8 py-3.5 text-base font-medium text-blue-700 bg-white rounded-lg border border-blue-200 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                View Documentation
              </Link>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="mt-16 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-lg font-medium text-gray-900">API Rate Limiting Dashboard</h3>
                  <p className="mt-2 text-sm text-gray-500">Real-time monitoring and control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features for API Protection
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Everything you need to secure and monitor your API endpoints
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* In-Content Ad */}
          <div className="my-12 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 text-center mb-2">Advertisement</p>
            <AdSenseAd 
              slot="4063126175"  // Your ad slot ID
              format="auto"
              responsive={true}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Get started in minutes with our simple integration process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200`}></div>
                <div className="relative bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-xl mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
            Ready to secure your API?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers who trust our rate limiting solution to protect their APIs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="px-8 py-3.5 text-base font-semibold text-blue-700 bg-white hover:bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 transition-colors duration-200"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3.5 text-base font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
