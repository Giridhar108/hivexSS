import React, {useEffect} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useAppSelector} from '../app/hooks';
import Header from '../components/Header';
import {Footer, Main, SectionHistory, SectionQuery, WrapperConsole} from '../style/components/Console';

const Console: React.FunctionComponent<RouteComponentProps> = ({history}) => {
  const {sessionKey} = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (sessionKey) {
      history.push('/console');
    } else {
      history.push('/');
    }
  }, [sessionKey, history]);

  return (
    <WrapperConsole>
      <Header/>
      <Main>
        <SectionHistory></SectionHistory>
        <SectionQuery></SectionQuery>
      </Main>
      <Footer></Footer>
    </WrapperConsole>
  );
};

export default withRouter(Console);
