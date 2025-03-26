import React from "react";

import { formatDate } from "@/lib/utils";

interface DateProps {
  date: string;
}

const Date = ({ date }: DateProps) => {
  const formattedDate = formatDate(date);
  return <p className="text-muted-foreground my-3">{formattedDate}</p>;
};

export default Date;
