// Write your code here
import Popup from 'reactjs-popup'
import './index.css'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

const MovieItem = props => {
  const {MovieDetails} = props
  const {thumbnailUrl, videoUrl} = MovieDetails

  return (
    <div className="planet-container">
      <Popup
        modal
        trigger={<img className="image" src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <div>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
