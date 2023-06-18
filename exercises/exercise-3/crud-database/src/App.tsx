import './App.css'
import Layout from './components/Layout'
import DataTable from './components/DataTable'
import { QueryClient, QueryClientProvider } from 'react-query'

const clientQuery = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={clientQuery}>
        <Layout>
          <DataTable></DataTable>
        </Layout>
      </QueryClientProvider>
    </>
  )
}

export default App
