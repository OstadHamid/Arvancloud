import { ChangeEventHandler, useState } from "react";
import { MoonIcon, SunIcon } from "./icons/IconPack";

const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");


if (storedTheme) {
    storedTheme === "dark" ? setDark() : setLight();
} else {
    setLight();
}


const DarkMode = () => {
    const [checked, setChecked] = useState(storedTheme === "dark");

    const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(checked)
        if (e.target.checked) {
            setDark();
            setChecked(true);
        } else {
            setLight();
            setChecked(false);
        }
    };

    return (
        <div className="toggle-theme-wrapper">
            <input
                type="checkbox"
                id="checkbox"
                onChange={toggleTheme}
                defaultChecked={storedTheme === "dark"}
            />
            <label className={`toggle-theme ${checked ? "sun" : "moon"}`} htmlFor="checkbox">
                {
                    checked === true ? <SunIcon /> : <MoonIcon />
                }
            </label>
        </div>
    );
};

export default DarkMode;