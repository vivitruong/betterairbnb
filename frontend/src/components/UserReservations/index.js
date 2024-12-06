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
