export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Adding a small comment to trigger a deployment */}
      <p>this is {process.env.WHERE_AM_I}</p>
    </main>
  );
}
