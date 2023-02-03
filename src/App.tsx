import {
  Box,
  Container,
  CssBaseline,
  CssVarsProvider,
  Grid,
  Stack,
  Typography,
} from "@mui/joy"
import ReactCodeMirror from "@uiw/react-codemirror"
import { EditorView } from "codemirror"
import "./App.css"

const theme = EditorView.theme({
  "&": { height: "100%" },
  ".cm-gutter,.cm-content": { height: "100%" },
  ".cm-scroller": { overflow: "auto", height: "100%" },
})

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Container maxWidth="md">
        <Stack minHeight="100vh" gap={2}>
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
          <Box flexGrow={1} position="relative" id="grow">
            <Box position="absolute" id="abs" width="100%" height="100%">
              <ReactCodeMirror
                value="console.log('hello world!')"
                theme={theme}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </CssVarsProvider>
  )
}

export default App
