// src/lib/tanstack.ts
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Good defaults for web apps
        // staleTime: 60 * 1000, // 1 minute
        // gcTime: 5 * 60 * 1000, // 5 minutes
        // retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  })

export default queryClient;

// // src/lib/providers.tsx
// import { QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { useState } from 'react';

// export function Providers({ children }: { children: React.ReactNode }) {
//   // This ensures each request gets its own cache
//   const [queryClient] = useState(() => getQueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// }

// // src/app/layout.tsx
// import { Providers } from '@/lib/providers';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }

// Example API hooks setup (src/hooks/api/useUsers.ts)
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';

// Define types
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// Define query keys
// export const userKeys = {
//   all: ['users'] as const,
//   lists: () => [...userKeys.all, 'list'] as const,
//   list: (filters: string) => [...userKeys.lists(), { filters }] as const,
//   details: () => [...userKeys.all, 'detail'] as const,
//   detail: (id: number) => [...userKeys.details(), id] as const,
// };

// Example query hook
// export function useUsers(filters?: string) {
//   return useQuery({
//     queryKey: userKeys.list(filters ?? ''),
//     queryFn: async () => {
//       const { data } = await axios.get<User[]>('/api/users', {
//         params: { filters },
//       });
//       return data;
//     },
//   });
// }

// Example mutation hook
// export function useCreateUser() {
//   const queryClient = useQueryClient();
  
//   return useMutation({
//     mutationFn: async (newUser: Omit<User, 'id'>) => {
//       const { data } = await axios.post<User>('/api/users', newUser);
//       return data;
//     },
//     onSuccess: () => {
//       // Invalidate and refetch users list
//       queryClient.invalidateQueries({
//         queryKey: userKeys.lists(),
//       });
//     },
//   });
// }

// // Example usage in a component
// function UsersList() {
//   const { data: users, isLoading, error } = useUsers();
//   const createUser = useCreateUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       {users?.map(user => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//       <button
//         onClick={() => 
//           createUser.mutate({
//             name: 'New User',
//             email: 'new@example.com'
//           })
//         }
//       >
//         Add User
//       </button>
//     </div>
//   );
// }