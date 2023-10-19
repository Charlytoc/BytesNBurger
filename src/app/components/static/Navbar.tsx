import { svgs } from "@/app/resources/svgs";
import Link from "next/link";

export default function Navbar ( ) {
    return <nav className="flex justify-between p-2 items-center navbar-component">
        <div>
            {svgs.gearIcon}
        </div>
        <div>
            <h3 >Bytes N Burger</h3>
        </div>
        <div>
            <button>
                {svgs.cartIcon}
            </button>
            {/* <Link href={"/menu"}>=</Link > */}
            {/* <Link href={"/menu"}>Login</Link > */}
        </div>
    </nav>
}