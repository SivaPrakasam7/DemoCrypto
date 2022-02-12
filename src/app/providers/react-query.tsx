import * as ReactQuery from "react-query";

export const ReactQueryProvider = ({ children }: Child) => {
  const queryClient = new ReactQuery.QueryClient();
  return (
    <ReactQuery.QueryClientProvider client={queryClient}>
      {children}
    </ReactQuery.QueryClientProvider>
  );
};
