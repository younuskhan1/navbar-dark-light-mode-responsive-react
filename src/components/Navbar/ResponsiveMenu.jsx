import PropTypes from 'prop-types'; // ES6

const ResponsiveMenu = ({showMenu}) => {
    return (
        <div className={`${showMenu ? "-left-[100%]" : "left-0"} h-screen w-[75%] bg-slate-400 fixed top-0 transition-all duration-500 pt-24 pb-6 px-8`}>
           ResponsiveMenu 
        </div>
    );
};

ResponsiveMenu.propTypes = {
    showMenu:PropTypes.bool.isRequired,
}
export default ResponsiveMenu;