import attendanceSlice from "./attendanceSlice";
import authSlice from "./authSlice";
import baseSlice from "./baseSlice";
import todoSlice from "./features/todo/todoSlice";
import trashCustomersReducer from "./features/trashCustomers/trashCustomersSlice";
import loadingSlice from "./loadingSlice";

const reducer = {
  auth: authSlice,
  base: baseSlice,
  attendance: attendanceSlice,
  loading: loadingSlice,
  trash: trashCustomersReducer,
  todo: todoSlice,
};

export default reducer;
