import React from 'react'
import fs from "fs"
import path from 'path'

function ServerComponentTwo() {
  const filePath = path.join(process.cwd(), "src", "components", "serverComponentTwo.tsx")
  fs.readFileSync(filePath, 'utf-8')
  return (
    <div>
      <h1>Server Component Two</h1>
    </div>
  )
}

export default ServerComponentTwo
