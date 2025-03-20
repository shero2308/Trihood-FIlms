//components
import Navbar from "@/components/Navbar";
import Social_links from "@/components/Social_links";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";


//icons
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BusinessIcon from '@mui/icons-material/Business';

export default function Contact() {
    return ( 
        <div>
            <Social_links />
            <Navbar />
            <div className="flex items-center flex-col pt-20">
                <h1 className="font-kanit text-xl lg:text-5xl mt-14">
                    Contact Us
                </h1>
            </div>
            <div className="flex items-center pt-10">
            <div className="flex w-1/2 items-center flex-col gap-3">
                <div className="flex w-1/2 items-center flex-col gap-3">
                <h1 className="font-bree-serif text-3xl">Contact Details</h1>
                </div>
                <div className="flex w-1/2 items-center flex-col justify-center gap-10 mt-10 ">
                <div className="flex flex-col items-center gap-1 ">
                    <h1 className="font-bree-serif text-gray-800">Email:</h1>
                   <p className="font-kanit text-gray-600"><EmailIcon/> ABC@gmail.com</p> 
                </div >
                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-bree-serif text-gray-800">Phone:</h1>
                    <p className="font-kanit text-gray-600"><LocalPhoneIcon/> +1234567890</p>
                    <p className="font-kanit text-gray-600"><LocalPhoneIcon/> +1234567890</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-bree-serif text-gray-800">Whatsapp:</h1>
                    <a href="https://wa.me/91123456789" className="font-kanit text-blue-400"><WhatsAppIcon className="text-green-500"/> +1234567890</a>
                    <a href="https://wa.me/91123456789" className="font-kanit text-blue-400"><WhatsAppIcon className="text-green-500"/> +1234567890</a>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-bree-serif text-gray-800">Address:</h1>
                    <p className="font-kanit text-gray-600"><BusinessIcon/> XYZ Street, ABC City, Country</p>
                </div>
                </div>
                </div>
                <div className="flex w-1/2 items-center flex-col gap-3">
                <div className="flex w-1/2 items-center flex-col gap-3">
                <h1 className="font-bree-serif text-3xl">Get in Touch</h1>
                </div>
                <div className="flex w-1/2 items-center flex-col gap-3"> 
                    <div className="flex flex-col gap-3 mt-10">
                    <h1 className="font-bree-serif text-gray-800">Name:</h1>
                    <input type="text" placeholder="Name" className="border-2 border-gray-200 rounded-lg p-2 w-72"/>
                    <h1 className="font-bree-serif text-gray-800">Email:</h1>
                    <input type="email" placeholder="Email" className="border-2 border-gray-200 rounded-lg p-2 w-72"/>
                    <h1 className="font-bree-serif text-gray-800">Subject:</h1>
                    <input type="text" placeholder="Subject" className="border-2 border-gray-200 rounded-lg p-2 w-72"/>
                    <h1 className="font-bree-serif text-gray-800">Message:</h1>
                    <textarea placeholder="Message" className="border-2 border-gray-200 rounded-lg p-2 w-72 h-40"/>
                    <button className="bg-blue-500 text-white rounded-lg p-2 w-72">Send</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="pt-40">
                <Parallax />
                <Footer/>
            </div>
        </div>
    );
}   