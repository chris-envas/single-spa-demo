import React, { useState, useEffect } from "react"

function useToolsModule () {
  const [toolsModule, setToolsModule] = useState()
  useEffect(() => {
    System.import("@yd/tools").then(setToolsModule)
  }, [])
  return toolsModule
}

function About (props) {
  const toolsModule = useToolsModule()
  if (toolsModule) {
    console.log(toolsModule.publicApiFunction(props))
  }
  return (
    <div>
      this is about com
    </div>
  )
}

export default About