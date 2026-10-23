import { log } from "../../../lab/devlog"; // lab

function Header({ titulo }) {
  log("render", "Header", { titulo }); // lab
  return (
    <header>
      <h2>{titulo}</h2>
    </header>
  );
}

export default Header;
