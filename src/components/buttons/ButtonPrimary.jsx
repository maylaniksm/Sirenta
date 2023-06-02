import { Link } from 'react-router-dom';

function ButtonLink(props) {
  const { type, value, to } = props;

  if (to) {
    return (
      <Link
        to={to}
        className="flex items-center justify-center px-4 py-1.5 text-sm font-medium text-white transition duration-300 ease-in-out border border-transparent rounded-lg shadow-sm outline-none bg-primary hover:bg-secondary"
      >
        {value ? value : props.children}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        className="flex items-center justify-center px-4 py-1.5 text-sm font-medium text-white transition duration-300 ease-in-out border border-transparent rounded-lg shadow-sm outline-none bg-primary hover:bg-secondary"
      >
        {value ? value : props.children}
      </button>
    );
  }
}

export default ButtonLink;
