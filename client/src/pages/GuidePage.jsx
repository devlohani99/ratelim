import React from 'react';
import { Link } from 'react-router-dom';

const GuidePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            API Rate Limiting Guide
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to effectively implement and manage API rate limiting for your applications
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg mb-12">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">Table of Contents</h2>
          </div>
          <div className="px-6 py-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li><a href="#what-is-rate-limiting" className="text-blue-600 hover:underline">What is API Rate Limiting?</a></li>
              <li><a href="#why-important" className="text-blue-600 hover:underline">Why is Rate Limiting Important?</a></li>
              <li><a href="#common-algorithms" className="text-blue-600 hover:underline">Common Rate Limiting Algorithms</a></li>
              <li><a href="#best-practices" className="text-blue-600 hover:underline">Best Practices</a></li>
              <li><a href="#getting-started" className="text-blue-600 hover:underline">Getting Started with Ratelim</a></li>
            </ol>
          </div>
        </div>

        <div className="space-y-12">
          <section id="what-is-rate-limiting" className="bg-white shadow overflow-hidden rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What is API Rate Limiting?</h2>
            <p className="text-gray-700 mb-4">
              API rate limiting is a technique used to control the rate of requests a client can make to an API. 
              It helps manage traffic and prevent overuse or abuse of the API by limiting the number of requests 
              a user can make within a specific time frame.
            </p>
            <div className="bg-gray-50 p-4 rounded-md my-4">
              <p className="font-medium text-gray-800">Example:</p>
              <p className="text-gray-700">1000 requests per hour per API key</p>
            </div>
          </section>

          <section id="why-important" className="bg-white shadow overflow-hidden rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Why is Rate Limiting Important?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-medium">Prevent Abuse:</span> Protects your API from being overwhelmed by too many requests</li>
              <li><span className="font-medium">Ensure Fair Usage:</span> Distributes API resources fairly among all users</li>
              <li><span className="font-medium">Enhance Security:</span> Protects against DDoS attacks and brute force attempts</li>
              <li><span className="font-medium">Control Costs:</span> Helps manage infrastructure costs by limiting excessive usage</li>
              <li><span className="font-medium">Improve Performance:</span> Maintains optimal API performance for all users</li>
            </ul>
          </section>

          <section id="common-algorithms" className="bg-white shadow overflow-hidden rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Common Rate Limiting Algorithms</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Token Bucket</h3>
                <p className="text-gray-700 mb-2">Maintains a bucket of tokens where each request consumes a token. Tokens are refilled at a fixed rate.</p>
                <p className="text-sm text-gray-500">Ideal for: Smooth rate limiting with burst handling</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Leaky Bucket</h3>
                <p className="text-gray-700 mb-2">Requests are processed at a fixed rate, with excess requests queued or dropped.</p>
                <p className="text-sm text-gray-500">Ideal for: Smoothing out traffic spikes</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Fixed Window</h3>
                <p className="text-gray-700 mb-2">Limits the number of requests in fixed time windows (e.g., 1000 requests per hour).</p>
                <p className="text-sm text-gray-500">Ideal for: Simple implementation with clear time boundaries</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Sliding Window</h3>
                <p className="text-gray-700 mb-2">Similar to fixed window but with rolling time windows, providing more accurate rate limiting.</p>
                <p className="text-sm text-gray-500">Ideal for: More precise rate limiting needs</p>
              </div>
            </div>
          </section>

          <section id="best-practices" className="bg-white shadow overflow-hidden rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Best Practices for Implementing Rate Limiting</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Set Appropriate Limits</h3>
                  <p className="mt-1 text-gray-700">
                    Choose limits that balance between preventing abuse and not frustrating legitimate users. 
                    Consider your API's capacity and typical usage patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Use Rate Limit Headers</h3>
                  <p className="mt-1 text-gray-700">
                    Include headers like <code className="bg-gray-100 px-1 rounded">X-RateLimit-Limit</code>, 
                    <code className="bg-gray-100 px-1 rounded">X-RateLimit-Remaining</code>, and 
                    <code className="bg-gray-100 px-1 rounded">Retry-After</code> to help clients understand their rate limits.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Implement Graceful Degradation</h3>
                  <p className="mt-1 text-gray-700">
                    When rate limits are exceeded, return a <code className="bg-gray-100 px-1 rounded">429 Too Many Requests</code> 
                    status code with clear error messages and information about when to retry.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Monitor and Adjust</h3>
                  <p className="mt-1 text-gray-700">
                    Regularly review your rate limiting policies and adjust them based on usage patterns and user feedback.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="getting-started" className="bg-white shadow overflow-hidden rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Getting Started with Ratelim</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Step 1: Register Your Project</h3>
                <p className="text-gray-700 mb-4">
                  Get your API key by registering your project in our system. This key will be used to authenticate your requests.
                </p>
                <Link 
                  to="/register" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register Project
                </Link>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Step 2: Set Your Rate Limits</h3>
                <p className="text-gray-700 mb-4">
                  Define your rate limiting rules based on your application's needs. You can set different limits for different endpoints or user types.
                </p>
                <Link 
                  to="/limits" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Set Rate Limits
                </Link>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Step 3: Monitor Your Usage</h3>
                <p className="text-gray-700 mb-4">
                  Track your API usage and monitor how close you are to your rate limits. Our dashboard provides real-time insights into your API traffic.
                </p>
                <Link 
                  to="/usage" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  View Usage Stats
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Need Help?</h3>
          <p className="text-blue-700 mb-4">
            Our support team is here to help you implement and optimize your rate limiting strategy.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
