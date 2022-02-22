import React from 'react'
import { Svg, Path, G } from 'react-native-svg'


function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    
    return (
        <Svg width="36.000000pt" height="36.000000pt" viewBox="0 0 36.000000 36.000000"
        preserveAspectRatio="xMidYMid meet">
            <G transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)"
stroke="none">
<Path
                fill={props.fill}
                
                d="M81 279 c-28 -30 -63 -107 -69 -151 -8 -66 38 -91 80 -43 l22 25 23
-25 c13 -14 32 -25 43 -25 11 0 30 11 43 25 l23 25 22 -25 c60 -68 105 3 64
100 -47 112 -88 140 -129 89 l-24 -29 -20 28 c-25 33 -51 35 -78 6z m71 -39
c13 -22 25 -40 28 -40 3 0 15 18 28 41 13 22 29 38 35 36 38 -12 104 -164 81
-187 -19 -19 -43 0 -60 47 l-18 46 -17 -39 c-9 -22 -24 -45 -33 -53 -21 -18
-43 -1 -65 53 l-17 39 -18 -46 c-16 -44 -38 -63 -57 -51 -30 18 41 194 78 194
7 0 23 -18 35 -40z"

            />
            </G>
            
        </Svg>
    )
}

const TabHome = React.memo(SvgComponent)
export default TabHome
