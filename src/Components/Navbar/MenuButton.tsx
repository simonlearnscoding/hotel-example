import { GiHamburgerMenu } from "react-icons/gi";
import { Language } from "./Language";
export function MenuButton() {
  return (
    <div className="p-8 pr-3 cursor-pointer">
      <GiHamburgerMenu size={"2.5em"} />
    </div>
  );
}
