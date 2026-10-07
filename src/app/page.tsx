export default function Home() {
  async function handleSubmit(data: FormData) {
    "use server";

    const name = data.get("name");
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    console.log(await response.json());
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        action={handleSubmit}
        className="bg-zinc-800 flex flex-col min-w-md p-5 gap-2 rounded-lg"
      >
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          className="h-10 bg-zinc-600 px-2 rounded"
          placeholder="Digite o nome"
        />
        <button type="submit" className="bg-emerald-700 h-10 rounded">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
