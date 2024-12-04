"use client"

import { useState } from "react"

interface Props {
  label: string
  isChecked: boolean
}

export default function Checkbox({ label, isChecked }: Props) {

  const [isClicked, setIsClicked] = useState(isChecked)

  const click = () => {
    setIsClicked(!isClicked)
  }


  return (
    <>
      <span onClick={() => click()}>
        <span className={"checkbox " + (isClicked ? "active" : "")} ></span>
        <span>{label}</span>
      </span>
    </>
  )
}