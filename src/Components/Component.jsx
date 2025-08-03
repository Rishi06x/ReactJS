import coverPic from '../assets/profileCover.png';
import profilePic from '../assets/profilePic.jpg';


function Component() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        className="w-full h-26 object-contain rounded-2xl"
        src={coverPic}
        alt="Profile Cover"
      />
      <div className="p-6 text-center">
        <img
          className="w-28 h-28 mx-auto object-cover rounded-full border-2 border-white -mt-18 shadow-md"
          src={profilePic}
          alt="User Avatar"
        />
        <h2 className="text-2xl font-semibold mt-2">Rishi</h2>
        <p className="text-gray-500">Frontend Developer</p>
        <p className="text-gray-600 mt-4 text-sm">
          Passionate about building beautiful and functional web experiences.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-500 transition">
            Follow
          </button>
          <button className="px-4 py-2 border-2 border-blue-700 text-gray-800 rounded hover:bg-blue-700 hover:text-gray-50 transition">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Component;