import React, {Dispatch, SetStateAction} from 'react';
import {FOOTER_FORMAT, FOOTER_SEND, LOGIN_PAGE_LINKTOGITHAB} from '../constants/variables';
import {FooterConsole, Format, FormatInner, LinkToGithabFooter} from '../style/components/FooterConsole';
import {Button} from '../style/components/LoginPage';
import {formatSvg} from '../svg/formatSvg';

export interface Ifooter {
  setSend: Dispatch<SetStateAction<boolean>>;
  setFormat: Dispatch<SetStateAction<boolean>>;
}

function Footer({ setSend, setFormat }: Ifooter) {

  const handleSetSend = () => {
    setSend(true);
  };

  const handleSetFormat = () => {
    setFormat(true);
  };

  return (
    <FooterConsole>
      <Button width="120px" type="submit" onClick={handleSetSend}>
        {FOOTER_SEND}
      </Button>
      <LinkToGithabFooter href="https://github.com/Giridhar108/hivexSS" target="_blank">
        {LOGIN_PAGE_LINKTOGITHAB}
      </LinkToGithabFooter>
      <Format>
        <FormatInner onClick={handleSetFormat}>
          {formatSvg}
          {FOOTER_FORMAT}
        </FormatInner>
      </Format>
    </FooterConsole>
  );
}

export default Footer;
