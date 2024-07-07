import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  user,
} from "@nextui-org/react";
import useSWR from "swr";
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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { useState, useMemo, useEffect } from "react";
// import { users } from "../Data/dataUsers";

export default function FormData() {
  const [tanggal, setTanggal] = useState("");
  const [nama, setNama] = useState("");
  const [detakJantung, setDetakJantung] = useState("");
  const [kelembapanKulit, setKelembapanKulit] = useState("");
  const [statusStres, setStatusStres] = useState("");
  const modalSuccess = useDisclosure();
  const openModal = () => {
    modalSuccess.onOpen();
  };
  

  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users", {
        tanggal: tanggal,
        nama: nama,
        detak_jantung: detakJantung,
        kelembapan_kulit: kelembapanKulit,
        status_stres: statusStres,
      });
      setTanggal("");
      setNama("");
      setDetakJantung("");
      setKelembapanKulit("");
      setStatusStres("");
      openModal();
      console.log("Data successfully saved!");
    } catch (e) {
      console.log("Error saving data", e);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("name") && !localStorage.getItem("username")) {
      console.log("anda belum login");
      window.location.replace("/");
    }
  });

  const fetcher = async () => {
    const response = await axios.get("http://localhost:3000/api/users");
    return response.data.data;
  };

  // const { users } = useSWR("users", fetcher);
  const { data } = useSWR("allDataUsers", fetcher);

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(data?.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data ? data.slice(start, end).map((item, index) => ({
      ...item,
      no:start + index + 1
    })) : [];
  }, [data, page]);

  if (!data) return <div>Loading...</div>;
  const menus = [
    {
      key: "no",
      label: "No",
    },
    {
      key: "tanggal",
      label: "Tanggal",
    },
    {
      key: "nama",
      label: "Nama",
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
              Dashboard Form
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
          <div className="card mt-8 py-4">
            <span className="px-8 font-barlow font-bold text-[26px]">
              Create New Data
            </span>
            <form action="" onSubmit={saveData}>
              <div className="px-8 py-4 grid grid-cols-12 gap-16">
                <div className="col-span-6">
                  {/* <div> */}
                  <input
                    type="date"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    className=" bg-lightturquoise px-4 py-2 opacity-60 rounded-[5px] col-span-6 w-full placeholder-black placeholder-opacity-70"
                    placeholder="Tanggal"
                  />
                  <input
                    type="number"
                    value={detakJantung}
                    onChange={(e) => setDetakJantung(e.target.value)}
                    className=" bg-lightturquoise opacity-60 px-4 py-2 mt-6 rounded-[5px] col-span-6 w-full placeholder-black placeholder-opacity-70"
                    placeholder="Detak Jantung"
                  />
                  <input
                    type="text"
                    value={statusStres}
                    onChange={(e) => setStatusStres(e.target.value)}
                    className=" bg-lightturquoise opacity-60 px-4 py-2 mt-6 rounded-[5px] col-span-6 w-full placeholder-black placeholder-opacity-70"
                    placeholder="Status Stres"
                  />
                  {/* </div> */}
                </div>
                <div className="col-span-6">
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className=" bg-lightturquoise opacity-60 px-4 py-2 rounded-[5px] col-span-6 w-full placeholder-black placeholder-opacity-70"
                    placeholder="Nama"
                  />
                  <input
                    type="number"
                    value={kelembapanKulit}
                    onChange={(e) => setKelembapanKulit(e.target.value)}
                    className=" bg-lightturquoise opacity-60 px-4 py-2 rounded-[5px] mt-6 col-span-6 w-full placeholder-black placeholder-opacity-70"
                    placeholder="Kelembapan Kulit"
                  />
                  <div className="mt-6 flex items-center justify-center">
                    <Button
                      radius="sm"
                      type="submit"
                      className=" bg-darkorange px-4 flex  justify-between w-[200px]"
                    >
                      <span className=" text-lightwhite font-bold font-barlow text-[16px]">
                        Submit
                      </span>
                      <Image
                        src="/images/main/right_arrow.svg"
                        alt="Search Icon"
                        className="cursor-pointer w-[25px] h-[36px]"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            <Modal
              isOpen={modalSuccess.isOpen}
              onClose={modalSuccess.onClose}
              size="md"
              placement="center"
              radius="sm"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalBody className=" text-hijau font-semibold text-base">
                      Data berhasil di simpan
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        variant="light"
                        size="sm"
                        className="px-0"
                        onPress={onClose}
                      ><span className=" text-sm font-semibold text-darkorange">Ok</span></Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <div className="card my-6">
            <div className="font-barlow font-bold text-[30px] px-6 py-3 text-darkturquoise">
              Log Data users
            </div>
            <div className=" px-6 pb-5">
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
