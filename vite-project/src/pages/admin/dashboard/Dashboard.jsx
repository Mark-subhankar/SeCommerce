import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import Layout from '../../../components/layout/Layout';
import MyContext from '../../../context/data/MyContext';
import Footer from '../../../components/footer/Footer';
import DashboardTabDetails from './DashboardTabDetails';

function Dashboard() {
    const context = useContext(MyContext)
    const { mode} = context
  return (
    <Layout>
       <section>
        <h2 style={{color: "red", margin : "30px 0px", fontSize : "20px", fontWeight : "900", textAlign : "center"}} className='admin'>Admin DashBoard</h2>
       </section>
        <DashboardTabDetails/>
        <Footer/>
    </Layout>
    
  )
}

export default Dashboard