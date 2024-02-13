import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
const middleware=[logger];
const composedEnhancers=compose(applyMiddleware(...middleware));
export const store = createStore(rootReducer);//nout pine mhr ka rootRducer ko ka store htl mhr pl pg p yay do dl
//middleware so dr ka action takhu ka ko dispatch lk yin ae action ka reducer shi ma yt khin middleware shi ayin yt dl