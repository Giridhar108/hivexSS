import React from 'react';
import {useAppSelector} from '../app/hooks';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';
import {DeleteItemHistory, HistoryItem, LineHistory, SectionHistory, SvgHistory} from '../style/components/HistoryResponse';
import {deleteHistorySvg} from '../svg/deleteHistorySvg';
import { dotsSvg } from '../svg/dotsSvg';
import {rejectSvg} from '../svg/rejectSvg';
import {resolveSvg} from '../svg/resolveSvg';

function HistoryResponse() {
  const {lineQuery} = useAppSelector((state) => state.query);

  const scrollRef = useHorizontalScroll();

  return (
    <SectionHistory>
      <LineHistory ref={scrollRef}>
        {lineQuery &&
          lineQuery.map((el, i) => {
            return (
              <HistoryItem key={`${JSON.parse(el.text).action}_${i}`}>
                {el.status ? resolveSvg : rejectSvg}
                <p> {JSON.parse(el.text).action}</p>
                <SvgHistory>{dotsSvg}</SvgHistory>
              </HistoryItem>
            );
          })}
      </LineHistory>
      <DeleteItemHistory>{deleteHistorySvg}</DeleteItemHistory>
    </SectionHistory>
  );
}

export default HistoryResponse;
