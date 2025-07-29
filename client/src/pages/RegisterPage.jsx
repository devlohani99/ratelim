import { useState } from 'react'
import useProjectStore from '../store/useProjectStore'

export default function RegisterPage(){
  const [projectName,setProjectName]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState('')
  const [success,setSuccess]=useState(false)
  const { setProject }=useProjectStore()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    try{
      const res=await fetch(`${import.meta.env.VITE_API_URL}/api/projects`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({projectName}),
      })
      const data=await res.json()
      if(!res.ok)throw new Error(data.error||'Failed to register')
      setProject({projectId:data.projectId,apiKey:data.apiKey})
      setSuccess(true)
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }

  return(
    <div className="w-full">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 tracking-tight">Register Project</h2>
            <p className="text-gray-600 mt-2">Create a new project to start using the API. You'll receive a unique Project ID and API Key.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="my-podcast-app"
                    value={projectName}
                    onChange={e => setProjectName(e.target.value)}
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">Use lowercase letters, numbers, and hyphens only</p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2.5 rounded-md shadow hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Registering...
                    </span>
                  ) : 'Register Project'}
                </button>
              </form>
              
              {error && (
                <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Error:</span>
                  </div>
                  <p className="mt-1 text-sm">{error}</p>
                </div>
              )}
              
              {success && (
                <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-lg font-medium text-green-800">Project Registered Successfully!</h3>
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-gray-700 bg-white p-3 rounded border border-green-100">
                    <p className="font-medium">Save these credentials securely:</p>
                    <div className="bg-gray-50 p-2 rounded font-mono text-sm overflow-x-auto">
                      <div className="mb-2">
                        <span className="text-gray-500">Project ID: </span>
                        <span className="font-semibold">{useProjectStore.getState().projectId}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">API Key: </span>
                        <span className="font-semibold">{useProjectStore.getState().apiKey}</span>
                      </div>
                    </div>
                    <p className="text-xs text-red-600 mt-2">
                      ⚠️ For security reasons, we cannot show this information again. Please save it now.
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 className="font-medium text-blue-900 text-lg mb-3">What happens next?</h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: '🔑',
                    title: 'Get Your Credentials',
                    description: 'Receive your Project ID and API Key instantly after registration.'
                  },
                  {
                    icon: '⚡',
                    title: 'Integrate with Ease',
                    description: 'Use our simple API or SDKs to add rate limiting to your application.'
                  },
                  {
                    icon: '📊',
                    title: 'Monitor Usage',
                    description: 'Track your API usage and manage rate limits through our dashboard.'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-2xl mr-3 mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded border border-blue-200">
                <h4 className="font-medium text-sm text-blue-800 mb-2">Need help getting started?</h4>
                <p className="text-xs text-gray-600 mb-3">Check out our <a href="/guide" className="text-blue-600 hover:underline">getting started guide</a> for detailed instructions and examples.</p>
                <div className="text-xs text-gray-500 flex items-center">
                  <svg className="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required • Free tier available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
