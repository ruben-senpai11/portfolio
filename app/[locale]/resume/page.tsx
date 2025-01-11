import BBorder from "../bborder";
import LoadingGif from "../components/loadingGif";

const Page = () => {
  const pdfUrl = '/Ruben Resume 2025.pdf';

  return (
    <BBorder>
      <div>
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
      </div>
    </BBorder>
  );
};

export default Page;
