import * as Mui from "@mui/material";

export const StackLabel = ({ label, value, valueColor }: stackLabel.Props) => (
  <Mui.Stack spacing={1}>
    <Mui.Typography variant="caption" color="text.secondary">
      {label}
    </Mui.Typography>
    <Mui.Typography variant="body2" color={valueColor}>
      {value}
    </Mui.Typography>
  </Mui.Stack>
);

export declare namespace stackLabel {
  export interface Props {
    label: string;
    value: string;
    valueColor?: string;
  }
}
