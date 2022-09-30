import React, { useState } from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import Button from '../button/button.js';
import styles from './yandex-map.module.css'
import PlacemarkInfo from '../placemark-info/placemark-info.js';
import AddPlacemarkForm from '../add-placemark-form/add-placemark-form.js';
import Toast from '../toast/toast.jsx';
import MapButton from '../map-button/map-button.jsx';

import faqIcon from '../../assets/icons/faq.svg'
import addIcon from '../../assets/icons/add.svg'
import FAQ from '../faq/faq.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setCode, showInfo } from '../../services/reducers/placemarkInfo.jsx';
import { hideFAQ, setDisappear, showFAQ } from '../../services/reducers/faq.jsx';
import { setCoordinates, showForm } from '../../services/reducers/addPlacemarkForm.jsx';

const defaultMapState = {
    center: [59.938567244979545, 30.315890079017883],
    zoom: 15
}

const YandexMap = () => {

    const dispatch = useDispatch()

    const isFAQShow = useSelector((state=>state.faq.isFAQShow))
    const isInfoShow =  useSelector((state=>state.placemarkInfo.isInfoShow))
    const isFormShow =  useSelector((state=>state.addPlacemarkForm.isFormShow))
    const isToastShow =  useSelector((state=>state.addPlacemarkForm.isToastShow))
    const coordinates =  useSelector((state=>state.addPlacemarkForm.coordinates))

   // const 

    const[placemarks, setPlacemarks] = useState([
        { pos: [55.684758, 37.738521], code: '1234' },
        { pos: [53.684758, 37.738521], code: '123434' },
        { pos: [54.684758, 37.738521], code: '123344' },
    ]);

    const [current, setCurrent] = useState('');

    function addObject(e){
        dispatch(setCoordinates(e.get("coords")))
    }

    const showInfoHandler = (param) => (event) => {
      dispatch(showInfo())
       dispatch(setCode(param));
    }
    const showFAQHandler = (event) => {
        dispatch(showFAQ())
    }

    const hideFAQHandler = async (event) => {
        dispatch(setDisappear())
        await new Promise(r => setTimeout(r, 200))
        dispatch(hideFAQ())
    }
    const showFormHandler = (event) => {
        dispatch(showForm())
    }
    // return ( 
    //     <YMaps>  
    //         <Map onClick={addObject} className={styles.map} defaultState={defaultMapState}>
    //             {placemarks.map((placemark) => { 
    //                  return <Placemark geometry={placemark.pos} onClick={showInfo(placemark.code)}/>
    //             })}
    //         </Map>
    //         <div className={styles.addPlacemarkContainer}>
    //             <AddPlacemarkForm/>
    //             <Button text='Добавить' icon={addIcon}></Button>
    //         </div>
    //         {isPlacemarkInfoOpen && <PlacemarkInfo code={current}/>}
    //     </YMaps>
    // );
    return ( 
        <YMaps>  
            <Map onClick={addObject} className={styles.map} defaultState={defaultMapState}>
                {placemarks.map((placemark) => { 
                     return <Placemark geometry={placemark.pos} onClick={showInfoHandler(placemark.code)}/>
                })}
                {isFormShow && <Placemark geometry={coordinates} options={{ 
                    preset: "islands#circleDotIcon",
                    // Setting the placemark color (in RGB format).
                    iconColor: '#5B4885'
                
                    //preset: "islands#circleDotIcon",
                    // Setting the placemark color (in RGB format).
                    //iconColor: '#ff0000'
                    // iconLayout:'default#image',
                    // iconImageHref: '../../assets/icons/movePlacemark.png',
                    // iconImageSize: [40, 40],
                    // iconImageOffset: [-20, -20]
                }}
                    />}
            </Map>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    {isFormShow && <AddPlacemarkForm/>}
                </div>
                <div className={styles.popUpsContainer}>
                    <div>
                        {isToastShow && <Toast/>}
                    </div>
                    {isInfoShow && <PlacemarkInfo code={current}/>}
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.mapButtonsContainer}>
                        <MapButton icon={addIcon} onClick={showFormHandler}/>
                        <MapButton icon={faqIcon} onMouseEnter={showFAQHandler} onMouseLeave={hideFAQHandler}/>
                    </div>
                    {isFAQShow && <FAQ />}
                </div>
                
            </div>
            
        </YMaps>
    );
}
 
export default YandexMap;