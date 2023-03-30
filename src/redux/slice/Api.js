import{ useEffect } from "react";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

export const getdata = createAsyncThunk("getdata", async () => {
  try {
    const response = await axios.get(
      "https://64142404ebce1f9d8c605bec.mockapi.io/user"
    );
    console.log(response.data, "get response");
    return response.data;
    // setdata(response.data);
  } catch (error) {
    console.log(error);
  }
});


export const deletedata = createAsyncThunk("deletedata", async (id) => {
    console.log(id,"id");

  try {
    const response = await axios
      .delete(`https://64142404ebce1f9d8c605bec.mockapi.io/user/${id}`)
      window.location.reload(true);
     
        
      
    console.log(response.data, "delete");
  } catch (error) {
    console.log(error);
  }


});




// export const postdata = createAsyncThunk("postdata", async () => {
//     try {
//         await axios
//           .post("https://64142404ebce1f9d8c605bec.mockapi.io/user", {
//             name: myname,
//             age: myage,
//             email: myemail,
//           })
//           .then(() => {
//             navigate("/");
//           });
//       } catch (error) {
//         console.log(error);
//       }

// });

const apiSlice = createSlice({
  name: "api",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getdata.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getdata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getdata.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    
  },
});

export default apiSlice;
