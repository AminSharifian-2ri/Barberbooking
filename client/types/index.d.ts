declare type Status = "pending" | "scheduled" | "cancelled";

declare type Appointment  = {
  username: string;
  phone: string;
  time: Date;
  status: Status;
  number: number;
  explains:string;
  cancellationReason:string
}

declare type CreateAppointmentParams = {
    username: string;
    phone: string;
    time: Date;
    status: Status;
    number: number;
    explains:string;
    cancellationReason:string
  };

  declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };