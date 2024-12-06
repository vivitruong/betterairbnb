import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listAllReservations, getAllReservations, removeReservation, updateReservation } from "../../store/reservations";
import "./UserReservations.css"
import Navigation from "../Navigation";
import { listAllUsers } from "../../store/users";

const UserReservations = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const allReservations = useSelector(getAllReservations)
  const [reservationId, setReservationId] = useState()
  const [roomId, setRoomId] = useState()
  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10))
  const [checkOut, setCheckOut] = useState(new Date().toISOString().slice(0, 10))
  const [editReservation, setEditReservation] = useState(0)
  const [showEdit, setShowEdit] = useState(false)
  const [reservationErrors, setReservationErrors] = useState([])
  const [checkDates, setCheckDates] = useState(true)

  const tomorrow = new Date()
  const nextDay = new Date()

  tomorrow.setHours(tomorrow.getHours() + 7)
  nextDay.setHours(nextDay.getHours() + 31)

  const reservationsPerRoom = allReservations.filter(reservation => reservation.roomId === roomId && sessionUser.id !== reservation.userId)

  const trips = allReservations.filter(reservation => sessionUser.id === reservation.userId)
  const futureTrips = trips.filter(trip => new Date() <= new Date(trip.endDate)).sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
  const pastTrips = trips.filter(trip => new Date() > new Date(trip.endDate)).sort((a, b) => new Date(b.startDate) - new Date(a.startDate))

  const allStartDates = reservationsPerRoom.map(reservation => reservation.startDate)
  const allEndDates = reservationsPerRoom.map(reservation => reservation.endDate)

  let today = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })

  useEffect(() => {

    dispatch(listAllReservations())
    dispatch(listAllUsers())

    const errors = []

    if (today > new Date(checkIn)) {
      errors.push("Cannot modify current reservation")
    }

    if (checkIn === checkOut)
      errors.push("Reservations must be a minimum of 1 day")
    else if (new Date(checkIn) > new Date(checkOut))
      errors.push("Check-in date must be prior to check-out date")

    for (let i = 0; i < allStartDates.length; i++) {
      let startReq = new Date(checkIn);
      let endReq = new Date(checkOut);
      let startRes = new Date(allStartDates[i]);
      let endRes = new Date(allEndDates[i]);

      if ((startReq >= startRes && startReq < endRes) ||
        (endReq > startRes && endReq <= endRes) ||
        startRes >= startReq && startRes < endReq ||
        endRes > startReq && endRes <= endReq)
        errors.push("Selected dates conflict with an existing booking")
      else if (startRes === startReq)
        errors.push("Check-in date conflicts with an existing booking")
      else if (endRes === endReq)
        errors.push("Check-out date conflicts with an existing booking")
    }

    if (errors.length > 0) {
      setReservationErrors(errors)
      setCheckDates(true)
    } else {
      setReservationErrors([])
      setCheckDates(false)
    }

  }, [dispatch, checkIn, checkOut])

  const handleDelete = (reservationId) => async (e) => {
    e.preventDefault()
    const response = await dispatch(removeReservation(reservationId))

    if (response) {
      setShowEdit(false)
      dispatch(listAllReservations())
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const reservationData = {
      reservationId,
      userId: sessionUser.id,
      roomId,
      startDate: checkIn,
      endDate: checkOut
    }

    const updatedReservation = await dispatch(updateReservation(reservationData))
    setShowEdit(false)
    dispatch(listAllReservations())
    dispatch(listAllReservations(roomId))
