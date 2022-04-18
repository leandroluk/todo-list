import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { TodosPage } from './components/pages'
import reportWebVitals from './reportWebVitals'
import { todosStore } from './store'
import { theme } from './theme'

todosStore.getState().list()

ReactDOM
  .createRoot(document.getElementById('#') as HTMLElement)
  .render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <TodosPage />
      </ChakraProvider>
    </StrictMode>
  )

reportWebVitals()
