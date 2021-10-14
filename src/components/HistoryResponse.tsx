import React from 'react';
import {useAppSelector} from '../app/hooks';
import {useHorizontalScroll} from '../hooks/useHorizontalScroll';
import {
  DeleteItemHistory,
  LineHistory,
  SectionHistory,
} from '../style/components/HistoryResponse';
import {deleteHistorySvg} from '../svg/deleteHistorySvg';
import OneHistoryItem from './OneHistoryItem';

function HistoryResponse() {
  const {lineQuery} = useAppSelector((state) => state.query);
  const scrollRef = useHorizontalScroll();

  return (
    <SectionHistory>
      <LineHistory ref={scrollRef}>
        {lineQuery &&
          lineQuery.map((el, i) => {
            return <OneHistoryItem el={el} key={`${JSON.parse(el.text).action}_${i}`}/>;
          })}
      </LineHistory>
      <DeleteItemHistory>{deleteHistorySvg}</DeleteItemHistory>
    </SectionHistory>
  );
}

export default HistoryResponse;
