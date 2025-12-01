import { ThemeProvider } from "./ThemeProvider";
import { Navbar } from "./Navbar";
import { Content } from "./Content";


function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
}

export default App;
