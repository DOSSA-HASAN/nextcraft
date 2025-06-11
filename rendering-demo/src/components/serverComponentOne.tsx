import React from 'react'
import fs from "fs"
import path from 'path'
import ClientComponentOne from './client-component-one'

function ServerComponentOne() {
  const filePath = path.join(process.cwd(), "src", "components", "serverComponentOne.tsx")
  fs.readFileSync(filePath, "utf-8")
  return (
    <div>
      <h1>Server Component One</h1>
    </div>
  )
}

export default ServerComponentOne
