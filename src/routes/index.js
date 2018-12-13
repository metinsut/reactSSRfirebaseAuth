import App from '../App';
import Home from "../component/home/home.js";
import Firebase from "../component/firebase/firebase.js";
import UsersListPage from "../component/userList/UserListPage";
import PostList from "../component/postList/PostList";
import NotFoundPage from "../component/404/NotFoundPage";
import { ALLPAGES, HOME, FIREBASE, USERS, USERS_ID, LOGIN, SIGNUP } from "../constant/routesPath";

export default [
   {
      ...App,
      routes: [
         {
            ...Home,
            path: "/",
            exact: true
         },
         {
            ...Home,
            path: HOME
         },
         {
            ...Firebase,
            path: FIREBASE,
            exact: true
         },
         {
            ...UsersListPage,
            path: USERS,
            routes: [
               {
                  path: USERS_ID,
                  ...PostList
               }
            ]
         },
         {
            ...NotFoundPage
         }
      ]
   }
]


