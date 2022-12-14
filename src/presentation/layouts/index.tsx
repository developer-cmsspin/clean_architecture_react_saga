import React from 'react'
import { ContentSite } from './style'

interface IProps {
  children: React.ReactNode
}

const Layout = (props: IProps):JSX.Element => {
  return (
        <>
            <div>
                <ContentSite>
                    Hola mundo
                </ContentSite>
            </div>
            <div>
                {props.children}
            </div>

        </>
  )
}

export default Layout
