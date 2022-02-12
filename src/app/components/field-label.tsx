import * as Mui from "@mui/material";
import * as React from "react";

export const FieldLabel = ({ label, children }: fieldLabel.Props & Child) => (
  <Mui.Stack spacing={1}>
    <Mui.Typography variant="body2" color="text.secondary">
      {label}
    </Mui.Typography>
    {children}
  </Mui.Stack>
);

export declare namespace fieldLabel {
  export interface Props {
    label: React.ReactNode;
  }
}
