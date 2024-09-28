import Nav from './Nav';

export default function NavOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-24 left-0 right-0 bottom-0 z-20 bg-black bg-opacity-80" onClick={onClose}>
      <div
        className="fixed top-24 left-0 h-[calc(100%-6rem)] w-64 p-4"
        onClick={(e) => e.stopPropagation()} 
      >
        <Nav onClose={onClose} /> 
      </div>
    </div>
  );
}