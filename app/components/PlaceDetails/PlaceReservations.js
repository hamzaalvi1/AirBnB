"use client";
import { useMemo, useState, useEffect } from "react";
import { InitialDateRange } from "@/app/config/constants";
import { differenceInDays, eachDayOfInterval } from "date-fns";
import { useAuthModal } from "@/app/hooks";
import { AuthConstants } from "@/app/config/constants";
import { Calender } from "../Calender";
import { Box, Text } from "@chakra-ui/react";
import { placeReservationBooking } from "./styles";

export function PlaceReservations(props) {
  const { listDetails, currentUser, reservations = [] } = props;
  const { onOpen } = useAuthModal();
  console.log(listDetails, "listDetails");
  const [dateRange, setDateRange] = useState(InitialDateRange);
  const [totalPrice, setTotalPrice] = useState(listDetails?.price || 0);

  const reservedDates = useMemo(() => {
    let dates = [];
    reservations.forEach((reservation) => {
      const selectedDateRange = eachDayOfInterval({
        start: reservation?.startDate,
        end: reservation?.endDate,
      });
      dates = [...dates, ...selectedDateRange];
    });
    return dates;
  }, [reservations]);
  const handleDateChanged = (range) => setDateRange(range);
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const totalDays = differenceInDays(
        dateRange.startDate,
        dateRange.endDate
      );

      if (totalDays && listDetails?.price) {
        setTotalPrice(totalDays * listDetails?.price);
      } else {
        setTotalPrice(listDetails?.price);
      }
    }
  }, [dateRange, listDetails?.price]);
  const onReservationCreated = () => {
    if (!currentUser) {
      onOpen({ title: AuthConstants.LOGIN });
      return;
    }
    //reservation api called
  };

  return (
    <Box as="div" sx={placeReservationBooking}>
      <Calender
        ranges={dateRange}
        handleDateChanged={handleDateChanged}
        reservedDates={reservedDates}
      />
    </Box>
  );
}
