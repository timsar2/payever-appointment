export interface Appointment {
  id: number
  dateTime: string
  firstName: string
  lastName: string,
  age: number | null,
  email: string,
  hasVisited?: boolean
}