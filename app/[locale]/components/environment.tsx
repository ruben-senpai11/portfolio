"use client"

import { useState } from "react"
import Checkbox from "./checkbox"
import Theme from "./theme"

interface Props {
  language: string
  theme: string
}


export default function Environment() {



  return (
    <>
      <Theme />
      <div className="language">
        <span>
          <Checkbox label="En" isChecked={true} />
        </span>
        <span>
          <Checkbox label="Fr" isChecked={false} />
        </span>

      </div>
    </>
  )
}