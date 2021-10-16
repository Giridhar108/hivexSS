import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {ActionTypes} from '../constants/sagaActions';
import {description, MAIN_QUERY, MAIN_RESPONSE} from '../constants/variables';
import {isJsonString} from '../helpers/isJsonString';
import {UseFormField} from '../hooks/useFormField';
import {Label, SectionQuery, Spliter, Textarea, WrapperColumn} from '../style/components/MainConsole';
import {spliterSvg} from '../svg/spliterSvg';
import {Imain} from '../types/types';

function MainSectionQuery({send, format, setSend, setFormat}: Imain) {
  const dispatch = useAppDispatch();
  const oneQuery = useAppSelector((state) => state.query.oneQuery);

  const [clear, setclear] = React.useState(false);
  const [errorQuery, setErrorQuery] = React.useState(false);
  const [response, setResponse] = React.useState('');
  const textareaOne = UseFormField(clear, setclear);

  useEffect(() => {
    if (send && isJsonString(textareaOne.value)) {
      dispatch({type: ActionTypes.QUERY, payload: {request: JSON.parse(textareaOne.value), type: ''}});
      setSend(false);
      setErrorQuery(false);
    }

    if (!isJsonString(textareaOne.value) && textareaOne.value.length > 0) {
      setSend(false);
      setErrorQuery(true);
    }

    if (format && isJsonString(textareaOne.value)) {
      textareaOne.onChange(JSON.stringify(JSON.parse(textareaOne.value), null, 3));
      setFormat(false);
    }
  }, [send, format]);

  useEffect(() => {
    setResponse(oneQuery.response !== '' ? JSON.stringify(JSON.parse(oneQuery.response), null, 3) : description);
  }, [oneQuery]);

  return (
    <SectionQuery>
      <WrapperColumn>
        <Label colorLabel={errorQuery} htmlFor="one">
          {MAIN_QUERY}
        </Label>
        <Textarea colorLabel={errorQuery} name="one" {...textareaOne}></Textarea>
      </WrapperColumn>
      <Spliter>{spliterSvg}</Spliter>
      <WrapperColumn>
        <Label colorLabel={oneQuery.status === 'reject'} htmlFor="two">
          {MAIN_RESPONSE}
        </Label>
        <Textarea colorLabel={oneQuery.status === 'reject'} readOnly name="two" defaultValue={response}></Textarea>
      </WrapperColumn>
    </SectionQuery>
  );
}

export default MainSectionQuery;
