import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateRoom, findRoomById } from "../../store/rooms";
import "./EditListingForm.css"


const EditListingForm = ({ listingId, returnToListing }) => {
    const dispatch = useDispatch()
    const room = useSelector((state) => state.rooms[listingId])

    const [roomId, setRoomId] = useState(listingId)
    const [ownerId, setOwnerId] = useState(room.ownerId)
    const [type, setType] = useState(room.type)
    const [category, setCategory] = useState(room.category)
    const [guests, setGuests] = useState(room.guests)
    const [bedrooms, setBedrooms] = useState(room.bedrooms)
    const [beds, setBeds] = useState(room.beds)
    const [baths, setBaths] = useState(room.baths)
    const [address, setAddress] = useState(room.address)
    const [city, setCity] = useState(room.city)
    const [state, setState] = useState(room.state)
    const [country, setCountry] = useState(room.country)
    const [lat, setLat] = useState(room.lat)
    const [lng, setLng] = useState(room.lng)
    const [name, setName] = useState(room.name)
    const [description, setDescription] = useState(room.description)
    const [price, setPrice] = useState(room.price)
    const [errors, setErrors] = useState([]);
    const [disableButton, setDisableButton] = useState(false)

    const categories = ['A-Frame', 'Amazing Pool', 'Beach', 'Cabin', 'Design', 'Dome', 'Luxe', 'Treehouse', 'Tiny Home', 'Tropical']
