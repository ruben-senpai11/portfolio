import "../css/tiny-bborder.css"

interface Props{
  children : any
}


export default function TinyBborder({children}:Props) {


  return (
    <>
      <div className={`flex justify-center relative `}>
        <div className="t-bborder">
          <div className="t-bborder-right">
            <div className="t-bborder-top">
              <div className="t-bborder-left  ">
                <div className="flex flex-col ">
                  <div className="">
                    {children}
                  </div>
                  <div className="t-bborder-bottom">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="env">
        </div>
      </div></>
  )
}