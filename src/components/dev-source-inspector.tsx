import { TanStackDevtools } from '@tanstack/react-devtools';

export function DevSourceInspector() {
  return (
    <TanStackDevtools
      config={{ position: 'bottom-right' }}
      eventBusConfig={{ connectToServerBus: false }}
    />
  );
}
