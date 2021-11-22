import PropTypes from 'prop-types';

export default function ImageGalleryItem({ getBigPhoto, photo, alt, photoLage }) {
    return (
        <li className="ImageGalleryItem">
            <img onClick = {()=>getBigPhoto(photoLage, alt)} src={photo} alt={alt} className="ImageGalleryItem-image" />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    photo: PropTypes.string,
    alt: PropTypes.string,
    getBigPhoto: PropTypes.func,
    photoLage: PropTypes.string,
};