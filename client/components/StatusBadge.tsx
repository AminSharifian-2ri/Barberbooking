import { StatusIcon } from "@/constants";
import clsx from "clsx";
import Image from "next/image";


export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={` p-2 ${clsx("status-badge", {
        "bg-appointments": status === "scheduled",
        "bg-pending": status === "pending",
        "bg-cancelled": status === "cancelled",
      })}`}
    >
      <Image
        src={StatusIcon[status]}
        alt="status"
        width={24}
        height={24}
        className="h-fit w-4"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-red-500": status === "cancelled",
        })}
      >
                
              </p>
    </div>
  );
};