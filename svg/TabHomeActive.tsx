import * as React from 'react'
import Svg, { SvgProps, Defs, Path, G, Use } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */



function SvgComponent(props: SvgProps) {
    return (
        <Svg
        width="36.000000pt" height="36.000000pt" viewBox="0 0 36.000000 36.000000"
        preserveAspectRatio="xMidYMid meet" {...props}>
            
            <G transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)"
 stroke="none">
                
                <Path
                fill={props.fill}
                    d="M88 283 c-26 -30 -67 -119 -74 -160 -12 -75 51 -81 77 -8 7 19 15 35
                    19 35 3 0 13 -18 23 -39 10 -22 25 -42 33 -45 24 -9 52 11 65 49 7 19 15 35
                    19 35 3 0 13 -18 23 -39 32 -70 84 -61 73 12 -8 48 -52 140 -78 164 -19 17
                    -21 17 -43 -10 -13 -15 -28 -35 -34 -44 -5 -10 -11 -16 -13 -13 -2 3 -16 22
                    -31 43 -32 42 -38 44 -59 20z"

                />
            </G>
        </Svg>
    )
}

const TabHomeActive = React.memo(SvgComponent)
export default TabHomeActive
