import PropTypes from 'prop-types';

function Props(props) {
  return (
    <div className="w-56 rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img src={props.ProductImage} alt= "Product Image" className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{props.ProductName}</h2>
        <p className="text-gray-600 text-sm mb-2">{props.ProductDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-purple-600">₹{props.ProductPrice}</span>
          <button className="px-4 py-1 bg-purple-600 text-white rounded-lg outline-none border-none hover:bg-purple-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Props;