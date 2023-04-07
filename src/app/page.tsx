export const metadata = {
  title: "Hello from Windi CSS!",
};

export default function HomePage() {
  return (
    <section className="max-w-5xl flex justify-center items-center w-full">
      <div className="border-4 hover:border-6 cursor-pointer border-black p-4">
        <h1 className="heading">Hello from Windi CSS</h1>
      </div>
    </section>
  );
}
