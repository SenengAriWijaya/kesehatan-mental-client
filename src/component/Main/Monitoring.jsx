import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Monitoring() {
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
              Monitoring
            </h1>
            <p className=" font-medium text-[18px] font-barlow text-gray">
              Detail data monitoring
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
                Detail Data
              </div>
              <div className="pr-3">
                <Image
                  src="/icon/Icon_Items.svg"
                  alt="Icon Items"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
