import { Link } from 'react-router-dom';

export default function About(props) {
 return(
  <div>
  <h1>About</h1> <button><Link to='/contact'>Contact</Link></button>
  <p>Text on Wikipedia is a collaborative work, and the efforts of individual contributors to a page are recorded in that page's history, which is publicly viewable. Information on the authorship of images and other media, such as sound files, can be found by clicking on the image itself or the nearby information icon to display the file page, which includes the author and source, where appropriate, along with other information.</p>

  </div>
     )

}