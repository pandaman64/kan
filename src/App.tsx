import {
  Container,
  CssBaseline,
  CssVarsProvider,
  Grid,
  Typography,
} from "@mui/joy"

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container>
          <Grid xs={4}>
            <Typography level="h2">Input</Typography>
          </Grid>
          <Grid xs={8}>
            <Typography level="body1">Foobar</Typography>
          </Grid>
          <Grid xs={4}>
            <Typography level="h2">Transform</Typography>
          </Grid>
          <Grid xs={8}>
            <Typography level="body1">Foobar</Typography>
          </Grid>
        </Grid>
      </Container>
    </CssVarsProvider>
  )
}

export default App
