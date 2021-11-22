import { useState, useEffect } from 'react';
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';
import PixabayFetchObj from '../../services/pixabay';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Modal from '../Modal';

const newPixabayFetchObj = new PixabayFetchObj();

export default function ImageGallery ({ name }) {
    const [gallery, setGallery] = useState([]);
    const [status, setStatus] = useState('init');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // if (isFerstRender) {
        //     isFerstRender.current = false;
        //     return;
        // }

        if (!name) {            
            return;
        }
        
        setStatus('pending');
        newPixabayFetchObj.name = name;
        newPixabayFetchObj.page = 1;
        newPixabayFetchObj.searchPhotos().then(r => {
            setGallery(r);
            setStatus('success');
            if (r === 0) {
                return setStatus('error')
            }
        }).catch(err => {
            setStatus('error')
        });
    }, [name]);

    const handleClick = () => {
        newPixabayFetchObj.page += 1;
        newPixabayFetchObj.searchPhotos().then(r => {
            setGallery(prevGallery=>[...prevGallery, ...r]);
            setStatus('success');
        }).then(() => window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })).catch(err => {
            setStatus('error')
        });
    };

    const toggleModal = () => {
        setShowModal(!showModal)        
    }

    const getBigPhoto = (url, alt) => {
        localStorage.setItem('url', JSON.stringify(url));
        localStorage.setItem('alt', JSON.stringify(alt));
        toggleModal();
    }

    if (status === 'init') {
        return <h1>Hello! Search something....</h1>
    }
    if (status === 'pending') {
        return <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    }
    if (status === 'success') {
        return (
            <>
                <ul className="ImageGallery">
                    {gallery.length > 0 && gallery.map(galleryItem => (<ImageGalleryItem
                        getBigPhoto={getBigPhoto}
                        key={galleryItem.id}
                        photo={galleryItem.webformatURL}
                        photoLage={galleryItem.largeImageURL}
                        alt={galleryItem.tags}
                    />))}
                </ul>
                <Button className="BtnMore" handleClick={() => { handleClick() }} />
                {showModal && <Modal onClose={toggleModal}>
                    <img src={JSON.parse(localStorage.getItem('url'))} alt={localStorage.getItem('alt')} />
                </Modal>}
            </>
        )
    };   
};

ImageGallery.propTypes = {
    name: PropTypes.string,
};
