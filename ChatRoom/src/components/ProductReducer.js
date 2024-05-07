import { createSlice } from "@reduxjs/toolkit";
import { ChatRoom as chatrooms } from "./Data";

const ChatRoomSlice = createSlice({
    name: "chatrooms",
    initialState: chatrooms,
    reducers: {
        addChatRoom: (state, action) =>{
            state.push(action.payload)
        },
    }
})
export const {addChatRoom} = ChatRoomSlice.actions;
export default ChatRoomSlice.reducer
