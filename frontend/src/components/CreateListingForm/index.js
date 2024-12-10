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


  const categories = ['A-Frame', 'Amazing Pool', 'Beach', 'Cabin', 'Design', 'Dome', 'Luxe', 'Treehouse', 'Tiny Home', 'Tropical']

  const toggleNext = (e) => {
    if (e.trim().length > 2) setCheckInput(false)
    else setCheckInput(true)
  }

  const updateName = (e) => {
    setName(e.target.value)
    toggleNext(e.target.value)
  }

  const updateType = (e) => {
    setType(e.target.value)
    toggleNext(e.target.value)
  }

  useEffect(() => {
    const errors = []

    if (page === 5) {
      let latNum = parseInt(lat, 10)
      let lngNum = parseInt(lng, 10)

      if (address.trim().length < 6) errors.push("Valid address required")
      if (city.trim().length < 4) errors.push("Valid city required")
      if (state.trim().length < 4) errors.push("Valid state required")
      if (country.trim().length < 4) errors.push("Valid country required")
      if (lat === "" || (!isNaN(latNum) && (lat > 90 || lat < -90))) {
        errors.push("valid latitude between -90 to +90 required")
        setCheckInput(true)
      }
      if (lng === "" || !isNaN(lngNum) && (lng > 180 || lng < -180)) {
        errors.push("valid longitude -180 to +180 required")
        setCheckInput(true)
      }

      if (errors.length > 0) {
        setCheckInput(true)
        setValidationErrors(errors)
      } else {
        setValidationErrors([])
        setCheckInput(false)
      }
    }

    if (page === 6) {
      if (description.trim().length < 10) {
        setCheckInput(true)
      }
    }

    if (page === 7) {
      if (price < 1 || price > 1000000) {
        setCheckInput(true)
      }
    }

    if (page === 8) {
      if (image1 === "" || image2 === "" || image3 === "" || image4 === "" || image5 === "") {
        setCheckInput(true)
      }
    }

  }, [page, address, city, state, country, lat, lng, description, price, image1, image2, image3, image4, image5])

  // console.log(validationErrors)

  const setDemoAddress = () => {
    setAddress("19508 Boggy Ford Rd")
    setCity("Lago Vista")
    setState("Texas")
    setCountry("United States of America")
    setLat(30.501039)
    setLng(-97.966791)
    setCheckInput(false)
  }

  const setDemoImages = () => {
    setImage1("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/6bc37b8f-af10-4675-b143-67f6262cec6a.jpeg?im_w=1200")
    setImage2("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/63ab41e2-fafc-4c12-be32-bd6ffb25f51d.jpeg?im_w=720")
    setImage3("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/8cafaeb8-bfbb-4500-b676-e1af5307017f.jpeg?im_w=1440")
    setImage4("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/88abd551-55d8-4b00-b853-763455ce96a2.jpeg?im_w=1200")
    setImage5("https://a0.muscache.com/im/pictures/miso/Hosting-583106032718062723/original/2637ca05-6186-4106-b2b2-84fc77a81729.jpeg?im_w=1200")
    setCheckInput(false)
  }

  let formButtons;
  if (page > 1) {
    formButtons = (
      <>
        <button type="button" onClick={() => { setPage(page - 1); setCheckInput(false) }} className="back-button">Back</button>
        <button type="button" onClick={() => { setPage(page + 1); setCheckInput(true) }} className="next-button" disabled={checkInput}>Next</button>
      </>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const roomData = {
      userId,
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

    const roomResponse = await dispatch(hostNewRoom(roomData))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors)
          if (data) {
            const errors = Object.values(data.errors)
            setErrors(errors.slice(0, 2))
          }
      })

    if (roomResponse) {
      setRoomId(roomResponse.id)
      setPage(8)
    }
  }

  const handleImagesSubmit = async (e) => {
    e.preventDefault()

    const imageData = {
      userId,
      roomId,
      type: "room"
    }

    const imageData1 = {
      ...imageData,
      url: image1
    }

    const imageData2 = {
      ...imageData,
      url: image2
    }

    const imageData3 = {
      ...imageData,
      url: image3
    }

    const imageData4 = {
      ...imageData,
      url: image4
    }

    const imageData5 = {
      ...imageData,
      url: image5
    }

    const newImage1 = await dispatch(uploadNewImage(imageData1))
    const newImage2 = await dispatch(uploadNewImage(imageData2))
    const newImage3 = await dispatch(uploadNewImage(imageData3))
    const newImage4 = await dispatch(uploadNewImage(imageData4))
    const newImage5 = await dispatch(uploadNewImage(imageData5))

    if (newImage1 && newImage2 && newImage3 && newImage4 && newImage5) {
      dispatch(findRoomById(roomId))
      history.push(`/rooms/${roomId}`)
    }
  }

  return (
    <div className="create-page">
      <div className="create-listing-nav-main">
        <Navigation isLoaded={isLoaded} />
      </div>
      <div className="navigation-border"></div>
      {page === 1 &&
        <div className="create-content">
          <div className="header-div">
            <div className="create-header">Welcome</div>
          </div>
          <div className="create-content-right">
            <div className="create-new-label">Start a new listing</div>
            {sessionUser ? <button onClick={() => setPage(2)} className="create-new-button"><i className="fa-solid fa-plus"></i>Create a new listing &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{`>`}</button> :
              <button className="no-session-button" disabled="true">Login to begin hosting</button>}
            <span className="white-space"></span>
          </div>
        </div>
      }
      <form onSubmit={handleSubmit} className={page < 8 ? "block" : "hidden"}>
        {page >= 2 &&
          <section className={page === 2 ? "block" : "hidden"}>
            <div className="create-content">
              <div className="create-header">Let's give your place a name</div>
              <div className="create-content-right">
                <div className="right-content-label">
                  <label className="create-new-label">
                    Create your title:
                  </label>
                  <div className="right-content-demo">
                    <button type="button" onClick={() => { setName("Unique Eco-Glamping in Texas Hill Country"); setCheckInput(false) }} className="demo-buttons">demo</button>
                  </div>
                </div>
                <div className="right-content-input">
                  <input
                    type="text"
                    placeholder="Breathtaking Lakefront Villa"
                    className="create-input"
                    value={name}
                    onChange={updateName}
                    required
                    maxLength={50}
                  />
                </div>
                <div className="right-content-buttons">
                  <div className="back-next-buttons">{formButtons}</div>
                </div>
              </div>
            </div>
          </section>
        }
