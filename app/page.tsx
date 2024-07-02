import Footer from "./navigation/footer";
import Header from "./navigation/header";

export default function Page() {


  return (
    <>
      <div className="p-">
        <div className="bborder">
        <div className="bborder-right">
          <div className="bborder-top">
            <div className="bborder-left  ">
              <div className="flex flex-col ">
                <div className="">
                <Header title="white_dev" />
                <div className="h-[82vh] ">
                </div>
                <Footer />
                </div>
                <div className="bborder-bottom">
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>

      </div>
    </>
  )
}