import BBorder from "../bborder";
import LoadingGif from "../components/loadingGif";


const Page = () => {
  const pdfUrl = '/Ruben Resume 2025.pdf'; 

  const htmlContent = `<div class="MuiContainer-root MuiContainer-maxWidthLg scale-container mui-1qsxih2"
  style=" width: 100%; height:100%; display: flex; justify-content: center; align-items: center; margin: 20px;">
  <div class="contenedor-externo">
    <div class="scaled-page"
      style="display: flex; flex-direction: column; width: 210mm; ">
      <div id="lolo" class="a4-page">

        <div id="paddingGeneral" style="padding: 0px;">
          <div style="display: flex; align-content: flex-start;">
            <aside
              style="font-size: 12px; line-height: 1.25; color: rgb(228, 146, 7); background-color: rgb(40, 60, 74); width: 50%; max-width: 256px; border: 2px solid #e49207; border-right: 0;">
              <div style="width: 100%;">
                <div>
                  <div class="pdfasidecolor"
                    style="width: 100%; background: #283c4a; display: flex; justify-content: center; align-items: center;margin-top:20px;">
                    <div style="display: flex;justify-content: center;align-items: center;">
                      <div
                        style="display:block;width: max-content; margin-top: 10px; border-radius: 50%;overflow: hidden; display: flex;">
                        <div style="max-width: 215px; height: 215px;"><img class="imageprofile"
                            style="width: 100%; height: 100%;"
                            src="https://ruben-shopify.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-pic-yellow.04a6a6ca.png&w=640&q=75"
                            alt="Profile"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pdfasidecolor"
                style="font-size: 12px; line-height: 1.25; color: rgb(228, 146, 7); background-color: rgb(40, 60, 74); position: relative; padding: 20px;">
                <div style="text-transform: uppercase; font-weight: bolder;">
                  <div style="margin-bottom: 30px;">
                    <p
                      style="color:#ffffff;text-transform: capitalize;letter-spacing: 3px;margin-bottom: 0;font-family:Montserrat;font-size:18px;">
                      Ruben</p>
                    <p
                      style="color: #e49207;text-transform: capitalize;letter-spacing: 3px; margin-top: 0;margin-bottom: 0;font-family:Montserrat;font-size:20px;">
                      HONFOVOU</p><span
                      style="height: 1px;background: #ffffff;width: 80px;display:inline-block; margin-top: 16px; margin-bottom: 4px;"></span>
                    <p
                      style="margin-top: 0;color: initial;font-family:Montserrat;font-size:14px;font-weight: normal;color: #ffffff;text-transform: initial;letter-spacing: 3px;">
                      Développeur Shopify </p>
                  </div>
                  <div id="icon" name="praga" style="margin-bottom: 10px;display:block;"><span
                      style="height: 1px;background: #ffffff;width: 80px;display: inline-block;"></span>
                    <p
                      style="color: #e49207; text-transform: capitalize;letter-spacing: 3px; margin-bottom: 8px;font-family:Montserrat;font-size:16px;margin-top: 0;">
                      CONTACT</p>
                    <ul style="list-style:none;padding-left: 0;margin-bottom: 0px;margin-top: 0px;grid-gap: 5px">
                      <li
                        style="display:flex; align-items: center!important; margin: 0!important; font-weight: initial;text-transform: initial;color: #e49207;align-items: start;gap: 10px;margin-bottom: 8px;">
                        <div style="padding-top: 4px;color: #e49207;"><svg width="15px" height="15px"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path fill="#e49207"
                              d="M774.614-133.001q-124.076-9-236.691-61.077-112.615-52.077-203.384-142.846-90.384-89.769-141.961-202.691-51.577-112.923-60.577-236.999-2-23 11.5-37.692 13.5-14.693 36.5-14.693h142.46q18.154 0 31.731 10.885 13.577 10.885 19.73 28.423L398.845-675q2.385 11.385-1.5 24.154-3.884 12.769-10.654 18.769l-101.384 99.923q21.308 38.846 46.962 73.769 25.654 34.924 58.038 68.078 30.924 29.923 65.001 55.654 34.077 25.731 71.077 45.038l110.769-104.538q7.385-7.769 13.731-9.192t15.731.577l120.075 27.615q18.154 5 29.731 18.461 11.577 13.462 11.577 32.001v143.69q0 23-15.193 36.5-15.192 13.5-38.192 11.5Z">
                            </path>
                          </svg></div>
                        <p
                          style="font-family:Montserrat;color: #ffffff;flex-shrink: 1;min-width: 0;word-wrap: break-word;">
                          +229 0196404757</p>
                      </li>
                      <li
                        style="display:flex; align-items: center!important; margin: 0!important; font-weight: initial;text-transform: initial;color: #e49207;align-items: start;gap: 10px;margin-bottom: 8px;">
                        <div style="padding-top: 4px;color: #e49207;"><svg width="15px" height="15px"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path fill="#e49207"
                              d="M174.309-182.001q-37.033 0-63.67-26.638-26.638-26.637-26.638-63.67v-415.382q0-37.033 26.638-63.67 26.637-26.638 63.67-26.638h611.382q38.033 0 64.17 26.638 26.138 26.637 26.138 63.67v415.382q0 37.033-26.138 63.67-26.137 26.638-64.17 26.638H174.309ZM480-426.694l318-182.615L791.846-700 480-517 168.154-700 162-609.309l318 182.615Z">
                            </path>
                          </svg></div>
                        <p
                          style="font-family:Montserrat;color: #ffffff;flex-shrink: 1;min-width: 0;word-wrap: break-word;">
                          rubenwhite22@gmail.com </p>
                      </li>
                      <li
                        style="display:flex; align-items: center!important; margin: 0!important; font-weight: initial;text-transform: initial;color:#e49207;align-items: start;gap: 10px;margin-bottom: 8px;">
                        <div style="padding-top: 4px;color: #e49207;"><svg width="15px" height="15px"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path fill="#e49207"
                              d="M480.192-475.385q30.731 0 52.423-21.884t21.692-52.615q0-30.731-21.884-52.423t-52.615-21.692q-30.731 0-52.423 21.884T405.693-549.5q0 30.731 21.884 52.423t52.615 21.692ZM480-82.617Q314.026-219.57 234.052-333.208q-79.974-113.638-79.974-216.869 0-121.46 88.577-224.191Q331.231-876.999 479.5-876.999t237.345 102.731q89.077 102.731 89.077 224.191 0 103.231-79.461 216.423Q646.999-220.463 480-82.617Z">
                            </path>
                          </svg></div>
                        <p
                          style="font-family:Montserrat;color: #ffffff;flex-shrink: 1;min-width: 0;word-wrap: break-word;">
                          Cotonou</p>
                      </li>
                      <li
                        style="display:flex; align-items: center!important; margin: 0!important; font-weight: initial;text-transform: initial;color: #e49207;align-items: start;gap: 10px;margin-bottom: 8px;">
                        <div style="padding-top: 4px;color: #e49207;"><svg width="15px" height="15px"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path fill="#e49207"
                              d="M240-120v-680h390q14 0 26 6.5t20 17.5l124 176-124 176q-8 11-20 17.5t-26 6.5H320v280h-80Z">
                            </path>
                          </svg> </div>
                        <p
                          style="font-family:Montserrat;color: #ffffff;flex-shrink: 1;min-width: 0;word-wrap: break-word;">
                          Béninois </p>
                      </li>
                      <li
                        style="display:flex; align-items: center!important; margin: 0!important; font-weight: initial;text-transform: initial;color: #e49207;align-items: start;gap: 10px;margin-bottom: 8px;">
                        <div style="padding-top: 4px;color: #e49207;"><svg width="15px" height="15px"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path fill="#e49207"
                              d="M480-504.309q-61.749 0-103.874-42.124-42.125-42.125-42.125-103.874 0-61.75 42.125-103.874Q418.251-796.306 480-796.306q61.749 0 103.874 42.125 42.125 42.124 42.125 103.874 0 61.749-42.125 103.874Q541.749-504.309 480-504.309ZM182.001-158.694v-103.922q0-25.384 13.149-46.776 13.149-21.393 36.466-36.146 56.308-33.077 120.062-50.615 63.753-17.538 128.23-17.538 64.476 0 128.322 17.538 63.846 17.538 120.154 50.615 23.317 13.753 36.466 35.646 13.149 21.892 13.149 47.276v103.922H182.001Z">
                            </path>
                          </svg> </div>
                        <p
                          style="font-family:Montserrat;color: #ffffff;flex-shrink: 1;min-width: 0;word-wrap: break-word;">
                          22 ans </p>
                      </li>
                      <li
                        style="display:none;font-weight: initial;text-transform: initial;color: #e49207;align-items: start;gap: 10px;margin-bottom: 8px;">
                        <div style="padding-top: 4px;color: #e49207;"><svg width="15px" height="15px"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="none">
                            <path fill="#e49207"
                              d="M211.231-242v64q0 3.4-3.15 5.7-3.15 2.3-7.147 2.3h-22.637q-3.997 0-7.147-2.3-3.15-2.3-3.15-5.7v-297.846L245.384-665q4.566-14.339 17.673-21.669Q276.164-694 292.231-694h378.615q14.918 0 27.088 7.6 12.171 7.6 16.682 21.4L792-475.846V-178q0 3.4-3.15 5.7-3.15 2.3-7.147 2.3h-22.637q-3.997 0-7.147-2.3-3.15-2.3-3.15-5.7v-64H211.231Zm12.384-251.846h512.77L673.462-652H286.538l-62.923 158.154Zm83.489 161.538q14.665 0 25.55-11.065 10.885-11.066 10.885-25.731 0-14.665-11.066-25.55-11.066-10.885-25.731-10.885-14.665 0-25.55 11.066-10.884 11.066-10.884 25.731 0 14.665 11.065 25.55 11.066 10.884 25.731 10.884Zm346.154 0q14.665 0 25.55-11.065 10.884-11.066 10.884-25.731 0-14.665-11.065-25.55-11.066-10.885-25.731-10.885-14.665 0-25.55 11.066-10.885 11.066-10.885 25.731 0 14.665 11.066 25.55 11.066 10.884 25.731 10.884Z">
                            </path>
                          </svg> </div>
                        <p
                          style="font-family:Montserrat;color: #ffffff;flex-shrink: 1;min-width: 0;word-wrap: break-word;">
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div style="text-transform: uppercase; font-weight: bolder;">
                  <section style="margin-top: 20px;margin-right: 20px;margin-bottom: 10px;">
                    <article
                      style="color: #e49207; display: flex;flex-direction: column; text-transform: uppercase;font-family:Montserrat;letter-spacing: 3px;font-size:16px;">
                      <span
                        style="height: 1px;background: #ffffff;width: 80px;display: inline-block; margin-bottom: 5px;"></span>LANGUES
                    </article>
                    <article></article>
                  </section>
                  <div>
                    <div id="praga"
                      style="color: #ffffff; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                      <div style="width: 100%;">
                        <p style="color: #ffffff;margin-top: 0;"><span>Français</span> | Langue maternelle</p>
                      </div>
                    </div>
                    <div id="praga"
                      style="color: #ffffff; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                      <div style="width: 100%;">
                        <p style="color: #ffffff;margin-top: 0;"><span>Anglais</span> | Courant</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="text-transform: uppercase; font-weight: bolder;">
                  <section style="margin-top: 20px;margin-right: 20px;margin-bottom: 10px;">
                    <article
                      style="color: #e49207; display: flex;flex-direction: column; text-transform: uppercase;font-family:Montserrat;letter-spacing: 3px;font-size:16px;">
                      <span
                        style="height: 1px;background: #ffffff;width: 80px;display: inline-block; margin-bottom: 5px;"></span>CENTRES
                      D'INTÉRÊT
                    </article>
                    <article></article>
                  </section>
                  <div>
                    <div
                      style="color: #ffffff; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                      <p style="text-align: left;">Intelligence émotionnelle<br>Lecture, foi, boxe, basketball</p>
                    </div>
                  </div>
                </div>
                <div style="text-transform: uppercase; font-weight: bolder;">
                  <section style="margin-top: 20px;margin-right: 20px;margin-bottom: 10px;">
                    <article
                      style="color: #e49207; display: flex;flex-direction: column; text-transform: uppercase;font-family:Montserrat;letter-spacing: 3px;font-size:16px;">
                      <span
                        style="height: 1px;background: #ffffff;width: 80px;display: inline-block; margin-bottom: 5px;"></span>RÉSEAUX
                      SOCIAUX
                    </article>
                    <article></article>
                  </section>
                  <div>
                    <div id="praga" name="praga"
                      style="color: #ffffff; text-transform: none;font-weight: initial;font-family:Montserrat;">
                      <div>
                        <div style="display: flex;align-items: center;gap: 10px;margin-top: 0;">
                          <div style="padding-top: 4px;">
                            <svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                              <path fill="#e49207"
                                d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z">
                              </path>
                            </svg>
                          </div>
                          <p style="flex-shrink: 1;min-width: 0;word-wrap: break-word;padding-top: 3px; margin: 2px 0">
                            https://www.linkedin.com/in/ruben-white22/</p>
                        </div>
                        <div style="display: flex;align-items: center;gap: 10px;margin-top: 0;">
                          <div style="padding-top: 4px;">
                            <svg fill="#e49207" width="15px" height="15px" viewBox="0 0 9.6 9.6" id="_x30_1"
                              version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink">
                              <path
                                d="M4.8 0C2.149 0 0 2.149 0 4.8s2.149 4.8 4.8 4.8 4.8 -2.149 4.8 -4.8S7.451 0 4.8 0zm3.043 2.737h-0.875c-0.101 -0.422 -0.231 -0.81 -0.386 -1.153 0.296 0.165 0.571 0.371 0.817 0.617A3.714 3.714 0 0 1 7.843 2.737zM8.475 4.8c0 0.321 -0.041 0.635 -0.12 0.938h-1.201c0.03 -0.303 0.046 -0.617 0.046 -0.938s-0.016 -0.634 -0.046 -0.938h1.201c0.079 0.302 0.12 0.617 0.12 0.938zM4.8 8.475c-0.098 0 -0.395 -0.192 -0.691 -0.784 -0.123 -0.245 -0.228 -0.525 -0.314 -0.829h2.01c-0.086 0.304 -0.191 0.583 -0.314 0.829C5.195 8.283 4.897 8.475 4.8 8.475zm-1.222 -2.737c-0.035 -0.305 -0.053 -0.619 -0.053 -0.938s0.018 -0.633 0.053 -0.938h2.445c0.035 0.305 0.053 0.619 0.053 0.938s-0.018 0.633 -0.053 0.938H3.578zM1.125 4.8c0 -0.321 0.041 -0.635 0.12 -0.938h1.201c-0.03 0.303 -0.046 0.617 -0.046 0.938s0.016 0.634 0.046 0.938H1.245C1.166 5.435 1.125 5.121 1.125 4.8zM4.8 1.125c0.098 0 0.395 0.192 0.691 0.784 0.123 0.245 0.228 0.525 0.314 0.829H3.795c0.086 -0.304 0.191 -0.583 0.314 -0.829C4.405 1.317 4.702 1.125 4.8 1.125zm-1.782 0.459c-0.155 0.343 -0.285 0.731 -0.386 1.153H1.757a3.715 3.715 0 0 1 0.444 -0.536c0.246 -0.246 0.521 -0.453 0.817 -0.617zM1.757 6.862h0.875c0.101 0.422 0.231 0.81 0.386 1.153 -0.296 -0.165 -0.571 -0.371 -0.817 -0.617A3.714 3.714 0 0 1 1.757 6.862zm4.824 1.153c0.155 -0.343 0.285 -0.731 0.386 -1.153h0.875a3.715 3.715 0 0 1 -0.444 0.536c-0.246 0.246 -0.521 0.453 -0.817 0.617z">
                              </path>
                            </svg>
                          </div>
                          <p style="flex-shrink: 1;min-width: 0;word-wrap: break-word;padding-top: 3px; margin: 2px 0">
                            https://whitedev.vercel.app/fr</p>
                        </div>
                        <div style="display: flex;align-items: center;gap: 10px;margin-top: 0;">
                          <div style="padding-top: 4px;">
                            <svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                              <g id="Layer">
                                <path id="Layer" fill="#e49207"
                                  d="m33.5 20.8c-0.5-1.2-1.2-2.2-2.1-3.2-1-0.9-2-1.6-3.2-2.1l-1.4 1.4-0.9 1-1 1q-0.3 0.3-0.5 0.6c1.3 0.1 2.6 0.6 3.5 1.6 1 1 1.5 2.2 1.6 3.5q0.1 1.1-0.3 2.1c-0.2 0.8-0.6 1.5-1.2 2.2q0 0-0.1 0l-1.1 1.2-1.6 1.6-1.5 1.4-3.9 3.9c-1 1.1-2.4 1.6-3.9 1.6-1.5 0-2.9-0.5-3.9-1.6-1.1-1-1.6-2.4-1.6-3.9 0-1.5 0.5-2.9 1.6-3.9l3.9-3.9q-0.4-1-0.5-2.1-0.1-0.8-0.1-1.6 0-1.5 0.3-2.9l-7.1 7c-4 4.1-4 10.7 0 14.8 2.1 2 4.7 3 7.4 3 2.7 0 5.3-1 7.4-3l7-7.1 1.1-1q0.9-1 1.5-2 1-1.7 1.3-3.5 0.2-0.9 0.2-1.9 0-1.2-0.2-2.3-0.3-1-0.7-1.9z">
                                </path>
                                <path id="Layer" fill="#e49207"
                                  d="m43 6c-2.1-2-4.7-3-7.4-3-2.7 0-5.3 1-7.4 3l-7 7.1-1.1 1q-0.9 1-1.5 2-1 1.7-1.3 3.5-0.2 0.9-0.2 1.9 0 1.2 0.2 2.3 0.3 1 0.7 1.9c0.5 1.2 1.2 2.2 2.1 3.2 1 0.9 2 1.6 3.2 2.1l1.4-1.4 0.9-1 1-1q0.3-0.3 0.5-0.6c-1.3-0.1-2.6-0.6-3.5-1.6-1-1-1.5-2.2-1.6-3.5q-0.1-1.1 0.3-2.1c0.2-0.8 0.6-1.5 1.2-2.2q0 0 0.1 0l1.1-1.2 1.6-1.6 1.5-1.4 3.9-3.9c1-1.1 2.4-1.6 3.9-1.6 1.5 0 2.9 0.5 3.9 1.6 2.2 2.2 2.2 5.7 0 7.8l-3.9 3.9q0.4 1 0.5 2.1 0.1 0.8 0.1 1.6 0 1.5-0.3 2.9l7.1-7c4-4.1 4-10.7 0-14.8z">
                                </path>
                              </g>
                            </svg>
                          </div>
                          <p style="flex-shrink: 1;min-width: 0;word-wrap: break-word;padding-top: 1px; margin: 2px 0">
                            Github:
                            https://github.com/ruben-senpai11</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="text-transform: uppercase; font-weight: bolder;">
                  <section style="margin-top: 20px;margin-right: 20px;margin-bottom: 10px;">
                    <article
                      style="color: #e49207; display: flex;flex-direction: column; text-transform: uppercase;font-family:Montserrat;letter-spacing: 3px;font-size:16px;">
                      <span
                        style="height: 1px;background: #ffffff;width: 80px;display: inline-block; margin-bottom: 5px;"></span>QUALITÉS
                    </article>
                    <article></article>
                  </section>
                  <div>
                    <div
                      style="color: #ffffff; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                      <ul style="padding: 3px;margin: 0px;list-style-type: square;">
                        <li style="margin-left: 15px; margin-bottom: 2px;">
                          <span style="font-weight: 500;">
                            Créatif :
                          </span>
                          <span>Prêt à innover et sortir des sentiers battus</span>
                        </li>
                        <li style="margin-left: 15px; margin-bottom: 2px;">
                          <span style="font-weight: 500;">
                            Méticuleux :
                          </span>
                          <span>Grand sens du détail</span>
                        </li>
                        <li style="margin-left: 15px; margin-bottom: 2px;">
                          <span style="font-weight: 500;">
                            Proactif :
                          </span>
                          <span>Axé vers la résolution des problèmes et adaptatif en toutes circonstances</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <main id="main"
              style="margin: 0px; width: 100%; min-height: 1000px; padding-top: 20px; padding-left: 0px; font-size: 12px; color: rgb(228, 146, 7); line-height: 1.25; background-color: rgb(255, 255, 255); border: 1px solid rgb(40, 60, 74); border-left: 0;">
              <div style="text-transform: uppercase; font-weight: bolder;">
                <section style="margin: 10px 20px;">
                  <article
                    style="color: #e49207; display: flex;flex-direction: column; text-transform: uppercase;font-family:Montserrat;letter-spacing: 3px;font-size:16px;">
                    <span
                      style="height: 1px;background: black;width: 80px;display: inline-block; margin-bottom: 5px;"></span>PROFIL
                    PROFESSIONNEL
                  </article>
                  <article></article>
                </section>
                <div style="margin-left: 20px;">
                  <div
                    style="color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <p style="margin-bottom: 5px;">Je suis Ruben, développeur web depuis 4 ans, partenaire Shopify et
                      développeur de thèmes et d'applications Shopify.&nbsp;J'ai une expertise prouvée pour améliorer
                      l'expérience des visiteurs et les résultats des boutiques e-commerces. Aussi, je crée des
                      fonctionnalités innovantes en gardant le code le plus léger, compréhensible et maintenable
                      possible.&nbsp;<br>Je souhaite aujourd'hui m'investir dans une agence créative et faire un pas de
                      plus dans ma carrière</p>
                  </div>
                </div>
              </div>
              <div style="text-transform: uppercase; font-weight: bolder;">
                <section style="margin-top: 20px;margin-left: 20px;margin-right: 20px;margin-bottom: 10px;">
                  <article
                    style="color: #e49207; display: flex;flex-direction: column; text-transform: uppercase;font-family:Montserrat;letter-spacing: 3px;font-size:16px;">
                    <span
                      style="height: 1px;background: black;width: 80px;display: inline-block; margin-bottom: 5px;"></span>EXPÉRIENCES
                    PROFESSIONNELLES
                  </article>
                  <article></article>
                </section>
                <div style="margin-left: 20px;">
                  <div 
                    style="color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word;margin-bottom: 5px;">
                    <div style="">
                      <div style="width:100%;clear:both;display: flex; align-items: center;">
                        <div style="width:15%; float:left;min-width: 150px;">
                          Févr. 2022 - Nov. 2024
                        </div>
                        <div style="width:85%; font-weight:bold;">
                          Développeur Front-end
                        </div>
                      </div>

                      <div style="width:100%; clear:both;display: flex; align-items: center;">
                        <div style="width:15%; float:left; color:gray; opacity:0.7;min-width: 150px;">
                          Cotonou - Bénin
                        </div>
                        <div style="width:85%; float:right;color: #e49207;">
                          Travailleur Indépendant
                        </div>
                      </div>

                      <div style="width:100%; clear:both;display: flex; align-items: center;">
                        <div style="width:15%; float:left;min-width: 150px;"></div>
                        <div style="width:85%; float:right;">
                          <ul style="list-style:disc; padding: 3px; padding: 3px;margin: 0px;">
                            <li style="margin-left: 15px;margin-left: 15px;">Création de thèmes Shopify en accord avec
                              une maquette et un cahier de charges fourni
                              <ul style="list-style:circle; padding: 3px; padding: 3px;margin: 0px;">
                                <li style="margin-left: 15px;margin-left: 15px;">Intégration de la maquette en HTML, CSS
                                  JavaScript&nbsp;</li>
                                <li style="margin-left: 15px;margin-left: 15px;">Implémentation dans le thème Shopify
                                  avec les valeurs dynamiques en utilisant Liquid</li>
                              </ul>
                            </li>
                            <li style="margin-left: 15px;margin-left: 15px;">Développement d'applications Shopify pour
                              le compte de vendeurs grossistes avec Remix, Polaris, TypeScript, Prisma...</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Optimisation de boutiques (vitesse de
                              chargement, copywriting, pages produit &amp; panier, panier abandonnés)</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Intégrations de maquettes Figma à des
                              boutiques e-commerces Shopify et Prestashop</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Intégration de maquettes Figma à des
                              projets React &amp; Next.js</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Création de composants Open Source au
                              profit de développeurs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style="color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word;margin-bottom: 5px;">
                    <div style="">
                      <div style="width:100%;clear:both;display: flex; align-items: center;">
                        <div style="width:15%; float:left;min-width: 150px;">
                          Avr. 2023 - Oct. 2023
                        </div>
                        <div style="width:85%; font-weight:bold;">
                          Développeur Front-end
                        </div>
                      </div>

                      <div style="width:100%; clear:both;display: flex; align-items: center;">
                        <div style="width:15%; float:left; color:gray; opacity:0.7;min-width: 150px;">
                          Abomey-Calavi - Bénin
                        </div>
                        <div style="width:85%; float:right;color: #e49207;">
                          Trois Ventes Services
                        </div>
                      </div>

                      <div style="width:100%; clear:both;display: flex; align-items: center;">
                        <div style="width:15%; float:left;min-width: 150px;"></div>
                        <div style="width:85%; float:right;">
                          <ul style="list-style:disc; padding: 3px; padding: 3px;margin: 0px;">
                            <li style="margin-left: 15px;margin-left: 15px;">Intégration de maquettes Figma &amp; Adobe
                              XD à des sites Shopify, WordPress et Prestashop&nbsp;</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Résolutions de bugs et Optimisation de la
                              vitesse de chargement</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Création de pages et de fonctionnalités
                              personnalisées en accord avec les cahiers de charges fournis</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Collaboration continue avec l'équipe
                              backend</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style="color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word;margin-bottom: 5px;">
                    <div style="">
                      <div style="width:100%;clear:both;display: flex; align-items: center;">
                        <div style="width:15%; float:left;min-width: 150px;">
                          Févr. 2023 - Mars. 2023
                        </div>
                        <div style="width:85%; font-weight:bold;">
                          Stage Professionnel
                        </div>
                      </div>

                      <div style="width:100%; clear:both;display: flex; align-items: center;">
                        <div style="width:15%; float:left; color:gray; opacity:0.7;min-width: 150px;">
                          Abomey-Calavi - Bénin
                        </div>
                        <div style="width:85%; float:right;color: #e49207;">
                          IwajuTech
                        </div>
                      </div>

                      <div style="width:100%; clear:both;display: flex; align-items: center;">
                        <div style="width:15%; float:left;min-width: 150px;"></div>
                        <div style="width:85%; float:right;">
                          <ul style="list-style:disc; padding: 3px; padding: 3px;margin: 0px;">
                            <li style="margin-left: 15px;margin-left: 15px;">Développement de l'interface de la 1ère
                              version de Yemi Services</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Création d'une PWA</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Tests unitaires et d'intégrations sur les
                              projets en cours</li>
                            <li style="margin-left: 15px;margin-left: 15px;">Collaboration avec l'équipe design et
                              l'équipe backend</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="text-transform: uppercase; font-weight: bolder;">
                <section style="margin-top: 20px;margin-left: 20px;margin-right: 20px;margin-bottom: 10px;">
                  <article
                    style="color: #e49207; display: flex;flex-direction: column; text-transform: uppercase;font-family:Montserrat;letter-spacing: 3px;font-size:16px;">
                    <span
                      style="height: 1px;background: black;width: 80px;display: inline-block; margin-bottom: 5px;"></span>FORMATION
                  </article>
                  <article></article>
                </section>
                <div style="margin-left: 20px;">
                  <div
                    style="color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word;margin-bottom: 5px;">
                    <div style="margin:0px;">
                      <div>
                        <p> <span style="color:#000000;font-weight:bold;margin:0px">Licence en Informatique et
                            Télécommunications</span> |
                          <span style="color:#9c9c9c"> Oct.2019 - Juil.2022, Lokossa - Bénin</span>
                        </p>
                      </div>
                      <div style="margin:0px;">
                        <p style="color: #e49207;margin-bottom: 0px;margin:0px">Institut National Supérieur de
                          Technologie Industrielle</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="text-transform: uppercase; font-weight: bolder;">
                <section style="margin-top: 20px;margin-left: 20px;margin-right: 20px;margin-bottom: 10px;">
                  <article
                    style="color: #e49207; display: flex;flex-direction: column; text-transform: uppercase;font-family:Montserrat;letter-spacing: 3px;font-size:16px;">
                    <span
                      style="height: 1px;background: black;width: 80px;display: inline-block; margin-bottom: 5px;"></span>COMPÉTENCES
                  </article>
                  <article></article>
                </section>
                <div style="margin-left: 20px;display: grid;grid-template-columns: repeat(3, 1fr);">
                  <div id="bar"
                    style="display: inline-flex; color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <div style="margin-top: 10px;margin-right: 10px;margin-bottom: 10px;margin-left:0;">
                      <div>
                        <div style="margin-right: 5px;">HTML &amp; CSS</div>
                        <div style="width: 100px; height: 10px; background-color: #ccc;border-radius: 6px;">
                          <div style="width: 100%; height: 100%; background-color: #e49207;border-radius: 4px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bar"
                    style="display: inline-flex; color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <div style="margin-top: 10px;margin-right: 10px;margin-bottom: 10px;margin-left:0;">
                      <div>
                        <div style="margin-right: 5px;">JavaScript, TypeScript</div>
                        <div style="width: 100px; height: 10px; background-color: #ccc;border-radius: 6px;">
                          <div style="width: 100%; height: 100%; background-color: #e49207;border-radius: 4px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bar"
                    style="display: inline-flex; color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <div style="margin-top: 10px;margin-right: 10px;margin-bottom: 10px;margin-left:0;">
                      <div>
                        <div style="margin-right: 5px;">Liquid</div>
                        <div style="width: 100px; height: 10px; background-color: #ccc;border-radius: 6px;">
                          <div style="width: 100%; height: 100%; background-color: #e49207;border-radius: 4px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bar"
                    style="display: inline-flex; color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <div style="margin-top: 10px;margin-right: 10px;margin-bottom: 10px;margin-left:0;">
                      <div>
                        <div style="margin-right: 5px;">React, Next.js</div>
                        <div style="width: 100px; height: 10px; background-color: #ccc;border-radius: 6px;">
                          <div style="width: 80%; height: 100%; background-color: #e49207;border-radius: 4px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bar"
                    style="display: inline-flex; color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <div style="margin-top: 10px;margin-right: 10px;margin-bottom: 10px;margin-left:0;">
                      <div>
                        <div style="margin-right: 5px;">Tailwind CSS</div>
                        <div style="width: 100px; height: 10px; background-color: #ccc;border-radius: 6px;">
                          <div style="width: 100%; height: 100%; background-color: #e49207;border-radius: 4px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bar"
                    style="display: inline-flex; color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <div style="margin-top: 10px;margin-right: 10px;margin-bottom: 10px;margin-left:0;">
                      <div>
                        <div style="margin-right: 5px;">Shopify</div>
                        <div style="width: 100px; height: 10px; background-color: #ccc;border-radius: 6px;">
                          <div style="width: 100%; height: 100%; background-color: #e49207;border-radius: 4px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bar"
                    style="display: inline-flex; color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <div style="margin-top: 10px;margin-right: 10px;margin-bottom: 10px;margin-left:0;">
                      <div>
                        <div style="margin-right: 5px;">Node-API, GraphQL</div>
                        <div style="width: 100px; height: 10px; background-color: #ccc;border-radius: 6px;">
                          <div style="width: 100%; height: 100%; background-color: #e49207;border-radius: 4px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="bar"
                    style="display: inline-flex; color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <div style="margin-top: 10px;margin-right: 10px;margin-bottom: 10px;margin-left:0;">
                      <div>
                        <div style="margin-right: 5px;">GSAP, Webpack</div>
                        <div style="width: 100px; height: 10px; background-color: #ccc;border-radius: 6px;">
                          <div style="width: 75%; height: 100%; background-color: #e49207;border-radius: 4px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div style="text-transform: uppercase; font-weight: bolder;">
                <section style="margin: 10px 20px;">
                  <article
                    style="color: #e49207; display: flex;flex-direction: column; text-transform: uppercase;font-family:Montserrat;letter-spacing: 3px;font-size:16px;">
                    <span
                      style="height: 1px;background: black;width: 80px;display: inline-block; margin-bottom: 5px;"></span>Autres
                    profils
                  </article>
                  <article></article>
                </section>
                <div style="margin-left: 20px;">
                  <div
                    style="color: #000000; text-transform: none;margin-right: 10px;font-weight: initial;font-family:Montserrat;overflow-wrap: break-word">
                    <ul style="list-style:disc; padding: 3px; padding: 3px;margin: 0px;">
                      <li style="margin-left: 15px;margin-left: 15px;">Président de la Jeuneusse Ouvrière Catholique de Bakhita</li>
                      <li style="margin-left: 15px;margin-left: 15px;">Commissaire aux comptes de la Coordination de la Jeunesse Paroissiale</li>
                    </ul>
                  </div>
                </div>
              </div> -->
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  return (
    <>
    {/* <BBorder> */}
      {/* <div className="w-[100%]">
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allow="autoplay"
            title="White dev's Resume "
          />
        </div>
      </div > */}


      <div className="flex [w-100%] [h-100%] ">
        <div className="flex justify-center items-center m-auto "dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>



    {/* </BBorder > */}
    </>
  );
};

export default Page;
