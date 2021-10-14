import React, {useState} from 'react';
import {HistoryItem, SvgHistory, WrapperHistoryItem} from '../style/components/HistoryResponse';
import Select from './Select';
import {dotsSvg} from '../svg/dotsSvg';
import {rejectSvg} from '../svg/rejectSvg';
import { resolveSvg } from '../svg/resolveSvg';
import { IoneQuery } from '../types/types';

interface IOneHistoryItem {
  el: IoneQuery;
}

function OneHistoryItem({el}: IOneHistoryItem) {
  const [select, setSelect] = useState(false);
  const handleSetSelect = () => {
    setSelect(!select);
  };

  return (
    <WrapperHistoryItem>
      <HistoryItem onClick={handleSetSelect}>
        {el.status === 'resolve' ? resolveSvg : rejectSvg}
        <p> {JSON.parse(el.text).action}</p>
        <SvgHistory>{dotsSvg}</SvgHistory>
      </HistoryItem>
      <Select select={select} setSelect={setSelect} />
    </WrapperHistoryItem>
  );
}

export default OneHistoryItem;
