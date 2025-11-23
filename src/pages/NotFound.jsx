import Layout from '../components/Layout';

function NotFound() {
  return (
    <Layout>
      <h2>An Error has Occurred</h2>
      <p>Oops! Something seems to have gone wrong!</p>
      <p>Not to worry. Return to the home page by clicking <a href="/">here!</a> or any of the links on the left</p>
    </Layout>
  );
}

export default NotFound;
