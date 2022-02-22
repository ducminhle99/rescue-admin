import restProvider from 'ra-data-simple-rest';
import * as React from "react";
import { Admin, fetchUtils, Resource } from "react-admin";
import authProvider from "./authProvider/authProvider";
import ShopList from "./components/ShopList";
import UserEdit from "./components/UserEdit";
import UserList from "./components/UserList";
import httpClient from './authProvider/httpClient';
function App() {

  return (
    <Admin
      authProvider={authProvider}
      dataProvider={restProvider('http://localhost:5000/api/admin', httpClient)}
    >

      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
      />

      <Resource
        name="repairShop"
        list={ShopList}
      />
    </Admin>
  );
}

export default App;
