import axios from 'axios'

// Use environment variable for production, local proxy for development
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects/', {
      params: { _: Date.now() } // Prevent caching
    })
    console.log('Projects API response:', response.data)
    // Handle paginated response from Django REST Framework
    const data = response.data.results || response.data || []
    console.log('Projects data:', data, 'Type:', typeof data, 'IsArray:', Array.isArray(data))
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Error fetching projects:', error)
    if (error.response) {
      console.error('Response status:', error.response.status)
      console.error('Response data:', error.response.data)
    } else if (error.request) {
      console.error('No response received - is Django server running on port 8001?', error.request)
    } else {
      console.error('Error setting up request:', error.message)
    }
    return []
  }
}

export const fetchInternships = async () => {
  try {
    const response = await api.get('/internships/', {
      params: { _: Date.now() } // Prevent caching
    })
    console.log('Internships API response:', response.data)
    // Handle paginated response from Django REST Framework
    const data = response.data.results || response.data || []
    console.log('Internships data:', data, 'Type:', typeof data, 'IsArray:', Array.isArray(data))
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Error fetching internships:', error)
    if (error.response) {
      console.error('Response status:', error.response.status)
      console.error('Response data:', error.response.data)
    } else if (error.request) {
      console.error('No response received - is Django server running on port 8001?', error.request)
    } else {
      console.error('Error setting up request:', error.message)
    }
    return []
  }
}

export const fetchAwards = async () => {
  try {
    const response = await api.get('/awards/', {
      params: { _: Date.now() } // Prevent caching
    })
    console.log('Awards API response:', response.data)
    // Handle paginated response from Django REST Framework
    const data = response.data.results || response.data || []
    console.log('Awards data:', data, 'Type:', typeof data, 'IsArray:', Array.isArray(data))
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Error fetching awards:', error)
    if (error.response) {
      console.error('Response status:', error.response.status)
      console.error('Response data:', error.response.data)
    } else if (error.request) {
      console.error('No response received - is Django server running on port 8001?', error.request)
    } else {
      console.error('Error setting up request:', error.message)
    }
    return []
  }
}

export const fetchHobbies = async () => {
  try {
    const response = await api.get('/hobbies/', {
      params: { _: Date.now() } // Prevent caching
    })
    console.log('Hobbies API response:', response.data)
    // Handle paginated response from Django REST Framework
    const data = response.data.results || response.data || []
    console.log('Hobbies data:', data, 'Type:', typeof data, 'IsArray:', Array.isArray(data))
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Error fetching hobbies:', error)
    if (error.response) {
      console.error('Response status:', error.response.status)
      console.error('Response data:', error.response.data)
    } else if (error.request) {
      console.error('No response received - is Django server running on port 8001?', error.request)
    } else {
      console.error('Error setting up request:', error.message)
    }
    return []
  }
}

