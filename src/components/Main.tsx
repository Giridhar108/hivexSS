import React from 'react';
import {MainConsole} from '../style/components/MainConsole';
import {Imain} from '../types/types';
import HistoryResponse from './HistoryResponse';
import MainSectionQuery from './MainSectionQuery';

function Main({send, format, setSend, setFormat}: Imain) {

  return (
    <MainConsole>
      <HistoryResponse />
      <MainSectionQuery send={send} format={format} setSend={setSend} setFormat={setFormat} />
    </MainConsole>
  );
}

export default Main;
