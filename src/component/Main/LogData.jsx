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
// import { users } from "../Data/dataUsers";

export default function LogData() {
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    if (!localStorage.getItem("name") && !localStorage.getItem("username")) {
      console.log("anda belum login");
      window.location.replace("/");
    }
  });

  const fetcher = async () => {
    const response = await axios.get("http://localhost:3000/api/allSensors");
    return response.data.data;
    // console.log(response);
  };

  const { data } = useSWR("allDataSensors", fetcher);

  const rowsPerPage = 10;

  const pages = Math.ceil(data?.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data ? data.slice(start, end) : [];
  }, [data, page]);

  if (!data) return <div>Loading...</div>;

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
              Dashboard Log Data
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
          <div className="card mt-8">
            <div className="font-barlow font-bold text-[30px] px-6 py-3 text-darkturquoise">
              Log Data Sensors
            </div>
            <div className=" px-6 pb-6">
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
