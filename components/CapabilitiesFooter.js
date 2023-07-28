import { useState } from 'react'
import styles from '../styles/CapabilitiesFooter.module.css'
import { getLandingPage } from '../lib/api'
import parse from "html-react-parser";

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

const CapabilitiesFooter = ({footerData,innerActive} ) => {
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
    
<div className={styles.bottom_nav}>
    <div className={styles.bottom_nav_inner}>

    {footerData?.fields.footer_content.map((x, index)=>{
        return(
            <div key={index} className={styles.bottom_nav_inner_menu+" "+ `${innerActive == index ? styles.inner_selected : ''}`}>
            <div className={styles.inner_menu_item}>
            {parse(x.text)}
            </div>
            </div>
        )
    })}

   
    </div>
</div>
  )
}

export default CapabilitiesFooter
