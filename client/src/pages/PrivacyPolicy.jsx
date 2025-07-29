import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Privacy Policy</h1>
      
      <div className="prose lg:prose-lg mx-auto">
        <p className="text-gray-700 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information that you provide directly to us, such as when you create an account, 
            use our services, or contact us. This may include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Name and contact information</li>
            <li>Billing and payment information</li>
            <li>API usage data and logs</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Monitor and analyze usage and trends</li>
            <li>Detect, investigate, and prevent security issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our service and 
            hold certain information. You can instruct your browser to refuse all cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            We may employ third-party companies and individuals to facilitate our service, provide 
            the service on our behalf, perform service-related services, or assist us in analyzing 
            how our service is used.
          </p>
          <p className="text-gray-700">
            These third parties have access to your Personal Information only to perform these tasks 
            on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-4">
            The security of your data is important to us, but remember that no method of transmission 
            over the Internet or method of electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at 
            <a href="mailto:privacy@ratelim.com" className="text-blue-600 hover:underline">
              privacy@ratelim.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
