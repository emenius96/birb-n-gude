import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white py-4">
      <div className="flex justify-between items-center container mx-auto px-4">
        <p className="text-sm mr-14">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
        <div className="flex space-x-4 ml-16"> 
          <Link href="https://github.com/emenius96" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white hover:text-gray-400 transition-colors duration-200" />
          </Link>
          <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-gray-400 transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
