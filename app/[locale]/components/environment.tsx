"use client"

import { useState } from "react"
import Checkbox from "./checkbox"

interface Props {
  language: string
  theme: string
}


export default function Environment() {



  return (
    <>
      <div className="theme">
        <span>
          <Checkbox label="Light" isChecked={true} />
        </span>
        <span>
          <Checkbox label="Dark" isChecked={false} />
        </span>
      </div>
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