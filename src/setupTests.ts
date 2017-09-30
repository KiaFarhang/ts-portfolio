// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}

// // tslint:disable-next-line:no-any
// Enzyme.configure({ adapter: new Adapter() });