import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Suspense } from "react"
import Posts from "./Posts"


function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <Suspense fallback={<div />}>
        <QueryClientProvider client={queryClient}>
          <Posts />
        </QueryClientProvider>
      </Suspense>
    </>
  )
}

export default App
