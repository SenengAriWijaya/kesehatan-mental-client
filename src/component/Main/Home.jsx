import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import useSWR from "swr";
import axios from "axios";
import { useState, useMemo } from "react";

export default function Home() {
  const dataSensors = (url) => axios.get(url).then((res) => res.data.data);

  const { data: sensors, error: sensorsError } = useSWR(
    "http://localhost:3100/api/sensors",
    dataSensors,
    { refreshInterval: 1 }
  );
  const fetcher = async () => {
    const response = await axios.get("http://localhost:3100/api/allSensors");
    return response.data;
  };

  const { data } = useSWR("allDataSensors", fetcher);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(data?.length / rowsPerPage);

  const dataAllSensors = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data ? data.slice(start, end) : [];
    // return data.slice(start, end)
  }, [data, page]);

  if (!data) return <div>Loading...</div>;
  const dataMenu = [
    {
      key: "id",
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
      key: "sensor_co",
      label: "CO",
    },
    {
      key: "sensor_pm",
      label: "PM2.5",
    },
    {
      key: "kategori",
      label: "Kategori",
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
           {sensors && (
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
                        {sensors.sensor_co}
                      </h1>
                      <h2 className="font-bold text-[38px] font-barlow text-black">
                        ppm
                      </h2>
                    </div>
                    <div className="font-normal text-[16px] font-barlow text-gray">
                      {sensors.tanggal}
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
                        {sensors.sensor_pm}
                      </h1>
                      <h2 className="font-bold text-[28px] font-barlow text-black">
                        mg/m3
                      </h2>
                    </div>
                    <div className="font-normal text-[16px] font-barlow text-gray">
                      {sensors.tanggal}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
            <div className="p-4 mb-20">
              <Table
                aria-label="Example table with dynamic content"
                bottomContent={
                  <div className="flex w-full justify-center">
                    <Pagination
                      isCompact
                      showControls
                      showShadow
                      color="secondary"
                      page={page}
                      total={pages}
                      onChange={(page) => setPage(page)}
                    />
                  </div>
                }
                classNames={{
                  wrapper: "min-h-[222px]",
                }}
              >
                <TableHeader columns={dataMenu}>
                  {(menu) => (
                    <TableColumn
                      key={menu.key}
                      className="px-10 bg-second text-white"
                    >
                      {menu.label}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={dataAllSensors}>
                  {(item) => (
                    <TableRow key={item.key}>
                      {(columnKey) => (
                        <TableCell className="px-10">
                          {getKeyValue(item, columnKey)}
                        </TableCell>
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
