import React from 'react'

const FooterMenu = () => {
  return (
    <footer className='bg-black max-w-full min-h-[20vh] text-white px-16 flex flex-col sm:flex-row justify-between'>
        <div>
        <ul>
                <li>
                    SHOP ALL
                </li>
                <li>
                    ABOUT
                </li>
                <li>
                    CONTACT
                </li>
            </ul>
            
          </div>
        <div>
        <ul>
                <li>
                    TERMS
                </li>
                <li>
                    SHIPPING POLICY
                </li>
                <li>
                    REFUND POLICY
                </li>
            </ul>
        </div>
        <div>
        <ul>
                <li>
                    INSTAGRAM
                </li>
                <li>
                    FACEBOOK
                </li>
                <li>
                    TWITTER
                </li>
            </ul>
        </div>
        <div>
            <h3>LICENSES</h3>
            <p>&2024</p>
        </div>
        
        

    </footer>
  )
}

export default FooterMenu