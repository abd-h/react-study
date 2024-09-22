import { useFetcher, useNavigation} from "react-router-dom";
import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const fetcher = useFetcher();
 
  const navigation = useNavigation();
  
  if (navigation.state === 'submitting') {
   return  window.alert('Successfully signup')
  }
  
  return (
    <fetcher.Form method="post" action="/newsletter/" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        name="email"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
