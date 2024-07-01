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
import { useState, useMemo, useEffect } from "react";
// import { sensors } from "../Data/dataSensors";

export default function Home() {
  // const [sensors, setSensors] = useState([])

  useEffect(() => {
    if (!localStorage.getItem("name") && !localStorage.getItem("username")) {
      console.log("anda belum login");
      window.location.replace("/");
    }
  });
  const dataSensors = (url) => axios.get(url).then((res) => res.data.data);

  const { data: Sensors } = useSWR(
    "http://localhost:3000/api/sensors",
    dataSensors,
    { refreshInterval: 1 }
  );

  const fetcher = async () => {
    const response = await axios.get("http://localhost:3000/api/allSensors");
    return response.data.data;
    // console.log(response);
  };

  const { data } = useSWR("allDataSensors", fetcher);

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(data?.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data ? data.slice(start, end) : [];
  }, [data, page]);

  if(!data) return <div>Loading...</div>

  const menus = [
    {
      key: "id",
      label: "No",
    },
    {
      key: "tanggal",
      label: "Tanggal",
    },
    {
      key: "detak_jantung",
      label: "Detak Jantung",
    },
    {
      key: "kelembapan_kulit",
      label: "Kelembapan Kulit",
    },
    {
      key: "status_jantung",
      label: "Status Jantung",
    },
    {
      key: "status_kulit",
      label: "Status Kulit",
    },
    {
      key: "status_stres",
      label: "Status Stres",
    },
  ];
  return (
    <>
      <div>
        <div className="ml-[321px] py-8 px-10">
          <div className="flex justify-between items-center">
            <span className="font-barlow font-bold text-[36px]">
              Dashboard Home
            </span>
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-[361px] px-10 h-[40px] rounded-[5px] bg-lightturquoise opacity-70 pr-10 placeholder-black placeholder-opacity-70"
                placeholder="Search"
              />
              <div className="absolute left-2">
                <Image
                  src="/images/main/search.svg"
                  alt="Search Icon"
                  className="cursor-pointer w-[25px] h-[36px]"
                />
              </div>
            </div>
          </div>
          {Sensors && (
            <div className="grid grid-cols-12 gap-8 pt-8">
              <Card className="col-span-4 card">
                <div className="px-6 py-3">
                  <div className=" flex items-center justify-between">
                    <span className=" font-barlow font-medium text-darkgrey opacity-80 text-[22px]">
                      Detak Jantung
                    </span>
                    <Image
                      src="/images/main/bottom_arrow.svg"
                      alt="Profile Picture"
                      className="w-[22px] h-[22px]"
                    />
                  </div>
                  <div className=" border-t-2 border-darkgrey opacity-40 mt-2"></div>
                  <div className="flex item items-end justify-center py-4">
                    <div className="font-barlow font-bold text-[52px] text-black opacity-80 mr-2">
                      {Sensors.detak_jantung}
                    </div>
                    <p className="font-barlow font-bold text-darkorange text-[30px]">
                      Bpm
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="col-span-4 card">
                <div className="px-6 py-3">
                  <div className=" flex items-center justify-between">
                    <span className=" font-barlow font-medium text-darkgrey opacity-80 text-[22px]">
                      Kelembapan Kulit
                    </span>
                    <Image
                      src="/images/main/top_arrow.svg"
                      alt="Profile Picture"
                      className="w-[22px] h-[22px]"
                    />
                  </div>
                  <div className=" border-t-2 border-darkgrey opacity-40 mt-2"></div>
                  <div className="flex item items-end justify-center py-4">
                    <div className="font-barlow font-bold text-[52px] text-black opacity-80 mr-2">
                      {Sensors.kelembapan_kulit}
                    </div>
                    <p className="font-barlow font-bold text-darkturquoise text-[30px]">
                      µ
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="col-span-4 card">
                <div className="px-6 py-3">
                  <div className=" flex items-center justify-between">
                    <span className=" font-barlow font-medium text-darkgrey opacity-80 text-[22px]">
                      Status
                    </span>
                    <Image
                      src="/images/main/bottom_arrow.svg"
                      alt="Profile Picture"
                      className="w-[22px] h-[22px]"
                    />
                  </div>
                  <div className=" border-t-2 border-darkgrey opacity-40 mt-2"></div>
                  <div className="flex item items-end justify-center py-4">
                    <div className="font-barlow font-bold text-[40px] text-black opacity-80 mr-2">
                      {Sensors.status_stres}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
          <div className="card my-6">
            <div className="font-barlow font-bold text-[30px] px-6 py-3 text-darkturquoise">
              Log Data Sensors
            </div>
            <div className=" px-6">
              <Table
                aria-label="Example table with client side pagination"
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
                <TableHeader columns={menus}>
                  {(menu) => (
                    <TableColumn
                      key={menu.key}
                      className=" bg-darkorange text-lightwhite"
                    >
                      {menu.label}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={items}>
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
