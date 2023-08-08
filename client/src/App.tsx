import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import User from './containers/user';
import { trpc } from './trpc';
import { useApp } from './useApp';
function App() {
  const { queryClient, trpcClient } = useApp();
  return (
    <trpc.Provider queryClient={queryClient} client={trpcClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <User />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
