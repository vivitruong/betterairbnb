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

    useEffect(() => {
        const errors = [];
        if (type.trim().length < 2) errors.push("Type of place between 3 and 30 characters required")
        if (name.trim().length < 10) errors.push("Title must be between 10 and 50 characters")
        if (address.trim().length < 6) errors.push("Valid address required")
        if (city.trim().length < 4) errors.push("Valid city required")
        if (state.trim().length < 4) errors.push("Valid state required")
        if (country.trim().length < 4) errors.push("Valid country required")
        if (lat === "" || lat > 90 || lat < -90) errors.push("Latitude must be between - 90 to 90")
        if (lng === "" || lng > 180 || lng < -180) errors.push("Longitude must be between - 180 to 180")
        if (description.trim().length < 10) errors.push("Description required between 10 and 1000 characters")
        if (price > 1000000 || price < 1) errors.push("Price must be between $1 and $1,000,000")

        if (errors.length > 0) {
          setErrors(errors)
          setDisableButton(true)
        } else {
          setErrors([])
          setDisableButton(false)
        }

      }, [type, name, address, city, state, country, lat, lng, description, price])


      const handleSubmit = async (e) => {
        e.preventDefault()

        const roomData = {
          roomId,
          ownerId,
          address,
          city,
          state,
          country,
          lat,
          lng,
          name,
          description,
          price,
          type,
          category,
          guests,
          beds,
          bedrooms,
          baths
        }

        const response = await dispatch(updateRoom(roomData))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors)
              if (data) {
                const errors = Object.values(data.errors)
                setErrors(errors)
              }
          })

        if (response) {
          dispatch(findRoomById(listingId))
          return returnToListing()
        }
      }
