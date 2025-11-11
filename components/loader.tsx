export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-50">
      <span className="loader"></span>

      <style jsx>{`
        .loader {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          position: relative;
          display: inline-block;
          background: conic-gradient(
            from 0deg,
            #00ffb3 0%,
            #00c6ff 25%,
            #7a00ff 50%,
            #ff00a8 75%,
            #00ffb3 100%
          );
          animation: rotation 1.2s linear infinite;
        }

        .loader::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: white;
          transform: translate(-50%, -50%);
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
