export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>this is {process.env.WHERE_AM_I}</p>
      <p>This is a Preview environment</p> {/* Extra line to trigger deployment */}
    </main>
  );
}
