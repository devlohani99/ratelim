import { useState, useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiLoader, FiInfo } from 'react-icons/fi';

// Validation helpers
const validateProjectId = (id) => {
  if (!id) return 'Project ID is required';
  if (!/^[a-z0-9-]+$/.test(id)) return 'Only lowercase letters, numbers, and hyphens allowed';
  if (id.length < 3) return 'Must be at least 3 characters';
  if (id.length > 64) return 'Cannot exceed 64 characters';
  return '';
};

const validateLimit = (value) => {
  if (!value) return 'Limit is required';
  const num = Number(value);
  if (isNaN(num)) return 'Must be a valid number';
  if (num <= 0) return 'Must be greater than zero';
  if (num > 1000000) return 'Maximum limit is 1,000,000';
  return '';
};

export default function LimitPage() {
  // State
  const [formData, setFormData] = useState({
    projectId: 'project-gama-789',
    limit: '',
    window: 'hour'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: '',
    details: { limit: '', window: '' }
  });
  
  // Auto-hide success message after 5 seconds
  useEffect(() => {
    let timer;
    if (submitStatus.message) {
      timer = setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, message: '' }));
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitStatus.message]);



  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'limit' ? value.replace(/\D/g, '') : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      projectId: validateProjectId(formData.projectId),
      limit: validateLimit(formData.limit)
    };
    
    setErrors(newErrors);
    
    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      console.log('Submitting:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On success
      setSubmitStatus({
        success: true,
        message: 'Rate limit updated successfully!',
        details: {
          limit: formData.limit,
          window: formData.window
        }
      });
      
      // Reset form errors
      setErrors({});
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, message: '' }));
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        success: false,
        message: error.message || 'Failed to update rate limit. Please try again.',
        details: { limit: '', window: '' }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- JSX RENDERING ---
  // Format window display name
  const formatWindowName = (window) => ({
    minute: 'Minute',
    hour: 'Hour',
    day: 'Day'
  }[window] || window);

  return (
    <div className="bg-gray-50 font-sans leading-normal tracking-normal min-h-screen py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-200">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              API Rate Limit Configuration
            </h1>
            <p className="text-gray-600">
              Configure and manage rate limits to protect your API from abuse and ensure fair usage.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project ID Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="projectId" className="block text-sm font-medium text-gray-700">
                  Project Identifier
                </label>
                {errors.projectId && (
                  <span className="text-sm text-red-600 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.projectId}
                  </span>
                )}
              </div>
              <input
                id="projectId"
                name="projectId"
                type="text"
                className={`w-full border ${
                  errors.projectId ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base`}
                placeholder="e.g., project-gama-789"
                value={formData.projectId}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <p className="mt-2 text-sm text-gray-500">
                The unique identifier for your project or API key that this rate limit will be applied to.
              </p>
            </div>

            {/* Limit Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="limit" className="block text-sm font-medium text-gray-700">
                  Maximum Request Limit
                </label>
                {errors.limit && (
                  <span className="text-sm text-red-600 flex items-center">
                    <FiAlertCircle className="mr-1" /> {errors.limit}
                  </span>
                )}
              </div>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="limit"
                  id="limit"
                  className={`block w-full border ${
                    errors.limit ? 'border-red-300' : 'border-gray-300'
                  } rounded-md py-2 pl-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base`}
                  placeholder="e.g., 1000"
                  value={formData.limit}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">
                    requests
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Maximum number of requests allowed within the selected time window.
              </p>
            </div>

            {/* Time Window Selector */}
            <div>
              <label htmlFor="window" className="block text-sm font-medium text-gray-700 mb-2">
                Time Window
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'minute', label: 'Per Minute' },
                  { value: 'hour', label: 'Per Hour' },
                  { value: 'day', label: 'Per Day' }
                ].map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`window-${option.value}`}
                      name="window"
                      type="radio"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      checked={formData.window === option.value}
                      onChange={() => 
                        setFormData(prev => ({ ...prev, window: option.value }))
                      }
                      disabled={isSubmitting}
                    />
                    <label htmlFor={`window-${option.value}`} className="ml-2 block text-sm text-gray-700">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Time period for rate limiting. Example: 1000 requests per hour means 1000 requests allowed in any 60-minute window.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isSubmitting 
                    ? 'bg-blue-400' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                    Updating...
                  </>
                ) : (
                  'Update Rate Limit'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus.message && (
                <div className={`mt-4 p-3 rounded-md ${
                  submitStatus.success 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {submitStatus.success ? (
                        <FiCheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                      ) : (
                        <FiAlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        {submitStatus.message}
                      </p>
                      {submitStatus.success && submitStatus.details.limit && (
                        <p className="mt-1 text-sm">
                          Set to <span className="font-medium">{submitStatus.details.limit} requests</span> per <span className="font-medium">{formatWindowName(submitStatus.details.window).toLowerCase()}</span>.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            </form>

            {/* Additional Information Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                The Strategic Importance of Rate Limiting
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Service Stability and Reliability</h4>
                  <p className="text-sm text-gray-600">
                    Prevent resource exhaustion and ensure your API remains responsive for all users by limiting the number of requests from a single client. This helps maintain consistent performance and uptime.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Security Protection</h4>
                  <p className="text-sm text-gray-600">
                    Defend against DDoS attacks, brute force attempts, and API abuse by implementing strict rate limits. This adds a crucial layer of security to your application.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Fair Usage</h4>
                  <p className="text-sm text-gray-600">
                    Ensure fair usage of your API resources among all users. Prevent any single client from monopolizing your service at the expense of others.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Cost Control</h4>
                  <p className="text-sm text-gray-600">
                    Manage your infrastructure costs by preventing excessive API usage. Rate limiting helps you control operational expenses and maintain predictable billing.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                  <FiInfo className="mr-2" />
                  Need Help?
                </h4>
                <p className="text-sm text-blue-700">
                  If you're unsure about the best rate limits for your use case, please contact our support team for guidance on optimal rate limiting strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
