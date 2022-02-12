import * as Mui from "@mui/material";
import * as ReactError from "react-error-boundary";

const ErrorComponent = ({
  error,
  resetErrorBoundary,
}: ReactError.FallbackProps) => (
  <Mui.Card
    component={Mui.Stack}
    justifyContent="center"
    alignItems="center"
    sx={{ height: "100vh", p: 1 }}
  >
    <Mui.Stack
      alignSelf="center"
      spacing={3}
      sx={{ maxWidth: "sm", width: "100%" }}
    >
      {/* <Mui.Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ minWidth: "100%" }}
      > */}
        <Mui.Typography variant="h6" color="error">
          {error.name}
        </Mui.Typography>
        {/* <Mui.Typography variant="caption" color="text.secondary">
          {new Date().toLocaleString()}
        </Mui.Typography>
      </Mui.Stack> */}
      <Mui.Typography variant="body2">{error.message}</Mui.Typography>
      <Mui.Button
        onClick={resetErrorBoundary}
        variant="contained"
        sx={{ width: "fit-content", alignSelf: "flex-end" }}
      >
        Try again
      </Mui.Button>
    </Mui.Stack>
  </Mui.Card>
);

export const ErrorBoundary = ({ children }: Child) => (
  <ReactError.ErrorBoundary FallbackComponent={ErrorComponent}>
    {children}
  </ReactError.ErrorBoundary>
);
