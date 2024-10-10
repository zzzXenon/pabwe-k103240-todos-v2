import { useSelector } from 'react-redux';

function HomePage() {
  const authLogin = useSelector((state) => state.authLogin); // Access the specific authLogin key

  return (
    <section>
      <div className="container pt-1">
        <div className='card'>
          <div className='card-body'>
            <h3>
              Hello, {authLogin ? authLogin.name : 'Guest'} {/* Fallback in case authLogin is null */}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
