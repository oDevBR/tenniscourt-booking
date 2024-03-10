import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex-col place-items-center">
        <h1 className="text-gray-700 font-bold leading-10">Hello World!</h1>
        <Button>shadcn/ui</Button>
      </div>
    </main>
  );
}
