import React from 'react';
import * as s from './App.styles';
import Sidebar from './components/Sidebar/sidebar';
import Mainview from './components/Mainview/mainview';
import * as Palette from './colors';

const App = () => {
  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'Yo Yo Travel',
    shortName: 'Yo'
  };
  const menuItems = [
    {name:'Home', to:'/', icon:'images/home.svg',subMenuItems:[]},
    {name:'About', to:'/about', icon:'images/about.svg',subMenuItems:[]},
    {name:'Destinations', to:'/destinations', icon:'images/destinations.svg',
      subMenuItems:[
        {name:'Canada', to:'/canada'},
        {name:'Brazil', to:'/brazil'},
        {name:'India', to:'/india'},
        {name:'Australia', to:'/australia'},
        {name:'Kenya', to:'/kenya'}
      ]},
    {name:'Blogs', to:'/blogs', icon:'images/blogs.svg',subMenuItems:[]},
    {name:'Services', to:'/services', icon:'images/services.svg',subMenuItems:[]},
    {name:'Contacts', to:'/contacts', icon:'images/contacts.svg',subMenuItems:[]}
  ];

  const fonts = {
    header:'ZCOOL KuaiLe',
    menu: 'Poppins'
  };

  return (
    <s.App>
      <Sidebar 
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.pinkAndBlue}
      />
      <Mainview/>
    </s.App>
  );
}

export default App;
