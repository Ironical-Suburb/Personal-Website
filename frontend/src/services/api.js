// Static data service - no API calls needed
import { staticProjects, staticInternships, staticAwards, staticHobbies } from '../data/staticData'

// Simulate async behavior for consistency with existing code
export const fetchProjects = async () => {
  return Promise.resolve(staticProjects)
}

export const fetchInternships = async () => {
  return Promise.resolve(staticInternships)
}

export const fetchAwards = async () => {
  return Promise.resolve(staticAwards)
}

export const fetchHobbies = async () => {
  return Promise.resolve(staticHobbies)
}

