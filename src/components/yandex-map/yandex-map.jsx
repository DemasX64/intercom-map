/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import {
  YMaps, Map, Placemark,
} from '@pbe/react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import styles from './yandex-map.module.css';
import PlacemarkInfo from '../placemark-info/placemark-info';
import AddPlacemarkForm from '../add-placemark-form/add-placemark-form';
import Toast from '../toast/toast';
import MapButton from '../map-button/map-button';

import faqIcon from '../../assets/icons/faq.svg';
import addIcon from '../../assets/icons/add.svg';
import FAQ from '../faq/faq';
import { setCode, showInfo } from '../../services/reducers/placemarkInfo';
import { hideFAQ, showFAQ } from '../../services/reducers/faq';
import { setCoordinates, showForm } from '../../services/reducers/addPlacemarkForm';
import { getAllPlacemarks } from '../../utils/map-api';
import BottomDrawer from '../bottom-drawer/bottom-drawer';

const defaultMapState = {
  center: [59.938567244979545, 30.315890079017883],
  zoom: 15,
};

const YandexMap = () => {
  const dispatch = useDispatch();

  const isFAQShow = useSelector(((state) => state.faq.isFAQShow));
  const isInfoShow = useSelector(((state) => state.placemarkInfo.isInfoShow));
  const isFormShow = useSelector(((state) => state.addPlacemarkForm.isFormShow));
  const isToastShow = useSelector(((state) => state.addPlacemarkForm.isToastShow));
  const coordinates = useSelector(((state) => state.addPlacemarkForm.coordinates));
  const placemarks = useSelector((state) => state.placemarkInfo.placemarks);
  const currentPlacemarkID = useSelector((state) => state.placemarkInfo.placemarkID);

  useEffect(() => {
    dispatch(getAllPlacemarks());
  }, []);

  const addObject = (e) => {
    dispatch(setCoordinates(e.get('coords')));
  };

  const showInfoHandler = (param) => () => {
    dispatch(showInfo(param._id));
    dispatch(setCode(param.code));
  };
  const showFAQHandler = () => {
    dispatch(showFAQ());
  };

  const hideFAQHandler = async () => {
    dispatch(hideFAQ());
  };
  const showFormHandler = () => {
    dispatch(showForm());
  };

  const getPlacemarkColor = (id) => (id === currentPlacemarkID ? { iconColor: '#5B4885' } : { iconColor: '#4996F8' });

  return (
    <YMaps>
      <Map onClick={addObject} className={styles.map} defaultState={defaultMapState}>
        {placemarks.map((placemark) => {
          const {
            _id, lat, lng, code,
          } = placemark;
          const pos = [lat, lng];
          return (
            <Placemark
              key={_id}
              options={getPlacemarkColor(_id)}
              geometry={pos}
              onClick={showInfoHandler({ code, _id })}
            />
          );
        })}
        {isFormShow && (
          <Placemark
            geometry={coordinates}
            options={{
              preset: 'islands#circleDotIcon',
              // Setting the placemark color (in RGB format).
              iconColor: '#5B4885',
              // preset: "islands#circleDotIcon",
              // Setting the placemark color (in RGB format).
              // iconColor: '#ff0000'
              // iconLayout:'default#image',
              // iconImageHref: '../../assets/icons/movePlacemark.png',
              // iconImageSize: [40, 40],
              // iconImageOffset: [-20, -20]
            }}
          />
        )}
        {/* <GeolocationControl options={{ position: { right: 10, top: 200 } }} /> */}
      </Map>
      {
      isMobile
        ?
          <div className={styles.mobileContainer} style={{pointerEvents:`${!isFAQShow?'none':''}`}}>
            <MapButton icon={addIcon} onClick={showFormHandler} />
            <MapButton icon={faqIcon} onClick={showFAQHandler} />
            <AnimatePresence>
              {isFAQShow&&<BottomDrawer>
                <FAQ />
              </BottomDrawer>}
            </AnimatePresence>
          
            {isInfoShow&&<BottomDrawer>
              <PlacemarkInfo />
            </BottomDrawer>}
          </div>
        :
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <AnimatePresence>
            {isFormShow && <AddPlacemarkForm />}
          </AnimatePresence>
        </div>
        <div className={styles.popUpsContainer}>
          <div>
            <AnimatePresence>
              {isToastShow && <Toast />}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {isInfoShow && <PlacemarkInfo />}
          </AnimatePresence>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.mapButtonsContainer}>
            <MapButton icon={addIcon} onClick={showFormHandler} />
            <MapButton icon={faqIcon} onMouseEnter={showFAQHandler} onMouseLeave={hideFAQHandler} />
          </div>
          <AnimatePresence>
            {isFAQShow && <FAQ />}
          </AnimatePresence>
        </div>
      </div>}
    </YMaps>
  );
};

export default YandexMap;
