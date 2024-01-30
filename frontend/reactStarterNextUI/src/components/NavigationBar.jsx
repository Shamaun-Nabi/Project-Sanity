import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { CiLogout, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { userContext } from "../Context/userContext";
import Logo from "../assets/logo.png";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setloggedUser } = useContext(userContext);
  const { loginWithPopup, user, logout } = useAuth0();
  // setloggedUser(user);
  // console.log("navbar", user);

  const menuItems = [
    {
      id: crypto.randomUUID(),
      name: "Home",
      url: "/home",
    },
    {
      id: crypto.randomUUID(),
      name: "About",
      url: "/about",
    },
    {
      id: crypto.randomUUID(),
      name: "Projects",
      url: "/projects",
    },
    {
      id: crypto.randomUUID(),
      name: "News",
      url: "/news",
    },
  ];
  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <img src={Logo} className="w-[40px] h-[40px]" alt="" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-red-400 font-semibold transition-all bg-black  duration-700 px-5 py-2 roun"
                    : "text-black"
                }
                to={item.url}
              >
                {item.name}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          {user ? (
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Avatar isBordered src={user.picture} />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="profile">
                    <div className="flex gap-2 items-center">
                      <CiUser />
                      {user.nickname}
                      {/* {loggedUser.nickname} */}
                    </div>
                  </DropdownItem>
                  <DropdownItem key="logout">
                    <div
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                      className="flex gap-2 items-center"
                    >
                      <CiLogout />
                      Logout
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          ) : (
            <NavbarItem className="">
              <Button
                onClick={() => loginWithPopup()}
                color="danger"
                variant="flat"
              >
                Login
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-red-400 font-semibold transition-all bg-black  duration-700 px-5 py-2 roun"
                    : "text-black"
                }
                to={item.url}
              >
                {item.name}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
