import React, {useEffect, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useAppSelector} from '../app/hooks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import {WrapperConsole} from '../style/components/Console';

const Console: React.FunctionComponent<RouteComponentProps> = ({history}) => {
  const {sessionKey} = useAppSelector((state) => state.auth);

  const [send, setSend] = useState(false);
  const [format, setFormat] = useState(false);

  useEffect(() => {
    if (sessionKey) {
      history.push('/console');
    } else {
      history.push('/');
    }
  }, [sessionKey, history]);

  return (
    <WrapperConsole>
      <Header />
      <Main send={send} format={format} setSend={setSend} setFormat={setFormat}/>
      <Footer setSend={setSend} setFormat={setFormat} />
    </WrapperConsole>
  );
};

export default withRouter(Console);
