import ajax from "@/common/ajax";
import mock from "../mock/index";
const request = process.env.REACT_APP_MOCK ? mock : ajax;
const getMenu = () => request.get("/getmenu");
const login = (data) => request.post("/login", data);
const addMenu = (data) => request.post("/addmenu", data);
const addMsg = (data) => request.post("/addmessage", data);
const getMsg = (data) => request.post("/getmessage", data);
const getPower = () => request.get("/getpower");
const delMenu = (data) => request.post("/delmenu", data);
const getMenuInfo = (data) => request.post("/getmenuinfo", data);
const editMenu = (data) => request.post("/editmenuinfo", data);
const getVisitorList = (data) => request.post("/getiplist", data);
const getVisitorData = () => request.get("/getvisitordata");
const getUserList = (data) => request.post("/getuserlist", data);
const addUser = (data) => request.post("/adduserinfo", data);
const getUser = (data) => request.post("/getuserinfo", data);
const editUser = (data) => request.post("/edituserinfo",data)
export {
  getMenu,
  login,
  addMenu,
  addMsg,
  getMsg,
  getPower,
  delMenu,
  getMenuInfo,
  editMenu,
  getVisitorList,
  getVisitorData,
  getUserList,
  addUser,
  getUser,
  editUser
};
