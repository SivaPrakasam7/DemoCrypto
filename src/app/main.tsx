import * as Router from "react-router-dom";
import * as Routes from "src/app/routes";
import * as Themes from "src/themes";
import * as Providers from "src/app/providers";

export const Main = () => (
  <Themes.Main>
    <Providers.ErrorBoundary>
      <Providers.FirebaseProvider>
        <Providers.ReactQueryProvider>
          <Router.BrowserRouter>
            <Routes.Main />
          </Router.BrowserRouter>
        </Providers.ReactQueryProvider>
      </Providers.FirebaseProvider>
    </Providers.ErrorBoundary>
  </Themes.Main>
);
