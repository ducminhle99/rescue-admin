import restProvider from 'ra-data-simple-rest';
import * as React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider/authProvider";
import httpClient from './authProvider/httpClient';
import CategoryCreate from './components/CategoryCreate';
import CategoryEdit from './components/CategoryEdit';
import CategoryList from './components/CategoryList';
import ShopList from "./components/ShopList";
import UserEdit from "./components/UserEdit";
import UserList from "./components/UserList";
function App() {

  return (
    <Admin
      authProvider={authProvider}
      dataProvider={restProvider('http://localhost:5000/api/admin', httpClient)}
    >

      <Resource
        name="users"
        list={UserList}
      // edit={UserEdit}
      />

      <Resource
        name="repairShop"
        list={ShopList}
      />

      <Resource
        name='categories'
        list={CategoryList}
        create={CategoryCreate}
        edit={CategoryEdit}
      />
    </Admin>
  );
}

export default App;
