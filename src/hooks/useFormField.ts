import React, { ChangeEvent } from "react";

export const UseFormField = (clear: boolean, setclear: (value: boolean) => void) => {
  const [value, setValue] = React.useState("");
  const onChange = React.useCallback(
    (e: any) => {
      e.target?.value
        ? setValue(e.target?.value)
        : typeof e === 'string'
          ? setValue(e)
          : setValue('')
    },
    []
    );
    if (clear) {
      setValue("");
      setclear(false);
    }
  return { value, onChange };
};

/* React.ChangeEvent<HTMLInputElement> | string */