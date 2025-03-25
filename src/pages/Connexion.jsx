import { useState } from "react";

export default function Connexion() {
  const [user, setUser] = useState({ identifiant: "", motDePasse: "" });

  function handleChange(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value.trim() }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Identifiant: ", user.identifiant);
    console.log("Mot de passe: ", user.motDePasse);
    setUser({ identifiant: "", motDePasse: "" });
  }

  return (
    <div className="h-full flex items-center">
      <form
        onSubmit={handleSubmit}
        className="px-4 h-96 bg-white flex flex-col justify-center border-1 w-[40dvw] min-w-[540px] max-w-[700px] mx-auto rounded-sm"
      >
        <p className="text-center py-2 text-3xl font-bold">Connectez-vous</p>
        <div className="form-style">
          <label className="label">Identifiant</label>
          <input
            type="text"
            name="identifiant"
            value={user.identifiant}
            onChange={(e) => handleChange(e)}
            className="input"
          />
        </div>
        <div className="form-style">
          <label className="label">Mot de passe</label>
          <input
            type="password"
            name="motDePasse"
            value={user.motDePasse}
            onChange={(e) => handleChange(e)}
            className="input"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-800 mt-6 h-[12%] text-white font-medium text-xl rounded-sm hover:cursor-pointer hover:bg-custom-yellow transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
