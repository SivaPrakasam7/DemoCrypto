import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Formik from "formik";
import * as FormikMui from "formik-mui";
import * as Components from "src/app/components";

export const FormField = (props: Mui.TextFieldProps) => (
  <Formik.Field
    {...props}
    component={props.type === "password" ? MuiPasswordField : MuiTextField}
  />
);

export const MuiTextField = ({ label, ...props }: FormikMui.TextFieldProps) => (
  <Components.FieldLabel label={label}>
    <Mui.TextField
      fullWidth
      size="small"
      {...FormikMui.fieldToTextField(props)}
    />
  </Components.FieldLabel>
);

export const MuiPasswordField = ({
  label,
  ...props
}: FormikMui.TextFieldProps) => {
  const [visible, setVisible] = React.useState(true);
  const changeVisibility = () => setVisible(!visible);
  return (
    <Components.FieldLabel label={label}>
      <Mui.TextField
        fullWidth
        size="small"
        InputProps={{
          endAdornment: (
            <Mui.InputAdornment position="end">
              <Mui.IconButton onClick={changeVisibility}>
                {visible ? (
                  <MuiIcons.VisibilityOutlined color="primary" />
                ) : (
                  <MuiIcons.VisibilityOffOutlined color="primary" />
                )}
              </Mui.IconButton>
            </Mui.InputAdornment>
          ),
        }}
        {...FormikMui.fieldToTextField(props)}
        type={visible ? "password" : "text"}
      />
    </Components.FieldLabel>
  );
};
