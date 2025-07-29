import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Terms of Service</h1>
      
      <div className="prose lg:prose-lg mx-auto">
        <p className="text-gray-700 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using the Ratelim service ("Service"), you agree to be bound by these Terms of Service 
            ("Terms"). If you disagree with any part of the terms, you may not access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            Ratelim provides API rate limiting services that help developers manage and control the rate of requests 
            to their applications and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="text-gray-700 mb-2">When you create an account with us, you must provide accurate and complete information.</p>
          <p className="text-gray-700">You are responsible for maintaining the security of your account and for all activities that occur under the account.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
          <p className="text-gray-700 mb-2">You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Violate any laws or regulations</li>
            <li>Infringe on the intellectual property rights of others</li>
            <li>Transmit any viruses or malicious code</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Attempt to gain unauthorized access to any systems or networks</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Payments and Billing</h2>
          <p className="text-gray-700 mb-2">
            Certain features of the Service may require payment. You agree to pay all fees associated 
            with your use of the Service according to the pricing and terms presented to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
          <p className="text-gray-700 mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability, 
            for any reason whatsoever, including without limitation if you breach these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            In no event shall Ratelim, nor its directors, employees, partners, agents, suppliers, or affiliates, 
            be liable for any indirect, incidental, special, consequential or punitive damages, including 
            without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            We will provide notice of any changes by posting the new Terms on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us at 
            <a href="mailto:legal@ratelim.com" className="text-blue-600 hover:underline">
              legal@ratelim.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
