import PropTypes from 'prop-types';
import './itemList.css';

export const GreetingsProptype = ({ title, subTitle }) => {

    //console.log(props);

return (
    <>
        <h1>{ title }</h1>
        {/* <code>{ JSON.stringify( newMessage ) } </code> */}
        <h2>{ subTitle }</h2>
    </>
)
}

GreetingsProptype.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}