import React from "react"
import { Feedback } from "./App"
import { render, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

describe("feedback app", () => {
  afterEach(cleanup)

  it('should show the thanks screen when "Good" is clicked', () => {
    // The question screen should be visible at first
    // Click the "Good" button
    // Now the thanks screen should be visible
  })

  it('should show the form screen when "Bad" is clicked', () => {
    // The question screen should be visible at first
    // Click the "Bad" button
    // Now the form screen should be visible
  })
})