export default function Contact() {
    return (
      <div className="min-h-screen flex items-center px-10 pl-50" id="contact">
        
        {/* LEFT SIDE */}
        <div className="w-1/2">
          <h1 className="font-handwriting text-[14vw] leading-none">
            Cont <br />
            act <br />
            me
          </h1>
        </div>
  
        {/* RIGHT SIDE */}
        <div className="w-1/2 flex flex-col gap-6 text-lg">
          
          {/* Location */}
          <p>
            
            Chicago, Illinois
          </p>
  
          {/* Email */}
          <p>
            
            <a
              href="mailto:parineetsond16@gmail.com"
              className="hover:underline"
            >
              parineetsond16@gmail.com
            </a>
          </p>
  
          {/* Links */}
          {/* Links */}
            <div className="flex gap-6 pt-4">

            <a
            href="https://www.linkedin.com/in/parineetsond/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 text-center px-6 py-3 rounded-full bg-[#77001E] text-white hover:opacity-90 transition"
            >
            LinkedIn
            </a>

            <a
            href="https://github.com/psond16"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 text-center px-6 py-3 rounded-full bg-[#77001E] text-white hover:opacity-90 transition"
            >
            GitHub
            </a>

            </div>
        </div>
      </div>
    );
  }