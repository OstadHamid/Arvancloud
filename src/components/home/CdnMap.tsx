import { useEffect } from "react";

const CdnMap = () => {
    useEffect(() => {
        const dots = document.querySelectorAll('.home-cdn__dot')
        dots.forEach(dot => {
            dot.addEventListener('mouseover', () => {
                dot.classList.add('hover')
                setInterval(() => {
                    dot.classList.remove('hover')
                }, 500)
            })
        })
    }, [])
    return (
        <div className="home-cdn__map">
            <div className="home-cdn__map-canvas" dir="ltr">
                <div className="home-cdn__dot" data-row={1} data-col={1} />
                <div className="home-cdn__dot" data-row={1} data-col={2} />
                <div className="home-cdn__dot" data-row={1} data-col={3} />
                <div className="home-cdn__dot" data-row={1} data-col={4} />
                <div className="home-cdn__dot" data-row={1} data-col={5} />
                <div className="home-cdn__dot" data-row={1} data-col={6} />
                <div className="home-cdn__dot" data-row={1} data-col={7} />
                <div className="home-cdn__dot" data-row={1} data-col={8} />
                <div className="home-cdn__dot" data-row={1} data-col={9} />
                <div className="home-cdn__dot" data-row={1} data-col={10} />
                <div className="home-cdn__dot" data-row={1} data-col={11} />
                <div className="home-cdn__dot" data-row={1} data-col={12} />
                <div className="home-cdn__dot" data-row={1} data-col={13} />
                <div className="home-cdn__dot" data-row={1} data-col={14} />
                <div className="home-cdn__dot" data-row={1} data-col={15} />
                <div className="home-cdn__dot" data-row={1} data-col={16} />
                <div className="home-cdn__dot" data-row={1} data-col={17} />
                <div className="home-cdn__dot" data-row={1} data-col={18} />
                <div className="home-cdn__dot" data-row={1} data-col={19} />
                <div className="home-cdn__dot" data-row={1} data-col={20} />
                <div className="home-cdn__dot" data-row={1} data-col={21} />
                <div className="home-cdn__dot" data-row={1} data-col={22} />
                <div className="home-cdn__dot" data-row={1} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={31} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={32} />
                <div className="home-cdn__dot" data-row={1} data-col={33} />
                <div className="home-cdn__dot" data-row={1} data-col={34} />
                <div className="home-cdn__dot" data-row={1} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={38} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={39} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={40} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={41} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={42} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={43} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={44} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={1} data-col={45} />
                <div className="home-cdn__dot" data-row={1} data-col={46} />
                <div className="home-cdn__dot" data-row={1} data-col={47} />
                <div className="home-cdn__dot" data-row={1} data-col={48} />
                <div className="home-cdn__dot" data-row={1} data-col={49} />
                <div className="home-cdn__dot" data-row={1} data-col={50} />
                <div className="home-cdn__dot" data-row={1} data-col={51} />
                <div className="home-cdn__dot" data-row={1} data-col={52} />
                <div className="home-cdn__dot" data-row={1} data-col={53} />
                <div className="home-cdn__dot" data-row={1} data-col={54} />
                <div className="home-cdn__dot" data-row={1} data-col={55} />
                <div className="home-cdn__dot" data-row={1} data-col={56} />
                <div className="home-cdn__dot" data-row={1} data-col={57} />
                <div className="home-cdn__dot" data-row={1} data-col={58} />
                <div className="home-cdn__dot" data-row={1} data-col={59} />
                <div className="home-cdn__dot" data-row={1} data-col={60} />
                <div className="home-cdn__dot" data-row={1} data-col={61} />
                <div className="home-cdn__dot" data-row={1} data-col={62} />
                <div className="home-cdn__dot" data-row={1} data-col={63} />
                <div className="home-cdn__dot" data-row={1} data-col={64} />
                <div className="home-cdn__dot" data-row={1} data-col={65} />
                <div className="home-cdn__dot" data-row={1} data-col={66} />
                <div className="home-cdn__dot" data-row={1} data-col={67} />
                <div className="home-cdn__dot" data-row={1} data-col={68} />
                <div className="home-cdn__dot" data-row={1} data-col={69} />
                <div className="home-cdn__dot" data-row={1} data-col={70} />
                <div className="home-cdn__dot" data-row={1} data-col={71} />
                <div className="home-cdn__dot" data-row={1} data-col={72} />
                <div className="home-cdn__dot" data-row={1} data-col={73} />
                <div className="home-cdn__dot" data-row={1} data-col={74} />
                <div className="home-cdn__dot" data-row={1} data-col={75} />
                <div className="home-cdn__dot" data-row={1} data-col={76} />
                <div className="home-cdn__dot" data-row={1} data-col={77} />
                <div className="home-cdn__dot" data-row={1} data-col={78} />
                <div className="home-cdn__dot" data-row={1} data-col={79} />
                <div className="home-cdn__dot" data-row={1} data-col={80} />
                <div className="home-cdn__dot" data-row={1} data-col={81} />
                <div className="home-cdn__dot" data-row={1} data-col={82} />
                <div className="home-cdn__dot" data-row={1} data-col={83} />
                <div className="home-cdn__dot" data-row={1} data-col={84} />
                <div className="home-cdn__dot" data-row={1} data-col={85} />
                <div className="home-cdn__dot" data-row={1} data-col={86} />
                <div className="home-cdn__dot" data-row={1} data-col={87} />
                <div className="home-cdn__dot" data-row={1} data-col={88} />
                <div className="home-cdn__dot" data-row={1} data-col={89} />
                <div className="home-cdn__dot" data-row={1} data-col={90} />
                <div className="home-cdn__dot" data-row={1} data-col={91} />
                <div className="home-cdn__dot" data-row={1} data-col={92} />
                <div className="home-cdn__dot" data-row={1} data-col={93} />
                <div className="home-cdn__dot" data-row={1} data-col={94} />
                <div className="home-cdn__dot" data-row={1} data-col={95} />
                <div className="home-cdn__dot" data-row={1} data-col={96} />
                <div className="home-cdn__dot" data-row={1} data-col={97} />
                <div className="home-cdn__dot" data-row={1} data-col={98} />
                <div className="home-cdn__dot" data-row={1} data-col={99} />
                <div className="home-cdn__dot" data-row={1} data-col={100} />
                <div className="home-cdn__dot" data-row={1} data-col={101} />
                <div className="home-cdn__dot" data-row={1} data-col={102} />
                <div className="home-cdn__dot" data-row={1} data-col={103} />
                <div className="home-cdn__dot" data-row={1} data-col={104} />
                <div className="home-cdn__dot" data-row={1} data-col={105} />
                <div className="home-cdn__dot" data-row={1} data-col={106} />
                <div className="home-cdn__dot" data-row={1} data-col={107} />
                <div className="home-cdn__dot" data-row={1} data-col={108} />
                <div className="home-cdn__dot" data-row={1} data-col={109} />
                <div className="home-cdn__dot" data-row={1} data-col={110} />
                <div className="home-cdn__dot" data-row={1} data-col={111} />
                <div className="home-cdn__dot" data-row={1} data-col={112} />
                <div className="home-cdn__dot" data-row={1} data-col={113} />
                <div className="home-cdn__dot" data-row={1} data-col={114} />
                <div className="home-cdn__dot" data-row={2} data-col={1} />
                <div className="home-cdn__dot" data-row={2} data-col={2} />
                <div className="home-cdn__dot" data-row={2} data-col={3} />
                <div className="home-cdn__dot" data-row={2} data-col={4} />
                <div className="home-cdn__dot" data-row={2} data-col={5} />
                <div className="home-cdn__dot" data-row={2} data-col={6} />
                <div className="home-cdn__dot" data-row={2} data-col={7} />
                <div className="home-cdn__dot" data-row={2} data-col={8} />
                <div className="home-cdn__dot" data-row={2} data-col={9} />
                <div className="home-cdn__dot" data-row={2} data-col={10} />
                <div className="home-cdn__dot" data-row={2} data-col={11} />
                <div className="home-cdn__dot" data-row={2} data-col={12} />
                <div className="home-cdn__dot" data-row={2} data-col={13} />
                <div className="home-cdn__dot" data-row={2} data-col={14} />
                <div className="home-cdn__dot" data-row={2} data-col={15} />
                <div className="home-cdn__dot" data-row={2} data-col={16} />
                <div className="home-cdn__dot" data-row={2} data-col={17} />
                <div className="home-cdn__dot" data-row={2} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={29} />
                <div className="home-cdn__dot" data-row={2} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={31} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={32} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={38} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={39} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={40} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={41} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={42} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={43} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={44} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={45} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={46} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={47} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={2} data-col={48} />
                <div className="home-cdn__dot" data-row={2} data-col={49} />
                <div className="home-cdn__dot" data-row={2} data-col={50} />
                <div className="home-cdn__dot" data-row={2} data-col={51} />
                <div className="home-cdn__dot" data-row={2} data-col={52} />
                <div className="home-cdn__dot" data-row={2} data-col={53} />
                <div className="home-cdn__dot" data-row={2} data-col={54} data-continent="europe" />
                <div className="home-cdn__dot" data-row={2} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={2} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={2} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={2} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={2} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={2} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={2} data-col={61} />
                <div className="home-cdn__dot" data-row={2} data-col={62} />
                <div className="home-cdn__dot" data-row={2} data-col={63} />
                <div className="home-cdn__dot" data-row={2} data-col={64} />
                <div className="home-cdn__dot" data-row={2} data-col={65} />
                <div className="home-cdn__dot" data-row={2} data-col={66} />
                <div className="home-cdn__dot" data-row={2} data-col={67} />
                <div className="home-cdn__dot" data-row={2} data-col={68} />
                <div className="home-cdn__dot" data-row={2} data-col={69} />
                <div className="home-cdn__dot" data-row={2} data-col={70} />
                <div className="home-cdn__dot" data-row={2} data-col={71} />
                <div className="home-cdn__dot" data-row={2} data-col={72} />
                <div className="home-cdn__dot" data-row={2} data-col={73} />
                <div className="home-cdn__dot" data-row={2} data-col={74} />
                <div className="home-cdn__dot" data-row={2} data-col={75} />
                <div className="home-cdn__dot" data-row={2} data-col={76} />
                <div className="home-cdn__dot" data-row={2} data-col={77} />
                <div className="home-cdn__dot" data-row={2} data-col={78} />
                <div className="home-cdn__dot" data-row={2} data-col={79} />
                <div className="home-cdn__dot" data-row={2} data-col={80} />
                <div className="home-cdn__dot" data-row={2} data-col={81} />
                <div className="home-cdn__dot" data-row={2} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={2} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={2} data-col={84} />
                <div className="home-cdn__dot" data-row={2} data-col={85} />
                <div className="home-cdn__dot" data-row={2} data-col={86} />
                <div className="home-cdn__dot" data-row={2} data-col={87} />
                <div className="home-cdn__dot" data-row={2} data-col={88} />
                <div className="home-cdn__dot" data-row={2} data-col={89} />
                <div className="home-cdn__dot" data-row={2} data-col={90} />
                <div className="home-cdn__dot" data-row={2} data-col={91} />
                <div className="home-cdn__dot" data-row={2} data-col={92} />
                <div className="home-cdn__dot" data-row={2} data-col={93} />
                <div className="home-cdn__dot" data-row={2} data-col={94} />
                <div className="home-cdn__dot" data-row={2} data-col={95} />
                <div className="home-cdn__dot" data-row={2} data-col={96} />
                <div className="home-cdn__dot" data-row={2} data-col={97} />
                <div className="home-cdn__dot" data-row={2} data-col={98} />
                <div className="home-cdn__dot" data-row={2} data-col={99} />
                <div className="home-cdn__dot" data-row={2} data-col={100} />
                <div className="home-cdn__dot" data-row={2} data-col={101} />
                <div className="home-cdn__dot" data-row={2} data-col={102} />
                <div className="home-cdn__dot" data-row={2} data-col={103} />
                <div className="home-cdn__dot" data-row={2} data-col={104} />
                <div className="home-cdn__dot" data-row={2} data-col={105} />
                <div className="home-cdn__dot" data-row={2} data-col={106} />
                <div className="home-cdn__dot" data-row={2} data-col={107} />
                <div className="home-cdn__dot" data-row={2} data-col={108} />
                <div className="home-cdn__dot" data-row={2} data-col={109} />
                <div className="home-cdn__dot" data-row={2} data-col={110} />
                <div className="home-cdn__dot" data-row={2} data-col={111} />
                <div className="home-cdn__dot" data-row={2} data-col={112} />
                <div className="home-cdn__dot" data-row={2} data-col={113} />
                <div className="home-cdn__dot" data-row={2} data-col={114} />
                <div className="home-cdn__dot" data-row={3} data-col={1} />
                <div className="home-cdn__dot" data-row={3} data-col={2} />
                <div className="home-cdn__dot" data-row={3} data-col={3} />
                <div className="home-cdn__dot" data-row={3} data-col={4} />
                <div className="home-cdn__dot" data-row={3} data-col={5} />
                <div className="home-cdn__dot" data-row={3} data-col={6} />
                <div className="home-cdn__dot" data-row={3} data-col={7} />
                <div className="home-cdn__dot" data-row={3} data-col={8} />
                <div className="home-cdn__dot" data-row={3} data-col={9} />
                <div className="home-cdn__dot" data-row={3} data-col={10} />
                <div className="home-cdn__dot" data-row={3} data-col={11} />
                <div className="home-cdn__dot" data-row={3} data-col={12} />
                <div className="home-cdn__dot" data-row={3} data-col={13} />
                <div className="home-cdn__dot" data-row={3} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={15} />
                <div className="home-cdn__dot" data-row={3} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={27} />
                <div className="home-cdn__dot" data-row={3} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={31} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={32} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={38} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={39} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={40} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={41} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={42} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={43} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={44} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={45} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={46} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={47} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={3} data-col={48} />
                <div className="home-cdn__dot" data-row={3} data-col={49} />
                <div className="home-cdn__dot" data-row={3} data-col={50} />
                <div className="home-cdn__dot" data-row={3} data-col={51} />
                <div className="home-cdn__dot" data-row={3} data-col={52} />
                <div className="home-cdn__dot" data-row={3} data-col={53} />
                <div className="home-cdn__dot" data-row={3} data-col={54} data-continent="europe" />
                <div className="home-cdn__dot" data-row={3} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={3} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={3} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={3} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={3} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={3} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={3} data-col={61} />
                <div className="home-cdn__dot" data-row={3} data-col={62} />
                <div className="home-cdn__dot" data-row={3} data-col={63} />
                <div className="home-cdn__dot" data-row={3} data-col={64} />
                <div className="home-cdn__dot" data-row={3} data-col={65} />
                <div className="home-cdn__dot" data-row={3} data-col={66} />
                <div className="home-cdn__dot" data-row={3} data-col={67} />
                <div className="home-cdn__dot" data-row={3} data-col={68} />
                <div className="home-cdn__dot" data-row={3} data-col={69} />
                <div className="home-cdn__dot" data-row={3} data-col={70} />
                <div className="home-cdn__dot" data-row={3} data-col={71} />
                <div className="home-cdn__dot" data-row={3} data-col={72} />
                <div className="home-cdn__dot" data-row={3} data-col={73} />
                <div className="home-cdn__dot" data-row={3} data-col={74} />
                <div className="home-cdn__dot" data-row={3} data-col={75} />
                <div className="home-cdn__dot" data-row={3} data-col={76} />
                <div className="home-cdn__dot" data-row={3} data-col={77} />
                <div className="home-cdn__dot" data-row={3} data-col={78} />
                <div className="home-cdn__dot" data-row={3} data-col={79} />
                <div className="home-cdn__dot" data-row={3} data-col={80} />
                <div className="home-cdn__dot" data-row={3} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={3} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={3} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={3} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={3} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={3} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={3} data-col={87} />
                <div className="home-cdn__dot" data-row={3} data-col={88} />
                <div className="home-cdn__dot" data-row={3} data-col={89} />
                <div className="home-cdn__dot" data-row={3} data-col={90} />
                <div className="home-cdn__dot" data-row={3} data-col={91} />
                <div className="home-cdn__dot" data-row={3} data-col={92} />
                <div className="home-cdn__dot" data-row={3} data-col={93} />
                <div className="home-cdn__dot" data-row={3} data-col={94} />
                <div className="home-cdn__dot" data-row={3} data-col={95} />
                <div className="home-cdn__dot" data-row={3} data-col={96} />
                <div className="home-cdn__dot" data-row={3} data-col={97} />
                <div className="home-cdn__dot" data-row={3} data-col={98} />
                <div className="home-cdn__dot" data-row={3} data-col={99} />
                <div className="home-cdn__dot" data-row={3} data-col={100} />
                <div className="home-cdn__dot" data-row={3} data-col={101} />
                <div className="home-cdn__dot" data-row={3} data-col={102} />
                <div className="home-cdn__dot" data-row={3} data-col={103} />
                <div className="home-cdn__dot" data-row={3} data-col={104} />
                <div className="home-cdn__dot" data-row={3} data-col={105} />
                <div className="home-cdn__dot" data-row={3} data-col={106} />
                <div className="home-cdn__dot" data-row={3} data-col={107} />
                <div className="home-cdn__dot" data-row={3} data-col={108} />
                <div className="home-cdn__dot" data-row={3} data-col={109} />
                <div className="home-cdn__dot" data-row={3} data-col={110} />
                <div className="home-cdn__dot" data-row={3} data-col={111} />
                <div className="home-cdn__dot" data-row={3} data-col={112} />
                <div className="home-cdn__dot" data-row={3} data-col={113} />
                <div className="home-cdn__dot" data-row={3} data-col={114} />
                <div className="home-cdn__dot" data-row={4} data-col={1} />
                <div className="home-cdn__dot" data-row={4} data-col={2} />
                <div className="home-cdn__dot" data-row={4} data-col={3} />
                <div className="home-cdn__dot" data-row={4} data-col={4} />
                <div className="home-cdn__dot" data-row={4} data-col={5} />
                <div className="home-cdn__dot" data-row={4} data-col={6} />
                <div className="home-cdn__dot" data-row={4} data-col={7} />
                <div className="home-cdn__dot" data-row={4} data-col={8} />
                <div className="home-cdn__dot" data-row={4} data-col={9} />
                <div className="home-cdn__dot" data-row={4} data-col={10} />
                <div className="home-cdn__dot" data-row={4} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={21} />
                <div className="home-cdn__dot" data-row={4} data-col={22} />
                <div className="home-cdn__dot" data-row={4} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={26} />
                <div className="home-cdn__dot" data-row={4} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={31} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={32} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={38} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={39} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={40} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={41} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={42} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={43} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={44} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={45} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={4} data-col={46} />
                <div className="home-cdn__dot" data-row={4} data-col={47} />
                <div className="home-cdn__dot" data-row={4} data-col={48} />
                <div className="home-cdn__dot" data-row={4} data-col={49} />
                <div className="home-cdn__dot" data-row={4} data-col={50} />
                <div className="home-cdn__dot" data-row={4} data-col={51} />
                <div className="home-cdn__dot" data-row={4} data-col={52} />
                <div className="home-cdn__dot" data-row={4} data-col={53} />
                <div className="home-cdn__dot" data-row={4} data-col={54} />
                <div className="home-cdn__dot" data-row={4} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={4} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={4} data-col={57} />
                <div className="home-cdn__dot" data-row={4} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={4} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={4} data-col={60} />
                <div className="home-cdn__dot" data-row={4} data-col={61} />
                <div className="home-cdn__dot" data-row={4} data-col={62} />
                <div className="home-cdn__dot" data-row={4} data-col={63} />
                <div className="home-cdn__dot" data-row={4} data-col={64} />
                <div className="home-cdn__dot" data-row={4} data-col={65} />
                <div className="home-cdn__dot" data-row={4} data-col={66} />
                <div className="home-cdn__dot" data-row={4} data-col={67} />
                <div className="home-cdn__dot" data-row={4} data-col={68} />
                <div className="home-cdn__dot" data-row={4} data-col={69} />
                <div className="home-cdn__dot" data-row={4} data-col={70} />
                <div className="home-cdn__dot" data-row={4} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={4} data-col={72} data-continent="europe" />
                <div className="home-cdn__dot" data-row={4} data-col={73} data-continent="europe" />
                <div className="home-cdn__dot" data-row={4} data-col={74} data-continent="europe" />
                <div className="home-cdn__dot" data-row={4} data-col={75} />
                <div className="home-cdn__dot" data-row={4} data-col={76} />
                <div className="home-cdn__dot" data-row={4} data-col={77} />
                <div className="home-cdn__dot" data-row={4} data-col={78} />
                <div className="home-cdn__dot" data-row={4} data-col={79} />
                <div className="home-cdn__dot" data-row={4} data-col={80} />
                <div className="home-cdn__dot" data-row={4} data-col={81} />
                <div className="home-cdn__dot" data-row={4} data-col={82} />
                <div className="home-cdn__dot" data-row={4} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={90} />
                <div className="home-cdn__dot" data-row={4} data-col={91} />
                <div className="home-cdn__dot" data-row={4} data-col={92} />
                <div className="home-cdn__dot" data-row={4} data-col={93} />
                <div className="home-cdn__dot" data-row={4} data-col={94} />
                <div className="home-cdn__dot" data-row={4} data-col={95} />
                <div className="home-cdn__dot" data-row={4} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={4} data-col={100} />
                <div className="home-cdn__dot" data-row={4} data-col={101} />
                <div className="home-cdn__dot" data-row={4} data-col={102} />
                <div className="home-cdn__dot" data-row={4} data-col={103} />
                <div className="home-cdn__dot" data-row={4} data-col={104} />
                <div className="home-cdn__dot" data-row={4} data-col={105} />
                <div className="home-cdn__dot" data-row={4} data-col={106} />
                <div className="home-cdn__dot" data-row={4} data-col={107} />
                <div className="home-cdn__dot" data-row={4} data-col={108} />
                <div className="home-cdn__dot" data-row={4} data-col={109} />
                <div className="home-cdn__dot" data-row={4} data-col={110} />
                <div className="home-cdn__dot" data-row={4} data-col={111} />
                <div className="home-cdn__dot" data-row={4} data-col={112} />
                <div className="home-cdn__dot" data-row={4} data-col={113} />
                <div className="home-cdn__dot" data-row={4} data-col={114} />
                <div className="home-cdn__dot" data-row={5} data-col={1} />
                <div className="home-cdn__dot" data-row={5} data-col={2} />
                <div className="home-cdn__dot" data-row={5} data-col={3} />
                <div className="home-cdn__dot" data-row={5} data-col={4} />
                <div className="home-cdn__dot" data-row={5} data-col={5} />
                <div className="home-cdn__dot" data-row={5} data-col={6} />
                <div className="home-cdn__dot" data-row={5} data-col={7} />
                <div className="home-cdn__dot" data-row={5} data-col={8} />
                <div className="home-cdn__dot" data-row={5} data-col={9} />
                <div className="home-cdn__dot" data-row={5} data-col={10} />
                <div className="home-cdn__dot" data-row={5} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={17} />
                <div className="home-cdn__dot" data-row={5} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={23} />
                <div className="home-cdn__dot" data-row={5} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={26} />
                <div className="home-cdn__dot" data-row={5} data-col={27} />
                <div className="home-cdn__dot" data-row={5} data-col={28} />
                <div className="home-cdn__dot" data-row={5} data-col={29} />
                <div className="home-cdn__dot" data-row={5} data-col={30} />
                <div className="home-cdn__dot" data-row={5} data-col={31} />
                <div className="home-cdn__dot" data-row={5} data-col={32} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={38} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={39} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={40} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={41} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={42} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={43} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={44} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={45} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={5} data-col={46} />
                <div className="home-cdn__dot" data-row={5} data-col={47} />
                <div className="home-cdn__dot" data-row={5} data-col={48} />
                <div className="home-cdn__dot" data-row={5} data-col={49} />
                <div className="home-cdn__dot" data-row={5} data-col={50} />
                <div className="home-cdn__dot" data-row={5} data-col={51} />
                <div className="home-cdn__dot" data-row={5} data-col={52} />
                <div className="home-cdn__dot" data-row={5} data-col={53} />
                <div className="home-cdn__dot" data-row={5} data-col={54} />
                <div className="home-cdn__dot" data-row={5} data-col={55} />
                <div className="home-cdn__dot" data-row={5} data-col={56} />
                <div className="home-cdn__dot" data-row={5} data-col={57} />
                <div className="home-cdn__dot" data-row={5} data-col={58} />
                <div className="home-cdn__dot" data-row={5} data-col={59} />
                <div className="home-cdn__dot" data-row={5} data-col={60} />
                <div className="home-cdn__dot" data-row={5} data-col={61} />
                <div className="home-cdn__dot" data-row={5} data-col={62} />
                <div className="home-cdn__dot" data-row={5} data-col={63} />
                <div className="home-cdn__dot" data-row={5} data-col={64} />
                <div className="home-cdn__dot" data-row={5} data-col={65} />
                <div className="home-cdn__dot" data-row={5} data-col={66} />
                <div className="home-cdn__dot" data-row={5} data-col={67} />
                <div className="home-cdn__dot" data-row={5} data-col={68} />
                <div className="home-cdn__dot" data-row={5} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={5} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={5} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={5} data-col={72} data-continent="europe" />
                <div className="home-cdn__dot" data-row={5} data-col={73} data-continent="europe" />
                <div className="home-cdn__dot" data-row={5} data-col={74} />
                <div className="home-cdn__dot" data-row={5} data-col={75} />
                <div className="home-cdn__dot" data-row={5} data-col={76} />
                <div className="home-cdn__dot" data-row={5} data-col={77} />
                <div className="home-cdn__dot" data-row={5} data-col={78} />
                <div className="home-cdn__dot" data-row={5} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={91} />
                <div className="home-cdn__dot" data-row={5} data-col={92} />
                <div className="home-cdn__dot" data-row={5} data-col={93} />
                <div className="home-cdn__dot" data-row={5} data-col={94} />
                <div className="home-cdn__dot" data-row={5} data-col={95} />
                <div className="home-cdn__dot" data-row={5} data-col={96} />
                <div className="home-cdn__dot" data-row={5} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={100} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={101} data-continent="asia" />
                <div className="home-cdn__dot" data-row={5} data-col={102} />
                <div className="home-cdn__dot" data-row={5} data-col={103} />
                <div className="home-cdn__dot" data-row={5} data-col={104} />
                <div className="home-cdn__dot" data-row={5} data-col={105} />
                <div className="home-cdn__dot" data-row={5} data-col={106} />
                <div className="home-cdn__dot" data-row={5} data-col={107} />
                <div className="home-cdn__dot" data-row={5} data-col={108} />
                <div className="home-cdn__dot" data-row={5} data-col={109} />
                <div className="home-cdn__dot" data-row={5} data-col={110} />
                <div className="home-cdn__dot" data-row={5} data-col={111} />
                <div className="home-cdn__dot" data-row={5} data-col={112} />
                <div className="home-cdn__dot" data-row={5} data-col={113} />
                <div className="home-cdn__dot" data-row={5} data-col={114} />
                <div className="home-cdn__dot" data-row={6} data-col={1} />
                <div className="home-cdn__dot" data-row={6} data-col={2} />
                <div className="home-cdn__dot" data-row={6} data-col={3} />
                <div className="home-cdn__dot" data-row={6} data-col={4} />
                <div className="home-cdn__dot" data-row={6} data-col={5} />
                <div className="home-cdn__dot" data-row={6} data-col={6} />
                <div className="home-cdn__dot" data-row={6} data-col={7} />
                <div className="home-cdn__dot" data-row={6} data-col={8} />
                <div className="home-cdn__dot" data-row={6} data-col={9} />
                <div className="home-cdn__dot" data-row={6} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={12} />
                <div className="home-cdn__dot" data-row={6} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={17} />
                <div className="home-cdn__dot" data-row={6} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={28} />
                <div className="home-cdn__dot" data-row={6} data-col={29} />
                <div className="home-cdn__dot" data-row={6} data-col={30} />
                <div className="home-cdn__dot" data-row={6} data-col={31} />
                <div className="home-cdn__dot" data-row={6} data-col={32} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={38} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={39} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={40} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={41} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={42} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={43} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={6} data-col={44} />
                <div className="home-cdn__dot" data-row={6} data-col={45} />
                <div className="home-cdn__dot" data-row={6} data-col={46} />
                <div className="home-cdn__dot" data-row={6} data-col={47} />
                <div className="home-cdn__dot" data-row={6} data-col={48} />
                <div className="home-cdn__dot" data-row={6} data-col={49} />
                <div className="home-cdn__dot" data-row={6} data-col={50} />
                <div className="home-cdn__dot" data-row={6} data-col={51} />
                <div className="home-cdn__dot" data-row={6} data-col={52} />
                <div className="home-cdn__dot" data-row={6} data-col={53} />
                <div className="home-cdn__dot" data-row={6} data-col={54} />
                <div className="home-cdn__dot" data-row={6} data-col={55} />
                <div className="home-cdn__dot" data-row={6} data-col={56} />
                <div className="home-cdn__dot" data-row={6} data-col={57} />
                <div className="home-cdn__dot" data-row={6} data-col={58} />
                <div className="home-cdn__dot" data-row={6} data-col={59} />
                <div className="home-cdn__dot" data-row={6} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={6} data-col={61} />
                <div className="home-cdn__dot" data-row={6} data-col={62} />
                <div className="home-cdn__dot" data-row={6} data-col={63} />
                <div className="home-cdn__dot" data-row={6} data-col={64} />
                <div className="home-cdn__dot" data-row={6} data-col={65} />
                <div className="home-cdn__dot" data-row={6} data-col={66} />
                <div className="home-cdn__dot" data-row={6} data-col={67} />
                <div className="home-cdn__dot" data-row={6} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={6} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={6} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={6} data-col={71} />
                <div className="home-cdn__dot" data-row={6} data-col={72} />
                <div className="home-cdn__dot" data-row={6} data-col={73} />
                <div className="home-cdn__dot" data-row={6} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={78} />
                <div className="home-cdn__dot" data-row={6} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={95} />
                <div className="home-cdn__dot" data-row={6} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={6} data-col={100} />
                <div className="home-cdn__dot" data-row={6} data-col={101} />
                <div className="home-cdn__dot" data-row={6} data-col={102} />
                <div className="home-cdn__dot" data-row={6} data-col={103} />
                <div className="home-cdn__dot" data-row={6} data-col={104} />
                <div className="home-cdn__dot" data-row={6} data-col={105} />
                <div className="home-cdn__dot" data-row={6} data-col={106} />
                <div className="home-cdn__dot" data-row={6} data-col={107} />
                <div className="home-cdn__dot" data-row={6} data-col={108} />
                <div className="home-cdn__dot" data-row={6} data-col={109} />
                <div className="home-cdn__dot" data-row={6} data-col={110} />
                <div className="home-cdn__dot" data-row={6} data-col={111} />
                <div className="home-cdn__dot" data-row={6} data-col={112} />
                <div className="home-cdn__dot" data-row={6} data-col={113} />
                <div className="home-cdn__dot" data-row={6} data-col={114} />
                <div className="home-cdn__dot" data-row={7} data-col={1} />
                <div className="home-cdn__dot" data-row={7} data-col={2} />
                <div className="home-cdn__dot" data-row={7} data-col={3} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={4} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={5} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={6} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={7} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={12} />
                <div className="home-cdn__dot" data-row={7} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={18} />
                <div className="home-cdn__dot" data-row={7} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={30} />
                <div className="home-cdn__dot" data-row={7} data-col={31} />
                <div className="home-cdn__dot" data-row={7} data-col={32} />
                <div className="home-cdn__dot" data-row={7} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={38} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={39} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={40} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={41} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={42} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={43} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={44} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={7} data-col={45} />
                <div className="home-cdn__dot" data-row={7} data-col={46} />
                <div className="home-cdn__dot" data-row={7} data-col={47} />
                <div className="home-cdn__dot" data-row={7} data-col={48} />
                <div className="home-cdn__dot" data-row={7} data-col={49} />
                <div className="home-cdn__dot" data-row={7} data-col={50} />
                <div className="home-cdn__dot" data-row={7} data-col={51} />
                <div className="home-cdn__dot" data-row={7} data-col={52} />
                <div className="home-cdn__dot" data-row={7} data-col={53} />
                <div className="home-cdn__dot" data-row={7} data-col={54} />
                <div className="home-cdn__dot" data-row={7} data-col={55} />
                <div className="home-cdn__dot" data-row={7} data-col={56} />
                <div className="home-cdn__dot" data-row={7} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={7} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={7} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={7} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={7} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={7} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={7} data-col={63} />
                <div className="home-cdn__dot" data-row={7} data-col={64} />
                <div className="home-cdn__dot" data-row={7} data-col={65} />
                <div className="home-cdn__dot" data-row={7} data-col={66} />
                <div className="home-cdn__dot" data-row={7} data-col={67} />
                <div className="home-cdn__dot" data-row={7} data-col={68} />
                <div className="home-cdn__dot" data-row={7} data-col={69} />
                <div className="home-cdn__dot" data-row={7} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={7} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={7} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={76} />
                <div className="home-cdn__dot" data-row={7} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={100} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={101} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={102} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={103} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={104} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={105} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={106} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={107} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={108} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={109} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={110} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={111} data-continent="asia" />
                <div className="home-cdn__dot" data-row={7} data-col={112} />
                <div className="home-cdn__dot" data-row={7} data-col={113} />
                <div className="home-cdn__dot" data-row={7} data-col={114} />
                <div className="home-cdn__dot" data-row={8} data-col={1} />
                <div className="home-cdn__dot" data-row={8} data-col={2} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={3} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={4} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={5} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={6} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={7} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={14} />
                <div className="home-cdn__dot" data-row={8} data-col={15} />
                <div className="home-cdn__dot" data-row={8} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={25} />
                <div className="home-cdn__dot" data-row={8} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={31} />
                <div className="home-cdn__dot" data-row={8} data-col={32} />
                <div className="home-cdn__dot" data-row={8} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={38} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={39} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={40} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={41} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={42} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={8} data-col={43} />
                <div className="home-cdn__dot" data-row={8} data-col={44} />
                <div className="home-cdn__dot" data-row={8} data-col={45} />
                <div className="home-cdn__dot" data-row={8} data-col={46} />
                <div className="home-cdn__dot" data-row={8} data-col={47} />
                <div className="home-cdn__dot" data-row={8} data-col={48} />
                <div className="home-cdn__dot" data-row={8} data-col={49} />
                <div className="home-cdn__dot" data-row={8} data-col={50} />
                <div className="home-cdn__dot" data-row={8} data-col={51} />
                <div className="home-cdn__dot" data-row={8} data-col={52} />
                <div className="home-cdn__dot" data-row={8} data-col={53} />
                <div className="home-cdn__dot" data-row={8} data-col={54} />
                <div className="home-cdn__dot" data-row={8} data-col={55} />
                <div className="home-cdn__dot" data-row={8} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={63} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={64} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={65} />
                <div className="home-cdn__dot" data-row={8} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={8} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={75} />
                <div className="home-cdn__dot" data-row={8} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={100} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={101} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={102} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={103} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={104} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={105} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={106} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={107} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={108} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={109} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={110} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={111} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={112} data-continent="asia" />
                <div className="home-cdn__dot" data-row={8} data-col={113} />
                <div className="home-cdn__dot" data-row={8} data-col={114} />
                <div className="home-cdn__dot" data-row={9} data-col={1} />
                <div className="home-cdn__dot" data-row={9} data-col={2} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={3} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={4} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={5} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={6} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={7} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={25} />
                <div className="home-cdn__dot" data-row={9} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={31} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={32} />
                <div className="home-cdn__dot" data-row={9} data-col={33} />
                <div className="home-cdn__dot" data-row={9} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={38} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={39} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={40} />
                <div className="home-cdn__dot" data-row={9} data-col={41} />
                <div className="home-cdn__dot" data-row={9} data-col={42} />
                <div className="home-cdn__dot" data-row={9} data-col={43} />
                <div className="home-cdn__dot" data-row={9} data-col={44} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={45} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={46} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={47} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={9} data-col={48} />
                <div className="home-cdn__dot" data-row={9} data-col={49} />
                <div className="home-cdn__dot" data-row={9} data-col={50} />
                <div className="home-cdn__dot" data-row={9} data-col={51} />
                <div className="home-cdn__dot" data-row={9} data-col={52} />
                <div className="home-cdn__dot" data-row={9} data-col={53} />
                <div className="home-cdn__dot" data-row={9} data-col={54} />
                <div className="home-cdn__dot" data-row={9} data-col={55} />
                <div className="home-cdn__dot" data-row={9} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={59} />
                <div className="home-cdn__dot" data-row={9} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={63} />
                <div className="home-cdn__dot" data-row={9} data-col={64} />
                <div className="home-cdn__dot" data-row={9} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={9} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={75} />
                <div className="home-cdn__dot" data-row={9} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={100} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={101} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={102} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={103} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={104} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={105} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={106} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={107} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={108} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={109} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={110} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={111} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={112} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={113} data-continent="asia" />
                <div className="home-cdn__dot" data-row={9} data-col={114} />
                <div className="home-cdn__dot" data-row={10} data-col={1} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={2} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={3} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={4} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={5} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={6} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={7} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={31} />
                <div className="home-cdn__dot" data-row={10} data-col={32} />
                <div className="home-cdn__dot" data-row={10} data-col={33} />
                <div className="home-cdn__dot" data-row={10} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={38} />
                <div className="home-cdn__dot" data-row={10} data-col={39} />
                <div className="home-cdn__dot" data-row={10} data-col={40} />
                <div className="home-cdn__dot" data-row={10} data-col={41} />
                <div className="home-cdn__dot" data-row={10} data-col={42} />
                <div className="home-cdn__dot" data-row={10} data-col={43} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={44} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={45} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={46} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={10} data-col={47} />
                <div className="home-cdn__dot" data-row={10} data-col={48} />
                <div className="home-cdn__dot" data-row={10} data-col={49} />
                <div className="home-cdn__dot" data-row={10} data-col={50} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={51} />
                <div className="home-cdn__dot" data-row={10} data-col={52} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={53} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={54} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={10} data-col={56} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">استکهلم</div></div>
                <div className="home-cdn__dot" data-row={10} data-col={57} />
                <div className="home-cdn__dot" data-row={10} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={63} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={64} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={10} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={100} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={101} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={102} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={103} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={104} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={105} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={106} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={107} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={108} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={109} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={110} />
                <div className="home-cdn__dot" data-row={10} data-col={111} />
                <div className="home-cdn__dot" data-row={10} data-col={112} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={113} data-continent="asia" />
                <div className="home-cdn__dot" data-row={10} data-col={114} />
                <div className="home-cdn__dot" data-row={11} data-col={1} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={2} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={3} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={4} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={5} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={6} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={7} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={22} />
                <div className="home-cdn__dot" data-row={11} data-col={23} />
                <div className="home-cdn__dot" data-row={11} data-col={24} />
                <div className="home-cdn__dot" data-row={11} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={31} />
                <div className="home-cdn__dot" data-row={11} data-col={32} />
                <div className="home-cdn__dot" data-row={11} data-col={33} />
                <div className="home-cdn__dot" data-row={11} data-col={34} />
                <div className="home-cdn__dot" data-row={11} data-col={35} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={36} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={37} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={11} data-col={38} />
                <div className="home-cdn__dot" data-row={11} data-col={39} />
                <div className="home-cdn__dot" data-row={11} data-col={40} />
                <div className="home-cdn__dot" data-row={11} data-col={41} />
                <div className="home-cdn__dot" data-row={11} data-col={42} />
                <div className="home-cdn__dot" data-row={11} data-col={43} />
                <div className="home-cdn__dot" data-row={11} data-col={44} />
                <div className="home-cdn__dot" data-row={11} data-col={45} />
                <div className="home-cdn__dot" data-row={11} data-col={46} />
                <div className="home-cdn__dot" data-row={11} data-col={47} />
                <div className="home-cdn__dot" data-row={11} data-col={48} />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={11} data-col={49} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">لندن</div></div>
                <div className="home-cdn__dot" data-row={11} data-col={50} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={51} />
                <div className="home-cdn__dot" data-row={11} data-col={52} />
                <div className="home-cdn__dot" data-row={11} data-col={53} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={54} />
                <div className="home-cdn__dot" data-row={11} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={58} />
                <div className="home-cdn__dot" data-row={11} data-col={59} />
                <div className="home-cdn__dot" data-row={11} data-col={60} />
                <div className="home-cdn__dot" data-row={11} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={63} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={64} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={11} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={100} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={101} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={102} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={103} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={104} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={105} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={106} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={107} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={108} data-continent="asia" />
                <div className="home-cdn__dot" data-row={11} data-col={109} />
                <div className="home-cdn__dot" data-row={11} data-col={110} />
                <div className="home-cdn__dot" data-row={11} data-col={111} />
                <div className="home-cdn__dot" data-row={11} data-col={112} />
                <div className="home-cdn__dot" data-row={11} data-col={113} />
                <div className="home-cdn__dot" data-row={11} data-col={114} />
                <div className="home-cdn__dot" data-row={12} data-col={1} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={2} />
                <div className="home-cdn__dot" data-row={12} data-col={3} />
                <div className="home-cdn__dot" data-row={12} data-col={4} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={5} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={6} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={7} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={22} />
                <div className="home-cdn__dot" data-row={12} data-col={23} />
                <div className="home-cdn__dot" data-row={12} data-col={24} />
                <div className="home-cdn__dot" data-row={12} data-col={25} />
                <div className="home-cdn__dot" data-row={12} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={12} data-col={31} />
                <div className="home-cdn__dot" data-row={12} data-col={32} />
                <div className="home-cdn__dot" data-row={12} data-col={33} />
                <div className="home-cdn__dot" data-row={12} data-col={34} />
                <div className="home-cdn__dot" data-row={12} data-col={35} />
                <div className="home-cdn__dot" data-row={12} data-col={36} />
                <div className="home-cdn__dot" data-row={12} data-col={37} />
                <div className="home-cdn__dot" data-row={12} data-col={38} />
                <div className="home-cdn__dot" data-row={12} data-col={39} />
                <div className="home-cdn__dot" data-row={12} data-col={40} />
                <div className="home-cdn__dot" data-row={12} data-col={41} />
                <div className="home-cdn__dot" data-row={12} data-col={42} />
                <div className="home-cdn__dot" data-row={12} data-col={43} />
                <div className="home-cdn__dot" data-row={12} data-col={44} />
                <div className="home-cdn__dot" data-row={12} data-col={45} />
                <div className="home-cdn__dot" data-row={12} data-col={46} />
                <div className="home-cdn__dot" data-row={12} data-col={47} />
                <div className="home-cdn__dot" data-row={12} data-col={48} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={49} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={50} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={51} />
                <div className="home-cdn__dot" data-row={12} data-col={52} />
                <div className="home-cdn__dot" data-row={12} data-col={53} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={54} />
                <div className="home-cdn__dot" data-row={12} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={63} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={64} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={12} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={97} />
                <div className="home-cdn__dot" data-row={12} data-col={98} />
                <div className="home-cdn__dot" data-row={12} data-col={99} />
                <div className="home-cdn__dot" data-row={12} data-col={100} />
                <div className="home-cdn__dot" data-row={12} data-col={101} />
                <div className="home-cdn__dot" data-row={12} data-col={102} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={103} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={104} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={105} data-continent="asia" />
                <div className="home-cdn__dot" data-row={12} data-col={106} />
                <div className="home-cdn__dot" data-row={12} data-col={107} />
                <div className="home-cdn__dot" data-row={12} data-col={108} />
                <div className="home-cdn__dot" data-row={12} data-col={109} />
                <div className="home-cdn__dot" data-row={12} data-col={110} />
                <div className="home-cdn__dot" data-row={12} data-col={111} />
                <div className="home-cdn__dot" data-row={12} data-col={112} />
                <div className="home-cdn__dot" data-row={12} data-col={113} />
                <div className="home-cdn__dot" data-row={12} data-col={114} />
                <div className="home-cdn__dot" data-row={13} data-col={1} />
                <div className="home-cdn__dot" data-row={13} data-col={2} />
                <div className="home-cdn__dot" data-row={13} data-col={3} />
                <div className="home-cdn__dot" data-row={13} data-col={4} />
                <div className="home-cdn__dot" data-row={13} data-col={5} />
                <div className="home-cdn__dot" data-row={13} data-col={6} />
                <div className="home-cdn__dot" data-row={13} data-col={7} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={24} />
                <div className="home-cdn__dot" data-row={13} data-col={25} />
                <div className="home-cdn__dot" data-row={13} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={31} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={32} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={13} data-col={33} />
                <div className="home-cdn__dot" data-row={13} data-col={34} />
                <div className="home-cdn__dot" data-row={13} data-col={35} />
                <div className="home-cdn__dot" data-row={13} data-col={36} />
                <div className="home-cdn__dot" data-row={13} data-col={37} />
                <div className="home-cdn__dot" data-row={13} data-col={38} />
                <div className="home-cdn__dot" data-row={13} data-col={39} />
                <div className="home-cdn__dot" data-row={13} data-col={40} />
                <div className="home-cdn__dot" data-row={13} data-col={41} />
                <div className="home-cdn__dot" data-row={13} data-col={42} />
                <div className="home-cdn__dot" data-row={13} data-col={43} />
                <div className="home-cdn__dot" data-row={13} data-col={44} />
                <div className="home-cdn__dot" data-row={13} data-col={45} />
                <div className="home-cdn__dot" data-row={13} data-col={46} />
                <div className="home-cdn__dot" data-row={13} data-col={47} />
                <div className="home-cdn__dot" data-row={13} data-col={48} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={49} data-continent="europe" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={13} data-col={50} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">پاریس</div></div>
                <div className="home-cdn__dot" data-row={13} data-col={51} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={52} />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={13} data-col={53} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">آمستردام</div></div>
                <div className="home-cdn__dot" data-row={13} data-col={54} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={56} />
                <div className="home-cdn__dot" data-row={13} data-col={57} />
                <div className="home-cdn__dot" data-row={13} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={63} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={64} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={72} data-continent="europe" />
                <div className="home-cdn__dot" data-row={13} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={100} />
                <div className="home-cdn__dot" data-row={13} data-col={101} />
                <div className="home-cdn__dot" data-row={13} data-col={102} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={103} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={104} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={105} data-continent="asia" />
                <div className="home-cdn__dot" data-row={13} data-col={106} />
                <div className="home-cdn__dot" data-row={13} data-col={107} />
                <div className="home-cdn__dot" data-row={13} data-col={108} />
                <div className="home-cdn__dot" data-row={13} data-col={109} />
                <div className="home-cdn__dot" data-row={13} data-col={110} />
                <div className="home-cdn__dot" data-row={13} data-col={111} />
                <div className="home-cdn__dot" data-row={13} data-col={112} />
                <div className="home-cdn__dot" data-row={13} data-col={113} />
                <div className="home-cdn__dot" data-row={13} data-col={114} />
                <div className="home-cdn__dot" data-row={14} data-col={1} />
                <div className="home-cdn__dot" data-row={14} data-col={2} />
                <div className="home-cdn__dot" data-row={14} data-col={3} />
                <div className="home-cdn__dot" data-row={14} data-col={4} />
                <div className="home-cdn__dot" data-row={14} data-col={5} />
                <div className="home-cdn__dot" data-row={14} data-col={6} />
                <div className="home-cdn__dot" data-row={14} data-col={7} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={31} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={32} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={14} data-col={33} />
                <div className="home-cdn__dot" data-row={14} data-col={34} />
                <div className="home-cdn__dot" data-row={14} data-col={35} />
                <div className="home-cdn__dot" data-row={14} data-col={36} />
                <div className="home-cdn__dot" data-row={14} data-col={37} />
                <div className="home-cdn__dot" data-row={14} data-col={38} />
                <div className="home-cdn__dot" data-row={14} data-col={39} />
                <div className="home-cdn__dot" data-row={14} data-col={40} />
                <div className="home-cdn__dot" data-row={14} data-col={41} />
                <div className="home-cdn__dot" data-row={14} data-col={42} />
                <div className="home-cdn__dot" data-row={14} data-col={43} />
                <div className="home-cdn__dot" data-row={14} data-col={44} />
                <div className="home-cdn__dot" data-row={14} data-col={45} />
                <div className="home-cdn__dot" data-row={14} data-col={46} />
                <div className="home-cdn__dot" data-row={14} data-col={47} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={48} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={49} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={50} data-continent="europe" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={14} data-col={51} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">روتردام</div></div>
                <div className="home-cdn__dot" data-row={14} data-col={52} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={53} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={54} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={14} data-col={59} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">ورشو</div></div>
                <div className="home-cdn__dot" data-row={14} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={63} data-continent="europe" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={14} data-col={64} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">مسکو</div></div>
                <div className="home-cdn__dot" data-row={14} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={72} data-continent="europe" />
                <div className="home-cdn__dot" data-row={14} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={99} />
                <div className="home-cdn__dot" data-row={14} data-col={100} />
                <div className="home-cdn__dot" data-row={14} data-col={101} />
                <div className="home-cdn__dot" data-row={14} data-col={102} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={103} data-continent="asia" />
                <div className="home-cdn__dot" data-row={14} data-col={104} />
                <div className="home-cdn__dot" data-row={14} data-col={105} />
                <div className="home-cdn__dot" data-row={14} data-col={106} />
                <div className="home-cdn__dot" data-row={14} data-col={107} />
                <div className="home-cdn__dot" data-row={14} data-col={108} />
                <div className="home-cdn__dot" data-row={14} data-col={109} />
                <div className="home-cdn__dot" data-row={14} data-col={110} />
                <div className="home-cdn__dot" data-row={14} data-col={111} />
                <div className="home-cdn__dot" data-row={14} data-col={112} />
                <div className="home-cdn__dot" data-row={14} data-col={113} />
                <div className="home-cdn__dot" data-row={14} data-col={114} />
                <div className="home-cdn__dot" data-row={15} data-col={1} />
                <div className="home-cdn__dot" data-row={15} data-col={2} />
                <div className="home-cdn__dot" data-row={15} data-col={3} />
                <div className="home-cdn__dot" data-row={15} data-col={4} />
                <div className="home-cdn__dot" data-row={15} data-col={5} />
                <div className="home-cdn__dot" data-row={15} data-col={6} />
                <div className="home-cdn__dot" data-row={15} data-col={7} />
                <div className="home-cdn__dot" data-row={15} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot home-cdn__dot--red" data-row={15} data-col={10} data-continent="north-america" data-indicator="red"><div className="home-cdn__tooltip">به‌زودی</div></div>
                <div className="home-cdn__dot" data-row={15} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={31} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={32} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={15} data-col={34} />
                <div className="home-cdn__dot" data-row={15} data-col={35} />
                <div className="home-cdn__dot" data-row={15} data-col={36} />
                <div className="home-cdn__dot" data-row={15} data-col={37} />
                <div className="home-cdn__dot" data-row={15} data-col={38} />
                <div className="home-cdn__dot" data-row={15} data-col={39} />
                <div className="home-cdn__dot" data-row={15} data-col={40} />
                <div className="home-cdn__dot" data-row={15} data-col={41} />
                <div className="home-cdn__dot" data-row={15} data-col={42} />
                <div className="home-cdn__dot" data-row={15} data-col={43} />
                <div className="home-cdn__dot" data-row={15} data-col={44} />
                <div className="home-cdn__dot" data-row={15} data-col={45} />
                <div className="home-cdn__dot" data-row={15} data-col={46} />
                <div className="home-cdn__dot" data-row={15} data-col={47} />
                <div className="home-cdn__dot" data-row={15} data-col={48} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={49} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={50} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={51} />
                <div className="home-cdn__dot" data-row={15} data-col={52} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={53} data-continent="europe" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={15} data-col={54} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">فرانکفورت</div></div>
                <div className="home-cdn__dot" data-row={15} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot home-cdn__dot--red" data-row={15} data-col={62} data-continent="europe" data-indicator="red"><div className="home-cdn__tooltip">به‌زودی</div></div>
                <div className="home-cdn__dot" data-row={15} data-col={63} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={64} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={69} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={70} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={71} data-continent="europe" />
                <div className="home-cdn__dot" data-row={15} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={100} />
                <div className="home-cdn__dot" data-row={15} data-col={101} />
                <div className="home-cdn__dot" data-row={15} data-col={102} />
                <div className="home-cdn__dot" data-row={15} data-col={103} data-continent="asia" />
                <div className="home-cdn__dot" data-row={15} data-col={104} />
                <div className="home-cdn__dot" data-row={15} data-col={105} />
                <div className="home-cdn__dot" data-row={15} data-col={106} />
                <div className="home-cdn__dot" data-row={15} data-col={107} />
                <div className="home-cdn__dot" data-row={15} data-col={108} />
                <div className="home-cdn__dot" data-row={15} data-col={109} />
                <div className="home-cdn__dot" data-row={15} data-col={110} />
                <div className="home-cdn__dot" data-row={15} data-col={111} />
                <div className="home-cdn__dot" data-row={15} data-col={112} />
                <div className="home-cdn__dot" data-row={15} data-col={113} />
                <div className="home-cdn__dot" data-row={15} data-col={114} />
                <div className="home-cdn__dot" data-row={16} data-col={1} />
                <div className="home-cdn__dot" data-row={16} data-col={2} />
                <div className="home-cdn__dot" data-row={16} data-col={3} />
                <div className="home-cdn__dot" data-row={16} data-col={4} />
                <div className="home-cdn__dot" data-row={16} data-col={5} />
                <div className="home-cdn__dot" data-row={16} data-col={6} />
                <div className="home-cdn__dot" data-row={16} data-col={7} />
                <div className="home-cdn__dot" data-row={16} data-col={8} />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={16} data-col={9} data-continent="north-america" data-indicator="arvan"><div className="home-cdn__tooltip">سیاتل</div></div>
                <div className="home-cdn__dot" data-row={16} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={22} />
                <div className="home-cdn__dot" data-row={16} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={29} />
                <div className="home-cdn__dot" data-row={16} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={31} />
                <div className="home-cdn__dot" data-row={16} data-col={32} />
                <div className="home-cdn__dot" data-row={16} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={16} data-col={34} />
                <div className="home-cdn__dot" data-row={16} data-col={35} />
                <div className="home-cdn__dot" data-row={16} data-col={36} />
                <div className="home-cdn__dot" data-row={16} data-col={37} />
                <div className="home-cdn__dot" data-row={16} data-col={38} />
                <div className="home-cdn__dot" data-row={16} data-col={39} />
                <div className="home-cdn__dot" data-row={16} data-col={40} />
                <div className="home-cdn__dot" data-row={16} data-col={41} />
                <div className="home-cdn__dot" data-row={16} data-col={42} />
                <div className="home-cdn__dot" data-row={16} data-col={43} />
                <div className="home-cdn__dot" data-row={16} data-col={44} />
                <div className="home-cdn__dot" data-row={16} data-col={45} />
                <div className="home-cdn__dot" data-row={16} data-col={46} />
                <div className="home-cdn__dot" data-row={16} data-col={47} />
                <div className="home-cdn__dot" data-row={16} data-col={48} />
                <div className="home-cdn__dot" data-row={16} data-col={49} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={50} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={51} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={52} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={53} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={54} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={63} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={64} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={16} data-col={69} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={16} data-col={99} />
                <div className="home-cdn__dot" data-row={16} data-col={100} />
                <div className="home-cdn__dot" data-row={16} data-col={101} />
                <div className="home-cdn__dot" data-row={16} data-col={102} />
                <div className="home-cdn__dot" data-row={16} data-col={103} />
                <div className="home-cdn__dot" data-row={16} data-col={104} />
                <div className="home-cdn__dot" data-row={16} data-col={105} />
                <div className="home-cdn__dot" data-row={16} data-col={106} />
                <div className="home-cdn__dot" data-row={16} data-col={107} />
                <div className="home-cdn__dot" data-row={16} data-col={108} />
                <div className="home-cdn__dot" data-row={16} data-col={109} />
                <div className="home-cdn__dot" data-row={16} data-col={110} />
                <div className="home-cdn__dot" data-row={16} data-col={111} />
                <div className="home-cdn__dot" data-row={16} data-col={112} />
                <div className="home-cdn__dot" data-row={16} data-col={113} />
                <div className="home-cdn__dot" data-row={16} data-col={114} />
                <div className="home-cdn__dot" data-row={17} data-col={1} />
                <div className="home-cdn__dot" data-row={17} data-col={2} />
                <div className="home-cdn__dot" data-row={17} data-col={3} />
                <div className="home-cdn__dot" data-row={17} data-col={4} />
                <div className="home-cdn__dot" data-row={17} data-col={5} />
                <div className="home-cdn__dot" data-row={17} data-col={6} />
                <div className="home-cdn__dot" data-row={17} data-col={7} />
                <div className="home-cdn__dot" data-row={17} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={25} />
                <div className="home-cdn__dot" data-row={17} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={17} data-col={28} data-continent="north-america" data-indicator="arvan"><div className="home-cdn__tooltip">مونتريال</div></div>
                <div className="home-cdn__dot" data-row={17} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={30} />
                <div className="home-cdn__dot" data-row={17} data-col={31} />
                <div className="home-cdn__dot" data-row={17} data-col={32} />
                <div className="home-cdn__dot" data-row={17} data-col={33} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={34} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={17} data-col={35} />
                <div className="home-cdn__dot" data-row={17} data-col={36} />
                <div className="home-cdn__dot" data-row={17} data-col={37} />
                <div className="home-cdn__dot" data-row={17} data-col={38} />
                <div className="home-cdn__dot" data-row={17} data-col={39} />
                <div className="home-cdn__dot" data-row={17} data-col={40} />
                <div className="home-cdn__dot" data-row={17} data-col={41} />
                <div className="home-cdn__dot" data-row={17} data-col={42} />
                <div className="home-cdn__dot" data-row={17} data-col={43} />
                <div className="home-cdn__dot" data-row={17} data-col={44} />
                <div className="home-cdn__dot" data-row={17} data-col={45} />
                <div className="home-cdn__dot" data-row={17} data-col={46} />
                <div className="home-cdn__dot" data-row={17} data-col={47} />
                <div className="home-cdn__dot" data-row={17} data-col={48} />
                <div className="home-cdn__dot" data-row={17} data-col={49} />
                <div className="home-cdn__dot" data-row={17} data-col={50} />
                <div className="home-cdn__dot" data-row={17} data-col={51} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={52} data-continent="europe" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={17} data-col={53} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">میلان</div></div>
                <div className="home-cdn__dot" data-row={17} data-col={54} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={61} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={62} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={63} />
                <div className="home-cdn__dot" data-row={17} data-col={64} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={68} />
                <div className="home-cdn__dot" data-row={17} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={17} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={97} />
                <div className="home-cdn__dot" data-row={17} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={17} data-col={100} />
                <div className="home-cdn__dot" data-row={17} data-col={101} />
                <div className="home-cdn__dot" data-row={17} data-col={102} />
                <div className="home-cdn__dot" data-row={17} data-col={103} />
                <div className="home-cdn__dot" data-row={17} data-col={104} />
                <div className="home-cdn__dot" data-row={17} data-col={105} />
                <div className="home-cdn__dot" data-row={17} data-col={106} />
                <div className="home-cdn__dot" data-row={17} data-col={107} />
                <div className="home-cdn__dot" data-row={17} data-col={108} />
                <div className="home-cdn__dot" data-row={17} data-col={109} />
                <div className="home-cdn__dot" data-row={17} data-col={110} />
                <div className="home-cdn__dot" data-row={17} data-col={111} />
                <div className="home-cdn__dot" data-row={17} data-col={112} />
                <div className="home-cdn__dot" data-row={17} data-col={113} />
                <div className="home-cdn__dot" data-row={17} data-col={114} />
                <div className="home-cdn__dot" data-row={18} data-col={1} />
                <div className="home-cdn__dot" data-row={18} data-col={2} />
                <div className="home-cdn__dot" data-row={18} data-col={3} />
                <div className="home-cdn__dot" data-row={18} data-col={4} />
                <div className="home-cdn__dot" data-row={18} data-col={5} />
                <div className="home-cdn__dot" data-row={18} data-col={6} />
                <div className="home-cdn__dot" data-row={18} data-col={7} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={8} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={9} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={24} />
                <div className="home-cdn__dot" data-row={18} data-col={25} />
                <div className="home-cdn__dot" data-row={18} data-col={26} />
                <div className="home-cdn__dot" data-row={18} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={30} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={31} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={18} data-col={32} />
                <div className="home-cdn__dot" data-row={18} data-col={33} />
                <div className="home-cdn__dot" data-row={18} data-col={34} />
                <div className="home-cdn__dot" data-row={18} data-col={35} />
                <div className="home-cdn__dot" data-row={18} data-col={36} />
                <div className="home-cdn__dot" data-row={18} data-col={37} />
                <div className="home-cdn__dot" data-row={18} data-col={38} />
                <div className="home-cdn__dot" data-row={18} data-col={39} />
                <div className="home-cdn__dot" data-row={18} data-col={40} />
                <div className="home-cdn__dot" data-row={18} data-col={41} />
                <div className="home-cdn__dot" data-row={18} data-col={42} />
                <div className="home-cdn__dot" data-row={18} data-col={43} />
                <div className="home-cdn__dot" data-row={18} data-col={44} />
                <div className="home-cdn__dot" data-row={18} data-col={45} />
                <div className="home-cdn__dot" data-row={18} data-col={46} />
                <div className="home-cdn__dot" data-row={18} data-col={47} />
                <div className="home-cdn__dot" data-row={18} data-col={48} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={49} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={50} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={51} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={52} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={53} />
                <div className="home-cdn__dot" data-row={18} data-col={54} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={55} />
                <div className="home-cdn__dot" data-row={18} data-col={56} />
                <div className="home-cdn__dot" data-row={18} data-col={57} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={60} />
                <div className="home-cdn__dot" data-row={18} data-col={61} />
                <div className="home-cdn__dot" data-row={18} data-col={62} />
                <div className="home-cdn__dot" data-row={18} data-col={63} />
                <div className="home-cdn__dot" data-row={18} data-col={64} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={67} />
                <div className="home-cdn__dot" data-row={18} data-col={68} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={18} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={96} />
                <div className="home-cdn__dot" data-row={18} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={99} data-continent="asia" />
                <div className="home-cdn__dot" data-row={18} data-col={100} />
                <div className="home-cdn__dot" data-row={18} data-col={101} />
                <div className="home-cdn__dot" data-row={18} data-col={102} />
                <div className="home-cdn__dot" data-row={18} data-col={103} />
                <div className="home-cdn__dot" data-row={18} data-col={104} />
                <div className="home-cdn__dot" data-row={18} data-col={105} />
                <div className="home-cdn__dot" data-row={18} data-col={106} />
                <div className="home-cdn__dot" data-row={18} data-col={107} />
                <div className="home-cdn__dot" data-row={18} data-col={108} />
                <div className="home-cdn__dot" data-row={18} data-col={109} />
                <div className="home-cdn__dot" data-row={18} data-col={110} />
                <div className="home-cdn__dot" data-row={18} data-col={111} />
                <div className="home-cdn__dot" data-row={18} data-col={112} />
                <div className="home-cdn__dot" data-row={18} data-col={113} />
                <div className="home-cdn__dot" data-row={18} data-col={114} />
                <div className="home-cdn__dot" data-row={19} data-col={1} />
                <div className="home-cdn__dot" data-row={19} data-col={2} />
                <div className="home-cdn__dot" data-row={19} data-col={3} />
                <div className="home-cdn__dot" data-row={19} data-col={4} />
                <div className="home-cdn__dot" data-row={19} data-col={5} />
                <div className="home-cdn__dot" data-row={19} data-col={6} />
                <div className="home-cdn__dot" data-row={19} data-col={7} />
                <div className="home-cdn__dot" data-row={19} data-col={8} />
                <div className="home-cdn__dot" data-row={19} data-col={9} />
                <div className="home-cdn__dot" data-row={19} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={19} data-col={23} data-continent="north-america" data-indicator="arvan"><div className="home-cdn__tooltip">شیکاگو</div></div>
                <div className="home-cdn__dot" data-row={19} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot home-cdn__dot--red" data-row={19} data-col={25} data-continent="north-america" data-indicator="red"><div className="home-cdn__tooltip">به‌زودی</div></div>
                <div className="home-cdn__dot" data-row={19} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={19} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={19} data-col={28} data-continent="north-america" data-indicator="arvan"><div className="home-cdn__tooltip">نیویورک</div></div>
                <div className="home-cdn__dot" data-row={19} data-col={29} />
                <div className="home-cdn__dot" data-row={19} data-col={30} />
                <div className="home-cdn__dot" data-row={19} data-col={31} />
                <div className="home-cdn__dot" data-row={19} data-col={32} />
                <div className="home-cdn__dot" data-row={19} data-col={33} />
                <div className="home-cdn__dot" data-row={19} data-col={34} />
                <div className="home-cdn__dot" data-row={19} data-col={35} />
                <div className="home-cdn__dot" data-row={19} data-col={36} />
                <div className="home-cdn__dot" data-row={19} data-col={37} />
                <div className="home-cdn__dot" data-row={19} data-col={38} />
                <div className="home-cdn__dot" data-row={19} data-col={39} />
                <div className="home-cdn__dot" data-row={19} data-col={40} />
                <div className="home-cdn__dot" data-row={19} data-col={41} />
                <div className="home-cdn__dot" data-row={19} data-col={42} />
                <div className="home-cdn__dot" data-row={19} data-col={43} />
                <div className="home-cdn__dot" data-row={19} data-col={44} />
                <div className="home-cdn__dot" data-row={19} data-col={45} />
                <div className="home-cdn__dot" data-row={19} data-col={46} />
                <div className="home-cdn__dot" data-row={19} data-col={47} />
                <div className="home-cdn__dot" data-row={19} data-col={48} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={49} data-continent="europe" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={19} data-col={50} data-continent="europe" data-indicator="arvan"><div className="home-cdn__tooltip">مادرید</div></div>
                <div className="home-cdn__dot" data-row={19} data-col={51} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={52} />
                <div className="home-cdn__dot" data-row={19} data-col={53} />
                <div className="home-cdn__dot" data-row={19} data-col={54} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={55} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={57} />
                <div className="home-cdn__dot" data-row={19} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={59} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={60} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={61} />
                <div className="home-cdn__dot" data-row={19} data-col={62} />
                <div className="home-cdn__dot" data-row={19} data-col={63} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={64} />
                <div className="home-cdn__dot" data-row={19} data-col={65} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={66} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={67} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={68} />
                <div className="home-cdn__dot" data-row={19} data-col={69} data-continent="europe" />
                <div className="home-cdn__dot" data-row={19} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={95} />
                <div className="home-cdn__dot" data-row={19} data-col={96} />
                <div className="home-cdn__dot" data-row={19} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={98} data-continent="asia" />
                <div className="home-cdn__dot" data-row={19} data-col={99} />
                <div className="home-cdn__dot" data-row={19} data-col={100} />
                <div className="home-cdn__dot" data-row={19} data-col={101} />
                <div className="home-cdn__dot" data-row={19} data-col={102} />
                <div className="home-cdn__dot" data-row={19} data-col={103} />
                <div className="home-cdn__dot" data-row={19} data-col={104} />
                <div className="home-cdn__dot" data-row={19} data-col={105} />
                <div className="home-cdn__dot" data-row={19} data-col={106} />
                <div className="home-cdn__dot" data-row={19} data-col={107} />
                <div className="home-cdn__dot" data-row={19} data-col={108} />
                <div className="home-cdn__dot" data-row={19} data-col={109} />
                <div className="home-cdn__dot" data-row={19} data-col={110} />
                <div className="home-cdn__dot" data-row={19} data-col={111} />
                <div className="home-cdn__dot" data-row={19} data-col={112} />
                <div className="home-cdn__dot" data-row={19} data-col={113} />
                <div className="home-cdn__dot" data-row={19} data-col={114} />
                <div className="home-cdn__dot" data-row={20} data-col={1} />
                <div className="home-cdn__dot" data-row={20} data-col={2} />
                <div className="home-cdn__dot" data-row={20} data-col={3} />
                <div className="home-cdn__dot" data-row={20} data-col={4} />
                <div className="home-cdn__dot" data-row={20} data-col={5} />
                <div className="home-cdn__dot" data-row={20} data-col={6} />
                <div className="home-cdn__dot" data-row={20} data-col={7} />
                <div className="home-cdn__dot" data-row={20} data-col={8} />
                <div className="home-cdn__dot" data-row={20} data-col={9} />
                <div className="home-cdn__dot" data-row={20} data-col={10} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={20} data-col={28} />
                <div className="home-cdn__dot" data-row={20} data-col={29} />
                <div className="home-cdn__dot" data-row={20} data-col={30} />
                <div className="home-cdn__dot" data-row={20} data-col={31} />
                <div className="home-cdn__dot" data-row={20} data-col={32} />
                <div className="home-cdn__dot" data-row={20} data-col={33} />
                <div className="home-cdn__dot" data-row={20} data-col={34} />
                <div className="home-cdn__dot" data-row={20} data-col={35} />
                <div className="home-cdn__dot" data-row={20} data-col={36} />
                <div className="home-cdn__dot" data-row={20} data-col={37} />
                <div className="home-cdn__dot" data-row={20} data-col={38} />
                <div className="home-cdn__dot" data-row={20} data-col={39} />
                <div className="home-cdn__dot" data-row={20} data-col={40} />
                <div className="home-cdn__dot" data-row={20} data-col={41} />
                <div className="home-cdn__dot" data-row={20} data-col={42} />
                <div className="home-cdn__dot" data-row={20} data-col={43} />
                <div className="home-cdn__dot" data-row={20} data-col={44} />
                <div className="home-cdn__dot" data-row={20} data-col={45} />
                <div className="home-cdn__dot" data-row={20} data-col={46} />
                <div className="home-cdn__dot" data-row={20} data-col={47} />
                <div className="home-cdn__dot" data-row={20} data-col={48} data-continent="europe" />
                <div className="home-cdn__dot" data-row={20} data-col={49} data-continent="europe" />
                <div className="home-cdn__dot" data-row={20} data-col={50} data-continent="europe" />
                <div className="home-cdn__dot" data-row={20} data-col={51} />
                <div className="home-cdn__dot" data-row={20} data-col={52} />
                <div className="home-cdn__dot" data-row={20} data-col={53} />
                <div className="home-cdn__dot" data-row={20} data-col={54} />
                <div className="home-cdn__dot" data-row={20} data-col={55} />
                <div className="home-cdn__dot" data-row={20} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={20} data-col={57} />
                <div className="home-cdn__dot" data-row={20} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={20} data-col={59} />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={20} data-col={60} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">استانبول</div></div>
                <div className="home-cdn__dot" data-row={20} data-col={61} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={62} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={63} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={64} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={20} data-col={65} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">تبریز</div></div>
                <div className="home-cdn__dot" data-row={20} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={67} />
                <div className="home-cdn__dot" data-row={20} data-col={68} />
                <div className="home-cdn__dot" data-row={20} data-col={69} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={90} />
                <div className="home-cdn__dot" data-row={20} data-col={91} />
                <div className="home-cdn__dot" data-row={20} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--red" data-row={20} data-col={93} data-continent="asia" data-indicator="red"><div className="home-cdn__tooltip">به‌زودی</div></div>
                <div className="home-cdn__dot" data-row={20} data-col={94} />
                <div className="home-cdn__dot" data-row={20} data-col={95} />
                <div className="home-cdn__dot" data-row={20} data-col={96} />
                <div className="home-cdn__dot" data-row={20} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={20} data-col={98} />
                <div className="home-cdn__dot" data-row={20} data-col={99} />
                <div className="home-cdn__dot" data-row={20} data-col={100} />
                <div className="home-cdn__dot" data-row={20} data-col={101} />
                <div className="home-cdn__dot" data-row={20} data-col={102} />
                <div className="home-cdn__dot" data-row={20} data-col={103} />
                <div className="home-cdn__dot" data-row={20} data-col={104} />
                <div className="home-cdn__dot" data-row={20} data-col={105} />
                <div className="home-cdn__dot" data-row={20} data-col={106} />
                <div className="home-cdn__dot" data-row={20} data-col={107} />
                <div className="home-cdn__dot" data-row={20} data-col={108} />
                <div className="home-cdn__dot" data-row={20} data-col={109} />
                <div className="home-cdn__dot" data-row={20} data-col={110} />
                <div className="home-cdn__dot" data-row={20} data-col={111} />
                <div className="home-cdn__dot" data-row={20} data-col={112} />
                <div className="home-cdn__dot" data-row={20} data-col={113} />
                <div className="home-cdn__dot" data-row={20} data-col={114} />
                <div className="home-cdn__dot" data-row={21} data-col={1} />
                <div className="home-cdn__dot" data-row={21} data-col={2} />
                <div className="home-cdn__dot" data-row={21} data-col={3} />
                <div className="home-cdn__dot" data-row={21} data-col={4} />
                <div className="home-cdn__dot" data-row={21} data-col={5} />
                <div className="home-cdn__dot" data-row={21} data-col={6} />
                <div className="home-cdn__dot" data-row={21} data-col={7} />
                <div className="home-cdn__dot" data-row={21} data-col={8} />
                <div className="home-cdn__dot" data-row={21} data-col={9} />
                <div className="home-cdn__dot" data-row={21} data-col={10} />
                <div className="home-cdn__dot" data-row={21} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={21} data-col={26} data-continent="north-america" data-indicator="arvan"><div className="home-cdn__tooltip">اشبورن</div></div>
                <div className="home-cdn__dot" data-row={21} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={21} data-col={28} />
                <div className="home-cdn__dot" data-row={21} data-col={29} />
                <div className="home-cdn__dot" data-row={21} data-col={30} />
                <div className="home-cdn__dot" data-row={21} data-col={31} />
                <div className="home-cdn__dot" data-row={21} data-col={32} />
                <div className="home-cdn__dot" data-row={21} data-col={33} />
                <div className="home-cdn__dot" data-row={21} data-col={34} />
                <div className="home-cdn__dot" data-row={21} data-col={35} />
                <div className="home-cdn__dot" data-row={21} data-col={36} />
                <div className="home-cdn__dot" data-row={21} data-col={37} />
                <div className="home-cdn__dot" data-row={21} data-col={38} />
                <div className="home-cdn__dot" data-row={21} data-col={39} />
                <div className="home-cdn__dot" data-row={21} data-col={40} />
                <div className="home-cdn__dot" data-row={21} data-col={41} />
                <div className="home-cdn__dot" data-row={21} data-col={42} />
                <div className="home-cdn__dot" data-row={21} data-col={43} />
                <div className="home-cdn__dot" data-row={21} data-col={44} />
                <div className="home-cdn__dot" data-row={21} data-col={45} />
                <div className="home-cdn__dot" data-row={21} data-col={46} />
                <div className="home-cdn__dot" data-row={21} data-col={47} />
                <div className="home-cdn__dot" data-row={21} data-col={48} />
                <div className="home-cdn__dot" data-row={21} data-col={49} />
                <div className="home-cdn__dot" data-row={21} data-col={50} />
                <div className="home-cdn__dot" data-row={21} data-col={51} />
                <div className="home-cdn__dot" data-row={21} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={21} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={21} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={21} data-col={55} />
                <div className="home-cdn__dot" data-row={21} data-col={56} data-continent="europe" />
                <div className="home-cdn__dot" data-row={21} data-col={57} />
                <div className="home-cdn__dot" data-row={21} data-col={58} data-continent="europe" />
                <div className="home-cdn__dot" data-row={21} data-col={59} />
                <div className="home-cdn__dot" data-row={21} data-col={60} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={61} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={62} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={63} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={64} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={67} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={68} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={69} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={21} data-col={71} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">مشهد</div></div>
                <div className="home-cdn__dot" data-row={21} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={92} />
                <div className="home-cdn__dot" data-row={21} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={21} data-col={94} />
                <div className="home-cdn__dot" data-row={21} data-col={95} />
                <div className="home-cdn__dot" data-row={21} data-col={96} />
                <div className="home-cdn__dot" data-row={21} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={21} data-col={98} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">توکیو</div></div>
                <div className="home-cdn__dot" data-row={21} data-col={99} />
                <div className="home-cdn__dot" data-row={21} data-col={100} />
                <div className="home-cdn__dot" data-row={21} data-col={101} />
                <div className="home-cdn__dot" data-row={21} data-col={102} />
                <div className="home-cdn__dot" data-row={21} data-col={103} />
                <div className="home-cdn__dot" data-row={21} data-col={104} />
                <div className="home-cdn__dot" data-row={21} data-col={105} />
                <div className="home-cdn__dot" data-row={21} data-col={106} />
                <div className="home-cdn__dot" data-row={21} data-col={107} />
                <div className="home-cdn__dot" data-row={21} data-col={108} />
                <div className="home-cdn__dot" data-row={21} data-col={109} />
                <div className="home-cdn__dot" data-row={21} data-col={110} />
                <div className="home-cdn__dot" data-row={21} data-col={111} />
                <div className="home-cdn__dot" data-row={21} data-col={112} />
                <div className="home-cdn__dot" data-row={21} data-col={113} />
                <div className="home-cdn__dot" data-row={21} data-col={114} />
                <div className="home-cdn__dot" data-row={22} data-col={1} />
                <div className="home-cdn__dot" data-row={22} data-col={2} />
                <div className="home-cdn__dot" data-row={22} data-col={3} />
                <div className="home-cdn__dot" data-row={22} data-col={4} />
                <div className="home-cdn__dot" data-row={22} data-col={5} />
                <div className="home-cdn__dot" data-row={22} data-col={6} />
                <div className="home-cdn__dot" data-row={22} data-col={7} />
                <div className="home-cdn__dot" data-row={22} data-col={8} />
                <div className="home-cdn__dot" data-row={22} data-col={9} />
                <div className="home-cdn__dot" data-row={22} data-col={10} />
                <div className="home-cdn__dot" data-row={22} data-col={11} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={22} data-col={27} />
                <div className="home-cdn__dot" data-row={22} data-col={28} />
                <div className="home-cdn__dot" data-row={22} data-col={29} />
                <div className="home-cdn__dot" data-row={22} data-col={30} />
                <div className="home-cdn__dot" data-row={22} data-col={31} />
                <div className="home-cdn__dot" data-row={22} data-col={32} />
                <div className="home-cdn__dot" data-row={22} data-col={33} />
                <div className="home-cdn__dot" data-row={22} data-col={34} />
                <div className="home-cdn__dot" data-row={22} data-col={35} />
                <div className="home-cdn__dot" data-row={22} data-col={36} />
                <div className="home-cdn__dot" data-row={22} data-col={37} />
                <div className="home-cdn__dot" data-row={22} data-col={38} />
                <div className="home-cdn__dot" data-row={22} data-col={39} />
                <div className="home-cdn__dot" data-row={22} data-col={40} />
                <div className="home-cdn__dot" data-row={22} data-col={41} />
                <div className="home-cdn__dot" data-row={22} data-col={42} />
                <div className="home-cdn__dot" data-row={22} data-col={43} />
                <div className="home-cdn__dot" data-row={22} data-col={44} />
                <div className="home-cdn__dot" data-row={22} data-col={45} />
                <div className="home-cdn__dot" data-row={22} data-col={46} />
                <div className="home-cdn__dot" data-row={22} data-col={47} />
                <div className="home-cdn__dot" data-row={22} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={22} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={22} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={22} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={22} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={22} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={22} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={22} data-col={55} />
                <div className="home-cdn__dot" data-row={22} data-col={56} />
                <div className="home-cdn__dot" data-row={22} data-col={57} />
                <div className="home-cdn__dot" data-row={22} data-col={58} />
                <div className="home-cdn__dot" data-row={22} data-col={59} />
                <div className="home-cdn__dot" data-row={22} data-col={60} />
                <div className="home-cdn__dot" data-row={22} data-col={61} />
                <div className="home-cdn__dot" data-row={22} data-col={62} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={63} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={64} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={22} data-col={67} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">تهران</div></div>
                <div className="home-cdn__dot" data-row={22} data-col={68} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={69} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={91} />
                <div className="home-cdn__dot" data-row={22} data-col={92} />
                <div className="home-cdn__dot" data-row={22} data-col={93} />
                <div className="home-cdn__dot" data-row={22} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={97} data-continent="asia" />
                <div className="home-cdn__dot" data-row={22} data-col={98} />
                <div className="home-cdn__dot" data-row={22} data-col={99} />
                <div className="home-cdn__dot" data-row={22} data-col={100} />
                <div className="home-cdn__dot" data-row={22} data-col={101} />
                <div className="home-cdn__dot" data-row={22} data-col={102} />
                <div className="home-cdn__dot" data-row={22} data-col={103} />
                <div className="home-cdn__dot" data-row={22} data-col={104} />
                <div className="home-cdn__dot" data-row={22} data-col={105} />
                <div className="home-cdn__dot" data-row={22} data-col={106} />
                <div className="home-cdn__dot" data-row={22} data-col={107} />
                <div className="home-cdn__dot" data-row={22} data-col={108} />
                <div className="home-cdn__dot" data-row={22} data-col={109} />
                <div className="home-cdn__dot" data-row={22} data-col={110} />
                <div className="home-cdn__dot" data-row={22} data-col={111} />
                <div className="home-cdn__dot" data-row={22} data-col={112} />
                <div className="home-cdn__dot" data-row={22} data-col={113} />
                <div className="home-cdn__dot" data-row={22} data-col={114} />
                <div className="home-cdn__dot" data-row={23} data-col={1} />
                <div className="home-cdn__dot" data-row={23} data-col={2} />
                <div className="home-cdn__dot" data-row={23} data-col={3} />
                <div className="home-cdn__dot" data-row={23} data-col={4} />
                <div className="home-cdn__dot" data-row={23} data-col={5} />
                <div className="home-cdn__dot" data-row={23} data-col={6} />
                <div className="home-cdn__dot" data-row={23} data-col={7} />
                <div className="home-cdn__dot" data-row={23} data-col={8} />
                <div className="home-cdn__dot" data-row={23} data-col={9} />
                <div className="home-cdn__dot" data-row={23} data-col={10} />
                <div className="home-cdn__dot" data-row={23} data-col={11} />
                <div className="home-cdn__dot" data-row={23} data-col={12} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={23} data-col={21} data-continent="north-america" data-indicator="arvan"><div className="home-cdn__tooltip">دالاس</div></div>
                <div className="home-cdn__dot" data-row={23} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={23} data-col={27} />
                <div className="home-cdn__dot" data-row={23} data-col={28} />
                <div className="home-cdn__dot" data-row={23} data-col={29} />
                <div className="home-cdn__dot" data-row={23} data-col={30} />
                <div className="home-cdn__dot" data-row={23} data-col={31} />
                <div className="home-cdn__dot" data-row={23} data-col={32} />
                <div className="home-cdn__dot" data-row={23} data-col={33} />
                <div className="home-cdn__dot" data-row={23} data-col={34} />
                <div className="home-cdn__dot" data-row={23} data-col={35} />
                <div className="home-cdn__dot" data-row={23} data-col={36} />
                <div className="home-cdn__dot" data-row={23} data-col={37} />
                <div className="home-cdn__dot" data-row={23} data-col={38} />
                <div className="home-cdn__dot" data-row={23} data-col={39} />
                <div className="home-cdn__dot" data-row={23} data-col={40} />
                <div className="home-cdn__dot" data-row={23} data-col={41} />
                <div className="home-cdn__dot" data-row={23} data-col={42} />
                <div className="home-cdn__dot" data-row={23} data-col={43} />
                <div className="home-cdn__dot" data-row={23} data-col={44} />
                <div className="home-cdn__dot" data-row={23} data-col={45} />
                <div className="home-cdn__dot" data-row={23} data-col={46} />
                <div className="home-cdn__dot" data-row={23} data-col={47} />
                <div className="home-cdn__dot" data-row={23} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={57} />
                <div className="home-cdn__dot" data-row={23} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={59} />
                <div className="home-cdn__dot" data-row={23} data-col={60} />
                <div className="home-cdn__dot" data-row={23} data-col={61} />
                <div className="home-cdn__dot" data-row={23} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={23} data-col={63} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={64} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={67} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={68} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={23} data-col={69} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">اصفهان</div></div>
                <div className="home-cdn__dot" data-row={23} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={92} />
                <div className="home-cdn__dot" data-row={23} data-col={93} />
                <div className="home-cdn__dot" data-row={23} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={96} data-continent="asia" />
                <div className="home-cdn__dot" data-row={23} data-col={97} />
                <div className="home-cdn__dot" data-row={23} data-col={98} />
                <div className="home-cdn__dot" data-row={23} data-col={99} />
                <div className="home-cdn__dot" data-row={23} data-col={100} />
                <div className="home-cdn__dot" data-row={23} data-col={101} />
                <div className="home-cdn__dot" data-row={23} data-col={102} />
                <div className="home-cdn__dot" data-row={23} data-col={103} />
                <div className="home-cdn__dot" data-row={23} data-col={104} />
                <div className="home-cdn__dot" data-row={23} data-col={105} />
                <div className="home-cdn__dot" data-row={23} data-col={106} />
                <div className="home-cdn__dot" data-row={23} data-col={107} />
                <div className="home-cdn__dot" data-row={23} data-col={108} />
                <div className="home-cdn__dot" data-row={23} data-col={109} />
                <div className="home-cdn__dot" data-row={23} data-col={110} />
                <div className="home-cdn__dot" data-row={23} data-col={111} />
                <div className="home-cdn__dot" data-row={23} data-col={112} />
                <div className="home-cdn__dot" data-row={23} data-col={113} />
                <div className="home-cdn__dot" data-row={23} data-col={114} />
                <div className="home-cdn__dot" data-row={24} data-col={1} />
                <div className="home-cdn__dot" data-row={24} data-col={2} />
                <div className="home-cdn__dot" data-row={24} data-col={3} />
                <div className="home-cdn__dot" data-row={24} data-col={4} />
                <div className="home-cdn__dot" data-row={24} data-col={5} />
                <div className="home-cdn__dot" data-row={24} data-col={6} />
                <div className="home-cdn__dot" data-row={24} data-col={7} />
                <div className="home-cdn__dot" data-row={24} data-col={8} />
                <div className="home-cdn__dot" data-row={24} data-col={9} />
                <div className="home-cdn__dot" data-row={24} data-col={10} />
                <div className="home-cdn__dot" data-row={24} data-col={11} />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={24} data-col={12} data-continent="north-america" data-indicator="arvan"><div className="home-cdn__tooltip">لس‌آنجلس</div></div>
                <div className="home-cdn__dot" data-row={24} data-col={13} />
                <div className="home-cdn__dot" data-row={24} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={24} data-col={25} />
                <div className="home-cdn__dot" data-row={24} data-col={26} />
                <div className="home-cdn__dot" data-row={24} data-col={27} />
                <div className="home-cdn__dot" data-row={24} data-col={28} />
                <div className="home-cdn__dot" data-row={24} data-col={29} />
                <div className="home-cdn__dot" data-row={24} data-col={30} />
                <div className="home-cdn__dot" data-row={24} data-col={31} />
                <div className="home-cdn__dot" data-row={24} data-col={32} />
                <div className="home-cdn__dot" data-row={24} data-col={33} />
                <div className="home-cdn__dot" data-row={24} data-col={34} />
                <div className="home-cdn__dot" data-row={24} data-col={35} />
                <div className="home-cdn__dot" data-row={24} data-col={36} />
                <div className="home-cdn__dot" data-row={24} data-col={37} />
                <div className="home-cdn__dot" data-row={24} data-col={38} />
                <div className="home-cdn__dot" data-row={24} data-col={39} />
                <div className="home-cdn__dot" data-row={24} data-col={40} />
                <div className="home-cdn__dot" data-row={24} data-col={41} />
                <div className="home-cdn__dot" data-row={24} data-col={42} />
                <div className="home-cdn__dot" data-row={24} data-col={43} />
                <div className="home-cdn__dot" data-row={24} data-col={44} />
                <div className="home-cdn__dot" data-row={24} data-col={45} />
                <div className="home-cdn__dot" data-row={24} data-col={46} />
                <div className="home-cdn__dot" data-row={24} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={24} data-col={62} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={63} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={64} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--red" data-row={24} data-col={67} data-continent="asia" data-indicator="red"><div className="home-cdn__tooltip">به‌زودی</div></div>
                <div className="home-cdn__dot" data-row={24} data-col={68} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={24} data-col={69} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">شیراز</div></div>
                <div className="home-cdn__dot" data-row={24} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--red" data-row={24} data-col={75} data-continent="asia" data-indicator="red"><div className="home-cdn__tooltip">به‌زودی</div></div>
                <div className="home-cdn__dot" data-row={24} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={92} />
                <div className="home-cdn__dot" data-row={24} data-col={93} />
                <div className="home-cdn__dot" data-row={24} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={24} data-col={95} />
                <div className="home-cdn__dot" data-row={24} data-col={96} />
                <div className="home-cdn__dot" data-row={24} data-col={97} />
                <div className="home-cdn__dot" data-row={24} data-col={98} />
                <div className="home-cdn__dot" data-row={24} data-col={99} />
                <div className="home-cdn__dot" data-row={24} data-col={100} />
                <div className="home-cdn__dot" data-row={24} data-col={101} />
                <div className="home-cdn__dot" data-row={24} data-col={102} />
                <div className="home-cdn__dot" data-row={24} data-col={103} />
                <div className="home-cdn__dot" data-row={24} data-col={104} />
                <div className="home-cdn__dot" data-row={24} data-col={105} />
                <div className="home-cdn__dot" data-row={24} data-col={106} />
                <div className="home-cdn__dot" data-row={24} data-col={107} />
                <div className="home-cdn__dot" data-row={24} data-col={108} />
                <div className="home-cdn__dot" data-row={24} data-col={109} />
                <div className="home-cdn__dot" data-row={24} data-col={110} />
                <div className="home-cdn__dot" data-row={24} data-col={111} />
                <div className="home-cdn__dot" data-row={24} data-col={112} />
                <div className="home-cdn__dot" data-row={24} data-col={113} />
                <div className="home-cdn__dot" data-row={24} data-col={114} />
                <div className="home-cdn__dot" data-row={25} data-col={1} />
                <div className="home-cdn__dot" data-row={25} data-col={2} />
                <div className="home-cdn__dot" data-row={25} data-col={3} />
                <div className="home-cdn__dot" data-row={25} data-col={4} />
                <div className="home-cdn__dot" data-row={25} data-col={5} />
                <div className="home-cdn__dot" data-row={25} data-col={6} />
                <div className="home-cdn__dot" data-row={25} data-col={7} />
                <div className="home-cdn__dot" data-row={25} data-col={8} />
                <div className="home-cdn__dot" data-row={25} data-col={9} />
                <div className="home-cdn__dot" data-row={25} data-col={10} />
                <div className="home-cdn__dot" data-row={25} data-col={11} />
                <div className="home-cdn__dot" data-row={25} data-col={12} />
                <div className="home-cdn__dot" data-row={25} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={25} data-col={14} />
                <div className="home-cdn__dot" data-row={25} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={25} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={25} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={25} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={25} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={25} data-col={20} />
                <div className="home-cdn__dot" data-row={25} data-col={21} />
                <div className="home-cdn__dot" data-row={25} data-col={22} />
                <div className="home-cdn__dot" data-row={25} data-col={23} />
                <div className="home-cdn__dot" data-row={25} data-col={24} />
                <div className="home-cdn__dot" data-row={25} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={25} data-col={26} />
                <div className="home-cdn__dot" data-row={25} data-col={27} />
                <div className="home-cdn__dot" data-row={25} data-col={28} />
                <div className="home-cdn__dot" data-row={25} data-col={29} />
                <div className="home-cdn__dot" data-row={25} data-col={30} />
                <div className="home-cdn__dot" data-row={25} data-col={31} />
                <div className="home-cdn__dot" data-row={25} data-col={32} />
                <div className="home-cdn__dot" data-row={25} data-col={33} />
                <div className="home-cdn__dot" data-row={25} data-col={34} />
                <div className="home-cdn__dot" data-row={25} data-col={35} />
                <div className="home-cdn__dot" data-row={25} data-col={36} />
                <div className="home-cdn__dot" data-row={25} data-col={37} />
                <div className="home-cdn__dot" data-row={25} data-col={38} />
                <div className="home-cdn__dot" data-row={25} data-col={39} />
                <div className="home-cdn__dot" data-row={25} data-col={40} />
                <div className="home-cdn__dot" data-row={25} data-col={41} />
                <div className="home-cdn__dot" data-row={25} data-col={42} />
                <div className="home-cdn__dot" data-row={25} data-col={43} />
                <div className="home-cdn__dot" data-row={25} data-col={44} />
                <div className="home-cdn__dot" data-row={25} data-col={45} />
                <div className="home-cdn__dot" data-row={25} data-col={46} />
                <div className="home-cdn__dot" data-row={25} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={25} data-col={63} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={64} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={67} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={68} />
                <div className="home-cdn__dot" data-row={25} data-col={69} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={25} data-col={78} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">دهلی</div></div>
                <div className="home-cdn__dot" data-row={25} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={25} data-col={92} />
                <div className="home-cdn__dot" data-row={25} data-col={93} />
                <div className="home-cdn__dot" data-row={25} data-col={94} />
                <div className="home-cdn__dot" data-row={25} data-col={95} />
                <div className="home-cdn__dot" data-row={25} data-col={96} />
                <div className="home-cdn__dot" data-row={25} data-col={97} />
                <div className="home-cdn__dot" data-row={25} data-col={98} />
                <div className="home-cdn__dot" data-row={25} data-col={99} />
                <div className="home-cdn__dot" data-row={25} data-col={100} />
                <div className="home-cdn__dot" data-row={25} data-col={101} />
                <div className="home-cdn__dot" data-row={25} data-col={102} />
                <div className="home-cdn__dot" data-row={25} data-col={103} />
                <div className="home-cdn__dot" data-row={25} data-col={104} />
                <div className="home-cdn__dot" data-row={25} data-col={105} />
                <div className="home-cdn__dot" data-row={25} data-col={106} />
                <div className="home-cdn__dot" data-row={25} data-col={107} />
                <div className="home-cdn__dot" data-row={25} data-col={108} />
                <div className="home-cdn__dot" data-row={25} data-col={109} />
                <div className="home-cdn__dot" data-row={25} data-col={110} />
                <div className="home-cdn__dot" data-row={25} data-col={111} />
                <div className="home-cdn__dot" data-row={25} data-col={112} />
                <div className="home-cdn__dot" data-row={25} data-col={113} />
                <div className="home-cdn__dot" data-row={25} data-col={114} />
                <div className="home-cdn__dot" data-row={26} data-col={1} />
                <div className="home-cdn__dot" data-row={26} data-col={2} />
                <div className="home-cdn__dot" data-row={26} data-col={3} />
                <div className="home-cdn__dot" data-row={26} data-col={4} />
                <div className="home-cdn__dot" data-row={26} data-col={5} />
                <div className="home-cdn__dot" data-row={26} data-col={6} />
                <div className="home-cdn__dot" data-row={26} data-col={7} />
                <div className="home-cdn__dot" data-row={26} data-col={8} />
                <div className="home-cdn__dot" data-row={26} data-col={9} />
                <div className="home-cdn__dot" data-row={26} data-col={10} />
                <div className="home-cdn__dot" data-row={26} data-col={11} />
                <div className="home-cdn__dot" data-row={26} data-col={12} />
                <div className="home-cdn__dot" data-row={26} data-col={13} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={26} data-col={14} />
                <div className="home-cdn__dot" data-row={26} data-col={15} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={26} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={26} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={26} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={26} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={26} data-col={20} />
                <div className="home-cdn__dot" data-row={26} data-col={21} />
                <div className="home-cdn__dot" data-row={26} data-col={22} />
                <div className="home-cdn__dot" data-row={26} data-col={23} />
                <div className="home-cdn__dot" data-row={26} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={26} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={26} data-col={26} />
                <div className="home-cdn__dot" data-row={26} data-col={27} />
                <div className="home-cdn__dot" data-row={26} data-col={28} />
                <div className="home-cdn__dot" data-row={26} data-col={29} />
                <div className="home-cdn__dot" data-row={26} data-col={30} />
                <div className="home-cdn__dot" data-row={26} data-col={31} />
                <div className="home-cdn__dot" data-row={26} data-col={32} />
                <div className="home-cdn__dot" data-row={26} data-col={33} />
                <div className="home-cdn__dot" data-row={26} data-col={34} />
                <div className="home-cdn__dot" data-row={26} data-col={35} />
                <div className="home-cdn__dot" data-row={26} data-col={36} />
                <div className="home-cdn__dot" data-row={26} data-col={37} />
                <div className="home-cdn__dot" data-row={26} data-col={38} />
                <div className="home-cdn__dot" data-row={26} data-col={39} />
                <div className="home-cdn__dot" data-row={26} data-col={40} />
                <div className="home-cdn__dot" data-row={26} data-col={41} />
                <div className="home-cdn__dot" data-row={26} data-col={42} />
                <div className="home-cdn__dot" data-row={26} data-col={43} />
                <div className="home-cdn__dot" data-row={26} data-col={44} />
                <div className="home-cdn__dot" data-row={26} data-col={45} />
                <div className="home-cdn__dot" data-row={26} data-col={46} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={26} data-col={62} />
                <div className="home-cdn__dot" data-row={26} data-col={63} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={64} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={67} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={68} />
                <div className="home-cdn__dot" data-row={26} data-col={69} />
                <div className="home-cdn__dot" data-row={26} data-col={70} />
                <div className="home-cdn__dot" data-row={26} data-col={71} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={72} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={73} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={26} data-col={92} />
                <div className="home-cdn__dot" data-row={26} data-col={93} />
                <div className="home-cdn__dot" data-row={26} data-col={94} />
                <div className="home-cdn__dot" data-row={26} data-col={95} />
                <div className="home-cdn__dot" data-row={26} data-col={96} />
                <div className="home-cdn__dot" data-row={26} data-col={97} />
                <div className="home-cdn__dot" data-row={26} data-col={98} />
                <div className="home-cdn__dot" data-row={26} data-col={99} />
                <div className="home-cdn__dot" data-row={26} data-col={100} />
                <div className="home-cdn__dot" data-row={26} data-col={101} />
                <div className="home-cdn__dot" data-row={26} data-col={102} />
                <div className="home-cdn__dot" data-row={26} data-col={103} />
                <div className="home-cdn__dot" data-row={26} data-col={104} />
                <div className="home-cdn__dot" data-row={26} data-col={105} />
                <div className="home-cdn__dot" data-row={26} data-col={106} />
                <div className="home-cdn__dot" data-row={26} data-col={107} />
                <div className="home-cdn__dot" data-row={26} data-col={108} />
                <div className="home-cdn__dot" data-row={26} data-col={109} />
                <div className="home-cdn__dot" data-row={26} data-col={110} />
                <div className="home-cdn__dot" data-row={26} data-col={111} />
                <div className="home-cdn__dot" data-row={26} data-col={112} />
                <div className="home-cdn__dot" data-row={26} data-col={113} />
                <div className="home-cdn__dot" data-row={26} data-col={114} />
                <div className="home-cdn__dot" data-row={27} data-col={1} />
                <div className="home-cdn__dot" data-row={27} data-col={2} />
                <div className="home-cdn__dot" data-row={27} data-col={3} />
                <div className="home-cdn__dot" data-row={27} data-col={4} />
                <div className="home-cdn__dot" data-row={27} data-col={5} />
                <div className="home-cdn__dot" data-row={27} data-col={6} />
                <div className="home-cdn__dot" data-row={27} data-col={7} />
                <div className="home-cdn__dot" data-row={27} data-col={8} />
                <div className="home-cdn__dot" data-row={27} data-col={9} />
                <div className="home-cdn__dot" data-row={27} data-col={10} />
                <div className="home-cdn__dot" data-row={27} data-col={11} />
                <div className="home-cdn__dot" data-row={27} data-col={12} />
                <div className="home-cdn__dot" data-row={27} data-col={13} />
                <div className="home-cdn__dot" data-row={27} data-col={14} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={27} data-col={15} />
                <div className="home-cdn__dot" data-row={27} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={27} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={27} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={27} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={27} data-col={20} />
                <div className="home-cdn__dot" data-row={27} data-col={21} />
                <div className="home-cdn__dot" data-row={27} data-col={22} />
                <div className="home-cdn__dot" data-row={27} data-col={23} />
                <div className="home-cdn__dot" data-row={27} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={27} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={27} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={27} data-col={27} />
                <div className="home-cdn__dot" data-row={27} data-col={28} />
                <div className="home-cdn__dot" data-row={27} data-col={29} />
                <div className="home-cdn__dot" data-row={27} data-col={30} />
                <div className="home-cdn__dot" data-row={27} data-col={31} />
                <div className="home-cdn__dot" data-row={27} data-col={32} />
                <div className="home-cdn__dot" data-row={27} data-col={33} />
                <div className="home-cdn__dot" data-row={27} data-col={34} />
                <div className="home-cdn__dot" data-row={27} data-col={35} />
                <div className="home-cdn__dot" data-row={27} data-col={36} />
                <div className="home-cdn__dot" data-row={27} data-col={37} />
                <div className="home-cdn__dot" data-row={27} data-col={38} />
                <div className="home-cdn__dot" data-row={27} data-col={39} />
                <div className="home-cdn__dot" data-row={27} data-col={40} />
                <div className="home-cdn__dot" data-row={27} data-col={41} />
                <div className="home-cdn__dot" data-row={27} data-col={42} />
                <div className="home-cdn__dot" data-row={27} data-col={43} />
                <div className="home-cdn__dot" data-row={27} data-col={44} />
                <div className="home-cdn__dot" data-row={27} data-col={45} />
                <div className="home-cdn__dot" data-row={27} data-col={46} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={27} data-col={63} />
                <div className="home-cdn__dot" data-row={27} data-col={64} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={67} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={68} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={27} data-col={69} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">دبی</div></div>
                <div className="home-cdn__dot" data-row={27} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={71} />
                <div className="home-cdn__dot" data-row={27} data-col={72} />
                <div className="home-cdn__dot" data-row={27} data-col={73} />
                <div className="home-cdn__dot" data-row={27} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={80} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={27} data-col={92} />
                <div className="home-cdn__dot" data-row={27} data-col={93} />
                <div className="home-cdn__dot" data-row={27} data-col={94} />
                <div className="home-cdn__dot" data-row={27} data-col={95} />
                <div className="home-cdn__dot" data-row={27} data-col={96} />
                <div className="home-cdn__dot" data-row={27} data-col={97} />
                <div className="home-cdn__dot" data-row={27} data-col={98} />
                <div className="home-cdn__dot" data-row={27} data-col={99} />
                <div className="home-cdn__dot" data-row={27} data-col={100} />
                <div className="home-cdn__dot" data-row={27} data-col={101} />
                <div className="home-cdn__dot" data-row={27} data-col={102} />
                <div className="home-cdn__dot" data-row={27} data-col={103} />
                <div className="home-cdn__dot" data-row={27} data-col={104} />
                <div className="home-cdn__dot" data-row={27} data-col={105} />
                <div className="home-cdn__dot" data-row={27} data-col={106} />
                <div className="home-cdn__dot" data-row={27} data-col={107} />
                <div className="home-cdn__dot" data-row={27} data-col={108} />
                <div className="home-cdn__dot" data-row={27} data-col={109} />
                <div className="home-cdn__dot" data-row={27} data-col={110} />
                <div className="home-cdn__dot" data-row={27} data-col={111} />
                <div className="home-cdn__dot" data-row={27} data-col={112} />
                <div className="home-cdn__dot" data-row={27} data-col={113} />
                <div className="home-cdn__dot" data-row={27} data-col={114} />
                <div className="home-cdn__dot" data-row={28} data-col={1} />
                <div className="home-cdn__dot" data-row={28} data-col={2} />
                <div className="home-cdn__dot" data-row={28} data-col={3} />
                <div className="home-cdn__dot" data-row={28} data-col={4} />
                <div className="home-cdn__dot" data-row={28} data-col={5} />
                <div className="home-cdn__dot" data-row={28} data-col={6} />
                <div className="home-cdn__dot" data-row={28} data-col={7} />
                <div className="home-cdn__dot" data-row={28} data-col={8} />
                <div className="home-cdn__dot" data-row={28} data-col={9} />
                <div className="home-cdn__dot" data-row={28} data-col={10} />
                <div className="home-cdn__dot" data-row={28} data-col={11} />
                <div className="home-cdn__dot" data-row={28} data-col={12} />
                <div className="home-cdn__dot" data-row={28} data-col={13} />
                <div className="home-cdn__dot" data-row={28} data-col={14} />
                <div className="home-cdn__dot" data-row={28} data-col={15} />
                <div className="home-cdn__dot" data-row={28} data-col={16} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={28} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={28} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={28} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={28} data-col={20} />
                <div className="home-cdn__dot" data-row={28} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={28} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={28} data-col={23} />
                <div className="home-cdn__dot" data-row={28} data-col={24} />
                <div className="home-cdn__dot" data-row={28} data-col={25} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={28} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={28} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={28} data-col={28} />
                <div className="home-cdn__dot" data-row={28} data-col={29} />
                <div className="home-cdn__dot" data-row={28} data-col={30} />
                <div className="home-cdn__dot" data-row={28} data-col={31} />
                <div className="home-cdn__dot" data-row={28} data-col={32} />
                <div className="home-cdn__dot" data-row={28} data-col={33} />
                <div className="home-cdn__dot" data-row={28} data-col={34} />
                <div className="home-cdn__dot" data-row={28} data-col={35} />
                <div className="home-cdn__dot" data-row={28} data-col={36} />
                <div className="home-cdn__dot" data-row={28} data-col={37} />
                <div className="home-cdn__dot" data-row={28} data-col={38} />
                <div className="home-cdn__dot" data-row={28} data-col={39} />
                <div className="home-cdn__dot" data-row={28} data-col={40} />
                <div className="home-cdn__dot" data-row={28} data-col={41} />
                <div className="home-cdn__dot" data-row={28} data-col={42} />
                <div className="home-cdn__dot" data-row={28} data-col={43} />
                <div className="home-cdn__dot" data-row={28} data-col={44} />
                <div className="home-cdn__dot" data-row={28} data-col={45} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={46} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={28} data-col={63} />
                <div className="home-cdn__dot" data-row={28} data-col={64} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={67} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={68} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={69} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={71} />
                <div className="home-cdn__dot" data-row={28} data-col={72} />
                <div className="home-cdn__dot" data-row={28} data-col={73} />
                <div className="home-cdn__dot" data-row={28} data-col={74} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={80} />
                <div className="home-cdn__dot" data-row={28} data-col={81} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={28} data-col={89} />
                <div className="home-cdn__dot" data-row={28} data-col={90} />
                <div className="home-cdn__dot" data-row={28} data-col={91} />
                <div className="home-cdn__dot" data-row={28} data-col={92} />
                <div className="home-cdn__dot" data-row={28} data-col={93} />
                <div className="home-cdn__dot" data-row={28} data-col={94} />
                <div className="home-cdn__dot" data-row={28} data-col={95} />
                <div className="home-cdn__dot" data-row={28} data-col={96} />
                <div className="home-cdn__dot" data-row={28} data-col={97} />
                <div className="home-cdn__dot" data-row={28} data-col={98} />
                <div className="home-cdn__dot" data-row={28} data-col={99} />
                <div className="home-cdn__dot" data-row={28} data-col={100} />
                <div className="home-cdn__dot" data-row={28} data-col={101} />
                <div className="home-cdn__dot" data-row={28} data-col={102} />
                <div className="home-cdn__dot" data-row={28} data-col={103} />
                <div className="home-cdn__dot" data-row={28} data-col={104} />
                <div className="home-cdn__dot" data-row={28} data-col={105} />
                <div className="home-cdn__dot" data-row={28} data-col={106} />
                <div className="home-cdn__dot" data-row={28} data-col={107} />
                <div className="home-cdn__dot" data-row={28} data-col={108} />
                <div className="home-cdn__dot" data-row={28} data-col={109} />
                <div className="home-cdn__dot" data-row={28} data-col={110} />
                <div className="home-cdn__dot" data-row={28} data-col={111} />
                <div className="home-cdn__dot" data-row={28} data-col={112} />
                <div className="home-cdn__dot" data-row={28} data-col={113} />
                <div className="home-cdn__dot" data-row={28} data-col={114} />
                <div className="home-cdn__dot" data-row={29} data-col={1} />
                <div className="home-cdn__dot" data-row={29} data-col={2} />
                <div className="home-cdn__dot" data-row={29} data-col={3} />
                <div className="home-cdn__dot" data-row={29} data-col={4} />
                <div className="home-cdn__dot" data-row={29} data-col={5} />
                <div className="home-cdn__dot" data-row={29} data-col={6} />
                <div className="home-cdn__dot" data-row={29} data-col={7} />
                <div className="home-cdn__dot" data-row={29} data-col={8} />
                <div className="home-cdn__dot" data-row={29} data-col={9} />
                <div className="home-cdn__dot" data-row={29} data-col={10} />
                <div className="home-cdn__dot" data-row={29} data-col={11} />
                <div className="home-cdn__dot" data-row={29} data-col={12} />
                <div className="home-cdn__dot" data-row={29} data-col={13} />
                <div className="home-cdn__dot" data-row={29} data-col={14} />
                <div className="home-cdn__dot" data-row={29} data-col={15} />
                <div className="home-cdn__dot" data-row={29} data-col={16} />
                <div className="home-cdn__dot" data-row={29} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={23} />
                <div className="home-cdn__dot" data-row={29} data-col={24} />
                <div className="home-cdn__dot" data-row={29} data-col={25} />
                <div className="home-cdn__dot" data-row={29} data-col={26} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={27} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={28} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={29} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={29} data-col={30} />
                <div className="home-cdn__dot" data-row={29} data-col={31} />
                <div className="home-cdn__dot" data-row={29} data-col={32} />
                <div className="home-cdn__dot" data-row={29} data-col={33} />
                <div className="home-cdn__dot" data-row={29} data-col={34} />
                <div className="home-cdn__dot" data-row={29} data-col={35} />
                <div className="home-cdn__dot" data-row={29} data-col={36} />
                <div className="home-cdn__dot" data-row={29} data-col={37} />
                <div className="home-cdn__dot" data-row={29} data-col={38} />
                <div className="home-cdn__dot" data-row={29} data-col={39} />
                <div className="home-cdn__dot" data-row={29} data-col={40} />
                <div className="home-cdn__dot" data-row={29} data-col={41} />
                <div className="home-cdn__dot" data-row={29} data-col={42} />
                <div className="home-cdn__dot" data-row={29} data-col={43} />
                <div className="home-cdn__dot" data-row={29} data-col={44} />
                <div className="home-cdn__dot" data-row={29} data-col={45} />
                <div className="home-cdn__dot" data-row={29} data-col={46} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={29} data-col={64} />
                <div className="home-cdn__dot" data-row={29} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={67} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={68} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={69} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={70} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={71} />
                <div className="home-cdn__dot" data-row={29} data-col={72} />
                <div className="home-cdn__dot" data-row={29} data-col={73} />
                <div className="home-cdn__dot" data-row={29} data-col={74} />
                <div className="home-cdn__dot" data-row={29} data-col={75} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={79} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={80} />
                <div className="home-cdn__dot" data-row={29} data-col={81} />
                <div className="home-cdn__dot" data-row={29} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={29} data-col={88} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">هنگ‌کنگ</div></div>
                <div className="home-cdn__dot" data-row={29} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={90} />
                <div className="home-cdn__dot" data-row={29} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={29} data-col={93} />
                <div className="home-cdn__dot" data-row={29} data-col={94} />
                <div className="home-cdn__dot" data-row={29} data-col={95} />
                <div className="home-cdn__dot" data-row={29} data-col={96} />
                <div className="home-cdn__dot" data-row={29} data-col={97} />
                <div className="home-cdn__dot" data-row={29} data-col={98} />
                <div className="home-cdn__dot" data-row={29} data-col={99} />
                <div className="home-cdn__dot" data-row={29} data-col={100} />
                <div className="home-cdn__dot" data-row={29} data-col={101} />
                <div className="home-cdn__dot" data-row={29} data-col={102} />
                <div className="home-cdn__dot" data-row={29} data-col={103} />
                <div className="home-cdn__dot" data-row={29} data-col={104} />
                <div className="home-cdn__dot" data-row={29} data-col={105} />
                <div className="home-cdn__dot" data-row={29} data-col={106} />
                <div className="home-cdn__dot" data-row={29} data-col={107} />
                <div className="home-cdn__dot" data-row={29} data-col={108} />
                <div className="home-cdn__dot" data-row={29} data-col={109} />
                <div className="home-cdn__dot" data-row={29} data-col={110} />
                <div className="home-cdn__dot" data-row={29} data-col={111} />
                <div className="home-cdn__dot" data-row={29} data-col={112} />
                <div className="home-cdn__dot" data-row={29} data-col={113} />
                <div className="home-cdn__dot" data-row={29} data-col={114} />
                <div className="home-cdn__dot" data-row={30} data-col={1} />
                <div className="home-cdn__dot" data-row={30} data-col={2} />
                <div className="home-cdn__dot" data-row={30} data-col={3} />
                <div className="home-cdn__dot" data-row={30} data-col={4} />
                <div className="home-cdn__dot" data-row={30} data-col={5} />
                <div className="home-cdn__dot" data-row={30} data-col={6} />
                <div className="home-cdn__dot" data-row={30} data-col={7} />
                <div className="home-cdn__dot" data-row={30} data-col={8} />
                <div className="home-cdn__dot" data-row={30} data-col={9} />
                <div className="home-cdn__dot" data-row={30} data-col={10} />
                <div className="home-cdn__dot" data-row={30} data-col={11} />
                <div className="home-cdn__dot" data-row={30} data-col={12} />
                <div className="home-cdn__dot" data-row={30} data-col={13} />
                <div className="home-cdn__dot" data-row={30} data-col={14} />
                <div className="home-cdn__dot" data-row={30} data-col={15} />
                <div className="home-cdn__dot" data-row={30} data-col={16} />
                <div className="home-cdn__dot" data-row={30} data-col={17} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={30} data-col={18} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={30} data-col={19} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={30} data-col={20} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={30} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={30} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={30} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={30} data-col={24} />
                <div className="home-cdn__dot" data-row={30} data-col={25} />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={30} data-col={26} data-continent="north-america" data-indicator="arvan"><div className="home-cdn__tooltip">میامی</div></div>
                <div className="home-cdn__dot" data-row={30} data-col={27} />
                <div className="home-cdn__dot" data-row={30} data-col={28} />
                <div className="home-cdn__dot" data-row={30} data-col={29} />
                <div className="home-cdn__dot" data-row={30} data-col={30} />
                <div className="home-cdn__dot" data-row={30} data-col={31} />
                <div className="home-cdn__dot" data-row={30} data-col={32} />
                <div className="home-cdn__dot" data-row={30} data-col={33} />
                <div className="home-cdn__dot" data-row={30} data-col={34} />
                <div className="home-cdn__dot" data-row={30} data-col={35} />
                <div className="home-cdn__dot" data-row={30} data-col={36} />
                <div className="home-cdn__dot" data-row={30} data-col={37} />
                <div className="home-cdn__dot" data-row={30} data-col={38} />
                <div className="home-cdn__dot" data-row={30} data-col={39} />
                <div className="home-cdn__dot" data-row={30} data-col={40} />
                <div className="home-cdn__dot" data-row={30} data-col={41} />
                <div className="home-cdn__dot" data-row={30} data-col={42} />
                <div className="home-cdn__dot" data-row={30} data-col={43} />
                <div className="home-cdn__dot" data-row={30} data-col={44} />
                <div className="home-cdn__dot" data-row={30} data-col={45} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={46} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={30} data-col={64} />
                <div className="home-cdn__dot" data-row={30} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={67} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={68} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={69} />
                <div className="home-cdn__dot" data-row={30} data-col={70} />
                <div className="home-cdn__dot" data-row={30} data-col={71} />
                <div className="home-cdn__dot" data-row={30} data-col={72} />
                <div className="home-cdn__dot" data-row={30} data-col={73} />
                <div className="home-cdn__dot" data-row={30} data-col={74} />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={30} data-col={75} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">بمبیی</div></div>
                <div className="home-cdn__dot" data-row={30} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={79} />
                <div className="home-cdn__dot" data-row={30} data-col={80} />
                <div className="home-cdn__dot" data-row={30} data-col={81} />
                <div className="home-cdn__dot" data-row={30} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={86} />
                <div className="home-cdn__dot" data-row={30} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={88} />
                <div className="home-cdn__dot" data-row={30} data-col={89} />
                <div className="home-cdn__dot" data-row={30} data-col={90} />
                <div className="home-cdn__dot" data-row={30} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={30} data-col={93} />
                <div className="home-cdn__dot" data-row={30} data-col={94} />
                <div className="home-cdn__dot" data-row={30} data-col={95} />
                <div className="home-cdn__dot" data-row={30} data-col={96} />
                <div className="home-cdn__dot" data-row={30} data-col={97} />
                <div className="home-cdn__dot" data-row={30} data-col={98} />
                <div className="home-cdn__dot" data-row={30} data-col={99} />
                <div className="home-cdn__dot" data-row={30} data-col={100} />
                <div className="home-cdn__dot" data-row={30} data-col={101} />
                <div className="home-cdn__dot" data-row={30} data-col={102} />
                <div className="home-cdn__dot" data-row={30} data-col={103} />
                <div className="home-cdn__dot" data-row={30} data-col={104} />
                <div className="home-cdn__dot" data-row={30} data-col={105} />
                <div className="home-cdn__dot" data-row={30} data-col={106} />
                <div className="home-cdn__dot" data-row={30} data-col={107} />
                <div className="home-cdn__dot" data-row={30} data-col={108} />
                <div className="home-cdn__dot" data-row={30} data-col={109} />
                <div className="home-cdn__dot" data-row={30} data-col={110} />
                <div className="home-cdn__dot" data-row={30} data-col={111} />
                <div className="home-cdn__dot" data-row={30} data-col={112} />
                <div className="home-cdn__dot" data-row={30} data-col={113} />
                <div className="home-cdn__dot" data-row={30} data-col={114} />
                <div className="home-cdn__dot" data-row={31} data-col={1} />
                <div className="home-cdn__dot" data-row={31} data-col={2} />
                <div className="home-cdn__dot" data-row={31} data-col={3} />
                <div className="home-cdn__dot" data-row={31} data-col={4} />
                <div className="home-cdn__dot" data-row={31} data-col={5} />
                <div className="home-cdn__dot" data-row={31} data-col={6} />
                <div className="home-cdn__dot" data-row={31} data-col={7} />
                <div className="home-cdn__dot" data-row={31} data-col={8} />
                <div className="home-cdn__dot" data-row={31} data-col={9} />
                <div className="home-cdn__dot" data-row={31} data-col={10} />
                <div className="home-cdn__dot" data-row={31} data-col={11} />
                <div className="home-cdn__dot" data-row={31} data-col={12} />
                <div className="home-cdn__dot" data-row={31} data-col={13} />
                <div className="home-cdn__dot" data-row={31} data-col={14} />
                <div className="home-cdn__dot" data-row={31} data-col={15} />
                <div className="home-cdn__dot" data-row={31} data-col={16} />
                <div className="home-cdn__dot" data-row={31} data-col={17} />
                <div className="home-cdn__dot" data-row={31} data-col={18} />
                <div className="home-cdn__dot" data-row={31} data-col={19} />
                <div className="home-cdn__dot" data-row={31} data-col={20} />
                <div className="home-cdn__dot" data-row={31} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={31} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={31} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={31} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={31} data-col={25} />
                <div className="home-cdn__dot" data-row={31} data-col={26} />
                <div className="home-cdn__dot" data-row={31} data-col={27} />
                <div className="home-cdn__dot" data-row={31} data-col={28} />
                <div className="home-cdn__dot" data-row={31} data-col={29} />
                <div className="home-cdn__dot" data-row={31} data-col={30} />
                <div className="home-cdn__dot" data-row={31} data-col={31} />
                <div className="home-cdn__dot" data-row={31} data-col={32} />
                <div className="home-cdn__dot" data-row={31} data-col={33} />
                <div className="home-cdn__dot" data-row={31} data-col={34} />
                <div className="home-cdn__dot" data-row={31} data-col={35} />
                <div className="home-cdn__dot" data-row={31} data-col={36} />
                <div className="home-cdn__dot" data-row={31} data-col={37} />
                <div className="home-cdn__dot" data-row={31} data-col={38} />
                <div className="home-cdn__dot" data-row={31} data-col={39} />
                <div className="home-cdn__dot" data-row={31} data-col={40} />
                <div className="home-cdn__dot" data-row={31} data-col={41} />
                <div className="home-cdn__dot" data-row={31} data-col={42} />
                <div className="home-cdn__dot" data-row={31} data-col={43} />
                <div className="home-cdn__dot" data-row={31} data-col={44} />
                <div className="home-cdn__dot" data-row={31} data-col={45} />
                <div className="home-cdn__dot" data-row={31} data-col={46} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={31} data-col={65} />
                <div className="home-cdn__dot" data-row={31} data-col={66} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={67} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={68} />
                <div className="home-cdn__dot" data-row={31} data-col={69} />
                <div className="home-cdn__dot" data-row={31} data-col={70} />
                <div className="home-cdn__dot" data-row={31} data-col={71} />
                <div className="home-cdn__dot" data-row={31} data-col={72} />
                <div className="home-cdn__dot" data-row={31} data-col={73} />
                <div className="home-cdn__dot" data-row={31} data-col={74} />
                <div className="home-cdn__dot" data-row={31} data-col={75} />
                <div className="home-cdn__dot" data-row={31} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--red" data-row={31} data-col={77} data-continent="asia" data-indicator="red"><div className="home-cdn__tooltip">به‌زودی</div></div>
                <div className="home-cdn__dot" data-row={31} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={79} />
                <div className="home-cdn__dot" data-row={31} data-col={80} />
                <div className="home-cdn__dot" data-row={31} data-col={81} />
                <div className="home-cdn__dot" data-row={31} data-col={82} />
                <div className="home-cdn__dot" data-row={31} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={89} />
                <div className="home-cdn__dot" data-row={31} data-col={90} />
                <div className="home-cdn__dot" data-row={31} data-col={91} />
                <div className="home-cdn__dot" data-row={31} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={31} data-col={94} />
                <div className="home-cdn__dot" data-row={31} data-col={95} />
                <div className="home-cdn__dot" data-row={31} data-col={96} />
                <div className="home-cdn__dot" data-row={31} data-col={97} />
                <div className="home-cdn__dot" data-row={31} data-col={98} />
                <div className="home-cdn__dot" data-row={31} data-col={99} />
                <div className="home-cdn__dot" data-row={31} data-col={100} />
                <div className="home-cdn__dot" data-row={31} data-col={101} />
                <div className="home-cdn__dot" data-row={31} data-col={102} />
                <div className="home-cdn__dot" data-row={31} data-col={103} />
                <div className="home-cdn__dot" data-row={31} data-col={104} />
                <div className="home-cdn__dot" data-row={31} data-col={105} />
                <div className="home-cdn__dot" data-row={31} data-col={106} />
                <div className="home-cdn__dot" data-row={31} data-col={107} />
                <div className="home-cdn__dot" data-row={31} data-col={108} />
                <div className="home-cdn__dot" data-row={31} data-col={109} />
                <div className="home-cdn__dot" data-row={31} data-col={110} />
                <div className="home-cdn__dot" data-row={31} data-col={111} />
                <div className="home-cdn__dot" data-row={31} data-col={112} />
                <div className="home-cdn__dot" data-row={31} data-col={113} />
                <div className="home-cdn__dot" data-row={31} data-col={114} />
                <div className="home-cdn__dot" data-row={32} data-col={1} />
                <div className="home-cdn__dot" data-row={32} data-col={2} />
                <div className="home-cdn__dot" data-row={32} data-col={3} />
                <div className="home-cdn__dot" data-row={32} data-col={4} />
                <div className="home-cdn__dot" data-row={32} data-col={5} />
                <div className="home-cdn__dot" data-row={32} data-col={6} />
                <div className="home-cdn__dot" data-row={32} data-col={7} />
                <div className="home-cdn__dot" data-row={32} data-col={8} />
                <div className="home-cdn__dot" data-row={32} data-col={9} />
                <div className="home-cdn__dot" data-row={32} data-col={10} />
                <div className="home-cdn__dot" data-row={32} data-col={11} />
                <div className="home-cdn__dot" data-row={32} data-col={12} />
                <div className="home-cdn__dot" data-row={32} data-col={13} />
                <div className="home-cdn__dot" data-row={32} data-col={14} />
                <div className="home-cdn__dot" data-row={32} data-col={15} />
                <div className="home-cdn__dot" data-row={32} data-col={16} />
                <div className="home-cdn__dot" data-row={32} data-col={17} />
                <div className="home-cdn__dot" data-row={32} data-col={18} />
                <div className="home-cdn__dot" data-row={32} data-col={19} />
                <div className="home-cdn__dot" data-row={32} data-col={20} />
                <div className="home-cdn__dot" data-row={32} data-col={21} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={32} data-col={22} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={32} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={32} data-col={24} />
                <div className="home-cdn__dot" data-row={32} data-col={25} />
                <div className="home-cdn__dot" data-row={32} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={32} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={32} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={32} data-col={29} />
                <div className="home-cdn__dot" data-row={32} data-col={30} />
                <div className="home-cdn__dot" data-row={32} data-col={31} />
                <div className="home-cdn__dot" data-row={32} data-col={32} />
                <div className="home-cdn__dot" data-row={32} data-col={33} />
                <div className="home-cdn__dot" data-row={32} data-col={34} />
                <div className="home-cdn__dot" data-row={32} data-col={35} />
                <div className="home-cdn__dot" data-row={32} data-col={36} />
                <div className="home-cdn__dot" data-row={32} data-col={37} />
                <div className="home-cdn__dot" data-row={32} data-col={38} />
                <div className="home-cdn__dot" data-row={32} data-col={39} />
                <div className="home-cdn__dot" data-row={32} data-col={40} />
                <div className="home-cdn__dot" data-row={32} data-col={41} />
                <div className="home-cdn__dot" data-row={32} data-col={42} />
                <div className="home-cdn__dot" data-row={32} data-col={43} />
                <div className="home-cdn__dot" data-row={32} data-col={44} />
                <div className="home-cdn__dot" data-row={32} data-col={45} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={46} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={32} data-col={65} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={66} />
                <div className="home-cdn__dot" data-row={32} data-col={67} />
                <div className="home-cdn__dot" data-row={32} data-col={68} />
                <div className="home-cdn__dot" data-row={32} data-col={69} />
                <div className="home-cdn__dot" data-row={32} data-col={70} />
                <div className="home-cdn__dot" data-row={32} data-col={71} />
                <div className="home-cdn__dot" data-row={32} data-col={72} />
                <div className="home-cdn__dot" data-row={32} data-col={73} />
                <div className="home-cdn__dot" data-row={32} data-col={74} />
                <div className="home-cdn__dot" data-row={32} data-col={75} />
                <div className="home-cdn__dot" data-row={32} data-col={76} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={79} />
                <div className="home-cdn__dot" data-row={32} data-col={80} />
                <div className="home-cdn__dot" data-row={32} data-col={81} />
                <div className="home-cdn__dot" data-row={32} data-col={82} />
                <div className="home-cdn__dot" data-row={32} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={84} />
                <div className="home-cdn__dot" data-row={32} data-col={85} />
                <div className="home-cdn__dot" data-row={32} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={88} />
                <div className="home-cdn__dot" data-row={32} data-col={89} />
                <div className="home-cdn__dot" data-row={32} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={32} data-col={93} />
                <div className="home-cdn__dot" data-row={32} data-col={94} />
                <div className="home-cdn__dot" data-row={32} data-col={95} />
                <div className="home-cdn__dot" data-row={32} data-col={96} />
                <div className="home-cdn__dot" data-row={32} data-col={97} />
                <div className="home-cdn__dot" data-row={32} data-col={98} />
                <div className="home-cdn__dot" data-row={32} data-col={99} />
                <div className="home-cdn__dot" data-row={32} data-col={100} />
                <div className="home-cdn__dot" data-row={32} data-col={101} />
                <div className="home-cdn__dot" data-row={32} data-col={102} />
                <div className="home-cdn__dot" data-row={32} data-col={103} />
                <div className="home-cdn__dot" data-row={32} data-col={104} />
                <div className="home-cdn__dot" data-row={32} data-col={105} />
                <div className="home-cdn__dot" data-row={32} data-col={106} />
                <div className="home-cdn__dot" data-row={32} data-col={107} />
                <div className="home-cdn__dot" data-row={32} data-col={108} />
                <div className="home-cdn__dot" data-row={32} data-col={109} />
                <div className="home-cdn__dot" data-row={32} data-col={110} />
                <div className="home-cdn__dot" data-row={32} data-col={111} />
                <div className="home-cdn__dot" data-row={32} data-col={112} />
                <div className="home-cdn__dot" data-row={32} data-col={113} />
                <div className="home-cdn__dot" data-row={32} data-col={114} />
                <div className="home-cdn__dot" data-row={33} data-col={1} />
                <div className="home-cdn__dot" data-row={33} data-col={2} />
                <div className="home-cdn__dot" data-row={33} data-col={3} />
                <div className="home-cdn__dot" data-row={33} data-col={4} />
                <div className="home-cdn__dot" data-row={33} data-col={5} />
                <div className="home-cdn__dot" data-row={33} data-col={6} />
                <div className="home-cdn__dot" data-row={33} data-col={7} />
                <div className="home-cdn__dot" data-row={33} data-col={8} />
                <div className="home-cdn__dot" data-row={33} data-col={9} />
                <div className="home-cdn__dot" data-row={33} data-col={10} />
                <div className="home-cdn__dot" data-row={33} data-col={11} />
                <div className="home-cdn__dot" data-row={33} data-col={12} />
                <div className="home-cdn__dot" data-row={33} data-col={13} />
                <div className="home-cdn__dot" data-row={33} data-col={14} />
                <div className="home-cdn__dot" data-row={33} data-col={15} />
                <div className="home-cdn__dot" data-row={33} data-col={16} />
                <div className="home-cdn__dot" data-row={33} data-col={17} />
                <div className="home-cdn__dot" data-row={33} data-col={18} />
                <div className="home-cdn__dot" data-row={33} data-col={19} />
                <div className="home-cdn__dot" data-row={33} data-col={20} />
                <div className="home-cdn__dot" data-row={33} data-col={21} />
                <div className="home-cdn__dot" data-row={33} data-col={22} />
                <div className="home-cdn__dot" data-row={33} data-col={23} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={33} data-col={24} data-continent="north-america" />
                <div className="home-cdn__dot" data-row={33} data-col={25} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={33} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={33} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={33} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={33} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={33} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={33} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={33} data-col={32} />
                <div className="home-cdn__dot" data-row={33} data-col={33} />
                <div className="home-cdn__dot" data-row={33} data-col={34} />
                <div className="home-cdn__dot" data-row={33} data-col={35} />
                <div className="home-cdn__dot" data-row={33} data-col={36} />
                <div className="home-cdn__dot" data-row={33} data-col={37} />
                <div className="home-cdn__dot" data-row={33} data-col={38} />
                <div className="home-cdn__dot" data-row={33} data-col={39} />
                <div className="home-cdn__dot" data-row={33} data-col={40} />
                <div className="home-cdn__dot" data-row={33} data-col={41} />
                <div className="home-cdn__dot" data-row={33} data-col={42} />
                <div className="home-cdn__dot" data-row={33} data-col={43} />
                <div className="home-cdn__dot" data-row={33} data-col={44} />
                <div className="home-cdn__dot" data-row={33} data-col={45} />
                <div className="home-cdn__dot" data-row={33} data-col={46} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={65} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={66} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={67} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={68} data-continent="africa" />
                <div className="home-cdn__dot" data-row={33} data-col={69} />
                <div className="home-cdn__dot" data-row={33} data-col={70} />
                <div className="home-cdn__dot" data-row={33} data-col={71} />
                <div className="home-cdn__dot" data-row={33} data-col={72} />
                <div className="home-cdn__dot" data-row={33} data-col={73} />
                <div className="home-cdn__dot" data-row={33} data-col={74} />
                <div className="home-cdn__dot" data-row={33} data-col={75} />
                <div className="home-cdn__dot" data-row={33} data-col={76} />
                <div className="home-cdn__dot" data-row={33} data-col={77} data-continent="asia" />
                <div className="home-cdn__dot home-cdn__dot--red" data-row={33} data-col={78} data-continent="asia" data-indicator="red"><div className="home-cdn__tooltip">به‌زودی</div></div>
                <div className="home-cdn__dot" data-row={33} data-col={79} />
                <div className="home-cdn__dot" data-row={33} data-col={80} />
                <div className="home-cdn__dot" data-row={33} data-col={81} />
                <div className="home-cdn__dot" data-row={33} data-col={82} />
                <div className="home-cdn__dot" data-row={33} data-col={83} />
                <div className="home-cdn__dot" data-row={33} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={33} data-col={85} />
                <div className="home-cdn__dot" data-row={33} data-col={86} />
                <div className="home-cdn__dot" data-row={33} data-col={87} />
                <div className="home-cdn__dot" data-row={33} data-col={88} />
                <div className="home-cdn__dot" data-row={33} data-col={89} />
                <div className="home-cdn__dot" data-row={33} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={33} data-col={91} />
                <div className="home-cdn__dot" data-row={33} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={33} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={33} data-col={94} />
                <div className="home-cdn__dot" data-row={33} data-col={95} />
                <div className="home-cdn__dot" data-row={33} data-col={96} />
                <div className="home-cdn__dot" data-row={33} data-col={97} />
                <div className="home-cdn__dot" data-row={33} data-col={98} />
                <div className="home-cdn__dot" data-row={33} data-col={99} />
                <div className="home-cdn__dot" data-row={33} data-col={100} />
                <div className="home-cdn__dot" data-row={33} data-col={101} />
                <div className="home-cdn__dot" data-row={33} data-col={102} />
                <div className="home-cdn__dot" data-row={33} data-col={103} />
                <div className="home-cdn__dot" data-row={33} data-col={104} />
                <div className="home-cdn__dot" data-row={33} data-col={105} />
                <div className="home-cdn__dot" data-row={33} data-col={106} />
                <div className="home-cdn__dot" data-row={33} data-col={107} />
                <div className="home-cdn__dot" data-row={33} data-col={108} />
                <div className="home-cdn__dot" data-row={33} data-col={109} />
                <div className="home-cdn__dot" data-row={33} data-col={110} />
                <div className="home-cdn__dot" data-row={33} data-col={111} />
                <div className="home-cdn__dot" data-row={33} data-col={112} />
                <div className="home-cdn__dot" data-row={33} data-col={113} />
                <div className="home-cdn__dot" data-row={33} data-col={114} />
                <div className="home-cdn__dot" data-row={34} data-col={1} />
                <div className="home-cdn__dot" data-row={34} data-col={2} />
                <div className="home-cdn__dot" data-row={34} data-col={3} />
                <div className="home-cdn__dot" data-row={34} data-col={4} />
                <div className="home-cdn__dot" data-row={34} data-col={5} />
                <div className="home-cdn__dot" data-row={34} data-col={6} />
                <div className="home-cdn__dot" data-row={34} data-col={7} />
                <div className="home-cdn__dot" data-row={34} data-col={8} />
                <div className="home-cdn__dot" data-row={34} data-col={9} />
                <div className="home-cdn__dot" data-row={34} data-col={10} />
                <div className="home-cdn__dot" data-row={34} data-col={11} />
                <div className="home-cdn__dot" data-row={34} data-col={12} />
                <div className="home-cdn__dot" data-row={34} data-col={13} />
                <div className="home-cdn__dot" data-row={34} data-col={14} />
                <div className="home-cdn__dot" data-row={34} data-col={15} />
                <div className="home-cdn__dot" data-row={34} data-col={16} />
                <div className="home-cdn__dot" data-row={34} data-col={17} />
                <div className="home-cdn__dot" data-row={34} data-col={18} />
                <div className="home-cdn__dot" data-row={34} data-col={19} />
                <div className="home-cdn__dot" data-row={34} data-col={20} />
                <div className="home-cdn__dot" data-row={34} data-col={21} />
                <div className="home-cdn__dot" data-row={34} data-col={22} />
                <div className="home-cdn__dot" data-row={34} data-col={23} />
                <div className="home-cdn__dot" data-row={34} data-col={24} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={34} data-col={25} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={34} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={34} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={34} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={34} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={34} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={34} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={34} data-col={32} />
                <div className="home-cdn__dot" data-row={34} data-col={33} />
                <div className="home-cdn__dot" data-row={34} data-col={34} />
                <div className="home-cdn__dot" data-row={34} data-col={35} />
                <div className="home-cdn__dot" data-row={34} data-col={36} />
                <div className="home-cdn__dot" data-row={34} data-col={37} />
                <div className="home-cdn__dot" data-row={34} data-col={38} />
                <div className="home-cdn__dot" data-row={34} data-col={39} />
                <div className="home-cdn__dot" data-row={34} data-col={40} />
                <div className="home-cdn__dot" data-row={34} data-col={41} />
                <div className="home-cdn__dot" data-row={34} data-col={42} />
                <div className="home-cdn__dot" data-row={34} data-col={43} />
                <div className="home-cdn__dot" data-row={34} data-col={44} />
                <div className="home-cdn__dot" data-row={34} data-col={45} />
                <div className="home-cdn__dot" data-row={34} data-col={46} />
                <div className="home-cdn__dot" data-row={34} data-col={47} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={48} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={49} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={50} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={52} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={53} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={65} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={66} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={67} data-continent="africa" />
                <div className="home-cdn__dot" data-row={34} data-col={68} />
                <div className="home-cdn__dot" data-row={34} data-col={69} />
                <div className="home-cdn__dot" data-row={34} data-col={70} />
                <div className="home-cdn__dot" data-row={34} data-col={71} />
                <div className="home-cdn__dot" data-row={34} data-col={72} />
                <div className="home-cdn__dot" data-row={34} data-col={73} />
                <div className="home-cdn__dot" data-row={34} data-col={74} />
                <div className="home-cdn__dot" data-row={34} data-col={75} />
                <div className="home-cdn__dot" data-row={34} data-col={76} />
                <div className="home-cdn__dot" data-row={34} data-col={77} />
                <div className="home-cdn__dot" data-row={34} data-col={78} data-continent="asia" />
                <div className="home-cdn__dot" data-row={34} data-col={79} />
                <div className="home-cdn__dot" data-row={34} data-col={80} />
                <div className="home-cdn__dot" data-row={34} data-col={81} />
                <div className="home-cdn__dot" data-row={34} data-col={82} data-continent="asia" />
                <div className="home-cdn__dot" data-row={34} data-col={83} />
                <div className="home-cdn__dot" data-row={34} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={34} data-col={85} />
                <div className="home-cdn__dot" data-row={34} data-col={86} />
                <div className="home-cdn__dot" data-row={34} data-col={87} />
                <div className="home-cdn__dot" data-row={34} data-col={88} />
                <div className="home-cdn__dot" data-row={34} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={34} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={34} data-col={91} />
                <div className="home-cdn__dot" data-row={34} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={34} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={34} data-col={94} />
                <div className="home-cdn__dot" data-row={34} data-col={95} />
                <div className="home-cdn__dot" data-row={34} data-col={96} />
                <div className="home-cdn__dot" data-row={34} data-col={97} />
                <div className="home-cdn__dot" data-row={34} data-col={98} />
                <div className="home-cdn__dot" data-row={34} data-col={99} />
                <div className="home-cdn__dot" data-row={34} data-col={100} />
                <div className="home-cdn__dot" data-row={34} data-col={101} />
                <div className="home-cdn__dot" data-row={34} data-col={102} />
                <div className="home-cdn__dot" data-row={34} data-col={103} />
                <div className="home-cdn__dot" data-row={34} data-col={104} />
                <div className="home-cdn__dot" data-row={34} data-col={105} />
                <div className="home-cdn__dot" data-row={34} data-col={106} />
                <div className="home-cdn__dot" data-row={34} data-col={107} />
                <div className="home-cdn__dot" data-row={34} data-col={108} />
                <div className="home-cdn__dot" data-row={34} data-col={109} />
                <div className="home-cdn__dot" data-row={34} data-col={110} />
                <div className="home-cdn__dot" data-row={34} data-col={111} />
                <div className="home-cdn__dot" data-row={34} data-col={112} />
                <div className="home-cdn__dot" data-row={34} data-col={113} />
                <div className="home-cdn__dot" data-row={34} data-col={114} />
                <div className="home-cdn__dot" data-row={35} data-col={1} />
                <div className="home-cdn__dot" data-row={35} data-col={2} />
                <div className="home-cdn__dot" data-row={35} data-col={3} />
                <div className="home-cdn__dot" data-row={35} data-col={4} />
                <div className="home-cdn__dot" data-row={35} data-col={5} />
                <div className="home-cdn__dot" data-row={35} data-col={6} />
                <div className="home-cdn__dot" data-row={35} data-col={7} />
                <div className="home-cdn__dot" data-row={35} data-col={8} />
                <div className="home-cdn__dot" data-row={35} data-col={9} />
                <div className="home-cdn__dot" data-row={35} data-col={10} />
                <div className="home-cdn__dot" data-row={35} data-col={11} />
                <div className="home-cdn__dot" data-row={35} data-col={12} />
                <div className="home-cdn__dot" data-row={35} data-col={13} />
                <div className="home-cdn__dot" data-row={35} data-col={14} />
                <div className="home-cdn__dot" data-row={35} data-col={15} />
                <div className="home-cdn__dot" data-row={35} data-col={16} />
                <div className="home-cdn__dot" data-row={35} data-col={17} />
                <div className="home-cdn__dot" data-row={35} data-col={18} />
                <div className="home-cdn__dot" data-row={35} data-col={19} />
                <div className="home-cdn__dot" data-row={35} data-col={20} />
                <div className="home-cdn__dot" data-row={35} data-col={21} />
                <div className="home-cdn__dot" data-row={35} data-col={22} />
                <div className="home-cdn__dot" data-row={35} data-col={23} />
                <div className="home-cdn__dot" data-row={35} data-col={24} />
                <div className="home-cdn__dot" data-row={35} data-col={25} />
                <div className="home-cdn__dot" data-row={35} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={35} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={35} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={35} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={35} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={35} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={35} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={35} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={35} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={35} data-col={35} />
                <div className="home-cdn__dot" data-row={35} data-col={36} />
                <div className="home-cdn__dot" data-row={35} data-col={37} />
                <div className="home-cdn__dot" data-row={35} data-col={38} />
                <div className="home-cdn__dot" data-row={35} data-col={39} />
                <div className="home-cdn__dot" data-row={35} data-col={40} />
                <div className="home-cdn__dot" data-row={35} data-col={41} />
                <div className="home-cdn__dot" data-row={35} data-col={42} />
                <div className="home-cdn__dot" data-row={35} data-col={43} />
                <div className="home-cdn__dot" data-row={35} data-col={44} />
                <div className="home-cdn__dot" data-row={35} data-col={45} />
                <div className="home-cdn__dot" data-row={35} data-col={46} />
                <div className="home-cdn__dot" data-row={35} data-col={47} />
                <div className="home-cdn__dot" data-row={35} data-col={48} />
                <div className="home-cdn__dot" data-row={35} data-col={49} />
                <div className="home-cdn__dot" data-row={35} data-col={50} />
                <div className="home-cdn__dot" data-row={35} data-col={51} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={52} />
                <div className="home-cdn__dot" data-row={35} data-col={53} />
                <div className="home-cdn__dot" data-row={35} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={65} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={66} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={67} data-continent="africa" />
                <div className="home-cdn__dot" data-row={35} data-col={68} />
                <div className="home-cdn__dot" data-row={35} data-col={69} />
                <div className="home-cdn__dot" data-row={35} data-col={70} />
                <div className="home-cdn__dot" data-row={35} data-col={71} />
                <div className="home-cdn__dot" data-row={35} data-col={72} />
                <div className="home-cdn__dot" data-row={35} data-col={73} />
                <div className="home-cdn__dot" data-row={35} data-col={74} />
                <div className="home-cdn__dot" data-row={35} data-col={75} />
                <div className="home-cdn__dot" data-row={35} data-col={76} />
                <div className="home-cdn__dot" data-row={35} data-col={77} />
                <div className="home-cdn__dot" data-row={35} data-col={78} />
                <div className="home-cdn__dot" data-row={35} data-col={79} />
                <div className="home-cdn__dot" data-row={35} data-col={80} />
                <div className="home-cdn__dot" data-row={35} data-col={81} />
                <div className="home-cdn__dot" data-row={35} data-col={82} />
                <div className="home-cdn__dot" data-row={35} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={35} data-col={84} />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={35} data-col={85} data-continent="asia" data-indicator="arvan"><div className="home-cdn__tooltip">سنگاپور</div></div>
                <div className="home-cdn__dot" data-row={35} data-col={86} />
                <div className="home-cdn__dot" data-row={35} data-col={87} />
                <div className="home-cdn__dot" data-row={35} data-col={88} />
                <div className="home-cdn__dot" data-row={35} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={35} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={35} data-col={91} />
                <div className="home-cdn__dot" data-row={35} data-col={92} />
                <div className="home-cdn__dot" data-row={35} data-col={93} />
                <div className="home-cdn__dot" data-row={35} data-col={94} />
                <div className="home-cdn__dot" data-row={35} data-col={95} />
                <div className="home-cdn__dot" data-row={35} data-col={96} />
                <div className="home-cdn__dot" data-row={35} data-col={97} />
                <div className="home-cdn__dot" data-row={35} data-col={98} />
                <div className="home-cdn__dot" data-row={35} data-col={99} />
                <div className="home-cdn__dot" data-row={35} data-col={100} />
                <div className="home-cdn__dot" data-row={35} data-col={101} />
                <div className="home-cdn__dot" data-row={35} data-col={102} />
                <div className="home-cdn__dot" data-row={35} data-col={103} />
                <div className="home-cdn__dot" data-row={35} data-col={104} />
                <div className="home-cdn__dot" data-row={35} data-col={105} />
                <div className="home-cdn__dot" data-row={35} data-col={106} />
                <div className="home-cdn__dot" data-row={35} data-col={107} />
                <div className="home-cdn__dot" data-row={35} data-col={108} />
                <div className="home-cdn__dot" data-row={35} data-col={109} />
                <div className="home-cdn__dot" data-row={35} data-col={110} />
                <div className="home-cdn__dot" data-row={35} data-col={111} />
                <div className="home-cdn__dot" data-row={35} data-col={112} />
                <div className="home-cdn__dot" data-row={35} data-col={113} />
                <div className="home-cdn__dot" data-row={35} data-col={114} />
                <div className="home-cdn__dot" data-row={36} data-col={1} />
                <div className="home-cdn__dot" data-row={36} data-col={2} />
                <div className="home-cdn__dot" data-row={36} data-col={3} />
                <div className="home-cdn__dot" data-row={36} data-col={4} />
                <div className="home-cdn__dot" data-row={36} data-col={5} />
                <div className="home-cdn__dot" data-row={36} data-col={6} />
                <div className="home-cdn__dot" data-row={36} data-col={7} />
                <div className="home-cdn__dot" data-row={36} data-col={8} />
                <div className="home-cdn__dot" data-row={36} data-col={9} />
                <div className="home-cdn__dot" data-row={36} data-col={10} />
                <div className="home-cdn__dot" data-row={36} data-col={11} />
                <div className="home-cdn__dot" data-row={36} data-col={12} />
                <div className="home-cdn__dot" data-row={36} data-col={13} />
                <div className="home-cdn__dot" data-row={36} data-col={14} />
                <div className="home-cdn__dot" data-row={36} data-col={15} />
                <div className="home-cdn__dot" data-row={36} data-col={16} />
                <div className="home-cdn__dot" data-row={36} data-col={17} />
                <div className="home-cdn__dot" data-row={36} data-col={18} />
                <div className="home-cdn__dot" data-row={36} data-col={19} />
                <div className="home-cdn__dot" data-row={36} data-col={20} />
                <div className="home-cdn__dot" data-row={36} data-col={21} />
                <div className="home-cdn__dot" data-row={36} data-col={22} />
                <div className="home-cdn__dot" data-row={36} data-col={23} />
                <div className="home-cdn__dot" data-row={36} data-col={24} />
                <div className="home-cdn__dot" data-row={36} data-col={25} />
                <div className="home-cdn__dot" data-row={36} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={36} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={36} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={36} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={36} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={36} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={36} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={36} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={36} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={36} data-col={35} />
                <div className="home-cdn__dot" data-row={36} data-col={36} />
                <div className="home-cdn__dot" data-row={36} data-col={37} />
                <div className="home-cdn__dot" data-row={36} data-col={38} />
                <div className="home-cdn__dot" data-row={36} data-col={39} />
                <div className="home-cdn__dot" data-row={36} data-col={40} />
                <div className="home-cdn__dot" data-row={36} data-col={41} />
                <div className="home-cdn__dot" data-row={36} data-col={42} />
                <div className="home-cdn__dot" data-row={36} data-col={43} />
                <div className="home-cdn__dot" data-row={36} data-col={44} />
                <div className="home-cdn__dot" data-row={36} data-col={45} />
                <div className="home-cdn__dot" data-row={36} data-col={46} />
                <div className="home-cdn__dot" data-row={36} data-col={47} />
                <div className="home-cdn__dot" data-row={36} data-col={48} />
                <div className="home-cdn__dot" data-row={36} data-col={49} />
                <div className="home-cdn__dot" data-row={36} data-col={50} />
                <div className="home-cdn__dot" data-row={36} data-col={51} />
                <div className="home-cdn__dot" data-row={36} data-col={52} />
                <div className="home-cdn__dot" data-row={36} data-col={53} />
                <div className="home-cdn__dot" data-row={36} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={65} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={66} data-continent="africa" />
                <div className="home-cdn__dot" data-row={36} data-col={67} />
                <div className="home-cdn__dot" data-row={36} data-col={68} />
                <div className="home-cdn__dot" data-row={36} data-col={69} />
                <div className="home-cdn__dot" data-row={36} data-col={70} />
                <div className="home-cdn__dot" data-row={36} data-col={71} />
                <div className="home-cdn__dot" data-row={36} data-col={72} />
                <div className="home-cdn__dot" data-row={36} data-col={73} />
                <div className="home-cdn__dot" data-row={36} data-col={74} />
                <div className="home-cdn__dot" data-row={36} data-col={75} />
                <div className="home-cdn__dot" data-row={36} data-col={76} />
                <div className="home-cdn__dot" data-row={36} data-col={77} />
                <div className="home-cdn__dot" data-row={36} data-col={78} />
                <div className="home-cdn__dot" data-row={36} data-col={79} />
                <div className="home-cdn__dot" data-row={36} data-col={80} />
                <div className="home-cdn__dot" data-row={36} data-col={81} />
                <div className="home-cdn__dot" data-row={36} data-col={82} />
                <div className="home-cdn__dot" data-row={36} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={36} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={36} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={36} data-col={86} />
                <div className="home-cdn__dot" data-row={36} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={36} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={36} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={36} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={36} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={36} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={36} data-col={93} />
                <div className="home-cdn__dot" data-row={36} data-col={94} />
                <div className="home-cdn__dot" data-row={36} data-col={95} />
                <div className="home-cdn__dot" data-row={36} data-col={96} />
                <div className="home-cdn__dot" data-row={36} data-col={97} />
                <div className="home-cdn__dot" data-row={36} data-col={98} />
                <div className="home-cdn__dot" data-row={36} data-col={99} />
                <div className="home-cdn__dot" data-row={36} data-col={100} />
                <div className="home-cdn__dot" data-row={36} data-col={101} />
                <div className="home-cdn__dot" data-row={36} data-col={102} />
                <div className="home-cdn__dot" data-row={36} data-col={103} />
                <div className="home-cdn__dot" data-row={36} data-col={104} />
                <div className="home-cdn__dot" data-row={36} data-col={105} />
                <div className="home-cdn__dot" data-row={36} data-col={106} />
                <div className="home-cdn__dot" data-row={36} data-col={107} />
                <div className="home-cdn__dot" data-row={36} data-col={108} />
                <div className="home-cdn__dot" data-row={36} data-col={109} />
                <div className="home-cdn__dot" data-row={36} data-col={110} />
                <div className="home-cdn__dot" data-row={36} data-col={111} />
                <div className="home-cdn__dot" data-row={36} data-col={112} />
                <div className="home-cdn__dot" data-row={36} data-col={113} />
                <div className="home-cdn__dot" data-row={36} data-col={114} />
                <div className="home-cdn__dot" data-row={37} data-col={1} />
                <div className="home-cdn__dot" data-row={37} data-col={2} />
                <div className="home-cdn__dot" data-row={37} data-col={3} />
                <div className="home-cdn__dot" data-row={37} data-col={4} />
                <div className="home-cdn__dot" data-row={37} data-col={5} />
                <div className="home-cdn__dot" data-row={37} data-col={6} />
                <div className="home-cdn__dot" data-row={37} data-col={7} />
                <div className="home-cdn__dot" data-row={37} data-col={8} />
                <div className="home-cdn__dot" data-row={37} data-col={9} />
                <div className="home-cdn__dot" data-row={37} data-col={10} />
                <div className="home-cdn__dot" data-row={37} data-col={11} />
                <div className="home-cdn__dot" data-row={37} data-col={12} />
                <div className="home-cdn__dot" data-row={37} data-col={13} />
                <div className="home-cdn__dot" data-row={37} data-col={14} />
                <div className="home-cdn__dot" data-row={37} data-col={15} />
                <div className="home-cdn__dot" data-row={37} data-col={16} />
                <div className="home-cdn__dot" data-row={37} data-col={17} />
                <div className="home-cdn__dot" data-row={37} data-col={18} />
                <div className="home-cdn__dot" data-row={37} data-col={19} />
                <div className="home-cdn__dot" data-row={37} data-col={20} />
                <div className="home-cdn__dot" data-row={37} data-col={21} />
                <div className="home-cdn__dot" data-row={37} data-col={22} />
                <div className="home-cdn__dot" data-row={37} data-col={23} />
                <div className="home-cdn__dot" data-row={37} data-col={24} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={25} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={37} data-col={36} />
                <div className="home-cdn__dot" data-row={37} data-col={37} />
                <div className="home-cdn__dot" data-row={37} data-col={38} />
                <div className="home-cdn__dot" data-row={37} data-col={39} />
                <div className="home-cdn__dot" data-row={37} data-col={40} />
                <div className="home-cdn__dot" data-row={37} data-col={41} />
                <div className="home-cdn__dot" data-row={37} data-col={42} />
                <div className="home-cdn__dot" data-row={37} data-col={43} />
                <div className="home-cdn__dot" data-row={37} data-col={44} />
                <div className="home-cdn__dot" data-row={37} data-col={45} />
                <div className="home-cdn__dot" data-row={37} data-col={46} />
                <div className="home-cdn__dot" data-row={37} data-col={47} />
                <div className="home-cdn__dot" data-row={37} data-col={48} />
                <div className="home-cdn__dot" data-row={37} data-col={49} />
                <div className="home-cdn__dot" data-row={37} data-col={50} />
                <div className="home-cdn__dot" data-row={37} data-col={51} />
                <div className="home-cdn__dot" data-row={37} data-col={52} />
                <div className="home-cdn__dot" data-row={37} data-col={53} />
                <div className="home-cdn__dot" data-row={37} data-col={54} />
                <div className="home-cdn__dot" data-row={37} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={65} data-continent="africa" />
                <div className="home-cdn__dot" data-row={37} data-col={66} />
                <div className="home-cdn__dot" data-row={37} data-col={67} />
                <div className="home-cdn__dot" data-row={37} data-col={68} />
                <div className="home-cdn__dot" data-row={37} data-col={69} />
                <div className="home-cdn__dot" data-row={37} data-col={70} />
                <div className="home-cdn__dot" data-row={37} data-col={71} />
                <div className="home-cdn__dot" data-row={37} data-col={72} />
                <div className="home-cdn__dot" data-row={37} data-col={73} />
                <div className="home-cdn__dot" data-row={37} data-col={74} />
                <div className="home-cdn__dot" data-row={37} data-col={75} />
                <div className="home-cdn__dot" data-row={37} data-col={76} />
                <div className="home-cdn__dot" data-row={37} data-col={77} />
                <div className="home-cdn__dot" data-row={37} data-col={78} />
                <div className="home-cdn__dot" data-row={37} data-col={79} />
                <div className="home-cdn__dot" data-row={37} data-col={80} />
                <div className="home-cdn__dot" data-row={37} data-col={81} />
                <div className="home-cdn__dot" data-row={37} data-col={82} />
                <div className="home-cdn__dot" data-row={37} data-col={83} />
                <div className="home-cdn__dot home-cdn__dot--red" data-row={37} data-col={84} data-continent="asia" data-indicator="red"><div className="home-cdn__tooltip">به‌زودی</div></div>
                <div className="home-cdn__dot" data-row={37} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={37} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={37} data-col={87} />
                <div className="home-cdn__dot" data-row={37} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={37} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={37} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={37} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={37} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={37} data-col={93} />
                <div className="home-cdn__dot" data-row={37} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={37} data-col={95} data-continent="asia" />
                <div className="home-cdn__dot" data-row={37} data-col={96} />
                <div className="home-cdn__dot" data-row={37} data-col={97} />
                <div className="home-cdn__dot" data-row={37} data-col={98} />
                <div className="home-cdn__dot" data-row={37} data-col={99} />
                <div className="home-cdn__dot" data-row={37} data-col={100} />
                <div className="home-cdn__dot" data-row={37} data-col={101} />
                <div className="home-cdn__dot" data-row={37} data-col={102} />
                <div className="home-cdn__dot" data-row={37} data-col={103} />
                <div className="home-cdn__dot" data-row={37} data-col={104} />
                <div className="home-cdn__dot" data-row={37} data-col={105} />
                <div className="home-cdn__dot" data-row={37} data-col={106} />
                <div className="home-cdn__dot" data-row={37} data-col={107} />
                <div className="home-cdn__dot" data-row={37} data-col={108} />
                <div className="home-cdn__dot" data-row={37} data-col={109} />
                <div className="home-cdn__dot" data-row={37} data-col={110} />
                <div className="home-cdn__dot" data-row={37} data-col={111} />
                <div className="home-cdn__dot" data-row={37} data-col={112} />
                <div className="home-cdn__dot" data-row={37} data-col={113} />
                <div className="home-cdn__dot" data-row={37} data-col={114} />
                <div className="home-cdn__dot" data-row={38} data-col={1} />
                <div className="home-cdn__dot" data-row={38} data-col={2} />
                <div className="home-cdn__dot" data-row={38} data-col={3} />
                <div className="home-cdn__dot" data-row={38} data-col={4} />
                <div className="home-cdn__dot" data-row={38} data-col={5} />
                <div className="home-cdn__dot" data-row={38} data-col={6} />
                <div className="home-cdn__dot" data-row={38} data-col={7} />
                <div className="home-cdn__dot" data-row={38} data-col={8} />
                <div className="home-cdn__dot" data-row={38} data-col={9} />
                <div className="home-cdn__dot" data-row={38} data-col={10} />
                <div className="home-cdn__dot" data-row={38} data-col={11} />
                <div className="home-cdn__dot" data-row={38} data-col={12} />
                <div className="home-cdn__dot" data-row={38} data-col={13} />
                <div className="home-cdn__dot" data-row={38} data-col={14} />
                <div className="home-cdn__dot" data-row={38} data-col={15} />
                <div className="home-cdn__dot" data-row={38} data-col={16} />
                <div className="home-cdn__dot" data-row={38} data-col={17} />
                <div className="home-cdn__dot" data-row={38} data-col={18} />
                <div className="home-cdn__dot" data-row={38} data-col={19} />
                <div className="home-cdn__dot" data-row={38} data-col={20} />
                <div className="home-cdn__dot" data-row={38} data-col={21} />
                <div className="home-cdn__dot" data-row={38} data-col={22} />
                <div className="home-cdn__dot" data-row={38} data-col={23} />
                <div className="home-cdn__dot" data-row={38} data-col={24} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={25} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={38} data-col={37} />
                <div className="home-cdn__dot" data-row={38} data-col={38} />
                <div className="home-cdn__dot" data-row={38} data-col={39} />
                <div className="home-cdn__dot" data-row={38} data-col={40} />
                <div className="home-cdn__dot" data-row={38} data-col={41} />
                <div className="home-cdn__dot" data-row={38} data-col={42} />
                <div className="home-cdn__dot" data-row={38} data-col={43} />
                <div className="home-cdn__dot" data-row={38} data-col={44} />
                <div className="home-cdn__dot" data-row={38} data-col={45} />
                <div className="home-cdn__dot" data-row={38} data-col={46} />
                <div className="home-cdn__dot" data-row={38} data-col={47} />
                <div className="home-cdn__dot" data-row={38} data-col={48} />
                <div className="home-cdn__dot" data-row={38} data-col={49} />
                <div className="home-cdn__dot" data-row={38} data-col={50} />
                <div className="home-cdn__dot" data-row={38} data-col={51} />
                <div className="home-cdn__dot" data-row={38} data-col={52} />
                <div className="home-cdn__dot" data-row={38} data-col={53} />
                <div className="home-cdn__dot" data-row={38} data-col={54} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={38} data-col={65} />
                <div className="home-cdn__dot" data-row={38} data-col={66} />
                <div className="home-cdn__dot" data-row={38} data-col={67} />
                <div className="home-cdn__dot" data-row={38} data-col={68} />
                <div className="home-cdn__dot" data-row={38} data-col={69} />
                <div className="home-cdn__dot" data-row={38} data-col={70} />
                <div className="home-cdn__dot" data-row={38} data-col={71} />
                <div className="home-cdn__dot" data-row={38} data-col={72} />
                <div className="home-cdn__dot" data-row={38} data-col={73} />
                <div className="home-cdn__dot" data-row={38} data-col={74} />
                <div className="home-cdn__dot" data-row={38} data-col={75} />
                <div className="home-cdn__dot" data-row={38} data-col={76} />
                <div className="home-cdn__dot" data-row={38} data-col={77} />
                <div className="home-cdn__dot" data-row={38} data-col={78} />
                <div className="home-cdn__dot" data-row={38} data-col={79} />
                <div className="home-cdn__dot" data-row={38} data-col={80} />
                <div className="home-cdn__dot" data-row={38} data-col={81} />
                <div className="home-cdn__dot" data-row={38} data-col={82} />
                <div className="home-cdn__dot" data-row={38} data-col={83} data-continent="asia" />
                <div className="home-cdn__dot" data-row={38} data-col={84} data-continent="asia" />
                <div className="home-cdn__dot" data-row={38} data-col={85} data-continent="asia" />
                <div className="home-cdn__dot" data-row={38} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={38} data-col={87} />
                <div className="home-cdn__dot" data-row={38} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={38} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={38} data-col={90} />
                <div className="home-cdn__dot" data-row={38} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={38} data-col={92} />
                <div className="home-cdn__dot" data-row={38} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={38} data-col={94} data-continent="asia" />
                <div className="home-cdn__dot" data-row={38} data-col={95} />
                <div className="home-cdn__dot" data-row={38} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={38} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={38} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={38} data-col={99} />
                <div className="home-cdn__dot" data-row={38} data-col={100} />
                <div className="home-cdn__dot" data-row={38} data-col={101} data-continent="australia" />
                <div className="home-cdn__dot" data-row={38} data-col={102} />
                <div className="home-cdn__dot" data-row={38} data-col={103} />
                <div className="home-cdn__dot" data-row={38} data-col={104} />
                <div className="home-cdn__dot" data-row={38} data-col={105} />
                <div className="home-cdn__dot" data-row={38} data-col={106} />
                <div className="home-cdn__dot" data-row={38} data-col={107} />
                <div className="home-cdn__dot" data-row={38} data-col={108} />
                <div className="home-cdn__dot" data-row={38} data-col={109} />
                <div className="home-cdn__dot" data-row={38} data-col={110} />
                <div className="home-cdn__dot" data-row={38} data-col={111} />
                <div className="home-cdn__dot" data-row={38} data-col={112} />
                <div className="home-cdn__dot" data-row={38} data-col={113} />
                <div className="home-cdn__dot" data-row={38} data-col={114} />
                <div className="home-cdn__dot" data-row={39} data-col={1} />
                <div className="home-cdn__dot" data-row={39} data-col={2} />
                <div className="home-cdn__dot" data-row={39} data-col={3} />
                <div className="home-cdn__dot" data-row={39} data-col={4} />
                <div className="home-cdn__dot" data-row={39} data-col={5} />
                <div className="home-cdn__dot" data-row={39} data-col={6} />
                <div className="home-cdn__dot" data-row={39} data-col={7} />
                <div className="home-cdn__dot" data-row={39} data-col={8} />
                <div className="home-cdn__dot" data-row={39} data-col={9} />
                <div className="home-cdn__dot" data-row={39} data-col={10} />
                <div className="home-cdn__dot" data-row={39} data-col={11} />
                <div className="home-cdn__dot" data-row={39} data-col={12} />
                <div className="home-cdn__dot" data-row={39} data-col={13} />
                <div className="home-cdn__dot" data-row={39} data-col={14} />
                <div className="home-cdn__dot" data-row={39} data-col={15} />
                <div className="home-cdn__dot" data-row={39} data-col={16} />
                <div className="home-cdn__dot" data-row={39} data-col={17} />
                <div className="home-cdn__dot" data-row={39} data-col={18} />
                <div className="home-cdn__dot" data-row={39} data-col={19} />
                <div className="home-cdn__dot" data-row={39} data-col={20} />
                <div className="home-cdn__dot" data-row={39} data-col={21} />
                <div className="home-cdn__dot" data-row={39} data-col={22} />
                <div className="home-cdn__dot" data-row={39} data-col={23} />
                <div className="home-cdn__dot" data-row={39} data-col={24} />
                <div className="home-cdn__dot" data-row={39} data-col={25} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={37} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={38} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={39} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={39} data-col={40} />
                <div className="home-cdn__dot" data-row={39} data-col={41} />
                <div className="home-cdn__dot" data-row={39} data-col={42} />
                <div className="home-cdn__dot" data-row={39} data-col={43} />
                <div className="home-cdn__dot" data-row={39} data-col={44} />
                <div className="home-cdn__dot" data-row={39} data-col={45} />
                <div className="home-cdn__dot" data-row={39} data-col={46} />
                <div className="home-cdn__dot" data-row={39} data-col={47} />
                <div className="home-cdn__dot" data-row={39} data-col={48} />
                <div className="home-cdn__dot" data-row={39} data-col={49} />
                <div className="home-cdn__dot" data-row={39} data-col={50} />
                <div className="home-cdn__dot" data-row={39} data-col={51} />
                <div className="home-cdn__dot" data-row={39} data-col={52} />
                <div className="home-cdn__dot" data-row={39} data-col={53} />
                <div className="home-cdn__dot" data-row={39} data-col={54} />
                <div className="home-cdn__dot" data-row={39} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={39} data-col={65} />
                <div className="home-cdn__dot" data-row={39} data-col={66} />
                <div className="home-cdn__dot" data-row={39} data-col={67} />
                <div className="home-cdn__dot" data-row={39} data-col={68} />
                <div className="home-cdn__dot" data-row={39} data-col={69} />
                <div className="home-cdn__dot" data-row={39} data-col={70} />
                <div className="home-cdn__dot" data-row={39} data-col={71} />
                <div className="home-cdn__dot" data-row={39} data-col={72} />
                <div className="home-cdn__dot" data-row={39} data-col={73} />
                <div className="home-cdn__dot" data-row={39} data-col={74} />
                <div className="home-cdn__dot" data-row={39} data-col={75} />
                <div className="home-cdn__dot" data-row={39} data-col={76} />
                <div className="home-cdn__dot" data-row={39} data-col={77} />
                <div className="home-cdn__dot" data-row={39} data-col={78} />
                <div className="home-cdn__dot" data-row={39} data-col={79} />
                <div className="home-cdn__dot" data-row={39} data-col={80} />
                <div className="home-cdn__dot" data-row={39} data-col={81} />
                <div className="home-cdn__dot" data-row={39} data-col={82} />
                <div className="home-cdn__dot" data-row={39} data-col={83} />
                <div className="home-cdn__dot" data-row={39} data-col={84} />
                <div className="home-cdn__dot" data-row={39} data-col={85} />
                <div className="home-cdn__dot" data-row={39} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={39} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={39} data-col={88} />
                <div className="home-cdn__dot" data-row={39} data-col={89} />
                <div className="home-cdn__dot" data-row={39} data-col={90} />
                <div className="home-cdn__dot" data-row={39} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={39} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={39} data-col={93} />
                <div className="home-cdn__dot" data-row={39} data-col={94} />
                <div className="home-cdn__dot" data-row={39} data-col={95} />
                <div className="home-cdn__dot" data-row={39} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={39} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={39} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={39} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={39} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={39} data-col={101} data-continent="australia" />
                <div className="home-cdn__dot" data-row={39} data-col={102} data-continent="australia" />
                <div className="home-cdn__dot" data-row={39} data-col={103} />
                <div className="home-cdn__dot" data-row={39} data-col={104} />
                <div className="home-cdn__dot" data-row={39} data-col={105} />
                <div className="home-cdn__dot" data-row={39} data-col={106} />
                <div className="home-cdn__dot" data-row={39} data-col={107} />
                <div className="home-cdn__dot" data-row={39} data-col={108} />
                <div className="home-cdn__dot" data-row={39} data-col={109} />
                <div className="home-cdn__dot" data-row={39} data-col={110} />
                <div className="home-cdn__dot" data-row={39} data-col={111} />
                <div className="home-cdn__dot" data-row={39} data-col={112} />
                <div className="home-cdn__dot" data-row={39} data-col={113} />
                <div className="home-cdn__dot" data-row={39} data-col={114} />
                <div className="home-cdn__dot" data-row={40} data-col={1} />
                <div className="home-cdn__dot" data-row={40} data-col={2} />
                <div className="home-cdn__dot" data-row={40} data-col={3} />
                <div className="home-cdn__dot" data-row={40} data-col={4} />
                <div className="home-cdn__dot" data-row={40} data-col={5} />
                <div className="home-cdn__dot" data-row={40} data-col={6} />
                <div className="home-cdn__dot" data-row={40} data-col={7} />
                <div className="home-cdn__dot" data-row={40} data-col={8} />
                <div className="home-cdn__dot" data-row={40} data-col={9} />
                <div className="home-cdn__dot" data-row={40} data-col={10} />
                <div className="home-cdn__dot" data-row={40} data-col={11} />
                <div className="home-cdn__dot" data-row={40} data-col={12} />
                <div className="home-cdn__dot" data-row={40} data-col={13} />
                <div className="home-cdn__dot" data-row={40} data-col={14} />
                <div className="home-cdn__dot" data-row={40} data-col={15} />
                <div className="home-cdn__dot" data-row={40} data-col={16} />
                <div className="home-cdn__dot" data-row={40} data-col={17} />
                <div className="home-cdn__dot" data-row={40} data-col={18} />
                <div className="home-cdn__dot" data-row={40} data-col={19} />
                <div className="home-cdn__dot" data-row={40} data-col={20} />
                <div className="home-cdn__dot" data-row={40} data-col={21} />
                <div className="home-cdn__dot" data-row={40} data-col={22} />
                <div className="home-cdn__dot" data-row={40} data-col={23} />
                <div className="home-cdn__dot" data-row={40} data-col={24} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={25} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={37} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={38} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={39} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={40} data-col={40} />
                <div className="home-cdn__dot" data-row={40} data-col={41} />
                <div className="home-cdn__dot" data-row={40} data-col={42} />
                <div className="home-cdn__dot" data-row={40} data-col={43} />
                <div className="home-cdn__dot" data-row={40} data-col={44} />
                <div className="home-cdn__dot" data-row={40} data-col={45} />
                <div className="home-cdn__dot" data-row={40} data-col={46} />
                <div className="home-cdn__dot" data-row={40} data-col={47} />
                <div className="home-cdn__dot" data-row={40} data-col={48} />
                <div className="home-cdn__dot" data-row={40} data-col={49} />
                <div className="home-cdn__dot" data-row={40} data-col={50} />
                <div className="home-cdn__dot" data-row={40} data-col={51} />
                <div className="home-cdn__dot" data-row={40} data-col={52} />
                <div className="home-cdn__dot" data-row={40} data-col={53} />
                <div className="home-cdn__dot" data-row={40} data-col={54} />
                <div className="home-cdn__dot" data-row={40} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={40} data-col={65} />
                <div className="home-cdn__dot" data-row={40} data-col={66} />
                <div className="home-cdn__dot" data-row={40} data-col={67} />
                <div className="home-cdn__dot" data-row={40} data-col={68} />
                <div className="home-cdn__dot" data-row={40} data-col={69} />
                <div className="home-cdn__dot" data-row={40} data-col={70} />
                <div className="home-cdn__dot" data-row={40} data-col={71} />
                <div className="home-cdn__dot" data-row={40} data-col={72} />
                <div className="home-cdn__dot" data-row={40} data-col={73} />
                <div className="home-cdn__dot" data-row={40} data-col={74} />
                <div className="home-cdn__dot" data-row={40} data-col={75} />
                <div className="home-cdn__dot" data-row={40} data-col={76} />
                <div className="home-cdn__dot" data-row={40} data-col={77} />
                <div className="home-cdn__dot" data-row={40} data-col={78} />
                <div className="home-cdn__dot" data-row={40} data-col={79} />
                <div className="home-cdn__dot" data-row={40} data-col={80} />
                <div className="home-cdn__dot" data-row={40} data-col={81} />
                <div className="home-cdn__dot" data-row={40} data-col={82} />
                <div className="home-cdn__dot" data-row={40} data-col={83} />
                <div className="home-cdn__dot" data-row={40} data-col={84} />
                <div className="home-cdn__dot" data-row={40} data-col={85} />
                <div className="home-cdn__dot" data-row={40} data-col={86} data-continent="asia" />
                <div className="home-cdn__dot" data-row={40} data-col={87} data-continent="asia" />
                <div className="home-cdn__dot" data-row={40} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={40} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={40} data-col={90} />
                <div className="home-cdn__dot" data-row={40} data-col={91} />
                <div className="home-cdn__dot" data-row={40} data-col={92} />
                <div className="home-cdn__dot" data-row={40} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={40} data-col={94} />
                <div className="home-cdn__dot" data-row={40} data-col={95} />
                <div className="home-cdn__dot" data-row={40} data-col={96} />
                <div className="home-cdn__dot" data-row={40} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={40} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={40} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={40} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={40} data-col={101} data-continent="australia" />
                <div className="home-cdn__dot" data-row={40} data-col={102} />
                <div className="home-cdn__dot" data-row={40} data-col={103} />
                <div className="home-cdn__dot" data-row={40} data-col={104} />
                <div className="home-cdn__dot" data-row={40} data-col={105} />
                <div className="home-cdn__dot" data-row={40} data-col={106} />
                <div className="home-cdn__dot" data-row={40} data-col={107} />
                <div className="home-cdn__dot" data-row={40} data-col={108} />
                <div className="home-cdn__dot" data-row={40} data-col={109} />
                <div className="home-cdn__dot" data-row={40} data-col={110} />
                <div className="home-cdn__dot" data-row={40} data-col={111} />
                <div className="home-cdn__dot" data-row={40} data-col={112} />
                <div className="home-cdn__dot" data-row={40} data-col={113} />
                <div className="home-cdn__dot" data-row={40} data-col={114} />
                <div className="home-cdn__dot" data-row={41} data-col={1} />
                <div className="home-cdn__dot" data-row={41} data-col={2} />
                <div className="home-cdn__dot" data-row={41} data-col={3} />
                <div className="home-cdn__dot" data-row={41} data-col={4} />
                <div className="home-cdn__dot" data-row={41} data-col={5} />
                <div className="home-cdn__dot" data-row={41} data-col={6} />
                <div className="home-cdn__dot" data-row={41} data-col={7} />
                <div className="home-cdn__dot" data-row={41} data-col={8} />
                <div className="home-cdn__dot" data-row={41} data-col={9} />
                <div className="home-cdn__dot" data-row={41} data-col={10} />
                <div className="home-cdn__dot" data-row={41} data-col={11} />
                <div className="home-cdn__dot" data-row={41} data-col={12} />
                <div className="home-cdn__dot" data-row={41} data-col={13} />
                <div className="home-cdn__dot" data-row={41} data-col={14} />
                <div className="home-cdn__dot" data-row={41} data-col={15} />
                <div className="home-cdn__dot" data-row={41} data-col={16} />
                <div className="home-cdn__dot" data-row={41} data-col={17} />
                <div className="home-cdn__dot" data-row={41} data-col={18} />
                <div className="home-cdn__dot" data-row={41} data-col={19} />
                <div className="home-cdn__dot" data-row={41} data-col={20} />
                <div className="home-cdn__dot" data-row={41} data-col={21} />
                <div className="home-cdn__dot" data-row={41} data-col={22} />
                <div className="home-cdn__dot" data-row={41} data-col={23} />
                <div className="home-cdn__dot" data-row={41} data-col={24} />
                <div className="home-cdn__dot" data-row={41} data-col={25} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={37} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={38} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={39} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={41} data-col={40} />
                <div className="home-cdn__dot" data-row={41} data-col={41} />
                <div className="home-cdn__dot" data-row={41} data-col={42} />
                <div className="home-cdn__dot" data-row={41} data-col={43} />
                <div className="home-cdn__dot" data-row={41} data-col={44} />
                <div className="home-cdn__dot" data-row={41} data-col={45} />
                <div className="home-cdn__dot" data-row={41} data-col={46} />
                <div className="home-cdn__dot" data-row={41} data-col={47} />
                <div className="home-cdn__dot" data-row={41} data-col={48} />
                <div className="home-cdn__dot" data-row={41} data-col={49} />
                <div className="home-cdn__dot" data-row={41} data-col={50} />
                <div className="home-cdn__dot" data-row={41} data-col={51} />
                <div className="home-cdn__dot" data-row={41} data-col={52} />
                <div className="home-cdn__dot" data-row={41} data-col={53} />
                <div className="home-cdn__dot" data-row={41} data-col={54} />
                <div className="home-cdn__dot" data-row={41} data-col={55} />
                <div className="home-cdn__dot" data-row={41} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={41} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={41} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={41} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={41} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={41} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={41} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={41} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={41} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={41} data-col={65} />
                <div className="home-cdn__dot" data-row={41} data-col={66} />
                <div className="home-cdn__dot" data-row={41} data-col={67} />
                <div className="home-cdn__dot" data-row={41} data-col={68} />
                <div className="home-cdn__dot" data-row={41} data-col={69} />
                <div className="home-cdn__dot" data-row={41} data-col={70} />
                <div className="home-cdn__dot" data-row={41} data-col={71} />
                <div className="home-cdn__dot" data-row={41} data-col={72} />
                <div className="home-cdn__dot" data-row={41} data-col={73} />
                <div className="home-cdn__dot" data-row={41} data-col={74} />
                <div className="home-cdn__dot" data-row={41} data-col={75} />
                <div className="home-cdn__dot" data-row={41} data-col={76} />
                <div className="home-cdn__dot" data-row={41} data-col={77} />
                <div className="home-cdn__dot" data-row={41} data-col={78} />
                <div className="home-cdn__dot" data-row={41} data-col={79} />
                <div className="home-cdn__dot" data-row={41} data-col={80} />
                <div className="home-cdn__dot" data-row={41} data-col={81} />
                <div className="home-cdn__dot" data-row={41} data-col={82} />
                <div className="home-cdn__dot" data-row={41} data-col={83} />
                <div className="home-cdn__dot" data-row={41} data-col={84} />
                <div className="home-cdn__dot" data-row={41} data-col={85} />
                <div className="home-cdn__dot" data-row={41} data-col={86} />
                <div className="home-cdn__dot" data-row={41} data-col={87} />
                <div className="home-cdn__dot" data-row={41} data-col={88} data-continent="asia" />
                <div className="home-cdn__dot" data-row={41} data-col={89} data-continent="asia" />
                <div className="home-cdn__dot" data-row={41} data-col={90} data-continent="asia" />
                <div className="home-cdn__dot" data-row={41} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={41} data-col={92} data-continent="asia" />
                <div className="home-cdn__dot" data-row={41} data-col={93} data-continent="asia" />
                <div className="home-cdn__dot" data-row={41} data-col={94} />
                <div className="home-cdn__dot" data-row={41} data-col={95} />
                <div className="home-cdn__dot" data-row={41} data-col={96} />
                <div className="home-cdn__dot" data-row={41} data-col={97} />
                <div className="home-cdn__dot" data-row={41} data-col={98} />
                <div className="home-cdn__dot" data-row={41} data-col={99} />
                <div className="home-cdn__dot" data-row={41} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={41} data-col={101} data-continent="australia" />
                <div className="home-cdn__dot" data-row={41} data-col={102} />
                <div className="home-cdn__dot" data-row={41} data-col={103} />
                <div className="home-cdn__dot" data-row={41} data-col={104} />
                <div className="home-cdn__dot" data-row={41} data-col={105} />
                <div className="home-cdn__dot" data-row={41} data-col={106} />
                <div className="home-cdn__dot" data-row={41} data-col={107} />
                <div className="home-cdn__dot" data-row={41} data-col={108} />
                <div className="home-cdn__dot" data-row={41} data-col={109} />
                <div className="home-cdn__dot" data-row={41} data-col={110} />
                <div className="home-cdn__dot" data-row={41} data-col={111} />
                <div className="home-cdn__dot" data-row={41} data-col={112} />
                <div className="home-cdn__dot" data-row={41} data-col={113} />
                <div className="home-cdn__dot" data-row={41} data-col={114} />
                <div className="home-cdn__dot" data-row={42} data-col={1} />
                <div className="home-cdn__dot" data-row={42} data-col={2} />
                <div className="home-cdn__dot" data-row={42} data-col={3} />
                <div className="home-cdn__dot" data-row={42} data-col={4} />
                <div className="home-cdn__dot" data-row={42} data-col={5} />
                <div className="home-cdn__dot" data-row={42} data-col={6} />
                <div className="home-cdn__dot" data-row={42} data-col={7} />
                <div className="home-cdn__dot" data-row={42} data-col={8} />
                <div className="home-cdn__dot" data-row={42} data-col={9} />
                <div className="home-cdn__dot" data-row={42} data-col={10} />
                <div className="home-cdn__dot" data-row={42} data-col={11} />
                <div className="home-cdn__dot" data-row={42} data-col={12} />
                <div className="home-cdn__dot" data-row={42} data-col={13} />
                <div className="home-cdn__dot" data-row={42} data-col={14} />
                <div className="home-cdn__dot" data-row={42} data-col={15} />
                <div className="home-cdn__dot" data-row={42} data-col={16} />
                <div className="home-cdn__dot" data-row={42} data-col={17} />
                <div className="home-cdn__dot" data-row={42} data-col={18} />
                <div className="home-cdn__dot" data-row={42} data-col={19} />
                <div className="home-cdn__dot" data-row={42} data-col={20} />
                <div className="home-cdn__dot" data-row={42} data-col={21} />
                <div className="home-cdn__dot" data-row={42} data-col={22} />
                <div className="home-cdn__dot" data-row={42} data-col={23} />
                <div className="home-cdn__dot" data-row={42} data-col={24} />
                <div className="home-cdn__dot" data-row={42} data-col={25} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={37} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={38} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={42} data-col={39} />
                <div className="home-cdn__dot" data-row={42} data-col={40} />
                <div className="home-cdn__dot" data-row={42} data-col={41} />
                <div className="home-cdn__dot" data-row={42} data-col={42} />
                <div className="home-cdn__dot" data-row={42} data-col={43} />
                <div className="home-cdn__dot" data-row={42} data-col={44} />
                <div className="home-cdn__dot" data-row={42} data-col={45} />
                <div className="home-cdn__dot" data-row={42} data-col={46} />
                <div className="home-cdn__dot" data-row={42} data-col={47} />
                <div className="home-cdn__dot" data-row={42} data-col={48} />
                <div className="home-cdn__dot" data-row={42} data-col={49} />
                <div className="home-cdn__dot" data-row={42} data-col={50} />
                <div className="home-cdn__dot" data-row={42} data-col={51} />
                <div className="home-cdn__dot" data-row={42} data-col={52} />
                <div className="home-cdn__dot" data-row={42} data-col={53} />
                <div className="home-cdn__dot" data-row={42} data-col={54} />
                <div className="home-cdn__dot" data-row={42} data-col={55} />
                <div className="home-cdn__dot" data-row={42} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={65} />
                <div className="home-cdn__dot" data-row={42} data-col={66} />
                <div className="home-cdn__dot" data-row={42} data-col={67} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={68} data-continent="africa" />
                <div className="home-cdn__dot" data-row={42} data-col={69} />
                <div className="home-cdn__dot" data-row={42} data-col={70} />
                <div className="home-cdn__dot" data-row={42} data-col={71} />
                <div className="home-cdn__dot" data-row={42} data-col={72} />
                <div className="home-cdn__dot" data-row={42} data-col={73} />
                <div className="home-cdn__dot" data-row={42} data-col={74} />
                <div className="home-cdn__dot" data-row={42} data-col={75} />
                <div className="home-cdn__dot" data-row={42} data-col={76} />
                <div className="home-cdn__dot" data-row={42} data-col={77} />
                <div className="home-cdn__dot" data-row={42} data-col={78} />
                <div className="home-cdn__dot" data-row={42} data-col={79} />
                <div className="home-cdn__dot" data-row={42} data-col={80} />
                <div className="home-cdn__dot" data-row={42} data-col={81} />
                <div className="home-cdn__dot" data-row={42} data-col={82} />
                <div className="home-cdn__dot" data-row={42} data-col={83} />
                <div className="home-cdn__dot" data-row={42} data-col={84} />
                <div className="home-cdn__dot" data-row={42} data-col={85} />
                <div className="home-cdn__dot" data-row={42} data-col={86} />
                <div className="home-cdn__dot" data-row={42} data-col={87} />
                <div className="home-cdn__dot" data-row={42} data-col={88} />
                <div className="home-cdn__dot" data-row={42} data-col={89} />
                <div className="home-cdn__dot" data-row={42} data-col={90} />
                <div className="home-cdn__dot" data-row={42} data-col={91} data-continent="asia" />
                <div className="home-cdn__dot" data-row={42} data-col={92} />
                <div className="home-cdn__dot" data-row={42} data-col={93} />
                <div className="home-cdn__dot" data-row={42} data-col={94} />
                <div className="home-cdn__dot" data-row={42} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={42} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={42} data-col={97} />
                <div className="home-cdn__dot" data-row={42} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={42} data-col={99} />
                <div className="home-cdn__dot" data-row={42} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={42} data-col={101} data-continent="australia" />
                <div className="home-cdn__dot" data-row={42} data-col={102} />
                <div className="home-cdn__dot" data-row={42} data-col={103} />
                <div className="home-cdn__dot" data-row={42} data-col={104} />
                <div className="home-cdn__dot" data-row={42} data-col={105} />
                <div className="home-cdn__dot" data-row={42} data-col={106} />
                <div className="home-cdn__dot" data-row={42} data-col={107} />
                <div className="home-cdn__dot" data-row={42} data-col={108} />
                <div className="home-cdn__dot" data-row={42} data-col={109} />
                <div className="home-cdn__dot" data-row={42} data-col={110} />
                <div className="home-cdn__dot" data-row={42} data-col={111} />
                <div className="home-cdn__dot" data-row={42} data-col={112} />
                <div className="home-cdn__dot" data-row={42} data-col={113} />
                <div className="home-cdn__dot" data-row={42} data-col={114} />
                <div className="home-cdn__dot" data-row={43} data-col={1} />
                <div className="home-cdn__dot" data-row={43} data-col={2} />
                <div className="home-cdn__dot" data-row={43} data-col={3} />
                <div className="home-cdn__dot" data-row={43} data-col={4} />
                <div className="home-cdn__dot" data-row={43} data-col={5} />
                <div className="home-cdn__dot" data-row={43} data-col={6} />
                <div className="home-cdn__dot" data-row={43} data-col={7} />
                <div className="home-cdn__dot" data-row={43} data-col={8} />
                <div className="home-cdn__dot" data-row={43} data-col={9} />
                <div className="home-cdn__dot" data-row={43} data-col={10} />
                <div className="home-cdn__dot" data-row={43} data-col={11} />
                <div className="home-cdn__dot" data-row={43} data-col={12} />
                <div className="home-cdn__dot" data-row={43} data-col={13} />
                <div className="home-cdn__dot" data-row={43} data-col={14} />
                <div className="home-cdn__dot" data-row={43} data-col={15} />
                <div className="home-cdn__dot" data-row={43} data-col={16} />
                <div className="home-cdn__dot" data-row={43} data-col={17} />
                <div className="home-cdn__dot" data-row={43} data-col={18} />
                <div className="home-cdn__dot" data-row={43} data-col={19} />
                <div className="home-cdn__dot" data-row={43} data-col={20} />
                <div className="home-cdn__dot" data-row={43} data-col={21} />
                <div className="home-cdn__dot" data-row={43} data-col={22} />
                <div className="home-cdn__dot" data-row={43} data-col={23} />
                <div className="home-cdn__dot" data-row={43} data-col={24} />
                <div className="home-cdn__dot" data-row={43} data-col={25} />
                <div className="home-cdn__dot" data-row={43} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={37} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={38} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={43} data-col={39} />
                <div className="home-cdn__dot" data-row={43} data-col={40} />
                <div className="home-cdn__dot" data-row={43} data-col={41} />
                <div className="home-cdn__dot" data-row={43} data-col={42} />
                <div className="home-cdn__dot" data-row={43} data-col={43} />
                <div className="home-cdn__dot" data-row={43} data-col={44} />
                <div className="home-cdn__dot" data-row={43} data-col={45} />
                <div className="home-cdn__dot" data-row={43} data-col={46} />
                <div className="home-cdn__dot" data-row={43} data-col={47} />
                <div className="home-cdn__dot" data-row={43} data-col={48} />
                <div className="home-cdn__dot" data-row={43} data-col={49} />
                <div className="home-cdn__dot" data-row={43} data-col={50} />
                <div className="home-cdn__dot" data-row={43} data-col={51} />
                <div className="home-cdn__dot" data-row={43} data-col={52} />
                <div className="home-cdn__dot" data-row={43} data-col={53} />
                <div className="home-cdn__dot" data-row={43} data-col={54} />
                <div className="home-cdn__dot" data-row={43} data-col={55} />
                <div className="home-cdn__dot" data-row={43} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={65} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={66} />
                <div className="home-cdn__dot" data-row={43} data-col={67} />
                <div className="home-cdn__dot" data-row={43} data-col={68} data-continent="africa" />
                <div className="home-cdn__dot" data-row={43} data-col={69} />
                <div className="home-cdn__dot" data-row={43} data-col={70} />
                <div className="home-cdn__dot" data-row={43} data-col={71} />
                <div className="home-cdn__dot" data-row={43} data-col={72} />
                <div className="home-cdn__dot" data-row={43} data-col={73} />
                <div className="home-cdn__dot" data-row={43} data-col={74} />
                <div className="home-cdn__dot" data-row={43} data-col={75} />
                <div className="home-cdn__dot" data-row={43} data-col={76} />
                <div className="home-cdn__dot" data-row={43} data-col={77} />
                <div className="home-cdn__dot" data-row={43} data-col={78} />
                <div className="home-cdn__dot" data-row={43} data-col={79} />
                <div className="home-cdn__dot" data-row={43} data-col={80} />
                <div className="home-cdn__dot" data-row={43} data-col={81} />
                <div className="home-cdn__dot" data-row={43} data-col={82} />
                <div className="home-cdn__dot" data-row={43} data-col={83} />
                <div className="home-cdn__dot" data-row={43} data-col={84} />
                <div className="home-cdn__dot" data-row={43} data-col={85} />
                <div className="home-cdn__dot" data-row={43} data-col={86} />
                <div className="home-cdn__dot" data-row={43} data-col={87} />
                <div className="home-cdn__dot" data-row={43} data-col={88} />
                <div className="home-cdn__dot" data-row={43} data-col={89} />
                <div className="home-cdn__dot" data-row={43} data-col={90} />
                <div className="home-cdn__dot" data-row={43} data-col={91} />
                <div className="home-cdn__dot" data-row={43} data-col={92} />
                <div className="home-cdn__dot" data-row={43} data-col={93} data-continent="australia" />
                <div className="home-cdn__dot" data-row={43} data-col={94} data-continent="australia" />
                <div className="home-cdn__dot" data-row={43} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={43} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={43} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={43} data-col={98} />
                <div className="home-cdn__dot" data-row={43} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={43} data-col={100} />
                <div className="home-cdn__dot" data-row={43} data-col={101} />
                <div className="home-cdn__dot" data-row={43} data-col={102} />
                <div className="home-cdn__dot" data-row={43} data-col={103} />
                <div className="home-cdn__dot" data-row={43} data-col={104} />
                <div className="home-cdn__dot" data-row={43} data-col={105} />
                <div className="home-cdn__dot" data-row={43} data-col={106} />
                <div className="home-cdn__dot" data-row={43} data-col={107} />
                <div className="home-cdn__dot" data-row={43} data-col={108} />
                <div className="home-cdn__dot" data-row={43} data-col={109} />
                <div className="home-cdn__dot" data-row={43} data-col={110} />
                <div className="home-cdn__dot" data-row={43} data-col={111} />
                <div className="home-cdn__dot" data-row={43} data-col={112} />
                <div className="home-cdn__dot" data-row={43} data-col={113} />
                <div className="home-cdn__dot" data-row={43} data-col={114} />
                <div className="home-cdn__dot" data-row={44} data-col={1} />
                <div className="home-cdn__dot" data-row={44} data-col={2} />
                <div className="home-cdn__dot" data-row={44} data-col={3} />
                <div className="home-cdn__dot" data-row={44} data-col={4} />
                <div className="home-cdn__dot" data-row={44} data-col={5} />
                <div className="home-cdn__dot" data-row={44} data-col={6} />
                <div className="home-cdn__dot" data-row={44} data-col={7} />
                <div className="home-cdn__dot" data-row={44} data-col={8} />
                <div className="home-cdn__dot" data-row={44} data-col={9} />
                <div className="home-cdn__dot" data-row={44} data-col={10} />
                <div className="home-cdn__dot" data-row={44} data-col={11} />
                <div className="home-cdn__dot" data-row={44} data-col={12} />
                <div className="home-cdn__dot" data-row={44} data-col={13} />
                <div className="home-cdn__dot" data-row={44} data-col={14} />
                <div className="home-cdn__dot" data-row={44} data-col={15} />
                <div className="home-cdn__dot" data-row={44} data-col={16} />
                <div className="home-cdn__dot" data-row={44} data-col={17} />
                <div className="home-cdn__dot" data-row={44} data-col={18} />
                <div className="home-cdn__dot" data-row={44} data-col={19} />
                <div className="home-cdn__dot" data-row={44} data-col={20} />
                <div className="home-cdn__dot" data-row={44} data-col={21} />
                <div className="home-cdn__dot" data-row={44} data-col={22} />
                <div className="home-cdn__dot" data-row={44} data-col={23} />
                <div className="home-cdn__dot" data-row={44} data-col={24} />
                <div className="home-cdn__dot" data-row={44} data-col={25} />
                <div className="home-cdn__dot" data-row={44} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={44} data-col={34} data-continent="south-america" data-indicator="arvan"><div className="home-cdn__tooltip">برزیلیا</div></div>
                <div className="home-cdn__dot" data-row={44} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={37} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={44} data-col={38} />
                <div className="home-cdn__dot" data-row={44} data-col={39} />
                <div className="home-cdn__dot" data-row={44} data-col={40} />
                <div className="home-cdn__dot" data-row={44} data-col={41} />
                <div className="home-cdn__dot" data-row={44} data-col={42} />
                <div className="home-cdn__dot" data-row={44} data-col={43} />
                <div className="home-cdn__dot" data-row={44} data-col={44} />
                <div className="home-cdn__dot" data-row={44} data-col={45} />
                <div className="home-cdn__dot" data-row={44} data-col={46} />
                <div className="home-cdn__dot" data-row={44} data-col={47} />
                <div className="home-cdn__dot" data-row={44} data-col={48} />
                <div className="home-cdn__dot" data-row={44} data-col={49} />
                <div className="home-cdn__dot" data-row={44} data-col={50} />
                <div className="home-cdn__dot" data-row={44} data-col={51} />
                <div className="home-cdn__dot" data-row={44} data-col={52} />
                <div className="home-cdn__dot" data-row={44} data-col={53} />
                <div className="home-cdn__dot" data-row={44} data-col={54} />
                <div className="home-cdn__dot" data-row={44} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={65} />
                <div className="home-cdn__dot" data-row={44} data-col={66} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={67} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={68} data-continent="africa" />
                <div className="home-cdn__dot" data-row={44} data-col={69} />
                <div className="home-cdn__dot" data-row={44} data-col={70} />
                <div className="home-cdn__dot" data-row={44} data-col={71} />
                <div className="home-cdn__dot" data-row={44} data-col={72} />
                <div className="home-cdn__dot" data-row={44} data-col={73} />
                <div className="home-cdn__dot" data-row={44} data-col={74} />
                <div className="home-cdn__dot" data-row={44} data-col={75} />
                <div className="home-cdn__dot" data-row={44} data-col={76} />
                <div className="home-cdn__dot" data-row={44} data-col={77} />
                <div className="home-cdn__dot" data-row={44} data-col={78} />
                <div className="home-cdn__dot" data-row={44} data-col={79} />
                <div className="home-cdn__dot" data-row={44} data-col={80} />
                <div className="home-cdn__dot" data-row={44} data-col={81} />
                <div className="home-cdn__dot" data-row={44} data-col={82} />
                <div className="home-cdn__dot" data-row={44} data-col={83} />
                <div className="home-cdn__dot" data-row={44} data-col={84} />
                <div className="home-cdn__dot" data-row={44} data-col={85} />
                <div className="home-cdn__dot" data-row={44} data-col={86} />
                <div className="home-cdn__dot" data-row={44} data-col={87} />
                <div className="home-cdn__dot" data-row={44} data-col={88} />
                <div className="home-cdn__dot" data-row={44} data-col={89} />
                <div className="home-cdn__dot" data-row={44} data-col={90} />
                <div className="home-cdn__dot" data-row={44} data-col={91} />
                <div className="home-cdn__dot" data-row={44} data-col={92} data-continent="australia" />
                <div className="home-cdn__dot" data-row={44} data-col={93} data-continent="australia" />
                <div className="home-cdn__dot" data-row={44} data-col={94} data-continent="australia" />
                <div className="home-cdn__dot" data-row={44} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={44} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={44} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={44} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={44} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={44} data-col={100} />
                <div className="home-cdn__dot" data-row={44} data-col={101} />
                <div className="home-cdn__dot" data-row={44} data-col={102} />
                <div className="home-cdn__dot" data-row={44} data-col={103} />
                <div className="home-cdn__dot" data-row={44} data-col={104} />
                <div className="home-cdn__dot" data-row={44} data-col={105} />
                <div className="home-cdn__dot" data-row={44} data-col={106} />
                <div className="home-cdn__dot" data-row={44} data-col={107} />
                <div className="home-cdn__dot" data-row={44} data-col={108} />
                <div className="home-cdn__dot" data-row={44} data-col={109} />
                <div className="home-cdn__dot" data-row={44} data-col={110} />
                <div className="home-cdn__dot" data-row={44} data-col={111} />
                <div className="home-cdn__dot" data-row={44} data-col={112} />
                <div className="home-cdn__dot" data-row={44} data-col={113} />
                <div className="home-cdn__dot" data-row={44} data-col={114} />
                <div className="home-cdn__dot" data-row={45} data-col={1} />
                <div className="home-cdn__dot" data-row={45} data-col={2} />
                <div className="home-cdn__dot" data-row={45} data-col={3} />
                <div className="home-cdn__dot" data-row={45} data-col={4} />
                <div className="home-cdn__dot" data-row={45} data-col={5} />
                <div className="home-cdn__dot" data-row={45} data-col={6} />
                <div className="home-cdn__dot" data-row={45} data-col={7} />
                <div className="home-cdn__dot" data-row={45} data-col={8} />
                <div className="home-cdn__dot" data-row={45} data-col={9} />
                <div className="home-cdn__dot" data-row={45} data-col={10} />
                <div className="home-cdn__dot" data-row={45} data-col={11} />
                <div className="home-cdn__dot" data-row={45} data-col={12} />
                <div className="home-cdn__dot" data-row={45} data-col={13} />
                <div className="home-cdn__dot" data-row={45} data-col={14} />
                <div className="home-cdn__dot" data-row={45} data-col={15} />
                <div className="home-cdn__dot" data-row={45} data-col={16} />
                <div className="home-cdn__dot" data-row={45} data-col={17} />
                <div className="home-cdn__dot" data-row={45} data-col={18} />
                <div className="home-cdn__dot" data-row={45} data-col={19} />
                <div className="home-cdn__dot" data-row={45} data-col={20} />
                <div className="home-cdn__dot" data-row={45} data-col={21} />
                <div className="home-cdn__dot" data-row={45} data-col={22} />
                <div className="home-cdn__dot" data-row={45} data-col={23} />
                <div className="home-cdn__dot" data-row={45} data-col={24} />
                <div className="home-cdn__dot" data-row={45} data-col={25} />
                <div className="home-cdn__dot" data-row={45} data-col={26} />
                <div className="home-cdn__dot" data-row={45} data-col={27} />
                <div className="home-cdn__dot" data-row={45} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={37} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={38} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={45} data-col={39} />
                <div className="home-cdn__dot" data-row={45} data-col={40} />
                <div className="home-cdn__dot" data-row={45} data-col={41} />
                <div className="home-cdn__dot" data-row={45} data-col={42} />
                <div className="home-cdn__dot" data-row={45} data-col={43} />
                <div className="home-cdn__dot" data-row={45} data-col={44} />
                <div className="home-cdn__dot" data-row={45} data-col={45} />
                <div className="home-cdn__dot" data-row={45} data-col={46} />
                <div className="home-cdn__dot" data-row={45} data-col={47} />
                <div className="home-cdn__dot" data-row={45} data-col={48} />
                <div className="home-cdn__dot" data-row={45} data-col={49} />
                <div className="home-cdn__dot" data-row={45} data-col={50} />
                <div className="home-cdn__dot" data-row={45} data-col={51} />
                <div className="home-cdn__dot" data-row={45} data-col={52} />
                <div className="home-cdn__dot" data-row={45} data-col={53} />
                <div className="home-cdn__dot" data-row={45} data-col={54} />
                <div className="home-cdn__dot" data-row={45} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={64} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={65} />
                <div className="home-cdn__dot" data-row={45} data-col={66} />
                <div className="home-cdn__dot" data-row={45} data-col={67} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={68} data-continent="africa" />
                <div className="home-cdn__dot" data-row={45} data-col={69} />
                <div className="home-cdn__dot" data-row={45} data-col={70} />
                <div className="home-cdn__dot" data-row={45} data-col={71} />
                <div className="home-cdn__dot" data-row={45} data-col={72} />
                <div className="home-cdn__dot" data-row={45} data-col={73} />
                <div className="home-cdn__dot" data-row={45} data-col={74} />
                <div className="home-cdn__dot" data-row={45} data-col={75} />
                <div className="home-cdn__dot" data-row={45} data-col={76} />
                <div className="home-cdn__dot" data-row={45} data-col={77} />
                <div className="home-cdn__dot" data-row={45} data-col={78} />
                <div className="home-cdn__dot" data-row={45} data-col={79} />
                <div className="home-cdn__dot" data-row={45} data-col={80} />
                <div className="home-cdn__dot" data-row={45} data-col={81} />
                <div className="home-cdn__dot" data-row={45} data-col={82} />
                <div className="home-cdn__dot" data-row={45} data-col={83} />
                <div className="home-cdn__dot" data-row={45} data-col={84} />
                <div className="home-cdn__dot" data-row={45} data-col={85} />
                <div className="home-cdn__dot" data-row={45} data-col={86} />
                <div className="home-cdn__dot" data-row={45} data-col={87} />
                <div className="home-cdn__dot" data-row={45} data-col={88} />
                <div className="home-cdn__dot" data-row={45} data-col={89} />
                <div className="home-cdn__dot" data-row={45} data-col={90} />
                <div className="home-cdn__dot" data-row={45} data-col={91} />
                <div className="home-cdn__dot" data-row={45} data-col={92} data-continent="australia" />
                <div className="home-cdn__dot" data-row={45} data-col={93} data-continent="australia" />
                <div className="home-cdn__dot" data-row={45} data-col={94} data-continent="australia" />
                <div className="home-cdn__dot" data-row={45} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={45} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={45} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={45} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={45} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={45} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={45} data-col={101} />
                <div className="home-cdn__dot" data-row={45} data-col={102} />
                <div className="home-cdn__dot" data-row={45} data-col={103} />
                <div className="home-cdn__dot" data-row={45} data-col={104} />
                <div className="home-cdn__dot" data-row={45} data-col={105} />
                <div className="home-cdn__dot" data-row={45} data-col={106} />
                <div className="home-cdn__dot" data-row={45} data-col={107} />
                <div className="home-cdn__dot" data-row={45} data-col={108} />
                <div className="home-cdn__dot" data-row={45} data-col={109} />
                <div className="home-cdn__dot" data-row={45} data-col={110} />
                <div className="home-cdn__dot" data-row={45} data-col={111} />
                <div className="home-cdn__dot" data-row={45} data-col={112} />
                <div className="home-cdn__dot" data-row={45} data-col={113} />
                <div className="home-cdn__dot" data-row={45} data-col={114} />
                <div className="home-cdn__dot" data-row={46} data-col={1} />
                <div className="home-cdn__dot" data-row={46} data-col={2} />
                <div className="home-cdn__dot" data-row={46} data-col={3} />
                <div className="home-cdn__dot" data-row={46} data-col={4} />
                <div className="home-cdn__dot" data-row={46} data-col={5} />
                <div className="home-cdn__dot" data-row={46} data-col={6} />
                <div className="home-cdn__dot" data-row={46} data-col={7} />
                <div className="home-cdn__dot" data-row={46} data-col={8} />
                <div className="home-cdn__dot" data-row={46} data-col={9} />
                <div className="home-cdn__dot" data-row={46} data-col={10} />
                <div className="home-cdn__dot" data-row={46} data-col={11} />
                <div className="home-cdn__dot" data-row={46} data-col={12} />
                <div className="home-cdn__dot" data-row={46} data-col={13} />
                <div className="home-cdn__dot" data-row={46} data-col={14} />
                <div className="home-cdn__dot" data-row={46} data-col={15} />
                <div className="home-cdn__dot" data-row={46} data-col={16} />
                <div className="home-cdn__dot" data-row={46} data-col={17} />
                <div className="home-cdn__dot" data-row={46} data-col={18} />
                <div className="home-cdn__dot" data-row={46} data-col={19} />
                <div className="home-cdn__dot" data-row={46} data-col={20} />
                <div className="home-cdn__dot" data-row={46} data-col={21} />
                <div className="home-cdn__dot" data-row={46} data-col={22} />
                <div className="home-cdn__dot" data-row={46} data-col={23} />
                <div className="home-cdn__dot" data-row={46} data-col={24} />
                <div className="home-cdn__dot" data-row={46} data-col={25} />
                <div className="home-cdn__dot" data-row={46} data-col={26} />
                <div className="home-cdn__dot" data-row={46} data-col={27} />
                <div className="home-cdn__dot" data-row={46} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={37} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={46} data-col={38} />
                <div className="home-cdn__dot" data-row={46} data-col={39} />
                <div className="home-cdn__dot" data-row={46} data-col={40} />
                <div className="home-cdn__dot" data-row={46} data-col={41} />
                <div className="home-cdn__dot" data-row={46} data-col={42} />
                <div className="home-cdn__dot" data-row={46} data-col={43} />
                <div className="home-cdn__dot" data-row={46} data-col={44} />
                <div className="home-cdn__dot" data-row={46} data-col={45} />
                <div className="home-cdn__dot" data-row={46} data-col={46} />
                <div className="home-cdn__dot" data-row={46} data-col={47} />
                <div className="home-cdn__dot" data-row={46} data-col={48} />
                <div className="home-cdn__dot" data-row={46} data-col={49} />
                <div className="home-cdn__dot" data-row={46} data-col={50} />
                <div className="home-cdn__dot" data-row={46} data-col={51} />
                <div className="home-cdn__dot" data-row={46} data-col={52} />
                <div className="home-cdn__dot" data-row={46} data-col={53} />
                <div className="home-cdn__dot" data-row={46} data-col={54} />
                <div className="home-cdn__dot" data-row={46} data-col={55} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={64} />
                <div className="home-cdn__dot" data-row={46} data-col={65} />
                <div className="home-cdn__dot" data-row={46} data-col={66} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={67} data-continent="africa" />
                <div className="home-cdn__dot" data-row={46} data-col={68} />
                <div className="home-cdn__dot" data-row={46} data-col={69} />
                <div className="home-cdn__dot" data-row={46} data-col={70} />
                <div className="home-cdn__dot" data-row={46} data-col={71} />
                <div className="home-cdn__dot" data-row={46} data-col={72} />
                <div className="home-cdn__dot" data-row={46} data-col={73} />
                <div className="home-cdn__dot" data-row={46} data-col={74} />
                <div className="home-cdn__dot" data-row={46} data-col={75} />
                <div className="home-cdn__dot" data-row={46} data-col={76} />
                <div className="home-cdn__dot" data-row={46} data-col={77} />
                <div className="home-cdn__dot" data-row={46} data-col={78} />
                <div className="home-cdn__dot" data-row={46} data-col={79} />
                <div className="home-cdn__dot" data-row={46} data-col={80} />
                <div className="home-cdn__dot" data-row={46} data-col={81} />
                <div className="home-cdn__dot" data-row={46} data-col={82} />
                <div className="home-cdn__dot" data-row={46} data-col={83} />
                <div className="home-cdn__dot" data-row={46} data-col={84} />
                <div className="home-cdn__dot" data-row={46} data-col={85} />
                <div className="home-cdn__dot" data-row={46} data-col={86} />
                <div className="home-cdn__dot" data-row={46} data-col={87} />
                <div className="home-cdn__dot" data-row={46} data-col={88} />
                <div className="home-cdn__dot" data-row={46} data-col={89} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={90} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={91} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={92} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={93} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={94} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={46} data-col={101} />
                <div className="home-cdn__dot" data-row={46} data-col={102} />
                <div className="home-cdn__dot" data-row={46} data-col={103} />
                <div className="home-cdn__dot" data-row={46} data-col={104} />
                <div className="home-cdn__dot" data-row={46} data-col={105} />
                <div className="home-cdn__dot" data-row={46} data-col={106} />
                <div className="home-cdn__dot" data-row={46} data-col={107} />
                <div className="home-cdn__dot" data-row={46} data-col={108} />
                <div className="home-cdn__dot" data-row={46} data-col={109} />
                <div className="home-cdn__dot" data-row={46} data-col={110} />
                <div className="home-cdn__dot" data-row={46} data-col={111} />
                <div className="home-cdn__dot" data-row={46} data-col={112} />
                <div className="home-cdn__dot" data-row={46} data-col={113} />
                <div className="home-cdn__dot" data-row={46} data-col={114} />
                <div className="home-cdn__dot" data-row={47} data-col={1} />
                <div className="home-cdn__dot" data-row={47} data-col={2} />
                <div className="home-cdn__dot" data-row={47} data-col={3} />
                <div className="home-cdn__dot" data-row={47} data-col={4} />
                <div className="home-cdn__dot" data-row={47} data-col={5} />
                <div className="home-cdn__dot" data-row={47} data-col={6} />
                <div className="home-cdn__dot" data-row={47} data-col={7} />
                <div className="home-cdn__dot" data-row={47} data-col={8} />
                <div className="home-cdn__dot" data-row={47} data-col={9} />
                <div className="home-cdn__dot" data-row={47} data-col={10} />
                <div className="home-cdn__dot" data-row={47} data-col={11} />
                <div className="home-cdn__dot" data-row={47} data-col={12} />
                <div className="home-cdn__dot" data-row={47} data-col={13} />
                <div className="home-cdn__dot" data-row={47} data-col={14} />
                <div className="home-cdn__dot" data-row={47} data-col={15} />
                <div className="home-cdn__dot" data-row={47} data-col={16} />
                <div className="home-cdn__dot" data-row={47} data-col={17} />
                <div className="home-cdn__dot" data-row={47} data-col={18} />
                <div className="home-cdn__dot" data-row={47} data-col={19} />
                <div className="home-cdn__dot" data-row={47} data-col={20} />
                <div className="home-cdn__dot" data-row={47} data-col={21} />
                <div className="home-cdn__dot" data-row={47} data-col={22} />
                <div className="home-cdn__dot" data-row={47} data-col={23} />
                <div className="home-cdn__dot" data-row={47} data-col={24} />
                <div className="home-cdn__dot" data-row={47} data-col={25} />
                <div className="home-cdn__dot" data-row={47} data-col={26} />
                <div className="home-cdn__dot" data-row={47} data-col={27} />
                <div className="home-cdn__dot" data-row={47} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={37} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={47} data-col={38} />
                <div className="home-cdn__dot" data-row={47} data-col={39} />
                <div className="home-cdn__dot" data-row={47} data-col={40} />
                <div className="home-cdn__dot" data-row={47} data-col={41} />
                <div className="home-cdn__dot" data-row={47} data-col={42} />
                <div className="home-cdn__dot" data-row={47} data-col={43} />
                <div className="home-cdn__dot" data-row={47} data-col={44} />
                <div className="home-cdn__dot" data-row={47} data-col={45} />
                <div className="home-cdn__dot" data-row={47} data-col={46} />
                <div className="home-cdn__dot" data-row={47} data-col={47} />
                <div className="home-cdn__dot" data-row={47} data-col={48} />
                <div className="home-cdn__dot" data-row={47} data-col={49} />
                <div className="home-cdn__dot" data-row={47} data-col={50} />
                <div className="home-cdn__dot" data-row={47} data-col={51} />
                <div className="home-cdn__dot" data-row={47} data-col={52} />
                <div className="home-cdn__dot" data-row={47} data-col={53} />
                <div className="home-cdn__dot" data-row={47} data-col={54} />
                <div className="home-cdn__dot" data-row={47} data-col={55} />
                <div className="home-cdn__dot" data-row={47} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={63} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={64} />
                <div className="home-cdn__dot" data-row={47} data-col={65} />
                <div className="home-cdn__dot" data-row={47} data-col={66} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={67} data-continent="africa" />
                <div className="home-cdn__dot" data-row={47} data-col={68} />
                <div className="home-cdn__dot" data-row={47} data-col={69} />
                <div className="home-cdn__dot" data-row={47} data-col={70} />
                <div className="home-cdn__dot" data-row={47} data-col={71} />
                <div className="home-cdn__dot" data-row={47} data-col={72} />
                <div className="home-cdn__dot" data-row={47} data-col={73} />
                <div className="home-cdn__dot" data-row={47} data-col={74} />
                <div className="home-cdn__dot" data-row={47} data-col={75} />
                <div className="home-cdn__dot" data-row={47} data-col={76} />
                <div className="home-cdn__dot" data-row={47} data-col={77} />
                <div className="home-cdn__dot" data-row={47} data-col={78} />
                <div className="home-cdn__dot" data-row={47} data-col={79} />
                <div className="home-cdn__dot" data-row={47} data-col={80} />
                <div className="home-cdn__dot" data-row={47} data-col={81} />
                <div className="home-cdn__dot" data-row={47} data-col={82} />
                <div className="home-cdn__dot" data-row={47} data-col={83} />
                <div className="home-cdn__dot" data-row={47} data-col={84} />
                <div className="home-cdn__dot" data-row={47} data-col={85} />
                <div className="home-cdn__dot" data-row={47} data-col={86} />
                <div className="home-cdn__dot" data-row={47} data-col={87} />
                <div className="home-cdn__dot" data-row={47} data-col={88} />
                <div className="home-cdn__dot" data-row={47} data-col={89} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={90} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={91} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={92} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={93} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={94} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={101} data-continent="australia" />
                <div className="home-cdn__dot" data-row={47} data-col={102} />
                <div className="home-cdn__dot" data-row={47} data-col={103} />
                <div className="home-cdn__dot" data-row={47} data-col={104} />
                <div className="home-cdn__dot" data-row={47} data-col={105} />
                <div className="home-cdn__dot" data-row={47} data-col={106} />
                <div className="home-cdn__dot" data-row={47} data-col={107} />
                <div className="home-cdn__dot" data-row={47} data-col={108} />
                <div className="home-cdn__dot" data-row={47} data-col={109} />
                <div className="home-cdn__dot" data-row={47} data-col={110} />
                <div className="home-cdn__dot" data-row={47} data-col={111} />
                <div className="home-cdn__dot" data-row={47} data-col={112} />
                <div className="home-cdn__dot" data-row={47} data-col={113} />
                <div className="home-cdn__dot" data-row={47} data-col={114} />
                <div className="home-cdn__dot" data-row={48} data-col={1} />
                <div className="home-cdn__dot" data-row={48} data-col={2} />
                <div className="home-cdn__dot" data-row={48} data-col={3} />
                <div className="home-cdn__dot" data-row={48} data-col={4} />
                <div className="home-cdn__dot" data-row={48} data-col={5} />
                <div className="home-cdn__dot" data-row={48} data-col={6} />
                <div className="home-cdn__dot" data-row={48} data-col={7} />
                <div className="home-cdn__dot" data-row={48} data-col={8} />
                <div className="home-cdn__dot" data-row={48} data-col={9} />
                <div className="home-cdn__dot" data-row={48} data-col={10} />
                <div className="home-cdn__dot" data-row={48} data-col={11} />
                <div className="home-cdn__dot" data-row={48} data-col={12} />
                <div className="home-cdn__dot" data-row={48} data-col={13} />
                <div className="home-cdn__dot" data-row={48} data-col={14} />
                <div className="home-cdn__dot" data-row={48} data-col={15} />
                <div className="home-cdn__dot" data-row={48} data-col={16} />
                <div className="home-cdn__dot" data-row={48} data-col={17} />
                <div className="home-cdn__dot" data-row={48} data-col={18} />
                <div className="home-cdn__dot" data-row={48} data-col={19} />
                <div className="home-cdn__dot" data-row={48} data-col={20} />
                <div className="home-cdn__dot" data-row={48} data-col={21} />
                <div className="home-cdn__dot" data-row={48} data-col={22} />
                <div className="home-cdn__dot" data-row={48} data-col={23} />
                <div className="home-cdn__dot" data-row={48} data-col={24} />
                <div className="home-cdn__dot" data-row={48} data-col={25} />
                <div className="home-cdn__dot" data-row={48} data-col={26} />
                <div className="home-cdn__dot" data-row={48} data-col={27} />
                <div className="home-cdn__dot" data-row={48} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={48} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={48} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={48} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={48} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={48} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={48} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={48} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={48} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={48} data-col={37} />
                <div className="home-cdn__dot" data-row={48} data-col={38} />
                <div className="home-cdn__dot" data-row={48} data-col={39} />
                <div className="home-cdn__dot" data-row={48} data-col={40} />
                <div className="home-cdn__dot" data-row={48} data-col={41} />
                <div className="home-cdn__dot" data-row={48} data-col={42} />
                <div className="home-cdn__dot" data-row={48} data-col={43} />
                <div className="home-cdn__dot" data-row={48} data-col={44} />
                <div className="home-cdn__dot" data-row={48} data-col={45} />
                <div className="home-cdn__dot" data-row={48} data-col={46} />
                <div className="home-cdn__dot" data-row={48} data-col={47} />
                <div className="home-cdn__dot" data-row={48} data-col={48} />
                <div className="home-cdn__dot" data-row={48} data-col={49} />
                <div className="home-cdn__dot" data-row={48} data-col={50} />
                <div className="home-cdn__dot" data-row={48} data-col={51} />
                <div className="home-cdn__dot" data-row={48} data-col={52} />
                <div className="home-cdn__dot" data-row={48} data-col={53} />
                <div className="home-cdn__dot" data-row={48} data-col={54} />
                <div className="home-cdn__dot" data-row={48} data-col={55} />
                <div className="home-cdn__dot" data-row={48} data-col={56} data-continent="africa" />
                <div className="home-cdn__dot" data-row={48} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={48} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={48} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={48} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={48} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={48} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={48} data-col={63} />
                <div className="home-cdn__dot" data-row={48} data-col={64} />
                <div className="home-cdn__dot" data-row={48} data-col={65} />
                <div className="home-cdn__dot" data-row={48} data-col={66} data-continent="africa" />
                <div className="home-cdn__dot" data-row={48} data-col={67} data-continent="africa" />
                <div className="home-cdn__dot" data-row={48} data-col={68} />
                <div className="home-cdn__dot" data-row={48} data-col={69} />
                <div className="home-cdn__dot" data-row={48} data-col={70} />
                <div className="home-cdn__dot" data-row={48} data-col={71} />
                <div className="home-cdn__dot" data-row={48} data-col={72} />
                <div className="home-cdn__dot" data-row={48} data-col={73} />
                <div className="home-cdn__dot" data-row={48} data-col={74} />
                <div className="home-cdn__dot" data-row={48} data-col={75} />
                <div className="home-cdn__dot" data-row={48} data-col={76} />
                <div className="home-cdn__dot" data-row={48} data-col={77} />
                <div className="home-cdn__dot" data-row={48} data-col={78} />
                <div className="home-cdn__dot" data-row={48} data-col={79} />
                <div className="home-cdn__dot" data-row={48} data-col={80} />
                <div className="home-cdn__dot" data-row={48} data-col={81} />
                <div className="home-cdn__dot" data-row={48} data-col={82} />
                <div className="home-cdn__dot" data-row={48} data-col={83} />
                <div className="home-cdn__dot" data-row={48} data-col={84} />
                <div className="home-cdn__dot" data-row={48} data-col={85} />
                <div className="home-cdn__dot" data-row={48} data-col={86} />
                <div className="home-cdn__dot" data-row={48} data-col={87} />
                <div className="home-cdn__dot" data-row={48} data-col={88} />
                <div className="home-cdn__dot" data-row={48} data-col={89} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={90} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={91} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={92} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={93} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={94} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={101} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={102} data-continent="australia" />
                <div className="home-cdn__dot" data-row={48} data-col={103} />
                <div className="home-cdn__dot" data-row={48} data-col={104} />
                <div className="home-cdn__dot" data-row={48} data-col={105} />
                <div className="home-cdn__dot" data-row={48} data-col={106} />
                <div className="home-cdn__dot" data-row={48} data-col={107} />
                <div className="home-cdn__dot" data-row={48} data-col={108} />
                <div className="home-cdn__dot" data-row={48} data-col={109} />
                <div className="home-cdn__dot" data-row={48} data-col={110} />
                <div className="home-cdn__dot" data-row={48} data-col={111} />
                <div className="home-cdn__dot" data-row={48} data-col={112} />
                <div className="home-cdn__dot" data-row={48} data-col={113} />
                <div className="home-cdn__dot" data-row={48} data-col={114} />
                <div className="home-cdn__dot" data-row={49} data-col={1} />
                <div className="home-cdn__dot" data-row={49} data-col={2} />
                <div className="home-cdn__dot" data-row={49} data-col={3} />
                <div className="home-cdn__dot" data-row={49} data-col={4} />
                <div className="home-cdn__dot" data-row={49} data-col={5} />
                <div className="home-cdn__dot" data-row={49} data-col={6} />
                <div className="home-cdn__dot" data-row={49} data-col={7} />
                <div className="home-cdn__dot" data-row={49} data-col={8} />
                <div className="home-cdn__dot" data-row={49} data-col={9} />
                <div className="home-cdn__dot" data-row={49} data-col={10} />
                <div className="home-cdn__dot" data-row={49} data-col={11} />
                <div className="home-cdn__dot" data-row={49} data-col={12} />
                <div className="home-cdn__dot" data-row={49} data-col={13} />
                <div className="home-cdn__dot" data-row={49} data-col={14} />
                <div className="home-cdn__dot" data-row={49} data-col={15} />
                <div className="home-cdn__dot" data-row={49} data-col={16} />
                <div className="home-cdn__dot" data-row={49} data-col={17} />
                <div className="home-cdn__dot" data-row={49} data-col={18} />
                <div className="home-cdn__dot" data-row={49} data-col={19} />
                <div className="home-cdn__dot" data-row={49} data-col={20} />
                <div className="home-cdn__dot" data-row={49} data-col={21} />
                <div className="home-cdn__dot" data-row={49} data-col={22} />
                <div className="home-cdn__dot" data-row={49} data-col={23} />
                <div className="home-cdn__dot" data-row={49} data-col={24} />
                <div className="home-cdn__dot" data-row={49} data-col={25} />
                <div className="home-cdn__dot" data-row={49} data-col={26} />
                <div className="home-cdn__dot" data-row={49} data-col={27} />
                <div className="home-cdn__dot" data-row={49} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={49} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={49} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={49} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={49} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={49} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={49} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={49} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={49} data-col={36} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={49} data-col={37} />
                <div className="home-cdn__dot" data-row={49} data-col={38} />
                <div className="home-cdn__dot" data-row={49} data-col={39} />
                <div className="home-cdn__dot" data-row={49} data-col={40} />
                <div className="home-cdn__dot" data-row={49} data-col={41} />
                <div className="home-cdn__dot" data-row={49} data-col={42} />
                <div className="home-cdn__dot" data-row={49} data-col={43} />
                <div className="home-cdn__dot" data-row={49} data-col={44} />
                <div className="home-cdn__dot" data-row={49} data-col={45} />
                <div className="home-cdn__dot" data-row={49} data-col={46} />
                <div className="home-cdn__dot" data-row={49} data-col={47} />
                <div className="home-cdn__dot" data-row={49} data-col={48} />
                <div className="home-cdn__dot" data-row={49} data-col={49} />
                <div className="home-cdn__dot" data-row={49} data-col={50} />
                <div className="home-cdn__dot" data-row={49} data-col={51} />
                <div className="home-cdn__dot" data-row={49} data-col={52} />
                <div className="home-cdn__dot" data-row={49} data-col={53} />
                <div className="home-cdn__dot" data-row={49} data-col={54} />
                <div className="home-cdn__dot" data-row={49} data-col={55} />
                <div className="home-cdn__dot" data-row={49} data-col={56} />
                <div className="home-cdn__dot" data-row={49} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={49} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={49} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={49} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={49} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={49} data-col={62} data-continent="africa" />
                <div className="home-cdn__dot" data-row={49} data-col={63} />
                <div className="home-cdn__dot" data-row={49} data-col={64} />
                <div className="home-cdn__dot" data-row={49} data-col={65} />
                <div className="home-cdn__dot" data-row={49} data-col={66} />
                <div className="home-cdn__dot" data-row={49} data-col={67} />
                <div className="home-cdn__dot" data-row={49} data-col={68} />
                <div className="home-cdn__dot" data-row={49} data-col={69} />
                <div className="home-cdn__dot" data-row={49} data-col={70} />
                <div className="home-cdn__dot" data-row={49} data-col={71} />
                <div className="home-cdn__dot" data-row={49} data-col={72} />
                <div className="home-cdn__dot" data-row={49} data-col={73} />
                <div className="home-cdn__dot" data-row={49} data-col={74} />
                <div className="home-cdn__dot" data-row={49} data-col={75} />
                <div className="home-cdn__dot" data-row={49} data-col={76} />
                <div className="home-cdn__dot" data-row={49} data-col={77} />
                <div className="home-cdn__dot" data-row={49} data-col={78} />
                <div className="home-cdn__dot" data-row={49} data-col={79} />
                <div className="home-cdn__dot" data-row={49} data-col={80} />
                <div className="home-cdn__dot" data-row={49} data-col={81} />
                <div className="home-cdn__dot" data-row={49} data-col={82} />
                <div className="home-cdn__dot" data-row={49} data-col={83} />
                <div className="home-cdn__dot" data-row={49} data-col={84} />
                <div className="home-cdn__dot" data-row={49} data-col={85} />
                <div className="home-cdn__dot" data-row={49} data-col={86} />
                <div className="home-cdn__dot" data-row={49} data-col={87} />
                <div className="home-cdn__dot" data-row={49} data-col={88} />
                <div className="home-cdn__dot" data-row={49} data-col={89} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={90} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={91} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={92} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={93} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={94} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={101} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={102} data-continent="australia" />
                <div className="home-cdn__dot" data-row={49} data-col={103} />
                <div className="home-cdn__dot" data-row={49} data-col={104} />
                <div className="home-cdn__dot" data-row={49} data-col={105} />
                <div className="home-cdn__dot" data-row={49} data-col={106} />
                <div className="home-cdn__dot" data-row={49} data-col={107} />
                <div className="home-cdn__dot" data-row={49} data-col={108} />
                <div className="home-cdn__dot" data-row={49} data-col={109} />
                <div className="home-cdn__dot" data-row={49} data-col={110} />
                <div className="home-cdn__dot" data-row={49} data-col={111} />
                <div className="home-cdn__dot" data-row={49} data-col={112} />
                <div className="home-cdn__dot" data-row={49} data-col={113} />
                <div className="home-cdn__dot" data-row={49} data-col={114} />
                <div className="home-cdn__dot" data-row={50} data-col={1} />
                <div className="home-cdn__dot" data-row={50} data-col={2} />
                <div className="home-cdn__dot" data-row={50} data-col={3} />
                <div className="home-cdn__dot" data-row={50} data-col={4} />
                <div className="home-cdn__dot" data-row={50} data-col={5} />
                <div className="home-cdn__dot" data-row={50} data-col={6} />
                <div className="home-cdn__dot" data-row={50} data-col={7} />
                <div className="home-cdn__dot" data-row={50} data-col={8} />
                <div className="home-cdn__dot" data-row={50} data-col={9} />
                <div className="home-cdn__dot" data-row={50} data-col={10} />
                <div className="home-cdn__dot" data-row={50} data-col={11} />
                <div className="home-cdn__dot" data-row={50} data-col={12} />
                <div className="home-cdn__dot" data-row={50} data-col={13} />
                <div className="home-cdn__dot" data-row={50} data-col={14} />
                <div className="home-cdn__dot" data-row={50} data-col={15} />
                <div className="home-cdn__dot" data-row={50} data-col={16} />
                <div className="home-cdn__dot" data-row={50} data-col={17} />
                <div className="home-cdn__dot" data-row={50} data-col={18} />
                <div className="home-cdn__dot" data-row={50} data-col={19} />
                <div className="home-cdn__dot" data-row={50} data-col={20} />
                <div className="home-cdn__dot" data-row={50} data-col={21} />
                <div className="home-cdn__dot" data-row={50} data-col={22} />
                <div className="home-cdn__dot" data-row={50} data-col={23} />
                <div className="home-cdn__dot" data-row={50} data-col={24} />
                <div className="home-cdn__dot" data-row={50} data-col={25} />
                <div className="home-cdn__dot" data-row={50} data-col={26} />
                <div className="home-cdn__dot" data-row={50} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={50} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={50} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={50} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={50} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={50} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={50} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={50} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={50} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={50} data-col={36} />
                <div className="home-cdn__dot" data-row={50} data-col={37} />
                <div className="home-cdn__dot" data-row={50} data-col={38} />
                <div className="home-cdn__dot" data-row={50} data-col={39} />
                <div className="home-cdn__dot" data-row={50} data-col={40} />
                <div className="home-cdn__dot" data-row={50} data-col={41} />
                <div className="home-cdn__dot" data-row={50} data-col={42} />
                <div className="home-cdn__dot" data-row={50} data-col={43} />
                <div className="home-cdn__dot" data-row={50} data-col={44} />
                <div className="home-cdn__dot" data-row={50} data-col={45} />
                <div className="home-cdn__dot" data-row={50} data-col={46} />
                <div className="home-cdn__dot" data-row={50} data-col={47} />
                <div className="home-cdn__dot" data-row={50} data-col={48} />
                <div className="home-cdn__dot" data-row={50} data-col={49} />
                <div className="home-cdn__dot" data-row={50} data-col={50} />
                <div className="home-cdn__dot" data-row={50} data-col={51} />
                <div className="home-cdn__dot" data-row={50} data-col={52} />
                <div className="home-cdn__dot" data-row={50} data-col={53} />
                <div className="home-cdn__dot" data-row={50} data-col={54} />
                <div className="home-cdn__dot" data-row={50} data-col={55} />
                <div className="home-cdn__dot" data-row={50} data-col={56} />
                <div className="home-cdn__dot" data-row={50} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={50} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={50} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={50} data-col={60} data-continent="africa" data-indicator="arvan"><div className="home-cdn__tooltip">ژوهانسبورگ</div></div>
                <div className="home-cdn__dot" data-row={50} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={50} data-col={62} />
                <div className="home-cdn__dot" data-row={50} data-col={63} />
                <div className="home-cdn__dot" data-row={50} data-col={64} />
                <div className="home-cdn__dot" data-row={50} data-col={65} />
                <div className="home-cdn__dot" data-row={50} data-col={66} />
                <div className="home-cdn__dot" data-row={50} data-col={67} />
                <div className="home-cdn__dot" data-row={50} data-col={68} />
                <div className="home-cdn__dot" data-row={50} data-col={69} />
                <div className="home-cdn__dot" data-row={50} data-col={70} />
                <div className="home-cdn__dot" data-row={50} data-col={71} />
                <div className="home-cdn__dot" data-row={50} data-col={72} />
                <div className="home-cdn__dot" data-row={50} data-col={73} />
                <div className="home-cdn__dot" data-row={50} data-col={74} />
                <div className="home-cdn__dot" data-row={50} data-col={75} />
                <div className="home-cdn__dot" data-row={50} data-col={76} />
                <div className="home-cdn__dot" data-row={50} data-col={77} />
                <div className="home-cdn__dot" data-row={50} data-col={78} />
                <div className="home-cdn__dot" data-row={50} data-col={79} />
                <div className="home-cdn__dot" data-row={50} data-col={80} />
                <div className="home-cdn__dot" data-row={50} data-col={81} />
                <div className="home-cdn__dot" data-row={50} data-col={82} />
                <div className="home-cdn__dot" data-row={50} data-col={83} />
                <div className="home-cdn__dot" data-row={50} data-col={84} />
                <div className="home-cdn__dot" data-row={50} data-col={85} />
                <div className="home-cdn__dot" data-row={50} data-col={86} />
                <div className="home-cdn__dot" data-row={50} data-col={87} />
                <div className="home-cdn__dot" data-row={50} data-col={88} />
                <div className="home-cdn__dot" data-row={50} data-col={89} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={90} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={91} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={92} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={93} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={94} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={101} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={102} data-continent="australia" />
                <div className="home-cdn__dot" data-row={50} data-col={103} />
                <div className="home-cdn__dot" data-row={50} data-col={104} />
                <div className="home-cdn__dot" data-row={50} data-col={105} />
                <div className="home-cdn__dot" data-row={50} data-col={106} />
                <div className="home-cdn__dot" data-row={50} data-col={107} />
                <div className="home-cdn__dot" data-row={50} data-col={108} />
                <div className="home-cdn__dot" data-row={50} data-col={109} />
                <div className="home-cdn__dot" data-row={50} data-col={110} />
                <div className="home-cdn__dot" data-row={50} data-col={111} />
                <div className="home-cdn__dot" data-row={50} data-col={112} />
                <div className="home-cdn__dot" data-row={50} data-col={113} />
                <div className="home-cdn__dot" data-row={50} data-col={114} />
                <div className="home-cdn__dot" data-row={51} data-col={1} />
                <div className="home-cdn__dot" data-row={51} data-col={2} />
                <div className="home-cdn__dot" data-row={51} data-col={3} />
                <div className="home-cdn__dot" data-row={51} data-col={4} />
                <div className="home-cdn__dot" data-row={51} data-col={5} />
                <div className="home-cdn__dot" data-row={51} data-col={6} />
                <div className="home-cdn__dot" data-row={51} data-col={7} />
                <div className="home-cdn__dot" data-row={51} data-col={8} />
                <div className="home-cdn__dot" data-row={51} data-col={9} />
                <div className="home-cdn__dot" data-row={51} data-col={10} />
                <div className="home-cdn__dot" data-row={51} data-col={11} />
                <div className="home-cdn__dot" data-row={51} data-col={12} />
                <div className="home-cdn__dot" data-row={51} data-col={13} />
                <div className="home-cdn__dot" data-row={51} data-col={14} />
                <div className="home-cdn__dot" data-row={51} data-col={15} />
                <div className="home-cdn__dot" data-row={51} data-col={16} />
                <div className="home-cdn__dot" data-row={51} data-col={17} />
                <div className="home-cdn__dot" data-row={51} data-col={18} />
                <div className="home-cdn__dot" data-row={51} data-col={19} />
                <div className="home-cdn__dot" data-row={51} data-col={20} />
                <div className="home-cdn__dot" data-row={51} data-col={21} />
                <div className="home-cdn__dot" data-row={51} data-col={22} />
                <div className="home-cdn__dot" data-row={51} data-col={23} />
                <div className="home-cdn__dot" data-row={51} data-col={24} />
                <div className="home-cdn__dot" data-row={51} data-col={25} />
                <div className="home-cdn__dot" data-row={51} data-col={26} />
                <div className="home-cdn__dot" data-row={51} data-col={27} />
                <div className="home-cdn__dot" data-row={51} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={51} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={51} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={51} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={51} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={51} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={51} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={51} data-col={35} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={51} data-col={36} />
                <div className="home-cdn__dot" data-row={51} data-col={37} />
                <div className="home-cdn__dot" data-row={51} data-col={38} />
                <div className="home-cdn__dot" data-row={51} data-col={39} />
                <div className="home-cdn__dot" data-row={51} data-col={40} />
                <div className="home-cdn__dot" data-row={51} data-col={41} />
                <div className="home-cdn__dot" data-row={51} data-col={42} />
                <div className="home-cdn__dot" data-row={51} data-col={43} />
                <div className="home-cdn__dot" data-row={51} data-col={44} />
                <div className="home-cdn__dot" data-row={51} data-col={45} />
                <div className="home-cdn__dot" data-row={51} data-col={46} />
                <div className="home-cdn__dot" data-row={51} data-col={47} />
                <div className="home-cdn__dot" data-row={51} data-col={48} />
                <div className="home-cdn__dot" data-row={51} data-col={49} />
                <div className="home-cdn__dot" data-row={51} data-col={50} />
                <div className="home-cdn__dot" data-row={51} data-col={51} />
                <div className="home-cdn__dot" data-row={51} data-col={52} />
                <div className="home-cdn__dot" data-row={51} data-col={53} />
                <div className="home-cdn__dot" data-row={51} data-col={54} />
                <div className="home-cdn__dot" data-row={51} data-col={55} />
                <div className="home-cdn__dot" data-row={51} data-col={56} />
                <div className="home-cdn__dot" data-row={51} data-col={57} />
                <div className="home-cdn__dot" data-row={51} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={51} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={51} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={51} data-col={61} data-continent="africa" />
                <div className="home-cdn__dot" data-row={51} data-col={62} />
                <div className="home-cdn__dot" data-row={51} data-col={63} />
                <div className="home-cdn__dot" data-row={51} data-col={64} />
                <div className="home-cdn__dot" data-row={51} data-col={65} />
                <div className="home-cdn__dot" data-row={51} data-col={66} />
                <div className="home-cdn__dot" data-row={51} data-col={67} />
                <div className="home-cdn__dot" data-row={51} data-col={68} />
                <div className="home-cdn__dot" data-row={51} data-col={69} />
                <div className="home-cdn__dot" data-row={51} data-col={70} />
                <div className="home-cdn__dot" data-row={51} data-col={71} />
                <div className="home-cdn__dot" data-row={51} data-col={72} />
                <div className="home-cdn__dot" data-row={51} data-col={73} />
                <div className="home-cdn__dot" data-row={51} data-col={74} />
                <div className="home-cdn__dot" data-row={51} data-col={75} />
                <div className="home-cdn__dot" data-row={51} data-col={76} />
                <div className="home-cdn__dot" data-row={51} data-col={77} />
                <div className="home-cdn__dot" data-row={51} data-col={78} />
                <div className="home-cdn__dot" data-row={51} data-col={79} />
                <div className="home-cdn__dot" data-row={51} data-col={80} />
                <div className="home-cdn__dot" data-row={51} data-col={81} />
                <div className="home-cdn__dot" data-row={51} data-col={82} />
                <div className="home-cdn__dot" data-row={51} data-col={83} />
                <div className="home-cdn__dot" data-row={51} data-col={84} />
                <div className="home-cdn__dot" data-row={51} data-col={85} />
                <div className="home-cdn__dot" data-row={51} data-col={86} />
                <div className="home-cdn__dot" data-row={51} data-col={87} />
                <div className="home-cdn__dot" data-row={51} data-col={88} />
                <div className="home-cdn__dot" data-row={51} data-col={89} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={90} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={91} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={92} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={93} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={94} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={95} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot home-cdn__dot--arvan" data-row={51} data-col={101} data-continent="australia" data-indicator="arvan"><div className="home-cdn__tooltip">سیدنی</div></div>
                <div className="home-cdn__dot" data-row={51} data-col={102} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={103} />
                <div className="home-cdn__dot" data-row={51} data-col={104} />
                <div className="home-cdn__dot" data-row={51} data-col={105} />
                <div className="home-cdn__dot" data-row={51} data-col={106} />
                <div className="home-cdn__dot" data-row={51} data-col={107} />
                <div className="home-cdn__dot" data-row={51} data-col={108} data-continent="australia" />
                <div className="home-cdn__dot" data-row={51} data-col={109} />
                <div className="home-cdn__dot" data-row={51} data-col={110} />
                <div className="home-cdn__dot" data-row={51} data-col={111} />
                <div className="home-cdn__dot" data-row={51} data-col={112} />
                <div className="home-cdn__dot" data-row={51} data-col={113} />
                <div className="home-cdn__dot" data-row={51} data-col={114} />
                <div className="home-cdn__dot" data-row={52} data-col={1} />
                <div className="home-cdn__dot" data-row={52} data-col={2} />
                <div className="home-cdn__dot" data-row={52} data-col={3} />
                <div className="home-cdn__dot" data-row={52} data-col={4} />
                <div className="home-cdn__dot" data-row={52} data-col={5} />
                <div className="home-cdn__dot" data-row={52} data-col={6} />
                <div className="home-cdn__dot" data-row={52} data-col={7} />
                <div className="home-cdn__dot" data-row={52} data-col={8} />
                <div className="home-cdn__dot" data-row={52} data-col={9} />
                <div className="home-cdn__dot" data-row={52} data-col={10} />
                <div className="home-cdn__dot" data-row={52} data-col={11} />
                <div className="home-cdn__dot" data-row={52} data-col={12} />
                <div className="home-cdn__dot" data-row={52} data-col={13} />
                <div className="home-cdn__dot" data-row={52} data-col={14} />
                <div className="home-cdn__dot" data-row={52} data-col={15} />
                <div className="home-cdn__dot" data-row={52} data-col={16} />
                <div className="home-cdn__dot" data-row={52} data-col={17} />
                <div className="home-cdn__dot" data-row={52} data-col={18} />
                <div className="home-cdn__dot" data-row={52} data-col={19} />
                <div className="home-cdn__dot" data-row={52} data-col={20} />
                <div className="home-cdn__dot" data-row={52} data-col={21} />
                <div className="home-cdn__dot" data-row={52} data-col={22} />
                <div className="home-cdn__dot" data-row={52} data-col={23} />
                <div className="home-cdn__dot" data-row={52} data-col={24} />
                <div className="home-cdn__dot" data-row={52} data-col={25} />
                <div className="home-cdn__dot" data-row={52} data-col={26} />
                <div className="home-cdn__dot" data-row={52} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={52} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={52} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={52} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={52} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={52} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={52} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={52} data-col={34} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={52} data-col={35} />
                <div className="home-cdn__dot" data-row={52} data-col={36} />
                <div className="home-cdn__dot" data-row={52} data-col={37} />
                <div className="home-cdn__dot" data-row={52} data-col={38} />
                <div className="home-cdn__dot" data-row={52} data-col={39} />
                <div className="home-cdn__dot" data-row={52} data-col={40} />
                <div className="home-cdn__dot" data-row={52} data-col={41} />
                <div className="home-cdn__dot" data-row={52} data-col={42} />
                <div className="home-cdn__dot" data-row={52} data-col={43} />
                <div className="home-cdn__dot" data-row={52} data-col={44} />
                <div className="home-cdn__dot" data-row={52} data-col={45} />
                <div className="home-cdn__dot" data-row={52} data-col={46} />
                <div className="home-cdn__dot" data-row={52} data-col={47} />
                <div className="home-cdn__dot" data-row={52} data-col={48} />
                <div className="home-cdn__dot" data-row={52} data-col={49} />
                <div className="home-cdn__dot" data-row={52} data-col={50} />
                <div className="home-cdn__dot" data-row={52} data-col={51} />
                <div className="home-cdn__dot" data-row={52} data-col={52} />
                <div className="home-cdn__dot" data-row={52} data-col={53} />
                <div className="home-cdn__dot" data-row={52} data-col={54} />
                <div className="home-cdn__dot" data-row={52} data-col={55} />
                <div className="home-cdn__dot" data-row={52} data-col={56} />
                <div className="home-cdn__dot" data-row={52} data-col={57} data-continent="africa" />
                <div className="home-cdn__dot" data-row={52} data-col={58} data-continent="africa" />
                <div className="home-cdn__dot" data-row={52} data-col={59} data-continent="africa" />
                <div className="home-cdn__dot" data-row={52} data-col={60} data-continent="africa" />
                <div className="home-cdn__dot" data-row={52} data-col={61} />
                <div className="home-cdn__dot" data-row={52} data-col={62} />
                <div className="home-cdn__dot" data-row={52} data-col={63} />
                <div className="home-cdn__dot" data-row={52} data-col={64} />
                <div className="home-cdn__dot" data-row={52} data-col={65} />
                <div className="home-cdn__dot" data-row={52} data-col={66} />
                <div className="home-cdn__dot" data-row={52} data-col={67} />
                <div className="home-cdn__dot" data-row={52} data-col={68} />
                <div className="home-cdn__dot" data-row={52} data-col={69} />
                <div className="home-cdn__dot" data-row={52} data-col={70} />
                <div className="home-cdn__dot" data-row={52} data-col={71} />
                <div className="home-cdn__dot" data-row={52} data-col={72} />
                <div className="home-cdn__dot" data-row={52} data-col={73} />
                <div className="home-cdn__dot" data-row={52} data-col={74} />
                <div className="home-cdn__dot" data-row={52} data-col={75} />
                <div className="home-cdn__dot" data-row={52} data-col={76} />
                <div className="home-cdn__dot" data-row={52} data-col={77} />
                <div className="home-cdn__dot" data-row={52} data-col={78} />
                <div className="home-cdn__dot" data-row={52} data-col={79} />
                <div className="home-cdn__dot" data-row={52} data-col={80} />
                <div className="home-cdn__dot" data-row={52} data-col={81} />
                <div className="home-cdn__dot" data-row={52} data-col={82} />
                <div className="home-cdn__dot" data-row={52} data-col={83} />
                <div className="home-cdn__dot" data-row={52} data-col={84} />
                <div className="home-cdn__dot" data-row={52} data-col={85} />
                <div className="home-cdn__dot" data-row={52} data-col={86} />
                <div className="home-cdn__dot" data-row={52} data-col={87} />
                <div className="home-cdn__dot" data-row={52} data-col={88} />
                <div className="home-cdn__dot" data-row={52} data-col={89} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={90} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={91} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={92} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={93} />
                <div className="home-cdn__dot" data-row={52} data-col={94} />
                <div className="home-cdn__dot" data-row={52} data-col={95} />
                <div className="home-cdn__dot" data-row={52} data-col={96} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={101} />
                <div className="home-cdn__dot" data-row={52} data-col={102} />
                <div className="home-cdn__dot" data-row={52} data-col={103} />
                <div className="home-cdn__dot" data-row={52} data-col={104} />
                <div className="home-cdn__dot" data-row={52} data-col={105} />
                <div className="home-cdn__dot" data-row={52} data-col={106} />
                <div className="home-cdn__dot" data-row={52} data-col={107} />
                <div className="home-cdn__dot" data-row={52} data-col={108} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={109} data-continent="australia" />
                <div className="home-cdn__dot" data-row={52} data-col={110} />
                <div className="home-cdn__dot" data-row={52} data-col={111} />
                <div className="home-cdn__dot" data-row={52} data-col={112} />
                <div className="home-cdn__dot" data-row={52} data-col={113} />
                <div className="home-cdn__dot" data-row={52} data-col={114} />
                <div className="home-cdn__dot" data-row={53} data-col={1} />
                <div className="home-cdn__dot" data-row={53} data-col={2} />
                <div className="home-cdn__dot" data-row={53} data-col={3} />
                <div className="home-cdn__dot" data-row={53} data-col={4} />
                <div className="home-cdn__dot" data-row={53} data-col={5} />
                <div className="home-cdn__dot" data-row={53} data-col={6} />
                <div className="home-cdn__dot" data-row={53} data-col={7} />
                <div className="home-cdn__dot" data-row={53} data-col={8} />
                <div className="home-cdn__dot" data-row={53} data-col={9} />
                <div className="home-cdn__dot" data-row={53} data-col={10} />
                <div className="home-cdn__dot" data-row={53} data-col={11} />
                <div className="home-cdn__dot" data-row={53} data-col={12} />
                <div className="home-cdn__dot" data-row={53} data-col={13} />
                <div className="home-cdn__dot" data-row={53} data-col={14} />
                <div className="home-cdn__dot" data-row={53} data-col={15} />
                <div className="home-cdn__dot" data-row={53} data-col={16} />
                <div className="home-cdn__dot" data-row={53} data-col={17} />
                <div className="home-cdn__dot" data-row={53} data-col={18} />
                <div className="home-cdn__dot" data-row={53} data-col={19} />
                <div className="home-cdn__dot" data-row={53} data-col={20} />
                <div className="home-cdn__dot" data-row={53} data-col={21} />
                <div className="home-cdn__dot" data-row={53} data-col={22} />
                <div className="home-cdn__dot" data-row={53} data-col={23} />
                <div className="home-cdn__dot" data-row={53} data-col={24} />
                <div className="home-cdn__dot" data-row={53} data-col={25} />
                <div className="home-cdn__dot" data-row={53} data-col={26} />
                <div className="home-cdn__dot" data-row={53} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={53} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={53} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={53} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={53} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={53} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={53} data-col={33} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={53} data-col={34} />
                <div className="home-cdn__dot" data-row={53} data-col={35} />
                <div className="home-cdn__dot" data-row={53} data-col={36} />
                <div className="home-cdn__dot" data-row={53} data-col={37} />
                <div className="home-cdn__dot" data-row={53} data-col={38} />
                <div className="home-cdn__dot" data-row={53} data-col={39} />
                <div className="home-cdn__dot" data-row={53} data-col={40} />
                <div className="home-cdn__dot" data-row={53} data-col={41} />
                <div className="home-cdn__dot" data-row={53} data-col={42} />
                <div className="home-cdn__dot" data-row={53} data-col={43} />
                <div className="home-cdn__dot" data-row={53} data-col={44} />
                <div className="home-cdn__dot" data-row={53} data-col={45} />
                <div className="home-cdn__dot" data-row={53} data-col={46} />
                <div className="home-cdn__dot" data-row={53} data-col={47} />
                <div className="home-cdn__dot" data-row={53} data-col={48} />
                <div className="home-cdn__dot" data-row={53} data-col={49} />
                <div className="home-cdn__dot" data-row={53} data-col={50} />
                <div className="home-cdn__dot" data-row={53} data-col={51} />
                <div className="home-cdn__dot" data-row={53} data-col={52} />
                <div className="home-cdn__dot" data-row={53} data-col={53} />
                <div className="home-cdn__dot" data-row={53} data-col={54} />
                <div className="home-cdn__dot" data-row={53} data-col={55} />
                <div className="home-cdn__dot" data-row={53} data-col={56} />
                <div className="home-cdn__dot" data-row={53} data-col={57} />
                <div className="home-cdn__dot" data-row={53} data-col={58} />
                <div className="home-cdn__dot" data-row={53} data-col={59} />
                <div className="home-cdn__dot" data-row={53} data-col={60} />
                <div className="home-cdn__dot" data-row={53} data-col={61} />
                <div className="home-cdn__dot" data-row={53} data-col={62} />
                <div className="home-cdn__dot" data-row={53} data-col={63} />
                <div className="home-cdn__dot" data-row={53} data-col={64} />
                <div className="home-cdn__dot" data-row={53} data-col={65} />
                <div className="home-cdn__dot" data-row={53} data-col={66} />
                <div className="home-cdn__dot" data-row={53} data-col={67} />
                <div className="home-cdn__dot" data-row={53} data-col={68} />
                <div className="home-cdn__dot" data-row={53} data-col={69} />
                <div className="home-cdn__dot" data-row={53} data-col={70} />
                <div className="home-cdn__dot" data-row={53} data-col={71} />
                <div className="home-cdn__dot" data-row={53} data-col={72} />
                <div className="home-cdn__dot" data-row={53} data-col={73} />
                <div className="home-cdn__dot" data-row={53} data-col={74} />
                <div className="home-cdn__dot" data-row={53} data-col={75} />
                <div className="home-cdn__dot" data-row={53} data-col={76} />
                <div className="home-cdn__dot" data-row={53} data-col={77} />
                <div className="home-cdn__dot" data-row={53} data-col={78} />
                <div className="home-cdn__dot" data-row={53} data-col={79} />
                <div className="home-cdn__dot" data-row={53} data-col={80} />
                <div className="home-cdn__dot" data-row={53} data-col={81} />
                <div className="home-cdn__dot" data-row={53} data-col={82} />
                <div className="home-cdn__dot" data-row={53} data-col={83} />
                <div className="home-cdn__dot" data-row={53} data-col={84} />
                <div className="home-cdn__dot" data-row={53} data-col={85} />
                <div className="home-cdn__dot" data-row={53} data-col={86} />
                <div className="home-cdn__dot" data-row={53} data-col={87} />
                <div className="home-cdn__dot" data-row={53} data-col={88} />
                <div className="home-cdn__dot" data-row={53} data-col={89} />
                <div className="home-cdn__dot" data-row={53} data-col={90} data-continent="australia" />
                <div className="home-cdn__dot" data-row={53} data-col={91} data-continent="australia" />
                <div className="home-cdn__dot" data-row={53} data-col={92} />
                <div className="home-cdn__dot" data-row={53} data-col={93} />
                <div className="home-cdn__dot" data-row={53} data-col={94} />
                <div className="home-cdn__dot" data-row={53} data-col={95} />
                <div className="home-cdn__dot" data-row={53} data-col={96} />
                <div className="home-cdn__dot" data-row={53} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={53} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={53} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={53} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={53} data-col={101} />
                <div className="home-cdn__dot" data-row={53} data-col={102} />
                <div className="home-cdn__dot" data-row={53} data-col={103} />
                <div className="home-cdn__dot" data-row={53} data-col={104} />
                <div className="home-cdn__dot" data-row={53} data-col={105} />
                <div className="home-cdn__dot" data-row={53} data-col={106} />
                <div className="home-cdn__dot" data-row={53} data-col={107} />
                <div className="home-cdn__dot" data-row={53} data-col={108} />
                <div className="home-cdn__dot" data-row={53} data-col={109} data-continent="australia" />
                <div className="home-cdn__dot" data-row={53} data-col={110} data-continent="australia" />
                <div className="home-cdn__dot" data-row={53} data-col={111} />
                <div className="home-cdn__dot" data-row={53} data-col={112} />
                <div className="home-cdn__dot" data-row={53} data-col={113} />
                <div className="home-cdn__dot" data-row={53} data-col={114} />
                <div className="home-cdn__dot" data-row={54} data-col={1} />
                <div className="home-cdn__dot" data-row={54} data-col={2} />
                <div className="home-cdn__dot" data-row={54} data-col={3} />
                <div className="home-cdn__dot" data-row={54} data-col={4} />
                <div className="home-cdn__dot" data-row={54} data-col={5} />
                <div className="home-cdn__dot" data-row={54} data-col={6} />
                <div className="home-cdn__dot" data-row={54} data-col={7} />
                <div className="home-cdn__dot" data-row={54} data-col={8} />
                <div className="home-cdn__dot" data-row={54} data-col={9} />
                <div className="home-cdn__dot" data-row={54} data-col={10} />
                <div className="home-cdn__dot" data-row={54} data-col={11} />
                <div className="home-cdn__dot" data-row={54} data-col={12} />
                <div className="home-cdn__dot" data-row={54} data-col={13} />
                <div className="home-cdn__dot" data-row={54} data-col={14} />
                <div className="home-cdn__dot" data-row={54} data-col={15} />
                <div className="home-cdn__dot" data-row={54} data-col={16} />
                <div className="home-cdn__dot" data-row={54} data-col={17} />
                <div className="home-cdn__dot" data-row={54} data-col={18} />
                <div className="home-cdn__dot" data-row={54} data-col={19} />
                <div className="home-cdn__dot" data-row={54} data-col={20} />
                <div className="home-cdn__dot" data-row={54} data-col={21} />
                <div className="home-cdn__dot" data-row={54} data-col={22} />
                <div className="home-cdn__dot" data-row={54} data-col={23} />
                <div className="home-cdn__dot" data-row={54} data-col={24} />
                <div className="home-cdn__dot" data-row={54} data-col={25} />
                <div className="home-cdn__dot" data-row={54} data-col={26} />
                <div className="home-cdn__dot" data-row={54} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={54} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={54} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={54} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={54} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={54} data-col={32} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={54} data-col={33} />
                <div className="home-cdn__dot" data-row={54} data-col={34} />
                <div className="home-cdn__dot" data-row={54} data-col={35} />
                <div className="home-cdn__dot" data-row={54} data-col={36} />
                <div className="home-cdn__dot" data-row={54} data-col={37} />
                <div className="home-cdn__dot" data-row={54} data-col={38} />
                <div className="home-cdn__dot" data-row={54} data-col={39} />
                <div className="home-cdn__dot" data-row={54} data-col={40} />
                <div className="home-cdn__dot" data-row={54} data-col={41} />
                <div className="home-cdn__dot" data-row={54} data-col={42} />
                <div className="home-cdn__dot" data-row={54} data-col={43} />
                <div className="home-cdn__dot" data-row={54} data-col={44} />
                <div className="home-cdn__dot" data-row={54} data-col={45} />
                <div className="home-cdn__dot" data-row={54} data-col={46} />
                <div className="home-cdn__dot" data-row={54} data-col={47} />
                <div className="home-cdn__dot" data-row={54} data-col={48} />
                <div className="home-cdn__dot" data-row={54} data-col={49} />
                <div className="home-cdn__dot" data-row={54} data-col={50} />
                <div className="home-cdn__dot" data-row={54} data-col={51} />
                <div className="home-cdn__dot" data-row={54} data-col={52} />
                <div className="home-cdn__dot" data-row={54} data-col={53} />
                <div className="home-cdn__dot" data-row={54} data-col={54} />
                <div className="home-cdn__dot" data-row={54} data-col={55} />
                <div className="home-cdn__dot" data-row={54} data-col={56} />
                <div className="home-cdn__dot" data-row={54} data-col={57} />
                <div className="home-cdn__dot" data-row={54} data-col={58} />
                <div className="home-cdn__dot" data-row={54} data-col={59} />
                <div className="home-cdn__dot" data-row={54} data-col={60} />
                <div className="home-cdn__dot" data-row={54} data-col={61} />
                <div className="home-cdn__dot" data-row={54} data-col={62} />
                <div className="home-cdn__dot" data-row={54} data-col={63} />
                <div className="home-cdn__dot" data-row={54} data-col={64} />
                <div className="home-cdn__dot" data-row={54} data-col={65} />
                <div className="home-cdn__dot" data-row={54} data-col={66} />
                <div className="home-cdn__dot" data-row={54} data-col={67} />
                <div className="home-cdn__dot" data-row={54} data-col={68} />
                <div className="home-cdn__dot" data-row={54} data-col={69} />
                <div className="home-cdn__dot" data-row={54} data-col={70} />
                <div className="home-cdn__dot" data-row={54} data-col={71} />
                <div className="home-cdn__dot" data-row={54} data-col={72} />
                <div className="home-cdn__dot" data-row={54} data-col={73} />
                <div className="home-cdn__dot" data-row={54} data-col={74} />
                <div className="home-cdn__dot" data-row={54} data-col={75} />
                <div className="home-cdn__dot" data-row={54} data-col={76} />
                <div className="home-cdn__dot" data-row={54} data-col={77} />
                <div className="home-cdn__dot" data-row={54} data-col={78} />
                <div className="home-cdn__dot" data-row={54} data-col={79} />
                <div className="home-cdn__dot" data-row={54} data-col={80} />
                <div className="home-cdn__dot" data-row={54} data-col={81} />
                <div className="home-cdn__dot" data-row={54} data-col={82} />
                <div className="home-cdn__dot" data-row={54} data-col={83} />
                <div className="home-cdn__dot" data-row={54} data-col={84} />
                <div className="home-cdn__dot" data-row={54} data-col={85} />
                <div className="home-cdn__dot" data-row={54} data-col={86} />
                <div className="home-cdn__dot" data-row={54} data-col={87} />
                <div className="home-cdn__dot" data-row={54} data-col={88} />
                <div className="home-cdn__dot" data-row={54} data-col={89} />
                <div className="home-cdn__dot" data-row={54} data-col={90} />
                <div className="home-cdn__dot" data-row={54} data-col={91} />
                <div className="home-cdn__dot" data-row={54} data-col={92} />
                <div className="home-cdn__dot" data-row={54} data-col={93} />
                <div className="home-cdn__dot" data-row={54} data-col={94} />
                <div className="home-cdn__dot" data-row={54} data-col={95} />
                <div className="home-cdn__dot" data-row={54} data-col={96} />
                <div className="home-cdn__dot" data-row={54} data-col={97} data-continent="australia" />
                <div className="home-cdn__dot" data-row={54} data-col={98} data-continent="australia" />
                <div className="home-cdn__dot" data-row={54} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={54} data-col={100} />
                <div className="home-cdn__dot" data-row={54} data-col={101} />
                <div className="home-cdn__dot" data-row={54} data-col={102} />
                <div className="home-cdn__dot" data-row={54} data-col={103} />
                <div className="home-cdn__dot" data-row={54} data-col={104} />
                <div className="home-cdn__dot" data-row={54} data-col={105} />
                <div className="home-cdn__dot" data-row={54} data-col={106} />
                <div className="home-cdn__dot" data-row={54} data-col={107} data-continent="australia" />
                <div className="home-cdn__dot" data-row={54} data-col={108} data-continent="australia" />
                <div className="home-cdn__dot" data-row={54} data-col={109} data-continent="australia" />
                <div className="home-cdn__dot" data-row={54} data-col={110} />
                <div className="home-cdn__dot" data-row={54} data-col={111} />
                <div className="home-cdn__dot" data-row={54} data-col={112} />
                <div className="home-cdn__dot" data-row={54} data-col={113} />
                <div className="home-cdn__dot" data-row={54} data-col={114} />
                <div className="home-cdn__dot" data-row={55} data-col={1} />
                <div className="home-cdn__dot" data-row={55} data-col={2} />
                <div className="home-cdn__dot" data-row={55} data-col={3} />
                <div className="home-cdn__dot" data-row={55} data-col={4} />
                <div className="home-cdn__dot" data-row={55} data-col={5} />
                <div className="home-cdn__dot" data-row={55} data-col={6} />
                <div className="home-cdn__dot" data-row={55} data-col={7} />
                <div className="home-cdn__dot" data-row={55} data-col={8} />
                <div className="home-cdn__dot" data-row={55} data-col={9} />
                <div className="home-cdn__dot" data-row={55} data-col={10} />
                <div className="home-cdn__dot" data-row={55} data-col={11} />
                <div className="home-cdn__dot" data-row={55} data-col={12} />
                <div className="home-cdn__dot" data-row={55} data-col={13} />
                <div className="home-cdn__dot" data-row={55} data-col={14} />
                <div className="home-cdn__dot" data-row={55} data-col={15} />
                <div className="home-cdn__dot" data-row={55} data-col={16} />
                <div className="home-cdn__dot" data-row={55} data-col={17} />
                <div className="home-cdn__dot" data-row={55} data-col={18} />
                <div className="home-cdn__dot" data-row={55} data-col={19} />
                <div className="home-cdn__dot" data-row={55} data-col={20} />
                <div className="home-cdn__dot" data-row={55} data-col={21} />
                <div className="home-cdn__dot" data-row={55} data-col={22} />
                <div className="home-cdn__dot" data-row={55} data-col={23} />
                <div className="home-cdn__dot" data-row={55} data-col={24} />
                <div className="home-cdn__dot" data-row={55} data-col={25} />
                <div className="home-cdn__dot" data-row={55} data-col={26} />
                <div className="home-cdn__dot" data-row={55} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={55} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={55} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={55} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={55} data-col={31} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={55} data-col={32} />
                <div className="home-cdn__dot" data-row={55} data-col={33} />
                <div className="home-cdn__dot" data-row={55} data-col={34} />
                <div className="home-cdn__dot" data-row={55} data-col={35} />
                <div className="home-cdn__dot" data-row={55} data-col={36} />
                <div className="home-cdn__dot" data-row={55} data-col={37} />
                <div className="home-cdn__dot" data-row={55} data-col={38} />
                <div className="home-cdn__dot" data-row={55} data-col={39} />
                <div className="home-cdn__dot" data-row={55} data-col={40} />
                <div className="home-cdn__dot" data-row={55} data-col={41} />
                <div className="home-cdn__dot" data-row={55} data-col={42} />
                <div className="home-cdn__dot" data-row={55} data-col={43} />
                <div className="home-cdn__dot" data-row={55} data-col={44} />
                <div className="home-cdn__dot" data-row={55} data-col={45} />
                <div className="home-cdn__dot" data-row={55} data-col={46} />
                <div className="home-cdn__dot" data-row={55} data-col={47} />
                <div className="home-cdn__dot" data-row={55} data-col={48} />
                <div className="home-cdn__dot" data-row={55} data-col={49} />
                <div className="home-cdn__dot" data-row={55} data-col={50} />
                <div className="home-cdn__dot" data-row={55} data-col={51} />
                <div className="home-cdn__dot" data-row={55} data-col={52} />
                <div className="home-cdn__dot" data-row={55} data-col={53} />
                <div className="home-cdn__dot" data-row={55} data-col={54} />
                <div className="home-cdn__dot" data-row={55} data-col={55} />
                <div className="home-cdn__dot" data-row={55} data-col={56} />
                <div className="home-cdn__dot" data-row={55} data-col={57} />
                <div className="home-cdn__dot" data-row={55} data-col={58} />
                <div className="home-cdn__dot" data-row={55} data-col={59} />
                <div className="home-cdn__dot" data-row={55} data-col={60} />
                <div className="home-cdn__dot" data-row={55} data-col={61} />
                <div className="home-cdn__dot" data-row={55} data-col={62} />
                <div className="home-cdn__dot" data-row={55} data-col={63} />
                <div className="home-cdn__dot" data-row={55} data-col={64} />
                <div className="home-cdn__dot" data-row={55} data-col={65} />
                <div className="home-cdn__dot" data-row={55} data-col={66} />
                <div className="home-cdn__dot" data-row={55} data-col={67} />
                <div className="home-cdn__dot" data-row={55} data-col={68} />
                <div className="home-cdn__dot" data-row={55} data-col={69} />
                <div className="home-cdn__dot" data-row={55} data-col={70} />
                <div className="home-cdn__dot" data-row={55} data-col={71} />
                <div className="home-cdn__dot" data-row={55} data-col={72} />
                <div className="home-cdn__dot" data-row={55} data-col={73} />
                <div className="home-cdn__dot" data-row={55} data-col={74} />
                <div className="home-cdn__dot" data-row={55} data-col={75} />
                <div className="home-cdn__dot" data-row={55} data-col={76} />
                <div className="home-cdn__dot" data-row={55} data-col={77} />
                <div className="home-cdn__dot" data-row={55} data-col={78} />
                <div className="home-cdn__dot" data-row={55} data-col={79} />
                <div className="home-cdn__dot" data-row={55} data-col={80} />
                <div className="home-cdn__dot" data-row={55} data-col={81} />
                <div className="home-cdn__dot" data-row={55} data-col={82} />
                <div className="home-cdn__dot" data-row={55} data-col={83} />
                <div className="home-cdn__dot" data-row={55} data-col={84} />
                <div className="home-cdn__dot" data-row={55} data-col={85} />
                <div className="home-cdn__dot" data-row={55} data-col={86} />
                <div className="home-cdn__dot" data-row={55} data-col={87} />
                <div className="home-cdn__dot" data-row={55} data-col={88} />
                <div className="home-cdn__dot" data-row={55} data-col={89} />
                <div className="home-cdn__dot" data-row={55} data-col={90} />
                <div className="home-cdn__dot" data-row={55} data-col={91} />
                <div className="home-cdn__dot" data-row={55} data-col={92} />
                <div className="home-cdn__dot" data-row={55} data-col={93} />
                <div className="home-cdn__dot" data-row={55} data-col={94} />
                <div className="home-cdn__dot" data-row={55} data-col={95} />
                <div className="home-cdn__dot" data-row={55} data-col={96} />
                <div className="home-cdn__dot" data-row={55} data-col={97} />
                <div className="home-cdn__dot" data-row={55} data-col={98} />
                <div className="home-cdn__dot" data-row={55} data-col={99} />
                <div className="home-cdn__dot" data-row={55} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={55} data-col={101} />
                <div className="home-cdn__dot" data-row={55} data-col={102} />
                <div className="home-cdn__dot" data-row={55} data-col={103} />
                <div className="home-cdn__dot" data-row={55} data-col={104} />
                <div className="home-cdn__dot" data-row={55} data-col={105} />
                <div className="home-cdn__dot" data-row={55} data-col={106} />
                <div className="home-cdn__dot" data-row={55} data-col={107} data-continent="australia" />
                <div className="home-cdn__dot" data-row={55} data-col={108} data-continent="australia" />
                <div className="home-cdn__dot" data-row={55} data-col={109} />
                <div className="home-cdn__dot" data-row={55} data-col={110} />
                <div className="home-cdn__dot" data-row={55} data-col={111} />
                <div className="home-cdn__dot" data-row={55} data-col={112} />
                <div className="home-cdn__dot" data-row={55} data-col={113} />
                <div className="home-cdn__dot" data-row={55} data-col={114} />
                <div className="home-cdn__dot" data-row={56} data-col={1} />
                <div className="home-cdn__dot" data-row={56} data-col={2} />
                <div className="home-cdn__dot" data-row={56} data-col={3} />
                <div className="home-cdn__dot" data-row={56} data-col={4} />
                <div className="home-cdn__dot" data-row={56} data-col={5} />
                <div className="home-cdn__dot" data-row={56} data-col={6} />
                <div className="home-cdn__dot" data-row={56} data-col={7} />
                <div className="home-cdn__dot" data-row={56} data-col={8} />
                <div className="home-cdn__dot" data-row={56} data-col={9} />
                <div className="home-cdn__dot" data-row={56} data-col={10} />
                <div className="home-cdn__dot" data-row={56} data-col={11} />
                <div className="home-cdn__dot" data-row={56} data-col={12} />
                <div className="home-cdn__dot" data-row={56} data-col={13} />
                <div className="home-cdn__dot" data-row={56} data-col={14} />
                <div className="home-cdn__dot" data-row={56} data-col={15} />
                <div className="home-cdn__dot" data-row={56} data-col={16} />
                <div className="home-cdn__dot" data-row={56} data-col={17} />
                <div className="home-cdn__dot" data-row={56} data-col={18} />
                <div className="home-cdn__dot" data-row={56} data-col={19} />
                <div className="home-cdn__dot" data-row={56} data-col={20} />
                <div className="home-cdn__dot" data-row={56} data-col={21} />
                <div className="home-cdn__dot" data-row={56} data-col={22} />
                <div className="home-cdn__dot" data-row={56} data-col={23} />
                <div className="home-cdn__dot" data-row={56} data-col={24} />
                <div className="home-cdn__dot" data-row={56} data-col={25} />
                <div className="home-cdn__dot" data-row={56} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={56} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={56} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={56} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={56} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={56} data-col={31} />
                <div className="home-cdn__dot" data-row={56} data-col={32} />
                <div className="home-cdn__dot" data-row={56} data-col={33} />
                <div className="home-cdn__dot" data-row={56} data-col={34} />
                <div className="home-cdn__dot" data-row={56} data-col={35} />
                <div className="home-cdn__dot" data-row={56} data-col={36} />
                <div className="home-cdn__dot" data-row={56} data-col={37} />
                <div className="home-cdn__dot" data-row={56} data-col={38} />
                <div className="home-cdn__dot" data-row={56} data-col={39} />
                <div className="home-cdn__dot" data-row={56} data-col={40} />
                <div className="home-cdn__dot" data-row={56} data-col={41} />
                <div className="home-cdn__dot" data-row={56} data-col={42} />
                <div className="home-cdn__dot" data-row={56} data-col={43} />
                <div className="home-cdn__dot" data-row={56} data-col={44} />
                <div className="home-cdn__dot" data-row={56} data-col={45} />
                <div className="home-cdn__dot" data-row={56} data-col={46} />
                <div className="home-cdn__dot" data-row={56} data-col={47} />
                <div className="home-cdn__dot" data-row={56} data-col={48} />
                <div className="home-cdn__dot" data-row={56} data-col={49} />
                <div className="home-cdn__dot" data-row={56} data-col={50} />
                <div className="home-cdn__dot" data-row={56} data-col={51} />
                <div className="home-cdn__dot" data-row={56} data-col={52} />
                <div className="home-cdn__dot" data-row={56} data-col={53} />
                <div className="home-cdn__dot" data-row={56} data-col={54} />
                <div className="home-cdn__dot" data-row={56} data-col={55} />
                <div className="home-cdn__dot" data-row={56} data-col={56} />
                <div className="home-cdn__dot" data-row={56} data-col={57} />
                <div className="home-cdn__dot" data-row={56} data-col={58} />
                <div className="home-cdn__dot" data-row={56} data-col={59} />
                <div className="home-cdn__dot" data-row={56} data-col={60} />
                <div className="home-cdn__dot" data-row={56} data-col={61} />
                <div className="home-cdn__dot" data-row={56} data-col={62} />
                <div className="home-cdn__dot" data-row={56} data-col={63} />
                <div className="home-cdn__dot" data-row={56} data-col={64} />
                <div className="home-cdn__dot" data-row={56} data-col={65} />
                <div className="home-cdn__dot" data-row={56} data-col={66} />
                <div className="home-cdn__dot" data-row={56} data-col={67} />
                <div className="home-cdn__dot" data-row={56} data-col={68} />
                <div className="home-cdn__dot" data-row={56} data-col={69} />
                <div className="home-cdn__dot" data-row={56} data-col={70} />
                <div className="home-cdn__dot" data-row={56} data-col={71} />
                <div className="home-cdn__dot" data-row={56} data-col={72} />
                <div className="home-cdn__dot" data-row={56} data-col={73} />
                <div className="home-cdn__dot" data-row={56} data-col={74} />
                <div className="home-cdn__dot" data-row={56} data-col={75} />
                <div className="home-cdn__dot" data-row={56} data-col={76} />
                <div className="home-cdn__dot" data-row={56} data-col={77} />
                <div className="home-cdn__dot" data-row={56} data-col={78} />
                <div className="home-cdn__dot" data-row={56} data-col={79} />
                <div className="home-cdn__dot" data-row={56} data-col={80} />
                <div className="home-cdn__dot" data-row={56} data-col={81} />
                <div className="home-cdn__dot" data-row={56} data-col={82} />
                <div className="home-cdn__dot" data-row={56} data-col={83} />
                <div className="home-cdn__dot" data-row={56} data-col={84} />
                <div className="home-cdn__dot" data-row={56} data-col={85} />
                <div className="home-cdn__dot" data-row={56} data-col={86} />
                <div className="home-cdn__dot" data-row={56} data-col={87} />
                <div className="home-cdn__dot" data-row={56} data-col={88} />
                <div className="home-cdn__dot" data-row={56} data-col={89} />
                <div className="home-cdn__dot" data-row={56} data-col={90} />
                <div className="home-cdn__dot" data-row={56} data-col={91} />
                <div className="home-cdn__dot" data-row={56} data-col={92} />
                <div className="home-cdn__dot" data-row={56} data-col={93} />
                <div className="home-cdn__dot" data-row={56} data-col={94} />
                <div className="home-cdn__dot" data-row={56} data-col={95} />
                <div className="home-cdn__dot" data-row={56} data-col={96} />
                <div className="home-cdn__dot" data-row={56} data-col={97} />
                <div className="home-cdn__dot" data-row={56} data-col={98} />
                <div className="home-cdn__dot" data-row={56} data-col={99} data-continent="australia" />
                <div className="home-cdn__dot" data-row={56} data-col={100} data-continent="australia" />
                <div className="home-cdn__dot" data-row={56} data-col={101} />
                <div className="home-cdn__dot" data-row={56} data-col={102} />
                <div className="home-cdn__dot" data-row={56} data-col={103} />
                <div className="home-cdn__dot" data-row={56} data-col={104} />
                <div className="home-cdn__dot" data-row={56} data-col={105} />
                <div className="home-cdn__dot" data-row={56} data-col={106} data-continent="australia" />
                <div className="home-cdn__dot" data-row={56} data-col={107} data-continent="australia" />
                <div className="home-cdn__dot" data-row={56} data-col={108} />
                <div className="home-cdn__dot" data-row={56} data-col={109} />
                <div className="home-cdn__dot" data-row={56} data-col={110} />
                <div className="home-cdn__dot" data-row={56} data-col={111} />
                <div className="home-cdn__dot" data-row={56} data-col={112} />
                <div className="home-cdn__dot" data-row={56} data-col={113} />
                <div className="home-cdn__dot" data-row={56} data-col={114} />
                <div className="home-cdn__dot" data-row={57} data-col={1} />
                <div className="home-cdn__dot" data-row={57} data-col={2} />
                <div className="home-cdn__dot" data-row={57} data-col={3} />
                <div className="home-cdn__dot" data-row={57} data-col={4} />
                <div className="home-cdn__dot" data-row={57} data-col={5} />
                <div className="home-cdn__dot" data-row={57} data-col={6} />
                <div className="home-cdn__dot" data-row={57} data-col={7} />
                <div className="home-cdn__dot" data-row={57} data-col={8} />
                <div className="home-cdn__dot" data-row={57} data-col={9} />
                <div className="home-cdn__dot" data-row={57} data-col={10} />
                <div className="home-cdn__dot" data-row={57} data-col={11} />
                <div className="home-cdn__dot" data-row={57} data-col={12} />
                <div className="home-cdn__dot" data-row={57} data-col={13} />
                <div className="home-cdn__dot" data-row={57} data-col={14} />
                <div className="home-cdn__dot" data-row={57} data-col={15} />
                <div className="home-cdn__dot" data-row={57} data-col={16} />
                <div className="home-cdn__dot" data-row={57} data-col={17} />
                <div className="home-cdn__dot" data-row={57} data-col={18} />
                <div className="home-cdn__dot" data-row={57} data-col={19} />
                <div className="home-cdn__dot" data-row={57} data-col={20} />
                <div className="home-cdn__dot" data-row={57} data-col={21} />
                <div className="home-cdn__dot" data-row={57} data-col={22} />
                <div className="home-cdn__dot" data-row={57} data-col={23} />
                <div className="home-cdn__dot" data-row={57} data-col={24} />
                <div className="home-cdn__dot" data-row={57} data-col={25} />
                <div className="home-cdn__dot" data-row={57} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={57} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={57} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={57} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={57} data-col={30} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={57} data-col={31} />
                <div className="home-cdn__dot" data-row={57} data-col={32} />
                <div className="home-cdn__dot" data-row={57} data-col={33} />
                <div className="home-cdn__dot" data-row={57} data-col={34} />
                <div className="home-cdn__dot" data-row={57} data-col={35} />
                <div className="home-cdn__dot" data-row={57} data-col={36} />
                <div className="home-cdn__dot" data-row={57} data-col={37} />
                <div className="home-cdn__dot" data-row={57} data-col={38} />
                <div className="home-cdn__dot" data-row={57} data-col={39} />
                <div className="home-cdn__dot" data-row={57} data-col={40} />
                <div className="home-cdn__dot" data-row={57} data-col={41} />
                <div className="home-cdn__dot" data-row={57} data-col={42} />
                <div className="home-cdn__dot" data-row={57} data-col={43} />
                <div className="home-cdn__dot" data-row={57} data-col={44} />
                <div className="home-cdn__dot" data-row={57} data-col={45} />
                <div className="home-cdn__dot" data-row={57} data-col={46} />
                <div className="home-cdn__dot" data-row={57} data-col={47} />
                <div className="home-cdn__dot" data-row={57} data-col={48} />
                <div className="home-cdn__dot" data-row={57} data-col={49} />
                <div className="home-cdn__dot" data-row={57} data-col={50} />
                <div className="home-cdn__dot" data-row={57} data-col={51} />
                <div className="home-cdn__dot" data-row={57} data-col={52} />
                <div className="home-cdn__dot" data-row={57} data-col={53} />
                <div className="home-cdn__dot" data-row={57} data-col={54} />
                <div className="home-cdn__dot" data-row={57} data-col={55} />
                <div className="home-cdn__dot" data-row={57} data-col={56} />
                <div className="home-cdn__dot" data-row={57} data-col={57} />
                <div className="home-cdn__dot" data-row={57} data-col={58} />
                <div className="home-cdn__dot" data-row={57} data-col={59} />
                <div className="home-cdn__dot" data-row={57} data-col={60} />
                <div className="home-cdn__dot" data-row={57} data-col={61} />
                <div className="home-cdn__dot" data-row={57} data-col={62} />
                <div className="home-cdn__dot" data-row={57} data-col={63} />
                <div className="home-cdn__dot" data-row={57} data-col={64} />
                <div className="home-cdn__dot" data-row={57} data-col={65} />
                <div className="home-cdn__dot" data-row={57} data-col={66} />
                <div className="home-cdn__dot" data-row={57} data-col={67} />
                <div className="home-cdn__dot" data-row={57} data-col={68} />
                <div className="home-cdn__dot" data-row={57} data-col={69} />
                <div className="home-cdn__dot" data-row={57} data-col={70} />
                <div className="home-cdn__dot" data-row={57} data-col={71} />
                <div className="home-cdn__dot" data-row={57} data-col={72} />
                <div className="home-cdn__dot" data-row={57} data-col={73} />
                <div className="home-cdn__dot" data-row={57} data-col={74} />
                <div className="home-cdn__dot" data-row={57} data-col={75} />
                <div className="home-cdn__dot" data-row={57} data-col={76} />
                <div className="home-cdn__dot" data-row={57} data-col={77} />
                <div className="home-cdn__dot" data-row={57} data-col={78} />
                <div className="home-cdn__dot" data-row={57} data-col={79} />
                <div className="home-cdn__dot" data-row={57} data-col={80} />
                <div className="home-cdn__dot" data-row={57} data-col={81} />
                <div className="home-cdn__dot" data-row={57} data-col={82} />
                <div className="home-cdn__dot" data-row={57} data-col={83} />
                <div className="home-cdn__dot" data-row={57} data-col={84} />
                <div className="home-cdn__dot" data-row={57} data-col={85} />
                <div className="home-cdn__dot" data-row={57} data-col={86} />
                <div className="home-cdn__dot" data-row={57} data-col={87} />
                <div className="home-cdn__dot" data-row={57} data-col={88} />
                <div className="home-cdn__dot" data-row={57} data-col={89} />
                <div className="home-cdn__dot" data-row={57} data-col={90} />
                <div className="home-cdn__dot" data-row={57} data-col={91} />
                <div className="home-cdn__dot" data-row={57} data-col={92} />
                <div className="home-cdn__dot" data-row={57} data-col={93} />
                <div className="home-cdn__dot" data-row={57} data-col={94} />
                <div className="home-cdn__dot" data-row={57} data-col={95} />
                <div className="home-cdn__dot" data-row={57} data-col={96} />
                <div className="home-cdn__dot" data-row={57} data-col={97} />
                <div className="home-cdn__dot" data-row={57} data-col={98} />
                <div className="home-cdn__dot" data-row={57} data-col={99} />
                <div className="home-cdn__dot" data-row={57} data-col={100} />
                <div className="home-cdn__dot" data-row={57} data-col={101} />
                <div className="home-cdn__dot" data-row={57} data-col={102} />
                <div className="home-cdn__dot" data-row={57} data-col={103} />
                <div className="home-cdn__dot" data-row={57} data-col={104} />
                <div className="home-cdn__dot" data-row={57} data-col={105} />
                <div className="home-cdn__dot" data-row={57} data-col={106} />
                <div className="home-cdn__dot" data-row={57} data-col={107} data-continent="australia" />
                <div className="home-cdn__dot" data-row={57} data-col={108} />
                <div className="home-cdn__dot" data-row={57} data-col={109} />
                <div className="home-cdn__dot" data-row={57} data-col={110} />
                <div className="home-cdn__dot" data-row={57} data-col={111} />
                <div className="home-cdn__dot" data-row={57} data-col={112} />
                <div className="home-cdn__dot" data-row={57} data-col={113} />
                <div className="home-cdn__dot" data-row={57} data-col={114} />
                <div className="home-cdn__dot" data-row={58} data-col={1} />
                <div className="home-cdn__dot" data-row={58} data-col={2} />
                <div className="home-cdn__dot" data-row={58} data-col={3} />
                <div className="home-cdn__dot" data-row={58} data-col={4} />
                <div className="home-cdn__dot" data-row={58} data-col={5} />
                <div className="home-cdn__dot" data-row={58} data-col={6} />
                <div className="home-cdn__dot" data-row={58} data-col={7} />
                <div className="home-cdn__dot" data-row={58} data-col={8} />
                <div className="home-cdn__dot" data-row={58} data-col={9} />
                <div className="home-cdn__dot" data-row={58} data-col={10} />
                <div className="home-cdn__dot" data-row={58} data-col={11} />
                <div className="home-cdn__dot" data-row={58} data-col={12} />
                <div className="home-cdn__dot" data-row={58} data-col={13} />
                <div className="home-cdn__dot" data-row={58} data-col={14} />
                <div className="home-cdn__dot" data-row={58} data-col={15} />
                <div className="home-cdn__dot" data-row={58} data-col={16} />
                <div className="home-cdn__dot" data-row={58} data-col={17} />
                <div className="home-cdn__dot" data-row={58} data-col={18} />
                <div className="home-cdn__dot" data-row={58} data-col={19} />
                <div className="home-cdn__dot" data-row={58} data-col={20} />
                <div className="home-cdn__dot" data-row={58} data-col={21} />
                <div className="home-cdn__dot" data-row={58} data-col={22} />
                <div className="home-cdn__dot" data-row={58} data-col={23} />
                <div className="home-cdn__dot" data-row={58} data-col={24} />
                <div className="home-cdn__dot" data-row={58} data-col={25} />
                <div className="home-cdn__dot" data-row={58} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={58} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={58} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={58} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={58} data-col={30} />
                <div className="home-cdn__dot" data-row={58} data-col={31} />
                <div className="home-cdn__dot" data-row={58} data-col={32} />
                <div className="home-cdn__dot" data-row={58} data-col={33} />
                <div className="home-cdn__dot" data-row={58} data-col={34} />
                <div className="home-cdn__dot" data-row={58} data-col={35} />
                <div className="home-cdn__dot" data-row={58} data-col={36} />
                <div className="home-cdn__dot" data-row={58} data-col={37} />
                <div className="home-cdn__dot" data-row={58} data-col={38} />
                <div className="home-cdn__dot" data-row={58} data-col={39} />
                <div className="home-cdn__dot" data-row={58} data-col={40} />
                <div className="home-cdn__dot" data-row={58} data-col={41} />
                <div className="home-cdn__dot" data-row={58} data-col={42} />
                <div className="home-cdn__dot" data-row={58} data-col={43} />
                <div className="home-cdn__dot" data-row={58} data-col={44} />
                <div className="home-cdn__dot" data-row={58} data-col={45} />
                <div className="home-cdn__dot" data-row={58} data-col={46} />
                <div className="home-cdn__dot" data-row={58} data-col={47} />
                <div className="home-cdn__dot" data-row={58} data-col={48} />
                <div className="home-cdn__dot" data-row={58} data-col={49} />
                <div className="home-cdn__dot" data-row={58} data-col={50} />
                <div className="home-cdn__dot" data-row={58} data-col={51} />
                <div className="home-cdn__dot" data-row={58} data-col={52} />
                <div className="home-cdn__dot" data-row={58} data-col={53} />
                <div className="home-cdn__dot" data-row={58} data-col={54} />
                <div className="home-cdn__dot" data-row={58} data-col={55} />
                <div className="home-cdn__dot" data-row={58} data-col={56} />
                <div className="home-cdn__dot" data-row={58} data-col={57} />
                <div className="home-cdn__dot" data-row={58} data-col={58} />
                <div className="home-cdn__dot" data-row={58} data-col={59} />
                <div className="home-cdn__dot" data-row={58} data-col={60} />
                <div className="home-cdn__dot" data-row={58} data-col={61} />
                <div className="home-cdn__dot" data-row={58} data-col={62} />
                <div className="home-cdn__dot" data-row={58} data-col={63} />
                <div className="home-cdn__dot" data-row={58} data-col={64} />
                <div className="home-cdn__dot" data-row={58} data-col={65} />
                <div className="home-cdn__dot" data-row={58} data-col={66} />
                <div className="home-cdn__dot" data-row={58} data-col={67} />
                <div className="home-cdn__dot" data-row={58} data-col={68} />
                <div className="home-cdn__dot" data-row={58} data-col={69} />
                <div className="home-cdn__dot" data-row={58} data-col={70} />
                <div className="home-cdn__dot" data-row={58} data-col={71} />
                <div className="home-cdn__dot" data-row={58} data-col={72} />
                <div className="home-cdn__dot" data-row={58} data-col={73} />
                <div className="home-cdn__dot" data-row={58} data-col={74} />
                <div className="home-cdn__dot" data-row={58} data-col={75} />
                <div className="home-cdn__dot" data-row={58} data-col={76} />
                <div className="home-cdn__dot" data-row={58} data-col={77} />
                <div className="home-cdn__dot" data-row={58} data-col={78} />
                <div className="home-cdn__dot" data-row={58} data-col={79} />
                <div className="home-cdn__dot" data-row={58} data-col={80} />
                <div className="home-cdn__dot" data-row={58} data-col={81} />
                <div className="home-cdn__dot" data-row={58} data-col={82} />
                <div className="home-cdn__dot" data-row={58} data-col={83} />
                <div className="home-cdn__dot" data-row={58} data-col={84} />
                <div className="home-cdn__dot" data-row={58} data-col={85} />
                <div className="home-cdn__dot" data-row={58} data-col={86} />
                <div className="home-cdn__dot" data-row={58} data-col={87} />
                <div className="home-cdn__dot" data-row={58} data-col={88} />
                <div className="home-cdn__dot" data-row={58} data-col={89} />
                <div className="home-cdn__dot" data-row={58} data-col={90} />
                <div className="home-cdn__dot" data-row={58} data-col={91} />
                <div className="home-cdn__dot" data-row={58} data-col={92} />
                <div className="home-cdn__dot" data-row={58} data-col={93} />
                <div className="home-cdn__dot" data-row={58} data-col={94} />
                <div className="home-cdn__dot" data-row={58} data-col={95} />
                <div className="home-cdn__dot" data-row={58} data-col={96} />
                <div className="home-cdn__dot" data-row={58} data-col={97} />
                <div className="home-cdn__dot" data-row={58} data-col={98} />
                <div className="home-cdn__dot" data-row={58} data-col={99} />
                <div className="home-cdn__dot" data-row={58} data-col={100} />
                <div className="home-cdn__dot" data-row={58} data-col={101} />
                <div className="home-cdn__dot" data-row={58} data-col={102} />
                <div className="home-cdn__dot" data-row={58} data-col={103} />
                <div className="home-cdn__dot" data-row={58} data-col={104} />
                <div className="home-cdn__dot" data-row={58} data-col={105} />
                <div className="home-cdn__dot" data-row={58} data-col={106} />
                <div className="home-cdn__dot" data-row={58} data-col={107} />
                <div className="home-cdn__dot" data-row={58} data-col={108} />
                <div className="home-cdn__dot" data-row={58} data-col={109} />
                <div className="home-cdn__dot" data-row={58} data-col={110} />
                <div className="home-cdn__dot" data-row={58} data-col={111} />
                <div className="home-cdn__dot" data-row={58} data-col={112} />
                <div className="home-cdn__dot" data-row={58} data-col={113} />
                <div className="home-cdn__dot" data-row={58} data-col={114} />
                <div className="home-cdn__dot" data-row={59} data-col={1} />
                <div className="home-cdn__dot" data-row={59} data-col={2} />
                <div className="home-cdn__dot" data-row={59} data-col={3} />
                <div className="home-cdn__dot" data-row={59} data-col={4} />
                <div className="home-cdn__dot" data-row={59} data-col={5} />
                <div className="home-cdn__dot" data-row={59} data-col={6} />
                <div className="home-cdn__dot" data-row={59} data-col={7} />
                <div className="home-cdn__dot" data-row={59} data-col={8} />
                <div className="home-cdn__dot" data-row={59} data-col={9} />
                <div className="home-cdn__dot" data-row={59} data-col={10} />
                <div className="home-cdn__dot" data-row={59} data-col={11} />
                <div className="home-cdn__dot" data-row={59} data-col={12} />
                <div className="home-cdn__dot" data-row={59} data-col={13} />
                <div className="home-cdn__dot" data-row={59} data-col={14} />
                <div className="home-cdn__dot" data-row={59} data-col={15} />
                <div className="home-cdn__dot" data-row={59} data-col={16} />
                <div className="home-cdn__dot" data-row={59} data-col={17} />
                <div className="home-cdn__dot" data-row={59} data-col={18} />
                <div className="home-cdn__dot" data-row={59} data-col={19} />
                <div className="home-cdn__dot" data-row={59} data-col={20} />
                <div className="home-cdn__dot" data-row={59} data-col={21} />
                <div className="home-cdn__dot" data-row={59} data-col={22} />
                <div className="home-cdn__dot" data-row={59} data-col={23} />
                <div className="home-cdn__dot" data-row={59} data-col={24} />
                <div className="home-cdn__dot" data-row={59} data-col={25} />
                <div className="home-cdn__dot" data-row={59} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={59} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={59} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={59} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={59} data-col={30} />
                <div className="home-cdn__dot" data-row={59} data-col={31} />
                <div className="home-cdn__dot" data-row={59} data-col={32} />
                <div className="home-cdn__dot" data-row={59} data-col={33} />
                <div className="home-cdn__dot" data-row={59} data-col={34} />
                <div className="home-cdn__dot" data-row={59} data-col={35} />
                <div className="home-cdn__dot" data-row={59} data-col={36} />
                <div className="home-cdn__dot" data-row={59} data-col={37} />
                <div className="home-cdn__dot" data-row={59} data-col={38} />
                <div className="home-cdn__dot" data-row={59} data-col={39} />
                <div className="home-cdn__dot" data-row={59} data-col={40} />
                <div className="home-cdn__dot" data-row={59} data-col={41} />
                <div className="home-cdn__dot" data-row={59} data-col={42} />
                <div className="home-cdn__dot" data-row={59} data-col={43} />
                <div className="home-cdn__dot" data-row={59} data-col={44} />
                <div className="home-cdn__dot" data-row={59} data-col={45} />
                <div className="home-cdn__dot" data-row={59} data-col={46} />
                <div className="home-cdn__dot" data-row={59} data-col={47} />
                <div className="home-cdn__dot" data-row={59} data-col={48} />
                <div className="home-cdn__dot" data-row={59} data-col={49} />
                <div className="home-cdn__dot" data-row={59} data-col={50} />
                <div className="home-cdn__dot" data-row={59} data-col={51} />
                <div className="home-cdn__dot" data-row={59} data-col={52} />
                <div className="home-cdn__dot" data-row={59} data-col={53} />
                <div className="home-cdn__dot" data-row={59} data-col={54} />
                <div className="home-cdn__dot" data-row={59} data-col={55} />
                <div className="home-cdn__dot" data-row={59} data-col={56} />
                <div className="home-cdn__dot" data-row={59} data-col={57} />
                <div className="home-cdn__dot" data-row={59} data-col={58} />
                <div className="home-cdn__dot" data-row={59} data-col={59} />
                <div className="home-cdn__dot" data-row={59} data-col={60} />
                <div className="home-cdn__dot" data-row={59} data-col={61} />
                <div className="home-cdn__dot" data-row={59} data-col={62} />
                <div className="home-cdn__dot" data-row={59} data-col={63} />
                <div className="home-cdn__dot" data-row={59} data-col={64} />
                <div className="home-cdn__dot" data-row={59} data-col={65} />
                <div className="home-cdn__dot" data-row={59} data-col={66} />
                <div className="home-cdn__dot" data-row={59} data-col={67} />
                <div className="home-cdn__dot" data-row={59} data-col={68} />
                <div className="home-cdn__dot" data-row={59} data-col={69} />
                <div className="home-cdn__dot" data-row={59} data-col={70} />
                <div className="home-cdn__dot" data-row={59} data-col={71} />
                <div className="home-cdn__dot" data-row={59} data-col={72} />
                <div className="home-cdn__dot" data-row={59} data-col={73} />
                <div className="home-cdn__dot" data-row={59} data-col={74} />
                <div className="home-cdn__dot" data-row={59} data-col={75} />
                <div className="home-cdn__dot" data-row={59} data-col={76} />
                <div className="home-cdn__dot" data-row={59} data-col={77} />
                <div className="home-cdn__dot" data-row={59} data-col={78} />
                <div className="home-cdn__dot" data-row={59} data-col={79} />
                <div className="home-cdn__dot" data-row={59} data-col={80} />
                <div className="home-cdn__dot" data-row={59} data-col={81} />
                <div className="home-cdn__dot" data-row={59} data-col={82} />
                <div className="home-cdn__dot" data-row={59} data-col={83} />
                <div className="home-cdn__dot" data-row={59} data-col={84} />
                <div className="home-cdn__dot" data-row={59} data-col={85} />
                <div className="home-cdn__dot" data-row={59} data-col={86} />
                <div className="home-cdn__dot" data-row={59} data-col={87} />
                <div className="home-cdn__dot" data-row={59} data-col={88} />
                <div className="home-cdn__dot" data-row={59} data-col={89} />
                <div className="home-cdn__dot" data-row={59} data-col={90} />
                <div className="home-cdn__dot" data-row={59} data-col={91} />
                <div className="home-cdn__dot" data-row={59} data-col={92} />
                <div className="home-cdn__dot" data-row={59} data-col={93} />
                <div className="home-cdn__dot" data-row={59} data-col={94} />
                <div className="home-cdn__dot" data-row={59} data-col={95} />
                <div className="home-cdn__dot" data-row={59} data-col={96} />
                <div className="home-cdn__dot" data-row={59} data-col={97} />
                <div className="home-cdn__dot" data-row={59} data-col={98} />
                <div className="home-cdn__dot" data-row={59} data-col={99} />
                <div className="home-cdn__dot" data-row={59} data-col={100} />
                <div className="home-cdn__dot" data-row={59} data-col={101} />
                <div className="home-cdn__dot" data-row={59} data-col={102} />
                <div className="home-cdn__dot" data-row={59} data-col={103} />
                <div className="home-cdn__dot" data-row={59} data-col={104} />
                <div className="home-cdn__dot" data-row={59} data-col={105} />
                <div className="home-cdn__dot" data-row={59} data-col={106} />
                <div className="home-cdn__dot" data-row={59} data-col={107} />
                <div className="home-cdn__dot" data-row={59} data-col={108} />
                <div className="home-cdn__dot" data-row={59} data-col={109} />
                <div className="home-cdn__dot" data-row={59} data-col={110} />
                <div className="home-cdn__dot" data-row={59} data-col={111} />
                <div className="home-cdn__dot" data-row={59} data-col={112} />
                <div className="home-cdn__dot" data-row={59} data-col={113} />
                <div className="home-cdn__dot" data-row={59} data-col={114} />
                <div className="home-cdn__dot" data-row={60} data-col={1} />
                <div className="home-cdn__dot" data-row={60} data-col={2} />
                <div className="home-cdn__dot" data-row={60} data-col={3} />
                <div className="home-cdn__dot" data-row={60} data-col={4} />
                <div className="home-cdn__dot" data-row={60} data-col={5} />
                <div className="home-cdn__dot" data-row={60} data-col={6} />
                <div className="home-cdn__dot" data-row={60} data-col={7} />
                <div className="home-cdn__dot" data-row={60} data-col={8} />
                <div className="home-cdn__dot" data-row={60} data-col={9} />
                <div className="home-cdn__dot" data-row={60} data-col={10} />
                <div className="home-cdn__dot" data-row={60} data-col={11} />
                <div className="home-cdn__dot" data-row={60} data-col={12} />
                <div className="home-cdn__dot" data-row={60} data-col={13} />
                <div className="home-cdn__dot" data-row={60} data-col={14} />
                <div className="home-cdn__dot" data-row={60} data-col={15} />
                <div className="home-cdn__dot" data-row={60} data-col={16} />
                <div className="home-cdn__dot" data-row={60} data-col={17} />
                <div className="home-cdn__dot" data-row={60} data-col={18} />
                <div className="home-cdn__dot" data-row={60} data-col={19} />
                <div className="home-cdn__dot" data-row={60} data-col={20} />
                <div className="home-cdn__dot" data-row={60} data-col={21} />
                <div className="home-cdn__dot" data-row={60} data-col={22} />
                <div className="home-cdn__dot" data-row={60} data-col={23} />
                <div className="home-cdn__dot" data-row={60} data-col={24} />
                <div className="home-cdn__dot" data-row={60} data-col={25} />
                <div className="home-cdn__dot" data-row={60} data-col={26} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={60} data-col={27} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={60} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={60} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={60} data-col={30} />
                <div className="home-cdn__dot" data-row={60} data-col={31} />
                <div className="home-cdn__dot" data-row={60} data-col={32} />
                <div className="home-cdn__dot" data-row={60} data-col={33} />
                <div className="home-cdn__dot" data-row={60} data-col={34} />
                <div className="home-cdn__dot" data-row={60} data-col={35} />
                <div className="home-cdn__dot" data-row={60} data-col={36} />
                <div className="home-cdn__dot" data-row={60} data-col={37} />
                <div className="home-cdn__dot" data-row={60} data-col={38} />
                <div className="home-cdn__dot" data-row={60} data-col={39} />
                <div className="home-cdn__dot" data-row={60} data-col={40} />
                <div className="home-cdn__dot" data-row={60} data-col={41} />
                <div className="home-cdn__dot" data-row={60} data-col={42} />
                <div className="home-cdn__dot" data-row={60} data-col={43} />
                <div className="home-cdn__dot" data-row={60} data-col={44} />
                <div className="home-cdn__dot" data-row={60} data-col={45} />
                <div className="home-cdn__dot" data-row={60} data-col={46} />
                <div className="home-cdn__dot" data-row={60} data-col={47} />
                <div className="home-cdn__dot" data-row={60} data-col={48} />
                <div className="home-cdn__dot" data-row={60} data-col={49} />
                <div className="home-cdn__dot" data-row={60} data-col={50} />
                <div className="home-cdn__dot" data-row={60} data-col={51} />
                <div className="home-cdn__dot" data-row={60} data-col={52} />
                <div className="home-cdn__dot" data-row={60} data-col={53} />
                <div className="home-cdn__dot" data-row={60} data-col={54} />
                <div className="home-cdn__dot" data-row={60} data-col={55} />
                <div className="home-cdn__dot" data-row={60} data-col={56} />
                <div className="home-cdn__dot" data-row={60} data-col={57} />
                <div className="home-cdn__dot" data-row={60} data-col={58} />
                <div className="home-cdn__dot" data-row={60} data-col={59} />
                <div className="home-cdn__dot" data-row={60} data-col={60} />
                <div className="home-cdn__dot" data-row={60} data-col={61} />
                <div className="home-cdn__dot" data-row={60} data-col={62} />
                <div className="home-cdn__dot" data-row={60} data-col={63} />
                <div className="home-cdn__dot" data-row={60} data-col={64} />
                <div className="home-cdn__dot" data-row={60} data-col={65} />
                <div className="home-cdn__dot" data-row={60} data-col={66} />
                <div className="home-cdn__dot" data-row={60} data-col={67} />
                <div className="home-cdn__dot" data-row={60} data-col={68} />
                <div className="home-cdn__dot" data-row={60} data-col={69} />
                <div className="home-cdn__dot" data-row={60} data-col={70} />
                <div className="home-cdn__dot" data-row={60} data-col={71} />
                <div className="home-cdn__dot" data-row={60} data-col={72} />
                <div className="home-cdn__dot" data-row={60} data-col={73} />
                <div className="home-cdn__dot" data-row={60} data-col={74} />
                <div className="home-cdn__dot" data-row={60} data-col={75} />
                <div className="home-cdn__dot" data-row={60} data-col={76} />
                <div className="home-cdn__dot" data-row={60} data-col={77} />
                <div className="home-cdn__dot" data-row={60} data-col={78} />
                <div className="home-cdn__dot" data-row={60} data-col={79} />
                <div className="home-cdn__dot" data-row={60} data-col={80} />
                <div className="home-cdn__dot" data-row={60} data-col={81} />
                <div className="home-cdn__dot" data-row={60} data-col={82} />
                <div className="home-cdn__dot" data-row={60} data-col={83} />
                <div className="home-cdn__dot" data-row={60} data-col={84} />
                <div className="home-cdn__dot" data-row={60} data-col={85} />
                <div className="home-cdn__dot" data-row={60} data-col={86} />
                <div className="home-cdn__dot" data-row={60} data-col={87} />
                <div className="home-cdn__dot" data-row={60} data-col={88} />
                <div className="home-cdn__dot" data-row={60} data-col={89} />
                <div className="home-cdn__dot" data-row={60} data-col={90} />
                <div className="home-cdn__dot" data-row={60} data-col={91} />
                <div className="home-cdn__dot" data-row={60} data-col={92} />
                <div className="home-cdn__dot" data-row={60} data-col={93} />
                <div className="home-cdn__dot" data-row={60} data-col={94} />
                <div className="home-cdn__dot" data-row={60} data-col={95} />
                <div className="home-cdn__dot" data-row={60} data-col={96} />
                <div className="home-cdn__dot" data-row={60} data-col={97} />
                <div className="home-cdn__dot" data-row={60} data-col={98} />
                <div className="home-cdn__dot" data-row={60} data-col={99} />
                <div className="home-cdn__dot" data-row={60} data-col={100} />
                <div className="home-cdn__dot" data-row={60} data-col={101} />
                <div className="home-cdn__dot" data-row={60} data-col={102} />
                <div className="home-cdn__dot" data-row={60} data-col={103} />
                <div className="home-cdn__dot" data-row={60} data-col={104} />
                <div className="home-cdn__dot" data-row={60} data-col={105} />
                <div className="home-cdn__dot" data-row={60} data-col={106} />
                <div className="home-cdn__dot" data-row={60} data-col={107} />
                <div className="home-cdn__dot" data-row={60} data-col={108} />
                <div className="home-cdn__dot" data-row={60} data-col={109} />
                <div className="home-cdn__dot" data-row={60} data-col={110} />
                <div className="home-cdn__dot" data-row={60} data-col={111} />
                <div className="home-cdn__dot" data-row={60} data-col={112} />
                <div className="home-cdn__dot" data-row={60} data-col={113} />
                <div className="home-cdn__dot" data-row={60} data-col={114} />
                <div className="home-cdn__dot" data-row={61} data-col={1} />
                <div className="home-cdn__dot" data-row={61} data-col={2} />
                <div className="home-cdn__dot" data-row={61} data-col={3} />
                <div className="home-cdn__dot" data-row={61} data-col={4} />
                <div className="home-cdn__dot" data-row={61} data-col={5} />
                <div className="home-cdn__dot" data-row={61} data-col={6} />
                <div className="home-cdn__dot" data-row={61} data-col={7} />
                <div className="home-cdn__dot" data-row={61} data-col={8} />
                <div className="home-cdn__dot" data-row={61} data-col={9} />
                <div className="home-cdn__dot" data-row={61} data-col={10} />
                <div className="home-cdn__dot" data-row={61} data-col={11} />
                <div className="home-cdn__dot" data-row={61} data-col={12} />
                <div className="home-cdn__dot" data-row={61} data-col={13} />
                <div className="home-cdn__dot" data-row={61} data-col={14} />
                <div className="home-cdn__dot" data-row={61} data-col={15} />
                <div className="home-cdn__dot" data-row={61} data-col={16} />
                <div className="home-cdn__dot" data-row={61} data-col={17} />
                <div className="home-cdn__dot" data-row={61} data-col={18} />
                <div className="home-cdn__dot" data-row={61} data-col={19} />
                <div className="home-cdn__dot" data-row={61} data-col={20} />
                <div className="home-cdn__dot" data-row={61} data-col={21} />
                <div className="home-cdn__dot" data-row={61} data-col={22} />
                <div className="home-cdn__dot" data-row={61} data-col={23} />
                <div className="home-cdn__dot" data-row={61} data-col={24} />
                <div className="home-cdn__dot" data-row={61} data-col={25} />
                <div className="home-cdn__dot" data-row={61} data-col={26} />
                <div className="home-cdn__dot" data-row={61} data-col={27} />
                <div className="home-cdn__dot" data-row={61} data-col={28} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={61} data-col={29} data-continent="south-america" />
                <div className="home-cdn__dot" data-row={61} data-col={30} />
                <div className="home-cdn__dot" data-row={61} data-col={31} />
                <div className="home-cdn__dot" data-row={61} data-col={32} />
                <div className="home-cdn__dot" data-row={61} data-col={33} />
                <div className="home-cdn__dot" data-row={61} data-col={34} />
                <div className="home-cdn__dot" data-row={61} data-col={35} />
                <div className="home-cdn__dot" data-row={61} data-col={36} />
                <div className="home-cdn__dot" data-row={61} data-col={37} />
                <div className="home-cdn__dot" data-row={61} data-col={38} />
                <div className="home-cdn__dot" data-row={61} data-col={39} />
                <div className="home-cdn__dot" data-row={61} data-col={40} />
                <div className="home-cdn__dot" data-row={61} data-col={41} />
                <div className="home-cdn__dot" data-row={61} data-col={42} />
                <div className="home-cdn__dot" data-row={61} data-col={43} />
                <div className="home-cdn__dot" data-row={61} data-col={44} />
                <div className="home-cdn__dot" data-row={61} data-col={45} />
                <div className="home-cdn__dot" data-row={61} data-col={46} />
                <div className="home-cdn__dot" data-row={61} data-col={47} />
                <div className="home-cdn__dot" data-row={61} data-col={48} />
                <div className="home-cdn__dot" data-row={61} data-col={49} />
                <div className="home-cdn__dot" data-row={61} data-col={50} />
                <div className="home-cdn__dot" data-row={61} data-col={51} />
                <div className="home-cdn__dot" data-row={61} data-col={52} />
                <div className="home-cdn__dot" data-row={61} data-col={53} />
                <div className="home-cdn__dot" data-row={61} data-col={54} />
                <div className="home-cdn__dot" data-row={61} data-col={55} />
                <div className="home-cdn__dot" data-row={61} data-col={56} />
                <div className="home-cdn__dot" data-row={61} data-col={57} />
                <div className="home-cdn__dot" data-row={61} data-col={58} />
                <div className="home-cdn__dot" data-row={61} data-col={59} />
                <div className="home-cdn__dot" data-row={61} data-col={60} />
                <div className="home-cdn__dot" data-row={61} data-col={61} />
                <div className="home-cdn__dot" data-row={61} data-col={62} />
                <div className="home-cdn__dot" data-row={61} data-col={63} />
                <div className="home-cdn__dot" data-row={61} data-col={64} />
                <div className="home-cdn__dot" data-row={61} data-col={65} />
                <div className="home-cdn__dot" data-row={61} data-col={66} />
                <div className="home-cdn__dot" data-row={61} data-col={67} />
                <div className="home-cdn__dot" data-row={61} data-col={68} />
                <div className="home-cdn__dot" data-row={61} data-col={69} />
                <div className="home-cdn__dot" data-row={61} data-col={70} />
                <div className="home-cdn__dot" data-row={61} data-col={71} />
                <div className="home-cdn__dot" data-row={61} data-col={72} />
                <div className="home-cdn__dot" data-row={61} data-col={73} />
                <div className="home-cdn__dot" data-row={61} data-col={74} />
                <div className="home-cdn__dot" data-row={61} data-col={75} />
                <div className="home-cdn__dot" data-row={61} data-col={76} />
                <div className="home-cdn__dot" data-row={61} data-col={77} />
                <div className="home-cdn__dot" data-row={61} data-col={78} />
                <div className="home-cdn__dot" data-row={61} data-col={79} />
                <div className="home-cdn__dot" data-row={61} data-col={80} />
                <div className="home-cdn__dot" data-row={61} data-col={81} />
                <div className="home-cdn__dot" data-row={61} data-col={82} />
                <div className="home-cdn__dot" data-row={61} data-col={83} />
                <div className="home-cdn__dot" data-row={61} data-col={84} />
                <div className="home-cdn__dot" data-row={61} data-col={85} />
                <div className="home-cdn__dot" data-row={61} data-col={86} />
                <div className="home-cdn__dot" data-row={61} data-col={87} />
                <div className="home-cdn__dot" data-row={61} data-col={88} />
                <div className="home-cdn__dot" data-row={61} data-col={89} />
                <div className="home-cdn__dot" data-row={61} data-col={90} />
                <div className="home-cdn__dot" data-row={61} data-col={91} />
                <div className="home-cdn__dot" data-row={61} data-col={92} />
                <div className="home-cdn__dot" data-row={61} data-col={93} />
                <div className="home-cdn__dot" data-row={61} data-col={94} />
                <div className="home-cdn__dot" data-row={61} data-col={95} />
                <div className="home-cdn__dot" data-row={61} data-col={96} />
                <div className="home-cdn__dot" data-row={61} data-col={97} />
                <div className="home-cdn__dot" data-row={61} data-col={98} />
                <div className="home-cdn__dot" data-row={61} data-col={99} />
                <div className="home-cdn__dot" data-row={61} data-col={100} />
                <div className="home-cdn__dot" data-row={61} data-col={101} />
                <div className="home-cdn__dot" data-row={61} data-col={102} />
                <div className="home-cdn__dot" data-row={61} data-col={103} />
                <div className="home-cdn__dot" data-row={61} data-col={104} />
                <div className="home-cdn__dot" data-row={61} data-col={105} />
                <div className="home-cdn__dot" data-row={61} data-col={106} />
                <div className="home-cdn__dot" data-row={61} data-col={107} />
                <div className="home-cdn__dot" data-row={61} data-col={108} />
                <div className="home-cdn__dot" data-row={61} data-col={109} />
                <div className="home-cdn__dot" data-row={61} data-col={110} />
                <div className="home-cdn__dot" data-row={61} data-col={111} />
                <div className="home-cdn__dot" data-row={61} data-col={112} />
                <div className="home-cdn__dot" data-row={61} data-col={113} />
                <div className="home-cdn__dot" data-row={61} data-col={114} />
            </div>
        </div>

    );
}

export default CdnMap;