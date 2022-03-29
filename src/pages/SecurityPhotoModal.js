import Card from '../components/Card';
import classes from './SecurityPhotoModal.module.css';

const SecurityPhotoModal = props => {
    return (
        <Card>
            <div>
            <p>Is this your security photo?</p>
            <img className={classes.img} alt='Tiger' src='https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg'/>
            </div>
        </Card>
    )

}

export default SecurityPhotoModal;