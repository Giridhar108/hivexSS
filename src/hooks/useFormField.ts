import React, { ChangeEvent } from "react";

export const UseFormField = (clear: boolean, setclear: (value: boolean) => void) => {
  const [value, setValue] = React.useState("");
  const onChange = React.useCallback(
    (e: any) => setValue(e.target.value),
    []
  );
  if (clear) {
    setValue("");
    setclear(false);
  }
  return { value, onChange };
};
