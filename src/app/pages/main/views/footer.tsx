import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

export const Footer = () => (
  <Mui.Grid container sx={{ m: 1 }}>
    <Mui.Grid
      item
      xs={12}
      sm={6}
      md={4}
      alignItems="center"
      justifyContent="center"
    >
      <Mui.Stack spacing={2} justifyContent="center">
        <Mui.Typography variant="h6" color="primary.main">
          Contact us
        </Mui.Typography>
        <Mui.Typography variant="body1">
          Any quries contact below links
        </Mui.Typography>
        <Mui.Stack direction="row" spacing={1}>
          <Mui.IconButton
            component={Router.Link}
            to="mailto:prakasams22@gmail.com"
          >
            <MuiIcons.Email />
          </Mui.IconButton>
          <Mui.IconButton
            component={Router.Link}
            to="https://wa.me/916374399577"
          >
            <MuiIcons.WhatsApp />
          </Mui.IconButton>
          <Mui.IconButton
            component={Router.Link}
            to="https://www.linkedin.com/in/siva-prakasam"
          >
            <MuiIcons.LinkedIn />
          </Mui.IconButton>
          <Mui.IconButton
            component={Router.Link}
            to="https://github.com/SivaPrakasam7"
          >
            <MuiIcons.GitHub />
          </Mui.IconButton>
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Grid>
    <Mui.Grid
      item
      xs={12}
      sm={6}
      md={4}
      alignItems="center"
      justifyContent="center"
    >
      <Mui.Stack spacing={1} justifyContent="center">
        <Mui.Typography variant="h6" color="primary.main">
          Quick Links
        </Mui.Typography>
        <Mui.Link
          component={Router.Link}
          to=""
          sx={{ color: "text.secondary" }}
        >
          Help
        </Mui.Link>
        <Mui.Link
          component={Router.Link}
          to=""
          sx={{ color: "text.secondary" }}
        >
          About us
        </Mui.Link>
      </Mui.Stack>
    </Mui.Grid>
    <Mui.Grid
      item
      xs={12}
      sm={6}
      md={4}
      alignItems="center"
      justifyContent="center"
    >
      <Mui.Stack spacing={2} justifyContent="center">
        <Mui.Typography variant="h6" color="primary.main">
          Subscribe
        </Mui.Typography>
        <Mui.Typography variant="body1">
          Get notifications by Subscribe
        </Mui.Typography>
        <Mui.TextField
          label="Email"
          name="email"
          size="small"
          sx={{ maxWidth: 300 }}
        />
        <Mui.Button variant="contained" sx={{ width: "fit-content" }}>
          Subscribe
        </Mui.Button>
      </Mui.Stack>
    </Mui.Grid>
  </Mui.Grid>
);
