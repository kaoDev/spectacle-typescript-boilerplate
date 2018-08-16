import * as React from "react"
import { Heading, Text } from "spectacle"
import { PrimarySlide } from "../components/PrimarySlide"

export default (
  <PrimarySlide>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Spectacle Boilerplate
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" fit bold>
      open the presentation/index.js file to get started
    </Text>
  </PrimarySlide>
)
