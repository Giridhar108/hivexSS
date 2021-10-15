import React, {useEffect} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useAppSelector} from '../app/hooks';
import Header from '../components/Header';
import HistoryResponse from '../components/HistoryResponse';
import ResponseComponent from '../components/ResponseComponent';
import {WrapperConsole} from '../style/components/Console';

const Console: React.FunctionComponent<RouteComponentProps> = ({history}) => {
  const sessionKey = useAppSelector((state) => state.auth.sessionKey);

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
      <HistoryResponse />
      <ResponseComponent/>
    </WrapperConsole>
  );
};

export default withRouter(Console);
