import React, {useState} from 'react';
import Footer from './Footer';
import Main from './Main';

function ResponseComponent() {

  const [send, setSend] = useState(false);
  const [format, setFormat] = useState(false);

  return (
    <>
      <Main send={send} format={format} setSend={setSend} setFormat={setFormat} />
      <Footer setSend={setSend} setFormat={setFormat} />
    </>
  );
}

export default ResponseComponent;
