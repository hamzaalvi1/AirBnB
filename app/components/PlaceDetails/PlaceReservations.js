"use client";
import { useMemo, useState, useEffect } from "react";
import { InitialDateRange } from "@/app/config/constants";
import { addReservations } from "@/app/actions";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { useAuthModal } from "@/app/hooks";
import { AuthConstants } from "@/app/config/constants";
import { Calender } from "../Calender";
import { Box, Text } from "@chakra-ui/react";
import { placeReservationBooking } from "./styles";
import { Button } from "../Button";

export function PlaceReservations(props) {
  const { listDetails, currentUser, reservations = [] } = props;
  const { onOpen } = useAuthModal();
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
      const totalDays = differenceInCalendarDays(
        dateRange.startDate,
        dateRange.endDate
      );
      if (Math.abs(totalDays) && listDetails?.price) {
        setTotalPrice(Math.abs(totalDays) * listDetails?.price);
      } else {
        setTotalPrice(listDetails?.price);
      }
    }
  }, [dateRange, listDetails?.price]);
  const onReservationCreated = async () => {
    if (!currentUser) {
      onOpen({ title: AuthConstants.LOGIN });
      return;
    }
    console.log("called function");
    const result = await addReservations({
      totalPrice,
      startDate: dateRange?.startDate,
      endDate: dateRange?.endDate,
      listingId: listDetails?.id,
    });
    //reservation api called
  };

  return (
    <Box as="div" sx={placeReservationBooking}>
      <Box
        as="div"
        display={"flex"}
        alignItems={"baseline"}
        padding={4}
        gap={"5px"}
      >
        <Text as={"h6"} fontWeight={"bold"} fontSize={22}>
          ${listDetails?.price}
        </Text>{" "}
        <Text as={"span"} fontSize={"sm"} fontWeight={"bold"}>
          day
        </Text>
      </Box>
      <hr />
      <Box
        as="div"
        padding={"10px 0"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Calender
          ranges={dateRange}
          handleDateChanged={handleDateChanged}
          reservedDates={reservedDates}
        />
      </Box>
      <hr />
      <Box as="div" padding={"0 15px"}>
        <Button
          className="btn-primary"
          fontWeight={"bold"}
          title={"Reserved"}
          type="submit"
          variant={"primary"}
          handleClick={onReservationCreated}
          loading={false}
        />
      </Box>
      <hr />
      <Box
        as="div"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"baseline"}
        padding={4}
        gap={"5px"}
      >
        <Text as={"h6"} fontWeight={"bold"} fontSize={22}>
          Total
        </Text>{" "}
        <Text as={"h6"} fontWeight={"bold"} fontSize={22}>
          $ {totalPrice}
        </Text>
      </Box>
    </Box>
  );
}
