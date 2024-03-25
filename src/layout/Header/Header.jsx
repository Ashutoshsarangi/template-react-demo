import { Link } from "react-router-dom";
import useSidePanel from "../../context/sidepanel.context";

const Header = (props) => {
  const { showPanel, setShowPanel } = useSidePanel();

  const handleChangeTheme = (e) => {
    const body = document.querySelector("body");
    const dot = document.querySelector(".dot");
    if (e.target.checked) {
      dot.style.transform = "translateX(100%)";
    } else {
      dot.style.transform = "translateX(0)";
    }
    body.classList.toggle("dark");
  };

  return (
    <nav className="flex cursor-pointer bg-white text-2xl justify-between shadow border-sky-100 h-[80px] items-center p-4 dark:bg-slate-800 dark:text-white">
      <div className="flex justify-between w-full items-center">
        <i
          className="fa-solid fa-bars shadow p-2 bg-slate-100 lg:hidden"
          onClick={() => setShowPanel(!showPanel)}
        ></i>
        <div className="hidden lg:block">
          <Link to="/dashboard">Company Name</Link>{" "}
        </div>
        <div className="flex items-center space-x-10">
          <details className="dropdown dropdown-end">
            <summary className="inline-flex text-2xl">
              <i className="fa-regular fa-bell"></i>
              <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 dark:bg-slate-800 dark:text-slate-200">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
          <details className="dropdown dropdown-end">
            <summary className="inline-flex text-2xl">
              <i className="fa-regular fa-message"></i>
              <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52  dark:bg-slate-800 dark:text-slate-200">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
          <input
            type="checkbox"
            id="themeToggle"
            className="hidden"
            onChange={(e) => handleChangeTheme(e)}
          />
          <label
            htmlFor="themeToggle"
            className="flex items-center cursor-pointer"
          >
            <span className="relative">
              <span className="block w-10 h-6 bg-gray-400 rounded-full"></span>
              <span className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition"></span>
            </span>
          </label>
          <div className="dropdown dropdown-end ">
            <span className="flex items-center">
              <img
                tabIndex={0}
                className="h-[50px] w-[50px] rounded-full shadow ml-5"
                src="https://images.pexels.com/photos/19175643/pexels-photo-19175643/free-photo-of-woman-in-coat-standing-by-wall-in-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </span>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52  dark:bg-slate-800 dark:text-slate-200"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <a>Log In</a>
              </li>
              <li>
                <a>Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
