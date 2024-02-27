import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue} from "@nextui-org/react";
import useSWR from "swr";


export default function Home() {
  const [page, setPage] = useState(1);
  const rowperPage = 10;

  const dataMenu = [
    {
      key: "No",
      label: "No",
    },
    {
      key: "tanggal",
      label: "Tanggal",
    },
    {
      key: "waktu",
      label: "Waktu",
    },
    {
      key: "jam",
      label: "Jam",
    },
    {
      key: "co",
      label: "CO",
    },
    {
      key: "pm2.5",
      label: "PM2.5",
    },
    {
      key: "kategori",
      label: "Kategori",
    },
  ];

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  return (
    <>
      <div className="bg-[#F3F2F7]">
        <div className="ml-[300px] p-8">
          <div className="relative flex items-center">
            <input
              type="text"
              className="card w-[750px] py-2 px-3 font-normal text-[16px] font-barlow"
              placeholder="Cari Disini"
            />
            <div className="absolute right-[440px]">
              <Image
                src="/icon/search.svg"
                alt="Search Icon"
                className="cursor-pointer"
              />
            </div>
            <div className="pl-20 ">
              <div className="bg-lightBlue p-2 rounded-xl cursor-pointer">
                <Image
                  src="/icon/Icon_Notifikasi.svg"
                  alt="Search Notifikasi"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="ml-10">
              <Image src="/icon/separator.svg" className="cursor-pointer" />
            </div>
          </div>
          <div className="py-6">
            <h1 className="font-semibold text-[32px] font-barlow text-black">
              Dashboard
            </h1>
            <p className=" font-medium text-[18px] font-barlow text-gray">
              Halo, Selamat datang kembali!
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 pb-6">
            <div className=" col-span-6">
              <div className="card py-6 px-6 flex items-center ">
                <div className="font-bold text-[40px] font-barlow text-black">
                  CO Sensor
                </div>
                <div className=" pl-14">
                  <Image
                    src="/icon/Icon_Co.svg"
                    alt="Image Co"
                    className="cursor-pointer"
                  />
                </div>
                <div className="pl-6">
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-[40px] font-barlow text-black">
                      8.36
                    </h1>
                    <h2 className="font-bold text-[38px] font-barlow text-black">
                      ppm
                    </h2>
                  </div>
                  <div className="font-normal text-[16px] font-barlow text-gray">
                    12/12/2024
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-6">
              <div className="card py-6 px-6 flex items-center ">
                <div className="font-bold text-[32px] font-barlow text-black">
                  PM 2.5 Sensor
                </div>
                <div className=" pl-14">
                  <Image
                    src="/icon/Icon_Pm.svg"
                    alt="Image Co"
                    className="cursor-pointer"
                  />
                </div>
                <div className="pl-6">
                  <div className="flex items-center gap-2">
                    <h1 className="font-bold text-[30px] font-barlow text-black">
                      0.01
                    </h1>
                    <h2 className="font-bold text-[28px] font-barlow text-black">
                      mg/m3
                    </h2>
                  </div>
                  <div className="font-normal text-[16px] font-barlow text-gray">
                    12/12/2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div className="p-6 font-bold text-[22px] font-barlow text-black">
                Log Data
              </div>
              <div className="pr-3">
                <Image
                  src="/icon/Icon_Items.svg"
                  alt="Icon Items"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className=" p-4">
              <Table aria-label="Example table with dynamic content">
                <TableHeader columns={dataMenu}>
                  {(menu) => (
                    <TableColumn key={menu.key}>{menu.label}</TableColumn>
                  )}
                </TableHeader>
                <TableBody items={rows}>
                  {(item) => (
                    <TableRow key={item.key}>
                      {(columnKey) => (
                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
