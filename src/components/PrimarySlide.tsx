import * as React from "react"
import { Slide } from "spectacle"

export const PrimarySlide: React.SFC = ({ children }) => (
  <Slide transition={["zoom"]} bgColor="primary">
    {children}
  </Slide>
)
