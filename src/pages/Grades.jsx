import "../data/mockSchedule"
import { useState } from "react"
import { mockGrades, mockStudent } from "../data/mockSchedule"

export default function Grades() {
  const [grades, setGrades] = useState(mockGrades)
}