import * as Mui from "@mui/material";
import * as React from "react";
import NumberFormat from "react-number-format";

export const SpotField = ({
  startLabel,
  endLabel,
  ...props
}: spotField.Props) => (
  <Mui.TextField
    {...props}
    size="small"
    variant="outlined"
    inputProps={{
      style: {
        textAlign: "right",
      },
    }}
    InputProps={{
      startAdornment: startLabel && (
        <Mui.InputAdornment position="start">
          <Mui.Typography variant="body2">{startLabel}</Mui.Typography>
        </Mui.InputAdornment>
      ),
      endAdornment: endLabel && (
        <Mui.InputAdornment position="end">
          <Mui.Typography variant="caption">{endLabel}</Mui.Typography>
        </Mui.InputAdornment>
      ),
      inputComponent:
        NumberFormatCustom as React.ElementType<Mui.InputBaseComponentProps>,
    }}
  />
);

const NumberFormatCustom = ({ inputRef, onChange, ...props }: any) => (
  <NumberFormat
    {...props}
    getInputRef={inputRef}
    onValueChange={(values: any) =>
      onChange({
        target: {
          name: props.name,
          value: values.value,
        },
      })
    }
    thousandSeparator
  />
);

export declare namespace spotField {
  export type Props = Mui.TextFieldProps & {
    startLabel: string;
    endLabel: string;
  };
}
