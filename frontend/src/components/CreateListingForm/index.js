import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { hostNewRoom, findRoomById } from "../../store/rooms";
import "./CreateListingForm.css"
import { uploadNewImage } from "../../store/images";
import Navigation from "../Navigation";

const CreateListingForm = ({ isLoaded }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);
  const [userId, serUserId] = useState(sessionUser?.id)
  const [roomId, setRoomId] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [category, setCategory] = useState("A-Frame")
  const [guests, setGuests] = useState(2)
  const [bedrooms, setBedrooms] = useState(1)
  const [beds, setBeds] = useState(1)
  const [baths, setBaths] = useState(1)
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [page, setPage] = useState(1)
  const [checkInput, setCheckInput] = useState(true)
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")
  const [image4, setImage4] = useState("")
  const [image5, setImage5] = useState("")
  const [validationErrors, setValidationErrors] = useState([])
  const [errors, setErrors] = useState([])
