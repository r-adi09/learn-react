import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile.js'
//import Gallery from './qcomps/gallery_props.js'
//import Profile from './qcomps/profile_mistake.js';
import FirstComponent from './qcomps/firstcomp.js'
import Bio from './qcomps/bios.js'
import TodoList from './qcomps/todos.js'
import Profile from './components/profile_props.js'
import Holder from './components/square.js'
import PackingList from './components/props_item.js'
//import List from './qcomps/list_keys_id.js'
import RecipeList from './qcomps/recipes.js'
import Button from './components/button.js'
import MenuBar from './qcomps/menubar.js'
//import Gallery from './components/whyState.js'
// import Gallery from './components/state.js'
import Gallery from './qcomps/state.js'
import PersonData from './components/stateObj.js'
//import Form from './qcomps/stuckForm.js'
import FeedbackForm from './qcomps/thankYouCrash.js'
//import Counter from './qcomps/snapshot.js'
//import Form from './components/snapshot2.js'
import Counter from './components/queueUpdates.js'
import RequestTracker from './qcomps/shoppingCart.js'
import Form from './components/updObjects.js'
import Scoreboard from './qcomps/updObjectsForm.js'
//import List from './qcomps/artistsArr.js'
import List from './qcomps/artistsRemoveArr.js'
import BucketList from './qcomps/arrObj.js'


export default function Home() {
  return <div className={styles.main}>
        {/* <Profile /> */}
        {/* <Gallery/> */}
        {/* <FirstComponent/> */}
        {/* <Bio/> */}
        {/* <TodoList/> */}
        {/* <Profile/> */}
        {/* <Gallery/> */}
        {/* <Holder/> */}
        {/* <PackingList/> */}
        {/* <List/> */}
        {/* <RecipeList/> */}
        {/* <Button/> */}
        {/* <MenuBar/> */}
        {/* <Gallery/> */}
        {/* <PersonData/> */}
        {/* <Form/> */}
        {/* <FeedbackForm/> */}
        {/* <Counter/> */}
        {/* <Form/> */}
        {/* <RequestTracker/> */}
        {/* <Scoreboard/> */}
        {/* <List/> */}
        <BucketList/>
    </div>

  
}
