export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="h-8 w-48 animate-pulse rounded-full bg-white/10" />
      <div className="mt-6 h-4 w-full max-w-xl animate-pulse rounded-full bg-white/10" />
      <div className="mt-3 h-4 w-full max-w-lg animate-pulse rounded-full bg-white/10" />
    </div>
  );
}
