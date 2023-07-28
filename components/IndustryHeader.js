import { useState } from 'react'
import styles from '../styles/industryheader.module.css'
import { getLandingPage } from '../lib/api'
import parse from "html-react-parser";
import Link from 'next/link';

// export async function getStaticProps() {

//     const pagecontent = await getLandingPage('cp-industry-footer');
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     // const res = await butter.page.retrieve('*', 'whole-sale-distribution')
//     // const posts = await pagecontent.json()
    
  
//     // By returning { props: { posts } }, the Home component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         pagecontent,
//       },
//     }
  
//   }

const IndustryHeader = ({HeaderData,isActive,backcolor} ) => {
    // const [selectedMenu, setselectedMenu] = useState(0);
    // const [innerSelectedMenu, setinnerSelectedMenu] = useState(0);
    // function changeActive(num) {
    //     setselectedMenu(num)
    //     if(selectedMenu!=num){
    //         setinnerSelectedMenu(0)
    //     }
    // }

    // function changeInnerActive(num) {
    //     setinnerSelectedMenu(num)
    // }
    
  return (
    
    <div className={styles.top_nav}>
    <div className={styles.top_nav_img_container}>
        <Link href="butter-cp-menu">
            <img src="Group 370.png"></img>
        </Link>
    </div>
    <div className={styles.top_nav_container}>
        {HeaderData.fields.header_content.map((x, index)=>{
            return(
                <Link key={index} href={x.link}>
                <a >
                <div style={{background:backcolor}}  className={styles.top_nav_container_menu_item +" "+ `${isActive == index ? styles.active : ''}`}>
                {parse(x.menu_item)}
            </div>
             </a>
             </Link>
            )
        })}

    </div>
    <div className={styles.top_nav_container_right}>
        <p>CONTACT US</p>
    </div>
    <div className={styles.header_right_circle}>
        <img src='menu_lines.png'></img>
    </div>

</div>
  )
}

export default IndustryHeader
