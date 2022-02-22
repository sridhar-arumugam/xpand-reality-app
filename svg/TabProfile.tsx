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
                
                d="M120 283 c-17 -22 -21 -39 -19 -78 2 -33 -3 -61 -14 -82 -9 -18 -17
-41 -17 -53 0 -19 6 -20 110 -20 104 0 110 1 110 20 0 12 -8 35 -17 53 -11 21
-16 49 -14 82 4 68 -24 105 -79 105 -30 0 -43 -6 -60 -27z m102 -10 c25 -23
24 -87 -2 -113 -42 -42 -100 -9 -100 57 0 64 58 96 102 56z m35 -163 c28 -34
16 -40 -77 -40 -92 0 -100 4 -79 38 15 24 137 26 156 2z"

            />
            </G>
            
        </Svg>
    )
}

const TabProfile = React.memo(SvgComponent)
export default TabProfile
