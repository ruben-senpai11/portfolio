import { Link } from "@/i18n/routing";
import TinyBborder from "./tiny-bborder";

interface Props {
  link: string,
  label: string
}


export default function CTA({ link, label }: Props) {

  return (
    <>
      <div className="w-max m-auto">
        <TinyBborder>
          <div className="flex w-100">
            <Link href={link} target="_blank" className="flex justify-center btn cta w-100 gap-4" >
              <span className="cta-text flex gap-4">
                {label}
                <svg width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg>
              </span>
              <span className="cta-transition">
                <span className="inverted-color"></span>
                <span className="current-color"></span>
              </span>
            </Link>
          </div>
        </TinyBborder>
      </div>
    </>
  )
}