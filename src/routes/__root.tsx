import { createRootRoute, Outlet } from '@tanstack/react-router';
import { DevSourceInspector } from '@/components/dev-source-inspector';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Outlet />
      </div>
      {import.meta.env.DEV && <DevSourceInspector />}
    </>
  ),
});
