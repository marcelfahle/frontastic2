export default function DefaultLoader() {
  return (
    <div className='grid absolute inset-0 bg-transparent-50'>        
        <div className='loading-full-screen flex self-center justify-center' />
        <style jsx>{`
            .loading-full-screen:after {
                content: ' ';
                display: block;
                width: 64px;
                height: 64px;
                margin: 8px;
                border-radius: 50%;
                border: 6px solid #667eea;
                border-color: #667eea transparent #667eea transparent;
                animation: loading-full-screen 1.5s linear infinite;
            }
            @keyframes loading-full-screen {
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
