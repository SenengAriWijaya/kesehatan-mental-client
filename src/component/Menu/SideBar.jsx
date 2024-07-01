import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [selectedMenu, setSelectedMenu] = useState();

  const menus = [
    {
      id: "menu_dashboard",
      name: "Home",
      Link: "/home",
    },
    {
      id: "menu_monitoring",
      name: "Form",
      Link: "/form",
    },
    {
      id: "menu_logdata",
      name: "Log Data",
      Link: "/logdata",
    },
  ];

  const handleMenu = (menu) => {
    setSelectedMenu(menu.id);
  };

  const logout = () => {
    localStorage.clear();
    // window.location.replace("/");
    window.location.reload()
  };

  return (
    <>
      <div className="fixed">
        <Card className="w-[321px] h-screen bg-lightbrown" radius="none">
          <CardHeader className="px-6">
            <div className="flex justify-between items-center">
              <Image
                src="/images/logo.svg"
                alt="Profile Picture"
                className="w-[100px] h-[100px] mr-3"
              />
              <div className=" -mt-5">
                <span className=" font-barlow font-bold text-[24px]">
                  Tranquil Mind
                </span>
              </div>
            </div>
          </CardHeader>

          <CardBody className="px-8">
            <div className="flex justify-center">
              <Image
                src="/images/sidebar/profile.svg"
                alt="Profile Picture"
                className="w-[80px] h-[80px] mr-3"
              />
            </div>
            <div className="flex justify-center">
              <span className=" font-barlow font-bold text-[24px]">
                {localStorage.getItem("name")}
              </span>
            </div>

            <div className="py-8">
              {menus.map((menu) => (
                <Link
                  key={menu.id}
                  to={menu.Link}
                  className="px-4 rounded-lg my-3 flex items-center justify-center cursor-pointer"
                  onClick={() => handleMenu(menu)}
                >
                  <span
                    className={`text-[26px] font-barlow ${
                      selectedMenu === menu.id
                        ? " font-bold"
                        : " text-darkgrey opacity-80 font-medium"
                    }`}
                  >
                    {menu.name}
                  </span>
                </Link>
              ))}
            </div>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button variant="light" className="py-2 px-2" radius="sm" onClick={() => logout()}>
              <div className="flex justify-center items-center cursor-pointer">
                <Image
                  src="/images/sidebar/logout.svg"
                  className="w-[40px] h-[80px] mr-3"
                />

                <span className="font-barlow font-medium text-[24px] text-darkgrey">
                  Log out
                </span>
              </div>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
