import React, {useRef, useState} from 'react';
import { IonSlides, IonSlide, IonImg } from '@ionic/react';
import './RusbookChapterWelcome.css';

interface ImageProps {
    src: string;
    text: string;
}
// hardcoded assets
const items: ImageProps[] = [
    { src : 'https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJzJTIwdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60', text : 'thumbs up mate!'},
    { src : 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80', text: 'working on it'},
    { src : 'https://images.unsplash.com/photo-1496843916299-590492c751f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2VsZWJyYXRlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60', text: 'random ananas'},
]

const slideOpts = {
    initialSlide: 0,
    speed: 400,
};

export const RusbookChapterWelcome: React.FC = () => {
    const slider = useRef<HTMLIonSlidesElement>(null); // !!! remember the type like seen here! <>
    const [slideIndex, setSlideIndex] = useState<number>(0);
    
    return (
        <IonSlides pager={true} options={slideOpts} ref={slider} onIonSlideDidChange={(e) => {
            slider.current?.getActiveIndex().then((idx) => {
                setSlideIndex(idx);
            });
        }}>
            <IonSlide>
                <div className="ion-padding">
                <h1>Thank you for downloading our app!</h1>
                <IonImg src={items[0].src}/>
                <p>Page: {slideIndex}</p>
                </div>
            </IonSlide>
            <IonSlide>
                <div>
                <h1>It is currently a work-in-progress.. <span role="img" aria-label="smart-emoji">🤓</span></h1>
                <IonImg src={items[1].src}/>
                <p>Page: {slideIndex}</p>
                </div>
            </IonSlide>
            <IonSlide>
                <div>
                <h1>But we hope you'll stick around. <span role="img" aria-label="happy-emoji">😁</span></h1>
                <IonImg src={items[2].src}/>
                <p>Page: {slideIndex}</p>
                </div>
            </IonSlide>
        </IonSlides>
    );
}