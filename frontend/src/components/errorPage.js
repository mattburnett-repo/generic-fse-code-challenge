
import '../style.css';

export default function ErrorPage(props) {
    const { error } = props;

    function reloadPage () {
      window.location.reload();
    }

    return (
      <div class="container bg-gray-200 mx-auto my-24 p-12 border-2 border-black">
          <h1 className="text-5xl text-center py-8 bg-red-50 border-2 border-red-800 text-red-900">Error</h1>
          <div class="bg-white text-center py-16 border-x-2 border-b-2 border-black">
            <div class="text-4xl">We're sorry, there was an error. Here is the error message:</div>
            <div class="text-3xl py-8">{error.message}</div>      
            {(error.message === 'Failed to fetch') ?
              (<div class="text-3xl py-8">The ApolloGL server is either not running, or is otherwise not available.</div>)
              : ''
            }
            <div>
              <button onClick={reloadPage}>Click here to try again</button>
            </div>            
          </div>
        </div>
    )
}