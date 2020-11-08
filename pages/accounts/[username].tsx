import { createRef, useRef } from 'react'
import {Sizes, Avatar} from "@components/Avatar"
import Layout from "@components/Layout/main"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faHeart, faCog, faPaperPlane , faMapMarkerAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
// import { getAllPostIds, getPostData } from '../../lib/post'

export default function AccountPage() {
  const menuItems = [
    {
      title: 'Profile',
      icon: faUser,
    },
    {
      title: 'Teams',
      icon: faUsers, 
    },
    {
      title: 'Collections',
      icon: faHeart
    },
    {
      title: 'Settings',
      icon: faCog
    },
    {
      title: 'Messages',
      icon: faPaperPlane
    }
  ]

  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  
  // itemsRef.current = []

  function addBorder(e: any){
    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < 5; i++) {
      // @ts-ignore
      itemsRef.current[i].className = itemsRef.current[i].className.replace(" active", "")
    }

    // Add the active class to the current/clicked button
    let target = e.target
    if(target.nodeName === 'SPAN' || target.nodeName === 'svg'){
      target = target.parentElement
    }
    else if(target.nodeName === 'path')
      target = target.parentElement.parentElement
    
    target.className += " active"
  }

  const Form = () => {
    <form>

    </form>
  }

  const renderContent = () => 
  /* for api call
  <div>
    {postData.title}
    test
    <br />
    test 2
    {postData.content}
  </div>
  */

  /* for demo */
  <div className='flex'>
    <div className="w-1/5 space-y-6">
      {menuItems.map((item,i) => (
        <div
          className='flex py-2 px-3 w-48 text-gray-600 font-thin hover:text-secondary cursor-pointer relative z-10'
          key={item.title}
          ref={el => itemsRef.current[i] = el} 
          onClick={addBorder}
        >
          <FontAwesomeIcon icon={item.icon} className='mr-5 w-0'/>
          <span className='align-middle w-0'>{item.title}</span>
        </div>
      ))}
    </div>
    <div className="w-3/4 shadow-md rounded-xl" style={{background: 'rgba(16,24,32,0.03)'}}>
      <div className='flex'>
        <div className='w-1/2'>
          <div className='overflow-hidden bg-white relative rounded-xl shadow-xl w-3/5 mx-auto my-10'>
            <Avatar size={Sizes.Small} link="/images/cr7.jpg" alt="cr7" shadow padding='py-3 mx-auto' containerWidth='w-1/2'/>
            <div className="text-lg font-bold text-center bottom-0 text-secondary">
              Cristiano Ronaldo
            </div>
          </div>
        </div>
        <div className='w-1/2'>

        </div>
        {/* <div className='relative'>
          <Avatar size={Sizes.Small} link="/images/cr7.jpg" alt="cr7" shadow/>
          <div 
            className='absolute bg-neon-main rounded-full w-6 h-6 cursor-pointer' 
            onClick={() => alert('fuck youre right')}
            style={{bottom:'10px', right:0}}
          >
            <FontAwesomeIcon icon={faPencilAlt} size='xs' style={{margin: '6px'}} />
          </div>
        </div>
        <div className='ml-8 my-auto'>
          <div className='text-xl text-gray-900'>Cristiano ronaldo</div>
          <div className='mb-1 text-sm text-blue-600 font-bold'>Product Designer</div>
          <div className='flex text-xs text-gray-600'>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span className='ml-2'>Saigon Vietnam</span>
          </div>
        </div> */}
      </div>
    </div>
    <style jsx>{`
      .active{
        color: #101820FF;
        font-weight: bold;
      }
    `}
    </style>
  </div>

  return (
    <Layout content={renderContent()} />
  )
}

// export function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export function getStaticProps({ params } : any) {
//   const postData = getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }