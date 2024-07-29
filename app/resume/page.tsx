const Page = () => {
  const pdfUrl = '/resume.pdf';

  return (
    <div>
      <div style={{ width: '100%', height: '100vh' }}>
        <iframe
          src={pdfUrl}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allow="autoplay"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default Page;
