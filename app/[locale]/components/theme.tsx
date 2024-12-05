import Checkbox from "./checkbox";


export default function Theme() {

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
    </>
  )
}