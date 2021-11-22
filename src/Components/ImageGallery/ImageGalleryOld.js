import { Component } from 'react';
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';
import PixabayFetchObj from '../../services/pixabay';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Modal from '../Modal'

export default class ImageGallery extends Component {
    state = {
        gallery: [],
        status: 'init',
        showModal: false,
    }
    
    newPixabayFetchObj = new PixabayFetchObj();
 
    componentDidUpdate(prevProps, prevState) {
        // if (prevState.gallery !== this.state.gallery) {
        //     localStorage.setItem('photo', JSON.stringify(this.state.gallery));            
        // }

        if (prevProps.name !== this.props.name) {
            this.setState({status:'pending'})
            this.newPixabayFetchObj.name = this.props.name;
            this.newPixabayFetchObj.page = 1;
            this.newPixabayFetchObj.searchPhotos().then(r => {
                this.setState({
                    gallery: r,
                    status: 'success'
                })                 
                
                if (this.state.gallery.length === 0) {
                  return  this.setState({
                    status: 'error'
                })
                }
               
            }).catch(err => {
                           this.setState({
                    status: 'error'
                })
            });
        }
    }

    handleClick = () => {
        this.newPixabayFetchObj.page += 1;
        this.newPixabayFetchObj.searchPhotos().then(r => {
            this.setState((prev) => ({
                gallery: [...prev.gallery, ...r],
                status: 'success'
            })
            )
        }).then(() => window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })).catch(err => {
            this.setState({
                status: 'error'
            })
        });
    }

    toggleModal = () => {
        this.setState(state => (
            { showModal: !state.showModal }
        ))
    }

    getBigPhoto = (url, alt) => {
        localStorage.setItem('url', JSON.stringify(url));
        localStorage.setItem('alt', JSON.stringify(alt));
        this.toggleModal();
    }

    render() {
        const { gallery, showModal, status } = this.state;
        const {toggleModal, getBigPhoto, handleClick  } = this;
        
        if (status === 'init') {
         return  <h1>Hello! Search something....</h1>
        }

        if (status === 'pending') {
         return  <Loader
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
                    {showModal && <Modal onClose ={toggleModal}>
                         <img src={JSON.parse(localStorage.getItem('url'))} alt={localStorage.getItem('alt')} />
                    </Modal>}
                 </>
             )
         }
        
        if (status === 'error') {
            return <h2>No results were found for your search.</h2>
        }
    }
}

 ImageGallery.propTypes = {
    name: PropTypes.string,
};
