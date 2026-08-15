import Link from "next/link";

import { PROFILE } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="flex flex-row items-center justify-center flex-wrap">
          <Link
            href="/privacy"
            className="flex flex-row items-center my-[15px] hover:text-[rgb(112,66,248)] transition"
          >
            <span className="text-[15px]">Privacy</span>
          </Link>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {PROFILE.name}. All rights reserved.
        </div>
      </div>
    </div>
  );
};
