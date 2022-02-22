import * as React from 'react'
import Svg, { SvgProps, Defs, Path, G, Use } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */



function SvgComponent(props: SvgProps) {
    return (
        <Svg
        width="36.000000pt" height="36.000000pt" viewBox="0 0 36.000000 36.000000"
 preserveAspectRatio="xMidYMid meet">
            
            <G transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)" stroke="none">
                
                <Path
                fill={props.fill}
                    d="M125 285 c-32 -31 -34 -91 -4 -129 29 -37 89 -37 118 0 47 60 11 154
                    -59 154 -19 0 -40 -9 -55 -25z"

                />
                <Path
                fill={props.fill}
                    d="M80 111 c-5 -11 -10 -29 -10 -40 0 -20 5 -21 110 -21 108 0 110 0
                    110 23 0 13 -6 31 -13 41 -13 17 -15 17 -45 2 -38 -20 -69 -20 -102 -1 -33 19
                    -37 18 -50 -4z"

                />
            </G>
        </Svg>
    )
}

const TabProfileActive = React.memo(SvgComponent)
export default TabProfileActive
