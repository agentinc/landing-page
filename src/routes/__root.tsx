import { createRootRoute, Outlet } from '@tanstack/react-router';
import { CursorGlow } from '@/components/cursor-glow';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Outlet />
    </div>
  ),
});
