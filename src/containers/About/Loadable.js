import Loadable from 'react-loadable';
import Spinner from '../../components/UI/Spinner/Spinner';

export default Loadable({
    loader: () => import('./About'),
    loading: Spinner
})