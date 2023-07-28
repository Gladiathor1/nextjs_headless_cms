import { useState } from 'react'
import styles from '../styles/IndustryFooter.module.css'
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

const IndustryFooter = ({footerData,innerActive,outerActive} ) => {
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
        
        {footerData?.fields.footer_menu.map((x, index)=>{
            return(
                
                    <div key={index} className={styles.bottom_nav_inner_menu +" "+ `${outerActive == index ? styles.selected : ''}`}>
                        <Link key={index} href={x.url_slug}>
                        <div className={styles.inner_menu_item}>
                            
                        {parse(x.menu_item_label)}
                        </div>
                        </Link>
                        {x.inner_menu.map((y, index2)=>{
                            return(
                                <Link key={index} href={y.url_slug}>
                                {/* <a > */}
                                <div key={index2} className={styles.inner_menu_item+" "+ `${innerActive == index2 ? styles.inner_selected : ''}`}>{parse(y.menu_item_label)}</div>
                                {/* </a> */}
                                </Link>
                            )
                        })
                        }
                    
                    </div>
                    
                    )
            })
        }
    </div>
</div>
  )
}

export default IndustryFooter
