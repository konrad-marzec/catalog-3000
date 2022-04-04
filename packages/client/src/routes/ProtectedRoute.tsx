import { ComponentProps } from 'react';
import { Route } from 'react-router-dom';

function ProtectedRoute(props: ComponentProps<typeof Route>): JSX.Element | null {
  const hasAccess = true;
  // const location = useLocation();
  // // const dispatch = useDispatch();
  // // const user = useSelector(selectCurrentUser);
  // // const isLoaded = useSelector(selectSignInStatus);
  // const [hasAccess, setHasAccess] = useState<boolean | undefined>();

  // useEffect(() => {
  //   if (!user || !localStorage.getItem('token')) {
  //     setHasAccess(false);
  //   } else {
  //     setHasAccess(true);
  //   }
  // }, [setHasAccess, user, hasAccess]);

  // useEffect(() => {
  //   dispatch(loadUserRequest());
  // }, [dispatch]);

  // if (hasAccess === false && isLoaded) {
  //   return <Redirect to={`/auth?prev=${encodeURIComponent(location.pathname)}`} />;
  // }

  if (!hasAccess) {
    return null;
  }

  return <Route {...props} />;
}

export default ProtectedRoute;
