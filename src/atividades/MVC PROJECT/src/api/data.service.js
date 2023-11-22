const dataService = {
  carregarDados: async () => {
    try {
      const responde = await fetch("http://localhost:8000/api/data");
      const obj = await responde.json();
      return obj;
    } catch (error) {
      console.error(`Deu erro aí ô: ${error}`);
      return [];
    }
  },
  salvarDados: async (novosDados) => {
    try {
      const responde = await fetch("http://localhost:8000/api/save", {
        method: "POST",
        headers: { "content-type": "application/json" },
      });
      const obj = await responde.json();
      return obj;
    } catch (error) {
      console.error(`Deu erro aí ô: ${error}`);
      return [];
    }
  },
};

export { dataService };
