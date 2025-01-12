import BBorder from "../bborder";
import LoadingGif from "../components/loadingGif";

const Page = () => {
  const pdfUrl = '/Ruben Resume 2025.pdf';

  return (
    <BBorder>
      <div>
        {/* <div style={{ width: '100%', height: '100vh' }}>
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allow="autoplay"
            title="White dev's Resume "
          />
        </div> */}
      </div >




    <div style={{ display: 'flex', alignContent: 'flex-start' }}>
      <aside
        style={{
          fontSize: '12px',
          lineHeight: '1.25',
          color: 'rgb(228, 146, 7)',
          backgroundColor: 'rgb(40, 60, 74)',
          width: '50%',
          maxWidth: '256px',
        }}
      >
        {/* Sidebar Content */}
        <div style={{ width: '100%' }}>
          <div>
            <div
              className="pdfasidecolor"
              style={{
                width: '100%',
                background: '#283c4a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div
                  style={{
                    width: 'max-content',
                    marginTop: '10px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                  }}
                >
                  <div style={{ maxWidth: '215px', height: '215px' }}>
                    <img
                      className="imageprofile"
                      style={{ width: '100%', height: '100%' }}
                      src="https://cvcrea-prod.s3.eu-west-3.amazonaws.com/curriculumProfilePictures/image_1736095344407.png"
                      alt="Profile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pdfasidecolor"
          style={{
            fontSize: '12px',
            lineHeight: '1.25',
            color: 'rgb(228, 146, 7)',
            backgroundColor: 'rgb(40, 60, 74)',
            position: 'relative',
            padding: '20px',
          }}
        >
          {/* Sidebar Details */}
          <div style={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>
            <div style={{ marginBottom: '30px' }}>
              <p
                style={{
                  color: '#ffffff',
                  textTransform: 'capitalize',
                  letterSpacing: '3px',
                  marginBottom: '0',
                  fontFamily: 'Montserrat',
                  fontSize: '18px',
                }}
              >
                Ruben
              </p>
              <p
                style={{
                  color: '#e49207',
                  textTransform: 'capitalize',
                  letterSpacing: '3px',
                  marginTop: '0',
                  marginBottom: '0',
                  fontFamily: 'Montserrat',
                  fontSize: '20px',
                }}
              >
                HONFOVOU
              </p>
              <span
                style={{
                  height: '1px',
                  background: '#ffffff',
                  width: '80px',
                  display: 'inline-block',
                }}
              ></span>
              <p
                style={{
                  marginTop: '0',
                  color: '#ffffff',
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                  fontWeight: 'normal',
                  textTransform: 'initial',
                  letterSpacing: '3px',
                }}
              >
                Développeur Front-end
              </p>
            </div>
            <div id="icon"  style={{ marginBottom: '10px', display: 'block' }}>
              <span
                style={{
                  height: '1px',
                  background: '#ffffff',
                  width: '80px',
                  display: 'inline-block',
                }}
              ></span>
              <p
                style={{
                  color: '#e49207',
                  textTransform: 'capitalize',
                  letterSpacing: '3px',
                  marginBottom: '8px',
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                  marginTop: '0',
                }}
              >
                CONTACT
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  paddingLeft: '0',
                  marginBottom: '0px',
                  marginTop: '0px',
                  gap: '5px',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    fontWeight: 'initial',
                    textTransform: 'initial',
                    color: '#e49207',
                    alignItems: 'start',
                    gap: '10px',
                    marginBottom: '8px',
                  }}
                >
                  <div style={{ paddingTop: '4px', color: '#e49207' }}>
                    <svg
                      width="15px"
                      height="15px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path
                        fill="#e49207"
                        d="M774.614-133.001q-124.076-9-236.691-61.077-112.615-52.077-203.384-142.846-90.384-89.769-141.961-202.691-51.577-112.923-60.577-236.999-2-23 11.5-37.692 13.5-14.693 36.5-14.693h142.46q18.154 0 31.731 10.885 13.577 10.885 19.73 28.423L398.845-675q2.385 11.385-1.5 24.154-3.884 12.769-10.654 18.769l-101.384 99.923q21.308 38.846 46.962 73.769 25.654 34.924 58.038 68.078 30.924 29.923 65.001 55.654 34.077 25.731 71.077 45.038l110.769-104.538q7.385-7.769 13.731-9.192t15.731.577l120.075 27.615q18.154 5 29.731 18.461 11.577 13.462 11.577 32.001v143.69q0 23-15.193 36.5-15.192 13.5-38.192 11.5Z"
                      />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontFamily: 'Montserrat',
                      color: '#ffffff',
                      flexShrink: '1',
                      minWidth: '0',
                      wordWrap: 'break-word',
                    }}
                  >
                    +229 0196404757
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          margin: '0px',
          width: '100%',
          minHeight: '1000px',
          paddingTop: '20px',
          paddingLeft: '0px',
          fontSize: '12px',
          color: 'rgb(228, 146, 7)',
          lineHeight: '1.25',
          backgroundColor: 'rgb(255, 255, 255)',
        }}
      >
        <section style={{ margin: '10px 20px' }}>
          <article
            style={{
              color: '#e49207',
              display: 'flex',
              flexDirection: 'column',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat',
              letterSpacing: '3px',
              fontSize: '16px',
            }}
          >
            <span
              style={{
                height: '1px',
                background: 'black',
                width: '80px',
                display: 'inline-block',
                marginBottom: '5px',
              }}
            ></span>
            PROFIL PROFESSIONNEL
          </article>
        </section>
        <div style={{ marginLeft: '20px' }}>
          <div
            style={{
              color: '#000000',
              textTransform: 'none',
              marginRight: '10px',
              fontWeight: 'initial',
              fontFamily: 'Montserrat',
              overflowWrap: 'break-word',
            }}
          >
            <p style={{ marginBottom: '5px' }}>
              Je suis Ruben, développeur web depuis 4 ans, partenaire Shopify et développeur de
              thèmes et d'applications Shopify. J'ai travaillé sur plus d'une quarantaine de
              boutiques e-commerce. J'ai acquis de l'expertise dans la création d'interfaces
              fluides et de navigation intuitives et tout en optimisant les résultats des
              commerçants.
            </p>
          </div>
        </div>
      </main>
    </div>







    </BBorder >
  );
};

export default Page;
