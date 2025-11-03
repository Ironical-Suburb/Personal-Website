// Debug utility to check API connectivity
export const testAPI = async () => {
  const endpoints = ['/api/projects/', '/api/internships/', '/api/awards/', '/api/hobbies/']
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`http://localhost:8001${endpoint}`)
      const data = await response.json()
      console.log(`${endpoint}:`, data)
    } catch (error) {
      console.error(`${endpoint} error:`, error)
    }
  }
}

